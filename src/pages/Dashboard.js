import React, { useState, useRef, useEffect } from 'react'
import "chart.js/auto";
import { Line } from 'react-chartjs-2';
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstance";
import LineChart from '../components/LineChart';


const fetchUsersCounts = () => axiosInstance.get(`/users`).then(res => res.data)

const fetchVouchersCounts = () => axiosInstance.get(`/vouchers`).then(res => res.data)

const fetchMerchantsCounts = () => axiosInstance.get(`/merchants`).then(res => res.data)

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
                data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
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
                                            <h4 className="mb-0">{data?.[0]?.count}</h4>
                                        </div>
                                        <div className="col-8">
                                            <LineChart count={data?.[0]?.count} />
                                        </div>
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
                                        <div className="col-7">
                                            <LineChart count={data?.[1]?.count} />
                                        </div>
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
                                        <div className="col-7">
                                            <LineChart count={data?.[2]?.count} />
                                        </div>
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
                                        <div className="col-7 mb-0">
                                            <LineChart count={data?.[3]?.count} />
                                        </div>
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
                                        <div className="col-7 mb-0">
                                            <LineChart count={data?.[4]?.count} />
                                        </div>
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
                                        <div className="col-7 mb-0">
                                            <LineChart count={data?.[5]?.count} />
                                        </div>
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
                                        <div className="col-7 mb-0">
                                            <LineChart count={data?.[6]?.count} />
                                        </div>
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
                                        <div className="col-8 mb-0">
                                            <LineChart count={data?.[7]?.count} />
                                        </div>
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
                                        <div className="col-7 mb-0">
                                            <LineChart count={data?.[8]?.count} />
                                        </div>
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
                                        <div className="col-8 mb-0">
                                            <LineChart count={data?.[9]?.count} />
                                        </div>
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
                                        <div className="col-8 mb-0">
                                            <LineChart count={data?.[10]?.count} />
                                        </div>
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
                                        <div className="col-7 mb-0">
                                            <LineChart count={data?.[11]?.count} />
                                        </div>
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
                                        <div className="col-8 mb-0">
                                            <LineChart count={data?.[12]?.count} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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