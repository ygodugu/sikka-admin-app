
import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstance";

// const fetchCounts = () => axiosInstance.get('/dashboard/count').then(res => res.data)

export const Dashboard = () => {
    // const {
    //     isLoading,
    //     data,
    // } = useQuery({
    //     queryKey: ['dashboard'],
    //     // queryFn: () => fetchCounts(),
    // })

    return (
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
                                <h4 className="mb-0">userCount</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <div className="card eq-card mb-4">
                            <div className="card-body">
                                <p className="mb-1"><strong>Vouchers</strong></p>
                                <h4 className="mb-0">VouchersCount</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}