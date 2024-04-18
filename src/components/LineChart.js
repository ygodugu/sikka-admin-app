import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
    const chartContainer = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartContainer && chartContainer.current && data) {
            const ctx = chartContainer.current.getContext('2d');
            const today = new Date();
            const dates = [];
            const dailyCounts = [];

            // Generate labels and counts for the last 5 days
            for (let i = 4; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);
                const formattedDate = date.toLocaleDateString('en-US', { weekday: 'long' });
                dates.push(formattedDate);

                // Filter data for the current date
                const filteredData = data.data.filter(item => {
                    const createdAtDate = new Date(item.createdAt.split('T')[0]);
                    return createdAtDate.toDateString() === date.toDateString();
                });

                dailyCounts.push(filteredData.length);
            }

            if (chartRef.current) {
                chartRef.current.destroy();
            }

            chartRef.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [
                        {
                            label: 'Line Chart',
                            data: dailyCounts,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderWidth: 1,
                            lineTension: 0.4,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    scales: {
                        x: {
                            display: false,
                        },
                        y: {
                            display: false,
                        },
                    },
                    animations: {
                        radius: {
                            duration: 400,
                            easing: 'linear',
                            loop: (context) => context.active
                        }
                    },
                    hoverRadius: 12,
                    hoverBackgroundColor: '#70300D',
                    interaction: {
                        mode: 'nearest',
                        intersect: false,
                        axis: 'x'
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                let label = context.dataset.label || '';

                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y.toFixed(2);
                                }

                                return label;
                            },
                        },
                    },
                },

            });
        }
    }, [data]);


    return (
        <div>
            <canvas ref={chartContainer} width="100" height="40"></canvas>
        </div>
    );
};

export default LineChart;
