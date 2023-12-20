import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Spinner } from "react-bootstrap";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";
import { DateFormate } from "../../components/DateFormate";
import { Status } from "../../components/Status";


const fetchPurchases = (pageIndex = 0, pageSize = 20, selectValue, selectValueID, selectValueOrder, selectValueStatus) => {
  return axiosInstance
    .get(`/cikka-purchases?pageIndex=${pageIndex}&pageSize=${pageSize}&purchaseStatus=${selectValue}&sortBy=${selectValueID}&sortOrder=${selectValueOrder}&status=${selectValueStatus}`)
    .then((res) => res.data);
};


export const Purchases = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [selectValueID, setSelectValueID] = useState("");
  const [selectValueOrder, setSelectValueOrder] = useState("");
  const [selectValueStatus, setSelectValueStatus] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [showError, setShowError] = useState(false);
  const pageSize = 20;
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["Purchases", page, selectValue,  selectValueID, selectValueOrder, selectValueStatus],
    queryFn: () => fetchPurchases(page, pageSize, selectValue,  selectValueID, selectValueOrder, selectValueStatus),
    keepPreviousData: true,
  });

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
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row heading-add">
            <aside className="ml-2 mr-auto">
              <h2 className="mb-0 page-title">Cikka Purchases</h2>
            </aside>
            {/* <form className="form-inline  mr-auto searchform">
              <input
                className="form-control mr-sm-2 border-0"
                onChange={handleSearchPurchaseValueChange}
                type="number"
                style={{ background: "white" }}
                placeholder="Search Purchase Value"
                aria-label="Search"
              />
            </form> */}
            <div className="d-flex">
              <select className="form-control col-sm-4 mt-2  mr-sm-2" onChange={handleSelectChange} style={{ background: "white" }} aria-label="select">
                <option value="">PurchaseStatus</option>
                <option value="CANCELLED">CANCELLED</option>
                <option value="INITIATED">INITIATED</option>
                <option value="PURCHASED">PURCHASED</option>
              </select>

              <select className="form-control mt-2 mr-sm-2" onChange={handleSelectIDChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortBy</option>
                <option value="id">ID</option>
                <option value="purchaseValue">PurchaseValue</option>
              </select>

              <select className="form-control mt-2 mr-sm-2" onChange={handleSelectOrderChange} style={{ background: "white" }} aria-label="select">
                <option value="">sortOrder</option>
                <option value="ASC">ASC</option>
                <option value="DESC">DESC</option>
              </select>

              <select className="form-control mt-2 mt-2 mr-sm-2" onChange={handleSelectStatusChange} style={{ background: "white" }} aria-label="select">
                <option value="">STATUS</option>
                <option value="0">0</option>
                <option value="1">1</option>
              </select>

            </div>

          </div>
          <div className="row my-2">
            <div className="col-md-12">
              <div className="card shadow">
                <div className="card-body">
                  <div className="resp-table purchases-tb">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>UserID</th>
                          <th>PurchaseStatus</th>
                          <th>PurchaseValue</th>
                          <th>PaymentDetails</th>
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
                              <td>{p.userId}</td>
                              <td>{p.purchaseStatus}</td>
                              <td>{p.purchaseValue}</td>
                              <td>{p.paymentDetails}</td>
                              {/* <td>{p.createdBy}</td>
                              <td>{p.updatedBy}</td> */}
                              <td>{usersData?.data?.find(user => user.id === p.createdBy)?.firstName || 'N/A'}</td>
                              <td>{usersData?.data?.find(user => user.id === p.updatedBy)?.firstName || 'N/A'}</td>
                              <td>{p.createdAt ? <DateFormate dateTime={p.createdAt} /> : 'N/A'}</td>
                              <td>{p.updatedAt ? <DateFormate dateTime={p.updatedAt} /> : 'N/A'}</td>
                              {/* <td>{p.status} </td> */}
                              <td>
                                <Status code={p.status} />
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
    </>
  );
};
