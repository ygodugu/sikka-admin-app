import React, { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { EditIcon } from "../../components/EditIcon";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { DateFormate } from "../../components/DateFormate";
import { EditUserModal } from "./EditUser";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const fetchUsers = (pageIndex = 0, pageSize = 20, search, selectValueID, selectValueOrder, selectValueStatus) => {

  return axiosInstance
    .get(`/users?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&sortBy=${selectValueID}&sortOrder=${selectValueOrder}&status=${selectValueStatus}`)
    .then((res) => res.data);
};

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
                <option value="0">0</option>
                <option value="1">1</option>
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
                          <th>CategoryId</th>
                          <th>UserReferralNumber</th>
                          <th>Email</th>
                          <th>UserType</th>
                          <th>UserReferenceId</th>
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
                          <th>Addresses</th>
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
                          console.log(data),
                          data?.data?.map((u) => (
                            <tr key={u.id}>
                              <td className="actions">
                                <EditIcon onClick={handleEditClick(u.id)} />
                              </td>
                              <td>{u.status || 'N/A'}</td>
                              <td>{u.categoryId || 'N/A'}</td>
                              <td>{u.userReferralNumber || 'N/A'}</td>
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
                              <td>{u.userType || 'N/A'}</td>
                              <td>{u.userReferenceId || 'N/A'}</td>
                              <td>{u.firstName || 'N/A'}</td>
                              <td>{u.middleName || 'N/A'}</td>
                              <td>{u.lastName || 'N/A'}</td>
                              <td>{u.gender || 'N/A'}</td>
                              <td>{u.mobileNumber || 'N/A'}</td>
                              <td>{u.alternativeNumber || 'N/A'}</td>
                              <td>{u.motherTongue || 'N/A'}</td>
                              <td>{u.proofNumber || 'N/A'}</td>
                              <td>{u.bloodGroup || 'N/A'}</td>
                              <td>{u.dateOfBirth || 'N/A'}</td>
                              <td>{u.anniversaryDate || 'N/A'}</td>
                              <td>{u.cityId || 'N/A'}</td>
                              <td>{u.city || 'N/A'}</td>
                              <td>{u.religion || 'N/A'}</td>
                              <td>{u.joiningDate || 'N/A'}</td>
                              <td>{u.numberOfActiveSessions || 'N/A'}</td>
                              <td>{u.addresses || 'N/A'}</td>
                              <td>{u.isTest || 'N/A'}</td>
                              {/* <td>{u.createdBy || 'N/A'}</td> */}
                              <td>{usersData?.data?.find(user => user.id === u.createdBy)?.firstName || 'N/A'}</td>
                              <td>{usersData?.data?.find(user => user.id === u.updatedBy)?.firstName || 'N/A'}</td>
                              {/* <td>{u.updatedBy || 'N/A'}</td> */}
                             
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
