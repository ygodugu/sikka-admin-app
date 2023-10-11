import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { EditIcon } from "../../components/EditIcon";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { AddMerchantModal } from "./AddMerchant";
import { EditMerchantModal } from "./EditMerchant";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const fetchMerchants = (pageIndex = 0, pageSize = 20) => {
  return axiosInstance
    .get(`merchants?merchantTypes=MERCHANT_PARTNER&pageIndex=${pageIndex}&pageSize=${pageSize}&sortBy=id&sortOrder=DESC`)
    .then((res) => res.data);
};

export const Merchants = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userId, setUserId] = useState();
  const pageSize = 20;
  const [showError, setShowError] = useState(false);


  const { isLoading, data, refetch } = useQuery({
    queryKey: ["merchants", page],
    queryFn: () => fetchMerchants(page, pageSize),
    keepPreviousData: true,
  });

  const handleAddUserSuccess = () => {
    setShowAddModal(false);
    refetch();
  };

  const handleUpdateUserSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["merchant-details", userId] });
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
              <h2 className="mb-0 page-title">Merchants</h2>
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
                  <div className="resp-table Merchants-tb">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>MerchantType</th>
                          <th>User</th>
                          <th>Industry</th>
                          <th>BusinessCategory</th>
                          <th>BusinessLegalName</th>
                          <th>MerchantIdentifier</th>
                          <th>MerchantSequence</th>
                          <th>TradeName</th>
                          <th>Description</th>
                          <th>OperationsInAWeek</th>
                          <th>abn</th>
                          <th>ACN</th>
                          <th>DateOfRegistration</th>
                          <th>DateOfOperation</th>
                          <th>TaxFileNumber</th>
                          <th>Website</th>
                          <th>Facebook-URL</th>
                          <th>Instagram-URL</th>
                          <th>PhoneNumber</th>
                          <th>OwnerName</th>
                          <th>OwnerMobile</th>
                          <th>OwnerEmail</th>
                          <th>RepresentativeName</th>
                          <th>RepresentativeDesignation</th>
                          <th>RepresentativeMobile</th>
                          <th>RepresentativeEmail</th>
                          <th>MerchantCikkaTransactionDefaultPercentage</th>
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
                              <td>{u.merchantType || 'N/A'}</td>
                              <td>{u.user || 'N/A'}</td>
                              <td> {u.industry || 'N/A'}</td>
                              <td>{u.businessCategory || 'N/A'}</td>
                              <td>{u.businessLegalName || 'N/A'}</td>
                              <td>{u.merchantIdentifier || 'N/A'}</td>
                              <td>{u.merchantSequence || 'N/A'}</td>
                              <td>{u.tradeName || 'N/A'}</td>
                              <td>{u.description || 'N/A'}</td>
                              <td>{u.operationsInAWeek || 'N/A'}</td>
                              <td>{u.abn || 'N/A'}</td>
                              <td>{u.acn || 'N/A'}</td>
                              <td>{u.dateOfRegistration || 'N/A'}</td>
                              <td>{u.dateOfOperation || 'N/A'}</td>
                              <td>{u.taxFileNumber || 'N/A'}</td>
                              <td>{u.website || 'N/A'}</td>
                              <td>{u.facebookUrl || 'N/A'}</td>
                              <td>{u.instagramUrl || 'N/A'}</td>
                              <td>{u.phoneNumber || 'N/A'}</td>
                              <td>{u.ownerName || 'N/A'}</td>
                              <td>{u.ownerMobile || 'N/A'}</td>
                              <td>{u.ownerEmail || 'N/A'}</td>
                              <td>{u.representativeName || 'N/A'}</td>
                              <td>{u.representativeDesignation || 'N/A'}</td>
                              <td>{u.representativeMobile || 'N/A'}</td>
                              <td>{u.representativeEmail || 'N/A'}</td>
                              <td>{u.merchantCikkaTransactionDefaultPercentage || 'N/A'}</td>
                              <td>{u.createdBy || 'N/A'}</td>
                              <td>{u.updatedBy || 'N/A'}</td>
                              <td>{u.createdAt || 'N/A'}</td>
                              <td>{u.updatedAt || 'N/A'}</td>
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
        <AddMerchantModal
          handleSuccess={handleAddUserSuccess}
          handleClose={() => setShowAddModal(false)}
        />
      ) : null}
      {showEditModal ? (
        <EditMerchantModal
          id={userId}
          handleSuccess={handleUpdateUserSuccess}
          handleClose={() => setShowEditModal(false)}
        />
      ) : null}
    </>
  );
};
