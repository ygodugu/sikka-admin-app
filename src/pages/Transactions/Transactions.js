import React, { useState, useEffect } from 'react'
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { ViewIcon } from "../../components/ViewIcon";
import { Spinner } from "react-bootstrap";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { DateFormate } from "../../components/DateFormate";
import { Status } from "../../components/Status";
import { Typeahead } from "react-bootstrap-typeahead";
import { NavLink } from "react-router-dom";


const fetchTransactions = (pageIndex = 0, pageSize = 20, search, selectValueID, selectValueOrder, selectValueStatus, selectedValue) => {
  return axiosInstance
    .get(`/cikka-transactions?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&sortBy=${selectValueID}&sortOrder=${selectValueOrder}&status=${selectValueStatus}&receivedId=${selectedValue}`)
    .then((res) => res.data);
};

export const Transactions = () => {

  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [selectValueID, setSelectValueID] = useState("");
  const [selectValueOrder, setSelectValueOrder] = useState("");
  const [selectValueStatus, setSelectValueStatus] = useState("");

  const [selectValueReceivedID, setSelectValueReceivedID] = useState([]);

  const [selectedValue, setSelectedValue] = useState("");

  const pageSize = 20;

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["transactions", page, search, selectValueID, selectValueOrder, selectValueStatus, selectedValue],
    queryFn: () => fetchTransactions(page, pageSize, search, selectValueID, selectValueOrder, selectValueStatus, selectedValue),
    keepPreviousData: true,
  });

  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    refetch();
  };

  useEffect(() => {
    axiosInstance
      .get("/cikka-transactions")
      .then((res) => res.data)
      .then((data) => {
        setSelectValueReceivedID(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const handleTypeaheadChange = (e) => {
    const optionValue = e.target.value;
    setSelectedValue(optionValue);
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
      .get("/users?pageIndex=0&pageSize=1400")
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
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row heading-add">
            <aside className="ml-2 mr-2">
              <h2 className="mb-0 page-title" style={{ display: "inline" }}>Transaction</h2>
            </aside>
            <form className="form-inline searchform">
              <input
                className="form-control mr-sm-4 border-0"
                onChange={handleSearchChange}
                type="text"
                style={{ background: "white" }}
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>

          <div className="d-flex flex-wrap">
            <aside className="col-md-4 mt-2 mt-md-0 mb-2 mb-md-0">
              <select
                id="receivedId"
                className="form-control"
                value={selectedValue}
                onChange={handleTypeaheadChange}
              >
                <option value="">Choose a receiver</option>
                {selectValueReceivedID?.data?.map((option) => (
                  <option key={option.receiverId} value={option.receiverId}>
                    {option.receiver.email}
                  </option>
                ))}
              </select>
            </aside>

            <aside className="col-md-4 mt-2 mt-md-0 mb-2 mb-md-0">
              <select className="form-control" onChange={handleSelectIDChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortBy</option>
                <option value="id">ID</option>
                <option value="createdAt">TIME</option>
              </select>
            </aside>

            <aside className="col-md-2 mt-2 mt-md-0 mb-2 mb-md-0">
              <select className="form-control" onChange={handleSelectOrderChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortOrder</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </select>
            </aside>

            <aside className="col-md-2 mt-2 mt-md-0 mb-2 mb-md-0">
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
                  <div className="resp-table transaction-tb">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Actions</th>
                          <th>Status</th>
                          <th>ID</th>
                          <th>ReceiverId</th>
                          <th>TransactionValue</th>
                          <th>MemberCutValue</th>
                          <th>MerchantCutValue</th>
                          <th>SuperAgentCutValue</th>
                          <th>TransactionPercentage</th>
                          <th>TransactionType</th>
                          <th>TransactionStatus</th>
                          <th>CreatedBy</th>
                          <th>UpdatedBy</th>
                          <th>CreatedAt</th>
                          <th>UpdatedAt</th>
                        </tr>
                      </thead>
                      <tbody>
                        {isLoading ? (
                          <tr>
                            <td rowSpan="10" colSpan="15">
                              <div className="text-center py-5">
                                <Spinner animation="border" />
                              </div>
                            </td>
                          </tr>
                        ) : (
                          data?.data?.map((p) => (
                            <tr key={p.id}>
                              <td className="actions">
                                <NavLink to={`/view-transaction/${p.id}`}>
                                  <ViewIcon />
                                </NavLink>
                              </td>
                              <td>
                                <Status code={p.status} />
                              </td>
                              <td>{p.id}</td>
                              <td>{p.receiverId}</td>
                              <td>{p.transactionValue}</td>
                              <td>{p.memberCutValue}</td>
                              <td>{p.merchantCutValue}</td>
                              <td>{p.superAgentCutValue}</td>
                              <td>{p.transactionPercentage}</td>
                              <td>{p.transactionType}</td>
                              <td>{p.transactionStatus}</td>
                              <td>
                                {usersData && usersData.data && usersData.data.find(user => user.id === p.createdBy) ? (
                                  (() => {
                                    const user = usersData.data.find(user => user.id === p.createdBy);
                                    return `${user.firstName || 'N/A'} ${user.lastName || 'N/A'}`;
                                  })()
                                ) : p.createdBy}
                              </td>
                              <td>
                                {usersData && usersData.data && usersData.data.find(user => user.id === p.updatedBy) ? (
                                  (() => {
                                    const user = usersData.data.find(user => user.id === p.updatedBy);
                                    return `${user.firstName || 'N/A'} ${user.lastName || 'N/A'}`;
                                  })()
                                ) : p.updatedBy}
                              </td>
                              <td>{<DateFormate dateTime={p.createdAt} />}</td>
                              <td>{<DateFormate dateTime={p.updatedAt} />}</td>
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
    </>
  );
};
