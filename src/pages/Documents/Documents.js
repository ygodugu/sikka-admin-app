import { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { EditIcon } from "../../components/EditIcon";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { AddDocumentsModal } from "./AddDocuments";
import { EditDocumentsModal } from "./EditDocuments";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

const fetchDocuments = (pageIndex = 0, pageSize = 20, search, selectValueID, selectValueOrder, selectValueStatus) => {
  return axiosInstance
    .get(`/documents?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&sortBy=${selectValueID}&sortOrder=${selectValueOrder}&status=${selectValueStatus}`)
    .then((res) => res.data);
};

export const Documents = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [DocumentsId, setDocumentsId] = useState();
  const [search, setSearch] = useState("");
  const [selectValueID, setSelectValueID] = useState("");
  const [selectValueOrder, setSelectValueOrder] = useState("");
  const [selectValueStatus, setSelectValueStatus] = useState("");
  const pageSize = 20;
  const [showError, setShowError] = useState(false);


  const { isLoading, data, refetch } = useQuery({
    queryKey: ["Documents", page, search, selectValueID, selectValueOrder, selectValueStatus],
    queryFn: () => fetchDocuments(page, pageSize, search, selectValueID, selectValueOrder, selectValueStatus),
    keepPreviousData: true,
  });

  const handleAddDocumentsSuccess = () => {
    setShowAddModal(false);
    refetch();
  };

  const handleUpdateDocumentsSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["Documents-details", DocumentsId] });
    setShowEditModal(false);
    refetch();
  };

  const handleEditClick = (id) => () => {
    setDocumentsId(id);
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
              <h2 className="mb-0 page-title">Documents</h2>
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
                  <div className="resp-table documents-tb">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Actions</th>
                          <th>Status</th>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Description</th>
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
                              <td>{u.status}</td>
                              <td>{u.id || 'N/A'}</td>
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
                              {/* <td>{u.createdBy || 'N/A'}</td>
                              <td>{u.updatedBy || 'N/A'}</td> */}
                              <td>{usersData?.data?.find(user => user.id === u.createdBy)?.firstName || 'N/A'}</td>
                              <td>{usersData?.data?.find(user => user.id === u.updatedBy)?.firstName || 'N/A'}</td>
                              <td>{u.createdAt ? new Date(u.createdAt).toLocaleString() : 'N/A'}</td>
                              <td>{u.updatedAt ? new Date(u.updatedAt).toLocaleString() : 'N/A'}</td>
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
        <AddDocumentsModal
          handleSuccess={handleAddDocumentsSuccess}
          handleClose={() => setShowAddModal(false)}
        />
      ) : null}
      {showEditModal ? (
        <EditDocumentsModal
          id={DocumentsId}
          handleSuccess={handleUpdateDocumentsSuccess}
          handleClose={() => setShowEditModal(false)}
        />
      ) : null}
    </>
  );
};
