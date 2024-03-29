import React, { useState, useEffect } from 'react';
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../axiosInstance";
import { Status } from "../../components/Status";
import { DateFormate } from "../../components/DateFormate";
import { NavLink } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import * as XLSX from 'xlsx'; // Importing Excel library



const getViewMerchantDetails = (userId) => {
    return axiosInstance.get(`/cikka-transactions/purchase?userId=${userId}`).then((res) => res.data);
};

const getViewMerchantDetailsappointments = (userId, selectedDate) => {
    return axiosInstance.get(`/appointments?pageIndex=0&pageSize=20&sortBy=startTime&sortOrder=ASC&status=1&merchantUserId=${userId}&startTime=${selectedDate}`).then((res) => res.data);
};


export const ViewMerchants = () => {
    const { userId } = useParams();
    console.log(userId);

    const [activeTab, setActiveTab] = useState('cikkaPurchase');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };


    const [selectedDate, setSelectedDate] = useState(getTodayDate());

    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        let month = today.getMonth() + 1;
        let day = today.getDate();

        if (month < 10) {
            month = '0' + month;
        }
        if (day < 10) {
            day = '0' + day;
        }

        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        // Fetch data when the component mounts for the first time
    }, [selectedDate]); // Refetch data when selectedDate changes

    const handleSelectDateChange = (event) => {
        setSelectedDate(event.target.value);
    };



    const { data: viewMerchantDetails, isLoading: viewMerchantsLoading, error } = useQuery({
        queryKey: ["transaction-details", userId],
        queryFn: () => getViewMerchantDetails(userId),
    });


    const { data: appointmentsData, isLoading: appointmentsLoading, error: appointmentsError } = useQuery({
        queryKey: ["appointments-details", userId, selectedDate],
        queryFn: () => getViewMerchantDetailsappointments(userId, selectedDate),
    });


    const renderAppointmentsTable = () => {
        if (appointmentsLoading) {
            return (
                <tr>
                    <td colSpan="9">
                        <div className="text-center py-5">
                            <Spinner animation="border" />
                        </div>
                    </td>
                </tr>
            );
        } else if (appointmentsData && appointmentsData.data.length > 0) {
            const groupedAppointments = groupAppointments(appointmentsData.data);
            let totalPeopleCount = 0; // Variable to store total count
            const rows = groupedAppointments.map((appointmentGroup, index) => {
                totalPeopleCount += appointmentGroup.peopleCount; // Increment total count
                return (
                    <tr key={index}>
                        <td>
                            <Status code={appointmentGroup.status} />
                        </td>
                        <td>{appointmentGroup.serviceName}</td>
                        <td>{appointmentGroup.userName}</td>
                        <td>{appointmentGroup.contact}</td>
                        <td>{appointmentGroup.specialRequest}</td>
                        <td>{appointmentGroup.peopleCount}</td>
                        <td>{new Date(appointmentGroup.startTime).toLocaleString('en-GB', { timeZone: 'Europe/London' })}</td>
                        <td>{new Date(appointmentGroup.endTime).toLocaleString('en-GB', { timeZone: 'Europe/London' })}</td>
                        {/* <td>{appointmentGroup.startTime.toLocaleString('en-GB', { timeZone: 'Europe/London' })}</td>
                        <td>{appointmentGroup.endTime.toLocaleString('en-GB', { timeZone: 'Europe/London' })}</td> */}
                    </tr>
                );
            });
            // Add a row for total count at the end
            rows.push(
                <tr key="total">
                    <td><strong>Total:</strong>&nbsp;&nbsp;{totalPeopleCount}</td>
                    {/* <td>{totalPeopleCount}</td> */}
                </tr>
            );
            return rows;
        } else {
            return (
                <tr>
                    <td colSpan="9">
                        <div className="text-center py-5">
                            <strong>No appointments were done</strong>
                        </div>
                    </td>
                </tr>
            );
        }
    };

    const groupAppointments = (appointments) => {
        const grouped = {};
        appointments.forEach(appointment => {
            const key = `${appointment.service.name}_${appointment.user.firstName}_${appointment.user.lastName}_${appointment.user.mobileNumber}_${appointment.startTime}_${appointment.endTime}`;
            if (grouped[key]) {
                // If a record with the same key already exists, increase the count
                grouped[key].peopleCount++;
            } else {
                // Otherwise, initialize the count to 1 for the first occurrence
                grouped[key] = {
                    ...appointment,
                    serviceName: appointment.service.name,
                    userName: `${appointment.user.firstName} ${appointment.user.lastName}`,
                    contact: typeof appointment.user.mobileNumber === "string" ? "--" : appointment.user.mobileNumber,
                    peopleCount: 1 // Initialize count to 1 for the first occurrence
                };
            }
        });
        return Object.values(grouped);
    };

    const downloadExcel = () => {
        if (appointmentsData && appointmentsData.data) {
            const groupedAppointments = groupAppointments(appointmentsData.data);
            let totalPeopleCount = 0;

            // Prepare data for Excel sheet
            const wsData = groupedAppointments.map(appointmentGroup => {
                totalPeopleCount += appointmentGroup.peopleCount;

                return {
                    ServiceName: appointmentGroup.service.name,
                    UserName: `${appointmentGroup.user.firstName} ${appointmentGroup.user.lastName}`,
                    Contact: appointmentGroup.contact === "string" ? "--" : appointmentGroup.contact,
                    SpecialRequest: appointmentGroup.specialRequest === "string" ? "--" : appointmentGroup.specialRequest,
                    PeopleCount: appointmentGroup.peopleCount,
                    StartTime: new Date(appointmentGroup.startTime).toLocaleString('en-GB', { timeZone: 'Europe/London' }),
                    EndTime: new Date(appointmentGroup.endTime).toLocaleString('en-GB', { timeZone: 'Europe/London' })
                };
            });

            // Add total count row
            const totalRow = {
                ServiceName: '', // You may leave this blank or specify as needed
                UserName: '', // You may leave this blank or specify as needed
                Contact: '', // You may leave this blank or specify as needed
                SpecialRequest: 'Total:',
                PeopleCount: totalPeopleCount,
                StartTime: '', // You may leave this blank or specify as needed
                EndTime: '' // You may leave this blank or specify as needed
            };
            wsData.push(totalRow);

            const ws = XLSX.utils.json_to_sheet(wsData);

            // Initialize column widths array if not already initialized
            if (!ws['!cols']) {
                ws['!cols'] = [];
            }

            // Adjust column widths
            const columnWidths = [
                { wch: 35 }, // Width of column A
                { wch: 20 }, // Width of column B
                { wch: 20 }, // Width of column C
                { wch: 20 }, // Width of column D
                { wch: 8 }, // Width of column E
                { wch: 25 }, // Width of column F
                { wch: 25 }, // Width of column G
                // Add more entries for additional columns as needed
            ];

            // Apply column widths
            columnWidths.forEach((width, index) => {
                ws['!cols'][index] = width;
            });


            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "bookings");

            const now = new Date();
            const timestamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}`;

            // Append timestamp to file name
            const fileName = `bookings_${timestamp}.xlsx`;

            XLSX.writeFile(wb, fileName);

        } else {
            console.error("No appointments data available to download.");
        }
    };

    // Helper function to pad single-digit numbers with leading zeros
    function pad(number) {
        return number < 10 ? '0' + number : number;
    }

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

                                                        <div className='row'>
                                                            <aside className="col-sm-4 mt-2 mr-2">
                                                                <input
                                                                    type="date"
                                                                    name="date"
                                                                    value={selectedDate} // Set the value to selectedDate
                                                                    onChange={handleSelectDateChange}
                                                                    className="form-control form-control-lg"
                                                                />
                                                            </aside>
                                                            <aside className="col-sm-2 mt-2  add-sec">
                                                                <button className="bttn" onClick={downloadExcel}>
                                                                    <i className="fe fe-download fe-16">
                                                                        <span>  Download </span>
                                                                    </i>
                                                                </button>
                                                            </aside>
                                                        </div>


                                                        <div>
                                                            <table className="table mt-2">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Status</th>
                                                                        <th>service Name</th>
                                                                        <th>User Name</th>
                                                                        <th>Contact</th>
                                                                        <th>SpecialRequest</th>
                                                                        <th>People</th>
                                                                        <th>StartTime</th>
                                                                        <th>EndTime</th>
                                                                        {/* <th>createdBy</th>
                                                                        <th>updatedBy</th>
                                                                        <th>createdAt</th>
                                                                        <th>UpdatedAt</th> */}
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {renderAppointmentsTable()}
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
