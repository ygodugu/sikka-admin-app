import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ count }) => {
    const chartContainer = useRef(null);
    const chartRef = useRef(null);

    const hasDecreased = count < (0);

    const dailyCounts = hasDecreased
        ? Array(7)
            .fill(0)
            .map((_, index) => (7 - index) * (count / 7))
        : Array(7)
            .fill(0)
            .map((_, index) => (index + 1) * (count / 7));

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const ctx = chartContainer.current.getContext('2d');

            if (chartRef.current) {
                chartRef.current.destroy();
            }

            chartRef.current = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [
                        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
                    ],
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
    }, [count]);

    return (
        <div>
            <canvas ref={chartContainer} width="100" height="40"></canvas>
        </div>
    );
};

export default LineChart;
