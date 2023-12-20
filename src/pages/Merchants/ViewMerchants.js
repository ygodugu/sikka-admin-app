import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../axiosInstance";
import { NavLink } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";


const getViewMerchantDetails = (userId) => {
    return axiosInstance.get(`/cikka-transactions/purchase?pageIndex=0&pageSize=20&sortBy=id&sortOrder=DESC&userId=${userId}`).then((res) => res.data);
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

    return (
        <>
            {viewMerchantDetails && (
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
                                                                                            <td>{purchase.id || "N/A"}</td>
                                                                                            <td>{purchase.userId || "N/A"}</td>
                                                                                            <td>{purchase.purchaseStatus || "N/A"}</td>
                                                                                            <td>{purchase.purchaseValue || "N/A"}</td>
                                                                                            <td>{purchase.paymentDetails || "N/A"}</td>
                                                                                            <td>{purchase.createdBy || "N/A"}</td>
                                                                                            <td>{purchase.updatedBy || "N/A"}</td>
                                                                                            <td>{purchase.createdAt || "N/A"}</td>
                                                                                            <td>{purchase.updatedAt || "N/A"}</td>
                                                                                            <td>{purchase.status || "N/A"}</td>
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
                                                                        <th>receiverId</th>
                                                                        <th>categoryId</th>
                                                                        <th>category</th>
                                                                        <th>userReferralNumber</th>
                                                                        <th>email</th>
                                                                        <th>userType</th>
                                                                        <th>userReferenceId</th>
                                                                        <th>firstName</th>
                                                                        <th>middleName</th>
                                                                        <th>lastName</th>
                                                                        <th>profileImagePathId</th>
                                                                        <th>profileImage</th>
                                                                        <th>gender</th>
                                                                        <th>mobileNumber</th>
                                                                        <th>alternativeNumber</th>
                                                                        <th>shortBio</th>
                                                                        <th>motherTongue</th>
                                                                        <th>proofNumber</th>
                                                                        <th>proofImagePathId</th>
                                                                        <th>proofImage</th>
                                                                        <th>bloodGroup</th>
                                                                        <th>dateOfBirth</th>
                                                                        <th>anniversaryDate</th>
                                                                        <th>cityId</th>
                                                                        <th>city</th>
                                                                        <th>religion</th>
                                                                        <th>joiningDate</th>
                                                                        <th>numberOfActiveSessions</th>
                                                                        <th>addresses</th>
                                                                        <th>isTest</th>
                                                                        <th>transactionValue</th>
                                                                        <th>memberCutValue</th>
                                                                        <th>merchantCutValue</th>
                                                                        <th>superAgentCutValue</th>
                                                                        <th>transactionPercentage</th>
                                                                        <th>transactionType</th>
                                                                        <th>transactionStatus</th>
                                                                        <th>voucherUsageLogs</th>
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
                                                                                        <td>{transaction.id || "N/A"}</td>
                                                                                        <td>{transaction.receiverId || "N/A"}</td>
                                                                                        <td>{transaction.categoryId || "N/A"}</td>
                                                                                        <td>{transaction.category || "N/A"}</td>
                                                                                        <td>{transaction.receiver.userReferralNumber || "N/A"}</td>
                                                                                        <td>{transaction.receiver.email || "N/A"}</td>
                                                                                        <td>{transaction.receiver.userType || "N/A"}</td>
                                                                                        <td>{transaction.receiver.userReferenceId || "N/A"}</td>
                                                                                        <td>{transaction.receiver.firstName || "N/A"}</td>
                                                                                        <td>{transaction.receiver.middleName || "N/A"}</td>
                                                                                        <td>{transaction.receiver.lastName || "N/A"}</td>
                                                                                        <td>{transaction.receiver.profileImagePathId || "N/A"}</td>
                                                                                        <td>{transaction.receiver.profileImage || "N/A"}</td>
                                                                                        <td>{transaction.receiver.gender || "N/A"}</td>
                                                                                        <td>{transaction.receiver.mobileNumber || "N/A"}</td>
                                                                                        <td>{transaction.receiver.alternativeNumber || "N/A"}</td>
                                                                                        <td>{transaction.receiver.shortBio || "N/A"}</td>
                                                                                        <td>{transaction.receiver.motherTongue || "N/A"}</td>
                                                                                        <td>{transaction.receiver.proofNumber || "N/A"}</td>
                                                                                        <td>{transaction.receiver.proofImagePathId || "N/A"}</td>
                                                                                        <td>{transaction.receiver.proofImage || "N/A"}</td>
                                                                                        <td>{transaction.receiver.bloodGroup || "N/A"}</td>
                                                                                        <td>{transaction.receiver.dateOfBirth || "N/A"}</td>
                                                                                        <td>{transaction.receiver.anniversaryDate || "N/A"}</td>
                                                                                        <td>{transaction.receiver.cityId || "N/A"}</td>
                                                                                        <td>{transaction.receiver.city || "N/A"}</td>
                                                                                        <td>{transaction.receiver.religion || "N/A"}</td>
                                                                                        <td>{transaction.receiver.joiningDate || "N/A"}</td>
                                                                                        <td>{transaction.receiver.numberOfActiveSessions || "N/A"}</td>
                                                                                        <td>{transaction.receiver.addresses || "N/A"}</td>
                                                                                        <td>{transaction.receiver.isTest || "N/A"}</td>
                                                                                        <td>{transaction.transactionValue || "N/A"}</td>
                                                                                        <td>{transaction.memberCutValue || "N/A"}</td>
                                                                                        <td>{transaction.merchantCutValue || "N/A"}</td>
                                                                                        <td>{transaction.superAgentCutValue || "N/A"}</td>
                                                                                        <td>{transaction.transactionPercentage || "N/A"}</td>
                                                                                        <td>{transaction.transactionType || "N/A"}</td>
                                                                                        <td>{transaction.transactionStatus || "N/A"}</td>
                                                                                        <td>{transaction.voucherUsageLogs || "N/A"}</td>
                                                                                        <td>{transaction.createdBy || "N/A"}</td>
                                                                                        <td>{transaction.updatedBy || "N/A"}</td>
                                                                                        <td>{transaction.createdAt || "N/A"}</td>
                                                                                        <td>{transaction.updatedAt || "N/A"}</td>
                                                                                        <td>{transaction.status || "N/A"}</td>
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
