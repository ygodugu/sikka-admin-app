import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ count }) => {
    const chartContainer = useRef(null);
    const chartRef = useRef(null);

    // const dailyCount = count / 7;

    // const dailyCounts = Array(7).fill(dailyCount);
    
    // const dailyCounts = Array(7)
    // .fill(0)
    // .map((_, index) => (index + 1) * (count / 7));

     // Check if count has decreased from the previous count
  const hasDecreased = count < (0);

  // Calculate daily count values based on whether it's decreasing or not
  const dailyCounts = hasDecreased
    ? Array(7)
        .fill(0)
        .map((_, index) => (7 - index) * (count / 7)) // Decreasing trend
    : Array(7)
        .fill(0)
        .map((_, index) => (index + 1) * (count / 7)); // Increasing or stable trend

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
