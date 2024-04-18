import React, { useState, useRef, useEffect } from 'react';
import "chart.js/auto";
import { Line } from 'react-chartjs-2';
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstance";
import LineChart from '../components/LineChart';
import { ShimmerThumbnail } from "react-shimmer-effects";
import { NavLink } from "react-router-dom";


const fetchUsersCounts = () => axiosInstance.get(`/users?pageIndex=0&pageSize=2000`).then(res => res.data)

const fetchVouchersCounts = () => axiosInstance.get(`/vouchers`).then(res => res.data)

const fetchMerchantsCounts = () => axiosInstance.get(`/merchants?pageIndex=0&pageSize=200`).then(res => res.data)

const fetchPurchasesCounts = () => axiosInstance.get(`/cikka-purchases`).then(res => res.data)

const fetchTransactionsCounts = () => axiosInstance.get(`/cikka-transactions`).then(res => res.data)

const fetchBusinessCategoriesCounts = () => axiosInstance.get(`/business-categories`).then(res => res.data)

const fetchCategoriesCounts = () => axiosInstance.get(`/categories`).then(res => res.data)

const fetchIndustriesCounts = () => axiosInstance.get(`/industries`).then(res => res.data)

const fetchCountriesCounts = () => axiosInstance.get(`/countries`).then(res => res.data)

const fetchStatesCounts = () => axiosInstance.get(`/states`).then(res => res.data)

const fetchCitiesCounts = () => axiosInstance.get(`/cities`).then(res => res.data)

const fetchDocumentsCounts = () => axiosInstance.get(`/documents`).then(res => res.data)

const fetchEventsCounts = () => axiosInstance.get(`/events`).then(res => res.data)



export const Dashboard = () => {

    const {
        isLoading,
        data,
    } = useQuery({
        queryKey: ['users', 'vouchers', 'merchants', 'cikka-purchases', 'cikka-transactions', 'business-categories', 'categories', 'industries', 'countries', 'states', 'cities', 'documents', 'events'],
        queryFn: async () => {
            const usersData = await fetchUsersCounts();
            const vouchersData = await fetchVouchersCounts();
            const merchantsData = await fetchMerchantsCounts();
            const purchasesData = await fetchPurchasesCounts();
            const transactionsData = await fetchTransactionsCounts();
            const businessCategoriesData = await fetchBusinessCategoriesCounts();
            const categoriesData = await fetchCategoriesCounts();
            const industriesData = await fetchIndustriesCounts();
            const countriesData = await fetchCountriesCounts();
            const statesData = await fetchStatesCounts();
            const citiesData = await fetchCitiesCounts();
            const documentsData = await fetchDocumentsCounts();
            const eventsData = await fetchEventsCounts();
            return [usersData, vouchersData, merchantsData, purchasesData, transactionsData, businessCategoriesData, categoriesData, industriesData, countriesData, statesData, citiesData, documentsData, eventsData];
        }
    })

    const xValues = ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"];

    const dataChart = {
        labels: xValues,
        datasets: [
            {
                label: 'Red Dataset',
                data: [860, 1140, 60, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
                backgroundColor: 'rgba(247, 42, 45, 0.5)',
                borderColor: 'red',
                lineTension: 0.4,
                fill: true,
            },
            {
                label: 'Green Dataset',
                data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
                backgroundColor: 'rgba(69, 222, 89, 0.5)',
                borderColor: 'green',
                lineTension: 0.4,
                fill: true,
            },
            {
                label: 'Blue Dataset',
                data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
                backgroundColor: 'rgba(17, 68, 150, 0.5)',
                borderColor: 'blue',
                lineTension: 0.4,
                fill: true,
            },
            {
                label: 'Black Dataset',
                data: [200, 500, 1000, 3000, 4000, 5000, 2000, 2000, 700, 9000],
                backgroundColor: 'rgba(128, 0, 128, 0.5)',
                borderColor: 'purple',
                lineTension: 0.4,
                fill: true,
            }
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                type: 'category',
                grid: {
                    display: false,
                },
            },

        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
            },
        },
    };



    const [UsersCurrentDate, setUsersCurrentDate] = useState('');

    useEffect(() => {
        // Get the current date
        const getCurrentDate = () => {
            const date = new Date();
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year
            // Ensure day and month are always two digits
            const formattedDay = day < 10 ? '0' + day : day;
            const formattedMonth = month < 10 ? '0' + month : month;
            return formattedDay + '/' + formattedMonth + '/' + year;
        };
        setUsersCurrentDate(getCurrentDate());
    }, []); // Run this effect only once on component mount


    const [todayRegisterUserCount, setTodayRegisterUserCount] = useState(0);
    const [todayRegisterMerchantCount, setTodayRegisterMerchantCount] = useState(0);

    useEffect(() => {
        if (!isLoading && data) {
            const currentDate = new Date().toISOString().slice(0, 10); // Get today's date in ISO format (YYYY-MM-DD)
            console.log("Current Date:", currentDate);

            // Log data structure
            console.log("Data:", data);

            // Check if data[0] contains the user data
            console.log("User Data:", data[0]);

            // Count today's registered users
            const usersData = data[0].data;
            console.log("Users Data:", usersData);
            const usersCount = usersData.filter(user => {
                const userCreatedAtDate = user.createdAt?.slice(0, 10);
                console.log("User Created At Date:", userCreatedAtDate);
                return userCreatedAtDate === currentDate;
            }).length;
            console.log("Today's Registered Users Count:", usersCount);
            setTodayRegisterUserCount(usersCount);

            // Count today's registered merchants
            const merchantsData = data[2].data;
            console.log("Merchants Data:", merchantsData);
            const merchantsCount = merchantsData.filter(merchant => {
                const merchantCreatedAtDate = merchant.createdAt?.slice(0, 10);
                console.log("Merchant Created At Date:", merchantCreatedAtDate);
                return merchantCreatedAtDate === currentDate;
            }).length;
            console.log("Today's Registered Merchants Count:", merchantsCount);
            setTodayRegisterMerchantCount(merchantsCount);
        }
    }, [isLoading, data]);

    return (
        <>

            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="row align-items-center mb-2">
                        <div className="col">
                            <h2 className="h5 page-title">WELCOME TO DASHBOARD</h2>
                        </div>
                    </div>

                    <div className="row db-cards items-align-baseline">
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <p className="mb-1"><strong>Users</strong></p>
                                            {/* the count variable -60 is the test user data count */}
                                            {/* <h4 className="mb-0">{data?.[0]?.count - 60}</h4> */}
                                            <h4 className="mb-0">{!isNaN(data?.[0]?.count) ? data[0].count - 60 : ''}</h4>
                                            <div className='mt-3'>
                                                <div>{UsersCurrentDate}</div>
                                            </div>
                                        </div>
                                        {isLoading ? (
                                            <div className='col-8'>
                                                <ShimmerThumbnail height={120} rounded />
                                            </div>
                                        ) : (
                                            <div className="col-8">
                                                <NavLink to="/ViewUsersLineChart">
                                                    <div>
                                                        <LineChart data={data?.[0]} />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-5">
                                            <p className="mb-1"><strong>Vouchers</strong></p>
                                            <h4 className="mb-0">{data?.[1]?.count}</h4>
                                        </div>
                                        {isLoading ? (
                                            <div className='col-7'>
                                                <ShimmerThumbnail height={120} rounded />
                                            </div>
                                        ) : (
                                            <div className="col-7">
                                                <NavLink to="/ViewVouchersLineChart">
                                                    <div>
                                                        <LineChart data={data?.[1]} />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-5">
                                            <p className="mb-1"><strong>Merchants</strong></p>
                                            <h4 className="mb-0">{data?.[2]?.count}</h4>
                                        </div>
                                        {isLoading ? (
                                            <div className='col-7'>
                                                <ShimmerThumbnail height={120} rounded />
                                            </div>
                                        ) : (
                                            <div className="col-7">
                                                <NavLink to="/ViewMerchantsLineChart">
                                                    <div>
                                                        <LineChart data={data?.[2]} />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-5">
                                            <p className="mb-1"><strong>Purchases</strong></p>
                                            <h4 className="mb-0">{data?.[3]?.count}</h4>
                                        </div>
                                        {isLoading ? (
                                            <div className='col-7 mb-0'>
                                                <ShimmerThumbnail height={120} rounded />
                                            </div>
                                        ) : (
                                            <div className="col-7 mb-0">
                                                <NavLink to="/ViewPurchasesLineChart">
                                                    <div>
                                                        <LineChart data={data?.[3]} />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-5">
                                            <p className="mb-1"><strong>Transactions</strong></p>
                                            <h4 className="mb-0">{data?.[4]?.count}</h4>
                                        </div>
                                        {isLoading ? (
                                            <div className='col-7 mb-0'>
                                                <ShimmerThumbnail height={120} rounded />
                                            </div>
                                        ) : (
                                            <div className="col-7 mb-0">
                                                <NavLink to="/ViewTransactionsLineChart">
                                                    <div>
                                                        <LineChart data={data?.[4]} />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-5">
                                            <p className="mb-1"><strong>Business Categories</strong></p>
                                            <h4 className="mb-0">{data?.[5]?.count}</h4>
                                        </div>
                                        {isLoading ? (
                                            <div className='col-7 mb-0'>
                                                <ShimmerThumbnail height={120} rounded />
                                            </div>
                                        ) : (
                                            <div className="col-7 mb-0">
                                                <NavLink to="/ViewBusinessCategoriesLineChart">
                                                    <div>
                                                        <LineChart data={data?.[5]} />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-5">
                                            <p className="mb-1"><strong>Categories</strong></p>
                                            <h4 className="mb-0">{data?.[6]?.count}</h4>
                                        </div>
                                        {isLoading ? (
                                            <div className='col-7 mb-0'>
                                                <ShimmerThumbnail height={120} rounded />
                                            </div>
                                        ) : (
                                            <div className="col-7 mb-0">
                                                <NavLink to="/ViewCategoriesLineChart">
                                                    <div>
                                                        <LineChart data={data?.[6]} />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <p className="mb-1"><strong>Industries</strong></p>
                                            <h4 className="mb-0">{data?.[7]?.count}</h4>
                                        </div>
                                        {isLoading ? (
                                            <div className='col-8 mb-0'>
                                                <ShimmerThumbnail height={120} rounded />
                                            </div>
                                        ) : (
                                            <div className="col-8 mb-0">
                                                <NavLink to="/ViewIndustriesLineChart">
                                                    <div>
                                                        <LineChart data={data?.[7]} />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-5">
                                            <p className="mb-1"><strong>Countries</strong></p>
                                            <h4 className="mb-0">{data?.[8]?.count}</h4>
                                        </div>
                                        {isLoading ? (
                                            <div className='col-7 mb-0'>
                                                <ShimmerThumbnail height={120} rounded />
                                            </div>
                                        ) : (
                                            <div className="col-7 mb-0">
                                                <NavLink to="/ViewCountriesLineChart">
                                                    <div>
                                                        <LineChart data={data?.[8]} />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <p className="mb-1"><strong>States</strong></p>
                                            <h4 className="mb-0">{data?.[9]?.count}</h4>
                                        </div>
                                        {isLoading ? (
                                            <div className='col-8 mb-0'>
                                                <ShimmerThumbnail height={120} rounded />
                                            </div>
                                        ) : (
                                            <div className="col-8 mb-0">
                                                <NavLink to="/ViewStatesLineChart">
                                                    <div>
                                                        <LineChart data={data?.[9]} />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <p className="mb-1"><strong>Cities</strong></p>
                                            <h4 className="mb-0">{data?.[10]?.count}</h4>
                                        </div>
                                        {isLoading ? (
                                            <div className='col-8 mb-0'>
                                                <ShimmerThumbnail height={120} rounded />
                                            </div>
                                        ) : (
                                            <div className="col-8 mb-0">
                                                <NavLink to="/ViewCitiesLineChart">
                                                    <div>
                                                        <LineChart data={data?.[10]} />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-5">
                                            <p className="mb-1"><strong>Documents</strong></p>
                                            <h4 className="mb-0">{data?.[11]?.count}</h4>
                                        </div>
                                        {isLoading ? (
                                            <div className='col-7 mb-0'>
                                                <ShimmerThumbnail height={120} rounded />
                                            </div>
                                        ) : (
                                            <div className="col-7 mb-0">
                                                <NavLink to="/ViewDocumentsLineChart">
                                                    <div>
                                                        <LineChart data={data?.[11]} />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-4">
                                            <p className="mb-1"><strong>Events</strong></p>
                                            <h4 className="mb-0">{data?.[12]?.count}</h4>
                                        </div>
                                        {isLoading ? (
                                            <div className='col-8 mb-0'>
                                                <ShimmerThumbnail height={120} rounded />
                                            </div>
                                        ) : (
                                            <div className="col-8 mb-0">
                                                <NavLink to="/ViewEventsLineChart">
                                                    <div>
                                                        <LineChart data={data?.[12]} />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-8">
                                            <p className="mb-1"><strong>Today Register User's </strong></p>
                                            <h4 className="mb-3">{todayRegisterUserCount}</h4>
                                            <div>{UsersCurrentDate}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-10">
                                            <p className="mb-1"><strong>Today Register Merchant's </strong></p>
                                            <h4 className="mb-3">{todayRegisterMerchantCount} </h4>
                                            <div>{UsersCurrentDate}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                Analytics Chat
                            </div>
                            <div className="card-body">
                                <Line data={dataChart} options={options} className='p-3' />
                            </div>
                            <div className="card-footer">
                                <div className="row">
                                    <div className="col-md-4">
                                        <p>Red Dataset:</p>
                                    </div>
                                    <div className="col-md-8">
                                        <p>Your description here.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <p>Green Dataset:</p>
                                    </div>
                                    <div className="col-md-8">
                                        <p>Your description here.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <p>Blue Dataset:</p>
                                    </div>
                                    <div className="col-md-8">
                                        <p>Your description here.</p>
                                    </div>
                                </div>
                                {/* Add more items as needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}