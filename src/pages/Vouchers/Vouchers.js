import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { EditIcon } from "../../components/EditIcon";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { AddVoucherModal } from "./AddVoucher";
import { EditVoucherModal } from "./EditVoucher"


const fetchvouchers = (pageIndex = 0, pageSize = 20, search, selectValueID, selectValueOrder, selectValueStatus) => {
  return axiosInstance
    .get(`/vouchers?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&sortBy=${selectValueID}&sortOrder=${selectValueOrder}&status=${selectValueStatus}`)
    .then((res) => res.data);
};

export const Vouchers = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userId, setUserId] = useState();
  const [search, setSearch] = useState("");
  const [selectValueID, setSelectValueID] = useState("");
  const [selectValueOrder, setSelectValueOrder] = useState("");
  const [selectValueStatus, setSelectValueStatus] = useState("");
  const pageSize = 20;
  const [showError, setShowError] = useState(false);


  const { isLoading, data, refetch } = useQuery({
    queryKey: ["vouchers", page, search, selectValueID, selectValueOrder, selectValueStatus],
    queryFn: () => fetchvouchers(page, pageSize, search, selectValueID, selectValueOrder, selectValueStatus),
    keepPreviousData: true,
  });

  const handleAddVoucherSuccess = () => {
    setShowAddModal(false);
    refetch();
  };

  const handleUpdateVoucherSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["voucher-details", userId] });
    setShowEditModal(false);
    refetch();
  };

  const handleEditClick = (id) => () => {
    setUserId(id);
    setShowEditModal(true);
  };

  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    refetch();
  };

  const handleSelectIDChange = (event) => {
    const newSelectID = event.target.value;
    setSelectValueID(newSelectID);
    console.log(newSelectID);
    refetch();
  };

  const handleSelectOrderChange = (event) => {
    const newSelectOrder = event.target.value;
    setSelectValueOrder(newSelectOrder);
    console.log(newSelectOrder);
    refetch();
  };

  const handleSelectStatusChange = (event) => {
    const newSelectStatus = event.target.value;
    setSelectValueStatus(newSelectStatus);
    console.log(newSelectStatus);
    refetch();
  };


  return (
    <>
      {showError ? (
        <Alert variant="danger" onClose={() => showError(false)}>
          <Alert.Heading>Server Error!</Alert.Heading>
          <p>Can not user</p>
        </Alert>
      ) : null}

      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row heading-add">
            <aside className="ml-2">
              <h2 className="mb-0 page-title">Vouchers</h2>
            </aside>
            <form className="form-inline mr-auto searchform">
              <input
                className="form-control mr-sm-2 border-0"
                onChange={handleSearchChange}
                type="text"
                style={{ background: "white" }}
                placeholder="Search"
                aria-label="Search"
              />
            </form>

            <div className="d-flex">
              <select className="form-control  mr-sm-2" onChange={handleSelectIDChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortBy</option>
                <option value="id">ID</option>
              </select>

              <select className="form-control  mr-sm-2" onChange={handleSelectOrderChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortOrder</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </select>
              
              <select className="form-control  mr-sm-2" onChange={handleSelectStatusChange} style={{ background: "white" }} aria-label="select">
                <option value="">STATUS</option>
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
              
              <aside className="col-sm-2 add-sec">
                <button className="bttn" onClick={() => setShowAddModal(true)}>
                  Add
                </button>
              </aside>
            </div>

          </div>
          <div className="row my-2">
            <div className="col-md-12">
              <div className="card shadow">
                <div className="card-body">
                  <div className="resp-table vouchers-tb">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>VoucherCode</th>
                          <th>Name</th>
                          <th>Description</th>
                          <th>MerchantId</th>
                          <th>Merchant</th>
                          <th>CategoryId</th>
                          <th>VoucherAssetId</th>
                          <th>VoucherValue</th>
                          <th>VoucherValueType</th>
                          <th>ValidityStartDate</th>
                          <th>ValidityEndDate</th>
                          <th>RestrictUsageForUser</th>
                          <th>MaxUsageCount</th>
                          <th>ConsumedCount</th>
                          <th>CreatedBy</th>
                          <th>UpdatedBy</th>
                          <th>CreatedAt</th>
                          <th>UpdatedAt</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading ? (
                          <tr>
                            <td rowSpan="10" colSpan="13">
                              <div className="text-center py-5">
                                <Spinner animation="border" />
                              </div>
                            </td>
                          </tr>
                        ) : (
                          console.log(data),
                          data?.data?.map((u) => (
                            <tr key={u.id}>
                              <td>{u.voucherCode}</td>
                              <td>{u.name}</td>
                              <td> {u.description || 'N/A'}</td>
                              <td>{u.merchantId || 'N/A'}</td>
                              <td>{u.merchant || 'N/A'}</td>
                              <td>{u.categoryId || 'N/A'}</td>
                              <td>{u.voucherAssetId || 'N/A'}</td>
                              <td>{u.voucherValue || 'N/A'}</td>
                              <td>{u.voucherValueType || 'N/A'}</td>
                              <td>{u.validityStartDate || 'N/A'}</td>
                              <td>{u.validityEndDate || 'N/A'}</td>
                              <td>{u.restrictUsageForUser || 'N/A'}</td>
                              <td>{u.maxUsageCount || 'N/A'}</td>
                              <td>{u.consumedCount || 'N/A'}</td>
                              <td>{u.createdBy || 'N/A'}</td>
                              <td>{u.updatedBy || 'N/A'}</td>
                              <td>{u.createdAt}</td>
                              <td>{u.updatedAt}</td>
                              <td>{u.status || 'N/A'}</td>

                              <td className="actions">
                                <EditIcon onClick={handleEditClick(u.id)} />
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                  {!isLoading ? (
                    <CustomPagination
                      page={page}
                      pageSize={pageSize}
                      data={data}
                      setPage={setPage}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAddModal ? (
        <AddVoucherModal
          handleSuccess={handleAddVoucherSuccess}
          handleClose={() => setShowAddModal(false)}
        />
      ) : null}
      {showEditModal ? (
        <EditVoucherModal
          id={userId}
          handleSuccess={handleUpdateVoucherSuccess}
          handleClose={() => setShowEditModal(false)}
        />
      ) : null}
    </>
  );
};
