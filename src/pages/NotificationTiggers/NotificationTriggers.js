import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { DeleteIcon } from "../../components/DeleteIcon";
import { EditIcon } from "../../components/EditIcon";
import { AddNotificationTriggerModal } from "./AddNotificationTriggers";
import { EditNotificationTriggerModal } from "./EditNotificationTriggers";

const fetchNotificationTriggers = (pageIndex = 0, pageSize = 20) => {
  return axiosInstance
    // .get(`/notifications?pageIndex=${pageIndex}&pageSize=${pageSize}`)
    // .then((res) => res.data);
};

const deleteNotificationTrigger = (id) => {
  return axiosInstance.delete(`/notifications/${id}`);
};

export const NotificationTriggers = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [searc, setSearch] = useState("");

  const [notificationId, setNotificationId] = useState();
  const pageSize = 20;
  
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["notifications", page],
    // queryFn: () => fetchNotificationTriggers(page),
    keepPreviousData: true,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteNotificationTrigger,
  });

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleAdddeleteNotificationTriggeSuccess = () => {
    setShowAddModal(false);
    refetch();
  };

  const handleUpdatedeleteNotificationTriggerSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: ["notification-details", notificationId],
    });
    setShowEditModal(false);
    refetch();
  };

  const handleEditClick = (id) => () => {
    setNotificationId(id);
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
          <p>Can not delete notification</p>
        </Alert>
      ) : null}
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row heading-add">
            <aside className="col-sm-10">
              <h2 className="mb-0 page-title">Notification Trigger</h2>
            </aside>
            {/* <form className="form-inline  mr-auto searchform">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="form-control mr-sm-2 border-0"
                type="search"
                style={{ background: "white" }}
                placeholder="Search"
                aria-label="Search"
              />
            </form> */}
            <aside className="col-sm-2 add-sec">
              <button className="bttn" onClick={handleAddClick}>
                Add
              </button>
            </aside>
          </div>
          <div className="row my-2">
            <div className="col-md-12">
              <div className="card shadow">
                <div className="card-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Variables</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    {/* <tbody>
                      {isLoading ? (
                        <tr>
                          <td rowSpan="10" colSpan="7">
                            <div className="text-center py-5">
                              <Spinner animation="border" />
                            </div>
                          </td>
                        </tr>
                      ) : (
                        data.data.map((p) => (
                          <tr key={p.id}>
                            <td>{p.name}</td>
                            <td> {p.variables}</td>
                            <td> {p.description}</td>
                            <td className="actions">
                              <EditIcon onClick={handleEditClick(p.id)} />
                              <DeleteIcon onClick={handleDelete(p.id)} />
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody> */}
                  </table>
                  {/* {!isLoading ? (
                    <CustomPagination
                      page={page}
                      pageSize={pageSize}
                      data={data}
                      setPage={setPage}
                    />
                  ) : null} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddModal ? (
        <AddNotificationTriggerModal
          handleSuccess={handleAdddeleteNotificationTriggeSuccess}
          handleClose={() => setShowAddModal(false)}
        />
      ) : null}
      {showEditModal ? (
        <EditNotificationTriggerModal
          handleSuccess={handleUpdatedeleteNotificationTriggerSuccess}
          handleClose={() => setShowEditModal(false)}
          id={notificationId}
        />
      ) : null}
    </>
  );
};
