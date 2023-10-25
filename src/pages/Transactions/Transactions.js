import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";


const fetchTransactions = (pageIndex = 0, pageSize = 20, search,  selectValueID, selectValueOrder, selectValueStatus) => {
  return axiosInstance
    .get(`/cikka-transactions?pageIndex=${pageIndex}&pageSize=${pageSize}&search=${search}&sortBy=${selectValueID}&sortOrder=${selectValueOrder}&status=${selectValueStatus}`)
    .then((res) => res.data);
};

export const Transactions = () => {

  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [selectValueID, setSelectValueID] = useState("");
  const [selectValueOrder, setSelectValueOrder] = useState("");
  const [selectValueStatus, setSelectValueStatus] = useState("");
  const pageSize = 20;

  const { data, refetch, isLoading } = useQuery({
    queryKey: ["transactions", page, search,  selectValueID, selectValueOrder, selectValueStatus],
    queryFn: () => fetchTransactions(page, pageSize, search,  selectValueID, selectValueOrder, selectValueStatus),
    keepPreviousData: true,
  });

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


  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row heading-add">
            <aside className="ml-2 mr-2">
              <h2 className="mb-0 page-title">Cikka Transaction</h2>
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
            <aside className="col-sm-2 add-sec">
              <select className="form-control" onChange={handleSelectIDChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortBy</option>
                <option value="id">ID</option>
              </select>
            </aside>
            <aside className="col-sm-2 add-sec">
              <select className="form-control" onChange={handleSelectOrderChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortOrder</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </select>
            </aside>
            <aside className="col-sm-2 add-sec">
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
                  <div className="resp-table priest-tb">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>ReceiverId</th>
                          <th>TransactionValue</th>
                          <th>MemberCutValue</th>
                          <th>MerchantCutValue</th>
                          <th>SuperAgentCutValue</th>
                          <th>TransactionPercentage</th>
                          <th>TransactionType</th>
                          <th>TransactionStatus</th>
                          <th>VoucherUsageLogs</th>
                          <th>CreatedBy</th>
                          <th>UpdatedBy</th>
                          <th>CreatedAt</th>
                          <th>UpdatedAt</th>
                          <th>Status</th>
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
                              <td>{p.id}</td>
                              <td>{p.receiverId}</td>
                              <td>{p.transactionValue}</td>
                              <td>{p.memberCutValue}</td>
                              <td>{p.merchantCutValue}</td>
                              <td>{p.superAgentCutValue}</td>
                              <td>{p.transactionPercentage}</td>
                              <td>{p.transactionType}</td>
                              <td>{p.transactionStatus}</td>
                              <td>{p.voucher ? p.voucher.id : ''}</td>
                              <td>{p.createdBy}</td>
                              <td>{p.updatedBy}</td>
                              <td>{p.createdAt}</td>
                              <td>{p.updatedAt}</td>
                              <td>{p.status}</td>
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
