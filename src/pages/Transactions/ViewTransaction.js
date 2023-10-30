import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../axiosInstance";
import { NavLink } from "react-router-dom";


const getTransactionDetails = (id) => {
  return axiosInstance.get(`/cikka-transactions/${id}`).then((res) => res.data);
};


export const ViewTransaction = () => {
  const { id } = useParams();
  console.log(id);
  const { data: transactionDetails, error } = useQuery({
    queryKey: ["transaction-details", id],
    queryFn: () => getTransactionDetails(id),
  });

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
                  <div className="card shadow">
                    <div className="card-body">
                      <div className="row">
                        <aside className="col-sm-10">
                          <h5 className="card-title">Transaction Receiver Details</h5>
                        </aside>
                      </div>
                      <div className="row">
                        <div className="col-md-5 mt-1">
                          <label>UserID</label>
                        </div>
                        <div className="col-md-7 mt-1">
                          <label>{transactionDetails.receiver.id}</label>
                        </div>
                        <div className="col-md-5 mt-1">
                          <label>Email</label>
                        </div>
                        <div className="col-md-7 mt-1">
                          <label>{transactionDetails.receiver.email}</label>
                        </div>
                        <div className="col-md-5 mt-1">
                          <label>User-Type</label>
                        </div>
                        <div className="col-md-7 mt-1">
                          <label>{transactionDetails.receiver.userType}</label>
                        </div>
                        <div className="col-md-5 mt-1">
                          <label>First Name</label>
                        </div>
                        <div className="col-md-7 mt-1">
                          <label>{transactionDetails.receiver.firstName}</label>
                        </div>
                        <div className="col-md-5 mt-1">
                          <label>Middle Name</label>
                        </div>
                        <div className="col-md-7 mt-1">
                          <label>{transactionDetails.receiver.middleName}</label>
                        </div>
                        <div className="col-md-5 mt-1">
                          <label>Last Name</label>
                        </div>
                        <div className="col-md-7 mt-1">
                          <label>{transactionDetails.receiver.lastName}</label>
                        </div>
                        <div className="col-md-5 mt-1">
                          <label>Gender</label>
                        </div>
                        <div className="col-md-7 mt-1">
                          <label>{transactionDetails.receiver.gender}</label>
                        </div>
                        <div className="col-md-5 mt-1">
                          <label>Mobile Number</label>
                        </div>
                        <div className="col-md-7 mt-1">
                          <label>{transactionDetails.receiver.mobileNumber}</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card shadow">
                    <div className="card-body">
                      <h5 className="card-title">Transaction Details Voucher Usage Logs</h5>
                      {transactionDetails && transactionDetails.voucherUsageLogs ? (
                        <div>
                          {transactionDetails.voucherUsageLogs.map((usageLog) => (
                            <div key={usageLog.id}>
                              <div className="row">
                                <div className="col-md-5 mt-1">
                                  <label>voucher Usage Logs ID</label>
                                </div>
                                <div className="col-md-7 mt-1">
                                  <label>{usageLog.id}</label>
                                </div>
                                <div className="col-md-5 mt-1">
                                  <label>Voucher ID</label>
                                </div>
                                <div className="col-md-7 mt-1">
                                  <label>{usageLog.voucher.id}</label>
                                </div>
                                <div className="col-md-5 mt-1">
                                  <label>Voucher Code</label>
                                </div>
                                <div className="col-md-7 mt-1">
                                  <label>{usageLog.voucher.voucherCode}</label>
                                </div>
                                <div className="col-md-5 mt-1">
                                  <label>Name</label>
                                </div>
                                <div className="col-md-7 mt-1">
                                  <label>{usageLog.voucher.name}</label>
                                </div>
                                <div className="col-md-5 mt-1">
                                  <label>Description</label>
                                </div>
                                <div className="col-md-7 mt-1">
                                  <label>{usageLog.voucher.description}</label>
                                </div>
                                <div className="col-md-5 mt-1">
                                  <label>Voucher Value</label>
                                </div>
                                <div className="col-md-7 mt-1">
                                  <label>{usageLog.voucher.voucherValue}</label>
                                </div>
                                <div className="col-md-5 mt-1">
                                  <label>Voucher Value Type</label>
                                </div>
                                <div className="col-md-7 mt-1">
                                  <label>{usageLog.voucher.voucherValueType}</label>
                                </div>
                                <div className="col-md-5 mt-1">
                                  <label>Validity Start Date</label>
                                </div>
                                <div className="col-md-7 mt-1">
                                  <label>{usageLog.voucher.validityStartDate}</label>
                                </div>
                                <div className="col-md-5 mt-1">
                                  <label>Validity End Date</label>
                                </div>
                                <div className="col-md-7 mt-1">
                                  <label>{usageLog.voucher.validityEndDate}</label>
                                </div>
                                <div className="col-md-5 mt-1">
                                  <label>Max Usage Count</label>
                                </div>
                                <div className="col-md-7 mt-1">
                                  <label>{usageLog.voucher.maxUsageCount}</label>
                                </div>
                                <div className="col-md-5 mt-1">
                                  <label>Consumed Count</label>
                                </div>
                                <div className="col-md-7 mt-1">
                                  <label>{usageLog.voucher.consumedCount}</label>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-3">
                          <h6 className="col-md-7 mt-1">No Voucher Usage logs available for this transaction.</h6>
                        </div>
                      )}
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
                        <h5 className="card-title">Transaction sender Details</h5>
                      </aside>
                    </div>
                    <div className="p-3">
                      <h6 className="col-md-7 mt-1">No Transaction sender Details available for this transaction.</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
