import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { NavLink } from "react-router-dom";
import { axiosInstance } from "../../axiosInstance";
import { Line } from 'react-chartjs-2';

const fetchIndustries = () => {

    return axiosInstance
        .get(`/industries?pageIndex=0&pageSize=200&sortBy=createdAt`)
        .then((res) => res.data);
};
export const ViewIndustriesLineChart = () => {
    const { isLoading, data, refetch } = useQuery({
        queryKey: ["industries"],
        queryFn: () => fetchIndustries(),
        keepPreviousData: true,
    });

    // Function to generate labels dynamically based on date difference from today
    const generateLabels = (numDays) => {
        const labels = [];
        const today = new Date();
        for (let i = numDays - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const formattedDate = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }); // Format date as 'Apr 18'
            labels.push(`Day ${numDays - i}: ${formattedDate}`);
        }
        return labels;
    };

    const [numDays, setNumDays] = useState(10); // State to manage the number of days

    // Function to filter data for the selected number of days
    const filterData = (userData, numDays) => {
        if (!userData || !userData.data) return [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const startDate = new Date(today);
        startDate.setDate(startDate.getDate() - (numDays - 1)); // Calculate start date based on the selected number of days

        const filteredData = Array.from({ length: numDays }, (_, index) => {
            const currentDate = new Date(startDate);
            currentDate.setDate(currentDate.getDate() + index); // Add index to start date to get the current date

            const datasetsOnDay = userData.data.filter(item => {
                const createdAtDate = new Date(item.createdAt.split('T')[0]);
                return createdAtDate.toDateString() === currentDate.toDateString();
            });

            return datasetsOnDay.length;
        });

        return filteredData;
    };

    const filteredData = isLoading || !data ? [] : filterData(data, numDays); // Filter data based on the selected number of days
    const xValues = generateLabels(numDays); // Generate labels based on the selected number of days
    const yValues = filteredData;

    const dataChart = {
        labels: xValues,
        datasets: [
            {
                label: 'Industries',
                data: yValues,
                backgroundColor: 'rgba(5, 225, 255, 0.5)',
                borderColor: '#05e1ff',
                pointRadius: 5, // Adjust point radius
                tension: 0.4, // Adjust line tension for smoothness
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
                text: 'Industries createdAt'
            },
        },
        elements: {
            point: {
                radius: 0, // Hide points
            },
        },
        hover: {
            mode: 'nearest',
            intersect: false,
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
    };


    // Function to handle dropdown change
    const handleDropdownChange = (e) => {
        const selectedDays = parseInt(e.target.value);
        setNumDays(selectedDays);
    };
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="row heading-add">
                        <aside className="col-sm-10 mt-3 mb-3">
                            <NavLink to={`/Dashboard`}>
                                <i className="fe fe-arrow-left-circle fe-24"></i>
                            </NavLink>
                        </aside>
                        <aside className="col-sm-9">
                            <h2 className="mb-0 page-title">View Industries detalies</h2>
                        </aside>
                        <aside className="col-sm-3 mt-2  add-sec">
                            <select className="form-control" style={{ background: "white" }} aria-label="select" onChange={handleDropdownChange} value={numDays}>
                                <option value="10">Choose a Type</option>
                                <option value="20">Last 20 day's</option>
                                <option value="30">Last 30 day's</option>
                                <option value="45">Last 45 day's</option>
                                <option value="60">Last 60 day's</option>
                                <option value="90">Last 90 day's</option>
                            </select>
                        </aside>
                    </div>
                    <div className="row my-2">
                        <div className="col-md-12">
                            <div className="card shadow">
                                <div className="card-body">
                                    {/* <h5 className="card-title">Cikka Balance Details</h5> */}
                                    <div className="row">
                                        <Line data={dataChart} options={options} className='p-3' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
