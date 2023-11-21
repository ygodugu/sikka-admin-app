import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { EditIcon } from "../../components/EditIcon";
import { axiosInstance } from "../../axiosInstance";
import { DeleteIcon } from "../../components/DeleteIcon";
import { CustomPagination } from "../../components/CustomPagination";
import { DateFormate } from "../../components/DateFormate";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { AddVoucherModal } from "./AddVoucher";
import { EditVoucherModal } from "./EditVoucher"


const fetchvouchers = (pageIndex = 0, pageSize = 20, search, selectValueID, selectValueOrder, selectValueStatus, selectedValue) => {
  let url = `/vouchers?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&sortBy=${selectValueID}&sortOrder=${selectValueOrder}&status=${selectValueStatus}`;

  if (selectedValue) {
    url += `&categoryId=${selectedValue}`;
  }

  return axiosInstance
    .get(url)
    .then((res) => res.data);
};

const deleteVoucher = (id) => axiosInstance.delete(`/vouchers/${id}`);

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

  const [selectValueCategoryID, setSelectValueCategoryID] = useState([]);

  const [selectedValue, setSelectedValue] = useState("");

  const pageSize = 20;
  const [showError, setShowError] = useState(false);

  const deleteMutation = useMutation({
    mutationFn: deleteVoucher,
  });

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["vouchers", page, search, selectValueID, selectValueOrder, selectValueStatus, selectedValue],
    queryFn: () => fetchvouchers(page, pageSize, search, selectValueID, selectValueOrder, selectValueStatus, selectedValue),
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

  const handleDelete = (id) => () => {
    deleteMutation.mutate(id, {
      onSuccess: refetch,
      onError(error) {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      },
    });
  };

  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    refetch();
  };

  useEffect(() => {
    axiosInstance
      .get("/categories")
      .then((res) => res.data)
      .then((data) => {
        setSelectValueCategoryID(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);


  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/categories")
      .then((res) => res.data)
      .then((data) => {
        setCategoryData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);


  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/users")
      .then((res) => res.data)
      .then((data) => {
        setUsersData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleTypeaheadChange = (e) => {
    const optionValue = e.target.value;
    setSelectedValue(optionValue);
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
              <div className='col-sm-4 mt-2 mr-sm-2'>
                <select
                  id="categoryId"
                  className="form-control"
                  value={selectedValue}
                  onChange={handleTypeaheadChange}
                >
                  <option value="">Choose a category</option>
                  {selectValueCategoryID?.data?.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
              <select className="form-control mt-2  mr-sm-2" onChange={handleSelectIDChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortBy</option>
                <option value="id">ID</option>
              </select>

              <select className="form-control mt-2 mr-sm-2" onChange={handleSelectOrderChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortOrder</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </select>

              <select className="form-control mt-2 mr-sm-2" onChange={handleSelectStatusChange} style={{ background: "white" }} aria-label="select">
                <option value="">STATUS</option>
                <option value="0">0</option>
                <option value="1">1</option>
              </select>
              <aside className="col-sm-2 mt-2 add-sec">
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
                          <th>Actions</th>
                          <th>Status</th>
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
                          data?.data?.map((u) => (
                            <tr key={u.id}>
                              <td className="actions">
                                <EditIcon onClick={handleEditClick(u.id)} />
                                <DeleteIcon onClick={handleDelete(u.id)} />
                              </td>
                              <td>{u.status || 'N/A'}</td>
                              <td>{u.voucherCode}</td>
                              <td>
                                {search ? (
                                  u.name.toLowerCase().includes(search.toLowerCase()) ? (
                                    <span className="highlighted">{u.name}</span>
                                  ) : (
                                    u.name
                                  )
                                ) : (
                                  u.name
                                )}
                              </td>
                              <td>{u.description || 'N/A'}</td>
                              <td>{u.merchantId || 'N/A'}</td>
                              <td>{u.merchant || 'N/A'}</td>
                              <td>{categoryData?.data?.find(category => category.id === u.categoryId)?.name || 'N/A'}</td>
                              <td>{u.voucherAssetId || 'N/A'}</td>
                              <td>{u.voucherValue || 'N/A'}</td>
                              <td>{u.voucherValueType || 'N/A'}</td>
                              <td>{u.validityStartDate || 'N/A'}</td>
                              <td>{u.validityEndDate || 'N/A'}</td>
                              <td>{u.restrictUsageForUser || 'N/A'}</td>
                              <td>{u.maxUsageCount || 'N/A'}</td>
                              <td>{u.consumedCount || 'N/A'}</td>
                              {/* <td>{u.createdBy || 'N/A'}</td>
                              <td>{u.updatedBy || 'N/A'}</td> */}
                              <td>{usersData?.data?.find(user => user.id === u.createdBy)?.firstName || 'N/A'}</td>
                              <td>{usersData?.data?.find(user => user.id === u.updatedBy)?.firstName || 'N/A'}</td>
                              <td>{u.createdAt ? <DateFormate dateTime={u.createdAt} /> : 'N/A'}</td>
                              <td>{u.updatedAt ? <DateFormate dateTime={u.updatedAt} /> : 'N/A'}</td>
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
