import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { EditIcon } from "../../components/EditIcon";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { AddUserModal } from "./AddUser";
import { EditUserModal } from "./EditUser";
import { DeleteIcon } from "../../components/DeleteIcon";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const fetchUsers = (pageIndex = 0, pageSize = 20) => {
  return axiosInstance
    .get(`/users?pageIndex=${pageIndex}&pageSize=${pageSize}&sortBy=id&sortOrder=DESC"`)
    .then((res) => res.data);
};
const deleteUser = (id) => axiosInstance.delete(`/users/${id}`);

export const Users = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [userId, setUserId] = useState();
  const pageSize = 20;
  const [showError, setShowError] = useState(false);



  const deleteMutation = useMutation({
    mutationFn: deleteUser,
  });

  const { isLoading, data, refetch } = useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page, pageSize),
    keepPreviousData: true,
  });

  const handleAddUserSuccess = () => {
    setShowAddModal(false);
    refetch();
  };

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
              <h2 className="mb-0 page-title">Users</h2>
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
                  <div className="resp-table users-tb">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>CategoryId</th>
                          <th>userReferralNumber</th>
                          <th>email</th>
                          <th>userType</th>
                          <th>userReferenceId</th>
                          <th>firstName</th>
                          <th>middleName</th>
                          <th>lastName</th>
                          <th>gender</th>
                          <th>mobileNumber</th>
                          <th>alternativeNumber</th>
                          <th>motherTongue</th>
                          <th>proofNumber</th>
                          <th>bloodGroup</th>
                          <th>dateOfBirth</th>
                          <th>anniversaryDate</th>
                          <th>cityId</th>
                          <th>city</th>
                          <th>religion</th>
                          <th>joiningDate</th>
                          <th>numberOfActiveSessions</th>
                          <th>addresses</th>
                          <th>isTest</th>
                          <th>createdBy</th>
                          <th>updatedBy</th>
                          <th>createdAt</th>
                          <th>updatedAt</th>
                          <th>status</th>
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
                              <td>{u.categoryId  || 'N/A'}</td>
                              <td>{u.userReferralNumber  || 'N/A'}</td>
                              <td> {u.email  || 'N/A'}</td>
                              <td>{u.userType  || 'N/A'}</td>
                              <td>{u.userReferenceId  || 'N/A'}</td>
                              <td>{u.firstName  || 'N/A'}</td>
                              <td>{u.middleName  || 'N/A'}</td>
                              <td>{u.lastName  || 'N/A'}</td>
                              <td>{u.gender  || 'N/A'}</td>
                              <td>{u.mobileNumber  || 'N/A'}</td>
                              <td>{u.alternativeNumber  || 'N/A'}</td>
                              <td>{u.motherTongue  || 'N/A'}</td>
                              <td>{u.proofNumber  || 'N/A'}</td>
                              <td>{u.bloodGroup  || 'N/A'}</td>
                              <td>{u.dateOfBirth  || 'N/A'}</td>
                              <td>{u.anniversaryDate  || 'N/A'}</td>
                              <td>{u.cityId  || 'N/A'}</td>
                              <td>{u.city  || 'N/A'}</td>
                              <td>{u.religion  || 'N/A'}</td>
                              <td>{u.joiningDate  || 'N/A'}</td>
                              <td>{u.numberOfActiveSessions  || 'N/A'}</td>
                              <td>{u.addresses  || 'N/A'}</td>
                              <td>{u.isTest  || 'N/A'}</td>
                              <td>{u.createdBy  || 'N/A'}</td>
                              <td>{u.updatedBy  || 'N/A'}</td>
                              <td>{u.createdAt  || 'N/A'}</td>
                              <td>{u.updatedAt  || 'N/A'}</td>
                              <td>{u.status  || 'N/A'}</td>
                              <td className="actions">
                                <EditIcon onClick={handleEditClick(u.id)} />
                                <DeleteIcon onClick={handleDelete(u.id)} />
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
        <AddUserModal
          handleSuccess={handleAddUserSuccess}
          handleClose={() => setShowAddModal(false)}
        />
      ) : null}
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
