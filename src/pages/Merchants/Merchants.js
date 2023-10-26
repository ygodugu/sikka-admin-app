import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { EditIcon } from "../../components/EditIcon";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { AddMerchantModal } from "./AddMerchant";
import { EditMerchantModal } from "./EditMerchant";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const fetchMerchants = (selectValue, pageIndex = 0, pageSize = 20, search, selectValueID, selectValueOrder, selectValueStatus) => {
  return axiosInstance
    .get(`merchants?merchantTypes=${selectValue || "MERCHANT_PARTNER"}&pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&sortBy=${selectValueID}&sortOrder=${selectValueOrder}&status=${selectValueStatus}`)
    .then((res) => res.data);
};

export const Merchants = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [userId, setUserId] = useState();
  const [search, setSearch] = useState("");
  const [selectValueID, setSelectValueID] = useState("");
  const [selectValueOrder, setSelectValueOrder] = useState("");
  const [selectValueStatus, setSelectValueStatus] = useState("");
  const pageSize = 20;
  const [showError, setShowError] = useState(false);


  const { isLoading, data, refetch } = useQuery({
    queryKey: ["merchants", page, selectValue, search, selectValueID, selectValueOrder, selectValueStatus],
    queryFn: () => fetchMerchants(selectValue, page, pageSize, search, selectValueID, selectValueOrder, selectValueStatus),
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

  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    refetch();
  };

  const handleSelectChange = (event) => {
    const newSelect = event.target.value;
    setSelectValue(newSelect);
    console.log(newSelect);
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
            <aside className="ml-2 mr-2">
              <h2 className="mb-0 page-title" style={{ display: "inline" }}>
                Merchants
              </h2>
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

              <select className="form-control mr-sm-2" onChange={handleSelectChange} style={{ background: "white" }} aria-label="select">
                <option value="">MerchantType</option>
                <option value="COMMUNITY">COMMUNITY</option>
                <option value="LISTED_BUSINESS">LISTED_BUSINESS</option>
                <option value="MERCHANT_PARTNER">MERCHANT_PARTNER</option>
              </select>

              <select className="form-control mr-sm-2" onChange={handleSelectIDChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortBy</option>
                <option value="id">ID</option>
              </select>

              <select className="form-control mr-sm-2" onChange={handleSelectOrderChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortOrder</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </select>

              <select className="form-control mr-sm-2" onChange={handleSelectStatusChange} style={{ background: "white" }} aria-label="select">
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
                  <div className="resp-table merchants-tb">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Actions</th>
                          <th>Status</th>
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
                              </td>
                              <td>{u.status || 'N/A'}</td>
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
