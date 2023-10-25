
import React, { useState } from 'react'
import "chart.js/auto";
import { Line } from 'react-chartjs-2';
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstance";

const fetchUsersCounts = () => axiosInstance.get(`/users`).then(res => res.data)

const fetchVouchersCounts = () => axiosInstance.get(`/vouchers`).then(res => res.data)

const fetchMerchantsCounts = () => axiosInstance.get(`/merchants`).then(res => res.data)


export const Dashboard = () => {
    const {
        isLoading,
        data,
    } = useQuery({
        queryKey: ['users', 'vouchers', 'merchants'],
        queryFn: async () => {
            const usersData = await fetchUsersCounts();
            const vouchersData = await fetchVouchersCounts();
            const merchantsData = await fetchMerchantsCounts();
            return [usersData, vouchersData, merchantsData];
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
                display: false,
            },
        },
        responsive: true
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
                                    <p className="mb-1"><strong>Users</strong></p>
                                    <h4 className="mb-0">{data?.[0]?.count}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <p className="mb-1"><strong>Vouchers</strong></p>
                                    <h4 className="mb-0">{data?.[1]?.count}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card eq-card mb-4">
                                <div className="card-body">
                                    <p className="mb-1"><strong>Merchants</strong></p>
                                    <h4 className="mb-0">{data?.[2]?.count}</h4>
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