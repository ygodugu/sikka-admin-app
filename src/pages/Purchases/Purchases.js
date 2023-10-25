import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import { axiosInstance } from "../../axiosInstance";
import { CustomPagination } from "../../components/CustomPagination";


const fetchPurchases = (pageIndex = 0, pageSize = 20, selectValue) => {
  return axiosInstance
    .get(`/cikka-purchases?pageIndex=${pageIndex}&pageSize=${pageSize}&purchaseStatus=${selectValue}&sortBy=id&sortOrder=DESC`)
    .then((res) => res.data);
};


export const Purchases = () => {
  const queryClient = useQueryClient();

  const [page, setPage] = useState(0);
  const [selectValue, setSelectValue] = useState("");
  const [showError, setShowError] = useState(false);
  const pageSize = 20;
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["Purchases", page, selectValue],
    queryFn: () => fetchPurchases(page, pageSize, selectValue),
    keepPreviousData: true,
  });

  const handleSelectChange = (event) => {
    const newSelect = event.target.value;
    setSelectValue(newSelect);
    console.log(newSelect);
    refetch();
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="row heading-add">
            <aside className="col-sm-8">
              <h2 className="mb-0 page-title">Cikka Purchases</h2>
            </aside>
            <aside className="col-sm-3">
              <select className="form-control" onChange={handleSelectChange} style={{ background: "white" }} aria-label="select">
                <option value="">PurchaseStatus</option>
                <option value="CANCELLED">CANCELLED</option>
                <option value="INITIATED">INITIATED</option>
                <option value="PURCHASED">PURCHASED</option>
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
                              <td>{p.createdBy}</td>
                              <td>{p.updatedBy}</td>
                              <td>{p.createdAt}</td>
                              <td>{p.updatedAt}</td>
                              <td>{p.status} </td>
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
