import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import demoLogo from "../../assets/images/Cikka_Logo_Dashboard.png"
import { EditIcon } from "../../components/EditIcon";
import { axiosInstance } from "../../axiosInstance";
import { DeleteIcon } from "../../components/DeleteIcon";
import { CustomPagination } from "../../components/CustomPagination";
import { DateFormate } from "../../components/DateFormate";
import { Status } from "../../components/Status";
import { EditUserModal } from "./EditUser";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const fetchUsers = (pageIndex = 0, pageSize = 20, search, selectValueID, selectValueOrder, selectValueStatus) => {

  return axiosInstance
    .get(`/users?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&sortBy=${selectValueID}&sortOrder=${selectValueOrder}&status=${selectValueStatus}`)
    .then((res) => res.data);
};

const deleteUser = (id) => axiosInstance.delete(`/users/${id}`);


export const Users = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userId, setUserId] = useState();
  const [search, setSearch] = useState("");
  const [selectValueID, setSelectValueID] = useState("");
  const [selectValueOrder, setSelectValueOrder] = useState("");
  const [selectValueStatus, setSelectValueStatus] = useState("");
  const pageSize = 20;
  const [showError, setShowError] = useState(false);


  const deleteMutation = useMutation({
    mutationFn: deleteUser,
  });

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["users", page, selectValueID, selectValueOrder, selectValueStatus],
    queryFn: () => fetchUsers(page, pageSize, search, selectValueID, selectValueOrder, selectValueStatus),
    keepPreviousData: true,
  });


  const handleUpdateUserSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["user-details", userId] });
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

  const modifyImageUrl = (originalUrl, folderName) => {
    let parts = originalUrl.split('?');

    let fileName = parts[1].split('=')[1];
    let newUrl = `https://app.cikka.com.au/api/files/file-preview?fileName=${fileName}&folderName=${folderName}`;

    return newUrl;
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
              <h2 className="mb-0 page-title">Users</h2>
            </aside>
            <form className="form-inline  mr-auto searchform">
              <input
                className="form-control mr-sm-2 border-0"
                onChange={handleSearchChange}
                type="text"
                style={{ background: "white" }}
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <aside className="col-md-2 mt-2 mt-md-0 mb-2 mb-md-0">
              <select className="form-control" onChange={handleSelectIDChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortBy</option>
                <option value="id">ID</option>
                <option value="joiningDate">joiningDate</option>
                <option value="createdAt">createdAt</option>
              </select>
            </aside>
            <aside className="col-md-2 mb-2 mb-md-0">
              <select className="form-control" onChange={handleSelectOrderChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortOrder</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </select>
            </aside>
            <aside className="col-md-2 mb-2 mb-md-0">
              <select className="form-control" onChange={handleSelectStatusChange} style={{ background: "white" }} aria-label="select">
                <option value="">STATUS</option>
                <option value="1">Active</option>
                <option value="2">Hold</option>
                <option value="0">Deleted</option>
              </select>
            </aside>
          </div>
          <div className="row my-2">
            <div className="col-md-12">
              <div className="card shadow">
                <div className="card-body">
                  <div className="resp-table users-tb">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Actions</th>
                          <th>Status</th>
                          <th>User Profile Image</th>
                          <th>CategoryId</th>
                          <th>Email</th>
                          <th>UserType</th>
                          <th>FirstName</th>
                          <th>MiddleName</th>
                          <th>LastName</th>
                          <th>Gender</th>
                          <th>MobileNumber</th>
                          <th>AlternativeNumber</th>
                          <th>MotherTongue</th>
                          <th>ProofNumber</th>
                          <th>BloodGroup</th>
                          <th>DateOfBirth</th>
                          <th>AnniversaryDate</th>
                          <th>CityId</th>
                          <th>City</th>
                          <th>Religion</th>
                          <th>JoiningDate</th>
                          <th>NumberOfActiveSessions</th>
                          <th>IsTest</th>
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
                              <td>
                                <Status code={u.status} />
                              </td>
                              <td>
                                {u.profileImage && u.profileImage.filePath ? (
                                  <img src={modifyImageUrl(u.profileImage.filePath, u.profileImage.folderName)} alt="logo" className="table-logo" />
                                ) : (
                                  <img src={demoLogo} alt='demoLogo' className="table-logo" />
                                )}
                              </td>
                              <td>{u.categoryId}</td>
                              <td>
                                {search ? (
                                  u.email.toLowerCase().includes(search.toLowerCase()) ? (
                                    <span className="highlighted">{u.email}</span>
                                  ) : (
                                    u.email
                                  )
                                ) : (
                                  u.email
                                )}
                              </td>
                              <td>{u.userType}</td>
                              <td>{u.firstName}</td>
                              <td>{u.middleName}</td>
                              <td>{u.lastName}</td>
                              <td>{u.gender}</td>
                              <td>{u.mobileNumber}</td>
                              <td>{u.alternativeNumber}</td>
                              <td>{u.motherTongue}</td>
                              <td>{u.proofNumber}</td>
                              <td>{u.bloodGroup}</td>
                              <td>{u.dateOfBirth}</td>
                              <td>{u.anniversaryDate}</td>
                              <td>{u.cityId}</td>
                              <td>{u.city}</td>
                              <td>{u.religion}</td>
                              <td>{u.joiningDate}</td>
                              <td>{u.numberOfActiveSessions}</td>
                              <td>{u.isTest}</td>
                              <td>{data.data?.find(user => user.id === u.createdBy)?.firstName || 'N/A'}</td>
                              <td>{data.data?.find(user => user.id === u.updatedBy)?.firstName || 'N/A'}</td>
                              <td>{<DateFormate dateTime={u.createdAt} />}</td>
                              <td>{<DateFormate dateTime={u.updatedAt} />}</td>
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

      {showEditModal ? (
        <EditUserModal
          id={userId}
          handleSuccess={handleUpdateUserSuccess}
          handleClose={() => setShowEditModal(false)}
        />
      ) : null}
    </>
  );
};
