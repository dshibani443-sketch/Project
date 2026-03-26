import React from "react";
import { Line } from "react-chartjs-2";

// ✅ REQUIRED imports
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler,
  scales
} from "chart.js";

// ✅ REGISTER ONCE
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Filler
);

const ExpenseChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Expenses",
        data: [12000, 15000, 18000, 22000, 28000, 32000],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        ticks: {
          color: "#000000",
          font: {
            size: 14,
            weight: "bold"
          }
        }
      }
    }
  };

  return (
    <div className="h-70 mb-1">
      <h2 className="text-3xl font-bold mb-2 text-gray-800 dark:text-white">
        Monthly Expenses
      </h2>


      <Line className="" key="expense-chart" data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;