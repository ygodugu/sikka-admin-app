import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../axiosInstance";
import { NavLink } from "react-router-dom";


const getTransactionDetails = (id) => {
  return axiosInstance.get(`/cikka-transactions/${id}`).then((res) => res.data);
};


export const ViewTransaction = () => {
  const { id } = useParams();
  console.log(id);
  const [showAddServiceModal, setShowAddServiceModal] = useState(false);
  const [showEditServiceModal, setShowEditServiceModal] = useState(false);
  const [templeServiceId, setTempleServiceId] = useState();
  const { data: transactionDetails, error } = useQuery({
    queryKey: ["transaction-details", id],
    queryFn: () => getTransactionDetails(id),
  });


  const handleAddServiceClick = () => {
    setShowAddServiceModal(true);
  };

  const handleEditServiceClick = () => {
    setShowEditServiceModal(true);
  };

  const handleAddTempleServiceSuccess = () => {
    setShowAddServiceModal(false);
    // refetch();
  };

  const handleEditTempleServiceSuccess = () => {
    setShowEditServiceModal(false);
    // refetch();
  };

  return (
    <>
      {transactionDetails && (
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="row heading-add">
              <aside className="col-sm-10 mt-3 mb-3">
                <NavLink to={`/Transactions`}>
                  <i className="fe fe-arrow-left-circle fe-24"></i>
                </NavLink>
              </aside>
              <aside className="col-sm-10">
                <h2 className="mb-0 page-title">Transaction Details</h2>
              </aside>
            </div>
            <div className="row my-2">
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">Transaction Details</h5>
                    <div className="row">
                      <div className="col-md-5 mt-1">
                        <label>Transaction Value</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>{transactionDetails.transactionValue}</label>
                      </div>
                      <div className="col-md-5 mt-1">
                        <label>Member Cut Value</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>{transactionDetails.memberCutValue}</label>
                      </div>
                      <div className="col-md-5 mt-1">
                        <label>Merchant Cut Value</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>{transactionDetails.merchantCutValue}</label>
                      </div>
                      <div className="col-md-5 mt-1">
                        <label>Super Agent Cut Value</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>{transactionDetails.superAgentCutValue}</label>
                      </div>
                      <div className="col-md-5 mt-1">
                        <label>Transaction Percentage</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>{transactionDetails.transactionPercentage}</label>
                      </div>
                      <div className="col-md-5 mt-1">
                        <label>Transaction Type</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>{transactionDetails.transactionType}</label>
                      </div>
                      <div className="col-md-5 mt-1">
                        <label>Transaction Status</label>
                      </div>
                      <div className="col-md-7 mt-1">
                        <label>{transactionDetails.transactionStatus}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-body">
                    <h5 className="card-title">Temple Images</h5>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="row">
                      <aside className="col-sm-10">
                        <h5 className="card-title">Temple Services</h5>
                      </aside>
                      <aside className="col-sm-2 add-sec">
                        <button
                          className="bttn"
                          onClick={handleAddServiceClick}
                        >
                          Add
                        </button>
                      </aside>
                    </div>
                    <div>
                      <table className="table mt-2">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Time</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        {/* <tbody>
                          {templeServicesLoading ? (
                            <tr>
                              <td rowSpan="10" colSpan="4">
                                <div className="text-center py-5">
                                  <Spinner animation="border" />
                                </div>
                              </td>
                            </tr>
                          ) : (
                            templeServices.data.map((p) => (
                              <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.boardName}</td>

                                <td></td>
                                <td></td>
                                <td></td>

                                 <td className="actions">
                                <EditIcon onClick={handleEditClick(p.id)} />
                                <DeleteIcon onClick={handleDelete(p.id)} />
                              </td> 
                              </tr>
                            ))
                          )}
                        </tbody> */}
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-body">
                    <div className="row">
                      <aside className="col-sm-10">
                        <h5 className="card-title">Priests</h5>
                      </aside>
                      <aside className="col-sm-2 add-sec">
                        <button
                          className="bttn"
                          onClick={handleAddServiceClick}
                        >
                          Add
                        </button>
                      </aside>
                    </div>
                    <div>
                      <table className="table mt-2">
                        <thead>
                          <tr>
                            <th>Priest Name</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* {data.data.map((p) => (
                              <tr key={p.id}>
                                <td>{p.name}</td>
                                <td>{p.boardName}</td>

                                <td></td>
                                <td></td>
                                <td></td>

                                <td className="actions">
                                  <EditIcon onClick={handleEditClick(p.id)} />
                                  <DeleteIcon onClick={handleDelete(p.id)} />
                                </td>
                              </tr>
                            ))} */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* {showAddServiceModal ? (
        <AddTempleServiceModal
          handleSuccess={handleAddTempleServiceSuccess}
          templeId={id}
          handleClose={() => setShowAddServiceModal(false)}
        />
      ) : null}
      {showEditServiceModal ? (
        <AddTempleServiceModal
          handleSuccess={handleEditTempleServiceSuccess}
          id={templeServiceId}
          templeId={id}
          handleClose={() => setShowEditServiceModal(false)}
        />
      ) : null} */}
    </>
  );
};
