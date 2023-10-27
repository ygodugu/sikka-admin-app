import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { EditIcon } from "../../components/EditIcon";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { AddBusinessCategoriesModal } from "./AddBusinessCategories";
import { EditBusinessCategoriesModal } from "./EditBusinessCategories";

const fetchBusinessCategories = (pageIndex = 0, pageSize = 20, search, selectValueID, selectValueOrder, selectValueStatus) => {
  return axiosInstance
    .get(`/business-categories?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&sortBy=${selectValueID}&sortOrder=${selectValueOrder}&status=${selectValueStatus}`)
    .then((res) => res.data);
};

export const BusinessCategories = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [businessCategoriesId, setBusinessCategoriesId] = useState();
  const [search, setSearch] = useState("");
  const [selectValueID, setSelectValueID] = useState("");
  const [selectValueOrder, setSelectValueOrder] = useState("");
  const [selectValueStatus, setSelectValueStatus] = useState("");
  const [showError, setShowError] = useState(false);

  const pageSize = 20;

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["businessCategories", page, search, selectValueID, selectValueOrder, selectValueStatus],
    queryFn: () => fetchBusinessCategories(page, pageSize, search, selectValueID, selectValueOrder, selectValueStatus),
    keepPreviousData: true,
  });

  const handleAddBusinessCategoriesSuccess = () => {
    setShowAddModal(false);
    refetch();
  };

  const handleUpdateBusinessCategoriesSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: ["businessCategories-details", businessCategoriesId],
    });
    setShowEditModal(false);
    refetch();
  };

  const handleEditClick = (id) => () => {
    setBusinessCategoriesId(id);
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
              <h2 className="mb-0 page-title">Business Categories</h2>
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
              <select className="form-control mt-2 mr-sm-2" onChange={handleSelectIDChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortBy</option>
                <option value="id">ID</option>
              </select>
              <select className="form-control mt-2  mr-sm-2" onChange={handleSelectOrderChange} style={{ background: "white" }} aria-label="select">
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
                  <div className="resp-table business-categories-tb">
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
                          data.data.map((p) => (
                            <tr key={p.id}>
                              <td className="actions">
                                <EditIcon onClick={handleEditClick(p.id)} />
                              </td>
                              <td>{p.status}</td>
                              <td>{p.id}</td>
                              <td>
                                {search ? (
                                  p.name.toLowerCase().includes(search.toLowerCase()) ? (
                                    <span className="highlighted">{p.name}</span>
                                  ) : (
                                    p.name
                                  )
                                ) : (
                                  p.name
                                )}
                              </td>
                              <td>{p.description}</td>
                              {/* <td>{p.createdBy}</td>
                              <td>{p.updatedBy}</td> */}
                              <td>{usersData?.data?.find(user => user.id === p.createdBy)?.firstName || 'N/A'}</td>
                              <td>{usersData?.data?.find(user => user.id === p.updatedBy)?.firstName || 'N/A'}</td>
                              <td>{p.createdAt ? new Date(p.createdAt).toLocaleString() : 'N/A'}</td>
                              <td>{p.updatedAt ? new Date(p.updatedAt).toLocaleString() : 'N/A'}</td>
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
        <AddBusinessCategoriesModal
          handleSuccess={handleAddBusinessCategoriesSuccess}
          handleClose={() => setShowAddModal(false)}
        />
      ) : null}
      {showEditModal ? (
        <EditBusinessCategoriesModal
          handleSuccess={handleUpdateBusinessCategoriesSuccess}
          id={businessCategoriesId}
          handleClose={() => setShowEditModal(false)}
        />
      ) : null}
    </>
  );
};
