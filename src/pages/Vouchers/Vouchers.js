import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { EditIcon } from "../../components/EditIcon";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { AddVoucherModal } from "./AddVoucher";
import { EditVoucherModal } from  "./EditVoucher"


const fetchvouchers = (pageIndex = 0, pageSize = 20) => {
  return axiosInstance
    .get(`/vouchers?pageIndex=${pageIndex}&pageSize=${pageSize}&sortBy=id&sortOrder=DESC"`)
    .then((res) => res.data);
};

export const Vouchers = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userId, setUserId] = useState();
  const pageSize = 20;
  const [showError, setShowError] = useState(false);


  const { isLoading, data, refetch } = useQuery({
    queryKey: ["vouchers", page],
    queryFn: () => fetchvouchers(page, pageSize),
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
            <aside className="col-sm-10">
              <h2 className="mb-0 page-title">Vouchers</h2>
            </aside>
            <aside className="col-sm-2 add-sec">
              <button className="bttn" onClick={() => setShowAddModal(true)}>
                Add
              </button>
            </aside>
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
