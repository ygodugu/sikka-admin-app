import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../axiosInstance";
import { Status } from "../../components/Status";
import { DateFormate } from "../../components/DateFormate";
import { NavLink } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";


const getViewMerchantDetails = (userId) => {
    return axiosInstance.get(`/cikka-transactions/purchase?userId=${userId}`).then((res) => res.data);
};

const getViewMerchantDetailsappointments = (userId) => {
    return axiosInstance.get(`/appointments?pageIndex=0&pageSize=20&&sortBy=id&sortOrder=DESC&merchantUserId=${userId}`).then((res) => res.data);
};




export const ViewMerchants = () => {
    const { userId } = useParams();
    console.log(userId);

    const [activeTab, setActiveTab] = useState('cikkaPurchase');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    const { data: viewMerchantDetails, isLoading: viewMerchantsLoading, error } = useQuery({
        queryKey: ["transaction-details", userId],
        queryFn: () => getViewMerchantDetails(userId),
    });


    const { data: appointmentsData, isLoading: appointmentsLoading, error: appointmentsError } = useQuery({
        queryKey: ["appointments-details", userId],
        queryFn: () => getViewMerchantDetailsappointments(userId),
    });

    return (
        <>
            {viewMerchantDetails && appointmentsData && (
                console.log(viewMerchantDetails),
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="row heading-add">
                            <aside className="col-sm-10 mt-3 mb-3">
                                <NavLink to={`/Merchants`}>
                                    <i className="fe fe-arrow-left-circle fe-24"></i>
                                </NavLink>
                            </aside>
                            <aside className="col-sm-10">
                                <h2 className="mb-0 page-title">Cikka Profile Details</h2>
                            </aside>
                        </div>
                        <div className="row my-2">
                            <div className="col-md-6">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <h5 className="card-title">Cikka Balance Details</h5>
                                        <div className="row">
                                            <div className="col-md-5 mt-1">
                                                <label>Purchase Value</label>
                                            </div>
                                            <div className="col-md-7 mt-1">
                                                <label>{viewMerchantDetails.purchaseValue}</label>
                                            </div>
                                            <div className="col-md-5 mt-1">
                                                <label>cikka Sender Transaction</label>
                                            </div>
                                            <div className="col-md-7 mt-1">
                                                <label>{viewMerchantDetails.cikkaSenderTransaction}</label>
                                            </div>
                                            <div className="col-md-5 mt-1">
                                                <label>Cikka Receiver Transaction</label>
                                            </div>
                                            <div className="col-md-7 mt-1">
                                                <label>{viewMerchantDetails.cikkaReceiverTransaction}</label>
                                            </div>
                                            <div className="col-md-5 mt-1">
                                                <label>Cikka Balance</label>
                                            </div>
                                            <div className="col-md-7 mt-1">
                                                <label>{viewMerchantDetails.cikkaBalance}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6"></div>
                            </div>
                        </div>
                        <div className="row my-2 mt-5">
                            <div className="col-md-12">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <ul className="nav nav-tabs mb-3">
                                            <li className="nav-item">
                                                <button
                                                    className={`nav-link ${activeTab === 'cikkaPurchase' ? 'active' : ''}`}
                                                    onClick={() => handleTabChange('cikkaPurchase')}
                                                >
                                                    Cikka Purchase
                                                </button>
                                            </li>
                                            <li className="nav-item">
                                                <button
                                                    className={`nav-link ${activeTab === 'cikkaTransaction' ? 'active' : ''}`}
                                                    onClick={() => handleTabChange('cikkaTransaction')}
                                                >
                                                    Cikka Transaction
                                                </button>
                                            </li>

                                            <li className="nav-item">
                                                <button
                                                    className={`nav-link ${activeTab === 'appointments' ? 'active' : ''}`}
                                                    onClick={() => handleTabChange('appointments')}
                                                >
                                                    Appointments
                                                </button>
                                            </li>
                                        </ul>

                                        <div>
                                            <div className="row my-2 mt-3">
                                                <div className="col-md-12">
                                                    {activeTab === 'cikkaPurchase' && (
                                                        <div className="resp-table cikka-purchase-tb">
                                                            <div className="row">
                                                                <aside className="col-sm-10">
                                                                    <h5 className="card-title">Cikka Purchase</h5>
                                                                </aside>
                                                            </div>
                                                            <div>
                                                                <table className="table mt-2">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>id</th>
                                                                            <th>userId</th>
                                                                            <th>purchaseStatus</th>
                                                                            <th>purchaseValue</th>
                                                                            <th>paymentDetails</th>
                                                                            <th>createdBy</th>
                                                                            <th>updatedBy</th>
                                                                            <th>createdAt</th>
                                                                            <th>updatedAt</th>
                                                                            <th>status</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        {viewMerchantsLoading ? (
                                                                            <tr>
                                                                                <td rowSpan="10" colSpan="13">
                                                                                    <div className="text-center py-5">
                                                                                        <Spinner animation="border" />
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        ) : (
                                                                            viewMerchantDetails.cikkaPurchase && viewMerchantDetails.cikkaPurchase.length > 0 ? (
                                                                                <>
                                                                                    {viewMerchantDetails.cikkaPurchase.map((purchase) => (
                                                                                        <tr key={purchase.id}>
                                                                                            <td>{purchase.id}</td>
                                                                                            <td>{purchase.userId}</td>
                                                                                            <td>{purchase.purchaseStatus}</td>
                                                                                            <td>{purchase.purchaseValue}</td>
                                                                                            <td>{purchase.paymentDetails}</td>
                                                                                            <td>{purchase.createdBy}</td>
                                                                                            <td>{purchase.updatedBy}</td>
                                                                                            <td>{purchase.createdAt}</td>
                                                                                            <td>{purchase.updatedAt}</td>
                                                                                            <td>{purchase.status}</td>
                                                                                        </tr>
                                                                                    ))}
                                                                                </>
                                                                            ) : (
                                                                                <tr>
                                                                                    <td rowSpan="10" colSpan="13">
                                                                                        <div className="text-center py-5">
                                                                                            <strong>No purchase were done</strong>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            )
                                                                        )}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    )}
                                                    <div className="col-md-6"></div>
                                                </div>
                                            </div>

                                            <div>
                                                {activeTab === 'cikkaTransaction' && (

                                                    <div className="resp-table cikka-transaction-tb">
                                                        <div className="row">
                                                            <aside className="col-sm-10">
                                                                <h5 className="card-title">Cikka Transaction</h5>
                                                            </aside>
                                                        </div>
                                                        <div>
                                                            <table className="table mt-2">
                                                                <thead>
                                                                    <tr>
                                                                        <th>id</th>
                                                                        <th>senderId</th>
                                                                        <th>receiverId</th>
                                                                        <th>merchantId</th>
                                                                        <th>merchant</th>
                                                                        <th>transactionValue</th>
                                                                        <th>memberCutValue</th>
                                                                        <th>merchantCutValue</th>
                                                                        <th>superAgentCutValue</th>
                                                                        <th>transactionPercentage</th>
                                                                        <th>transactionType</th>
                                                                        <th>transactionStatus</th>
                                                                        <th>createdBy</th>
                                                                        <th>updatedBy</th>
                                                                        <th>createdAt</th>
                                                                        <th>updatedAt</th>
                                                                        <th>status</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {viewMerchantsLoading ? (
                                                                        <tr>
                                                                            <td rowSpan="10" colSpan="4">
                                                                                <div className="text-center py-5">
                                                                                    <Spinner animation="border" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    ) : (
                                                                        viewMerchantDetails.cikkaTransaction && viewMerchantDetails.cikkaTransaction.length > 0 ? (
                                                                            <>
                                                                                {viewMerchantDetails.cikkaTransaction.map((transaction) => (
                                                                                    <tr key={transaction.id}>
                                                                                        <td>{transaction.id}</td>
                                                                                        <td>{transaction.senderId}</td>
                                                                                        <td>{transaction.receiverId}</td>
                                                                                        <td>{transaction.merchantId}</td>
                                                                                        <td>{transaction.merchant}</td>
                                                                                        <td>{transaction.transactionValue}</td>
                                                                                        <td>{transaction.memberCutValue}</td>
                                                                                        <td>{transaction.merchantCutValue}</td>
                                                                                        <td>{transaction.superAgentCutValue}</td>
                                                                                        <td>{transaction.transactionPercentage}</td>
                                                                                        <td>{transaction.transactionType}</td>
                                                                                        <td>{transaction.transactionStatus}</td>
                                                                                        <td>{transaction.createdBy}</td>
                                                                                        <td>{transaction.updatedBy}</td>
                                                                                        <td>{transaction.createdAt}</td>
                                                                                        <td>{transaction.updatedAt}</td>
                                                                                        <td>{transaction.status}</td>
                                                                                    </tr>
                                                                                ))}
                                                                            </>
                                                                        ) : (
                                                                            <tr>
                                                                                <td rowSpan="10" colSpan="13">
                                                                                    <div className="text-center py-5">
                                                                                        <strong>No transaction were done</strong>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    )}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>


                                            <div>
                                                {activeTab === 'appointments' && (

                                                    <div className="resp-table cikka-transaction-tb">
                                                        <div className="row">
                                                            <aside className="col-sm-10">
                                                                <h5 className="card-title">Appointments</h5>
                                                            </aside>
                                                        </div>
                                                        <div>
                                                            <table className="table mt-2">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Status</th>
                                                                        <th>serviceId</th>
                                                                        <th>service Name</th>
                                                                        <th>User Name</th>
                                                                        <th>Contact</th>
                                                                        <th>SpecialRequest</th>
                                                                        <th>StartTime</th>
                                                                        <th>EndTime</th>
                                                                        {/* <th>createdBy</th>
                                                                        <th>updatedBy</th>
                                                                        <th>createdAt</th>
                                                                        <th>UpdatedAt</th> */}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {appointmentsLoading ? (
                                                                        <tr>
                                                                            <td rowSpan="10" colSpan="4">
                                                                                <div className="text-center py-5">
                                                                                    <Spinner animation="border" />
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    ) : (
                                                                        appointmentsData && appointmentsData.data.length > 0 ? (
                                                                            <>
                                                                                {appointmentsData.data.map((appointments) => (
                                                                                    <tr key={appointments.id}>
                                                                                        <td>
                                                                                            <Status code={appointments.status} />
                                                                                        </td>
                                                                                        <td>{appointments.serviceId}</td>
                                                                                        <td>{appointments.service.name}</td>
                                                                                        <td>{appointments.user.firstName}  {appointments.user.lastName}</td>
                                                                                        <td>{typeof appointments.user.mobileNumber === "string" ? "--" : appointments.user.mobileNumber}</td>
                                                                                        <td>{appointments.specialRequest === "string" ? "--" : appointments.specialRequest}</td>
                                                                                        <td>{appointments.startTime}</td>
                                                                                        <td>{appointments.endTime}</td>
                                                                                        {/* <td>{<DateFormate dateTime={appointments.createdBy} />}</td>
                                                                                        <td>{<DateFormate dateTime={appointments.updatedBy} />}</td>
                                                                                        <td>{<DateFormate dateTime={appointments.createdAt} />}</td>
                                                                                        <td>{<DateFormate dateTime={appointments.updatedAt} />}</td> */}
                                                                                    </tr>
                                                                                ))}
                                                                            </>
                                                                        ) : (
                                                                            <tr>
                                                                                <td rowSpan="10" colSpan="13">
                                                                                    <div className="text-center py-5">
                                                                                        <strong>No appointments were done</strong>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        )
                                                                    )}
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
};
