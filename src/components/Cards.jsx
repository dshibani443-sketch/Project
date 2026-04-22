import React, { useEffect, useState } from "react";
import axios from "axios";
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";

import Expensechart from "./Expensechart";
import Recenttransactions from "./Recenttransactions";
import AIPrediction from "./AIPrediction";
import Categorychart from "./Categorychart";

function Cards() {

  // 🔹 State for dashboard data
  const [data, setData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    totalBalance: 0,
    savings: 0,
  });

  const [loading, setLoading] = useState(true);

  // 🔹 Fetch dashboard data
  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/dashboard");

      // Expected response:
      // { totalIncome, totalExpense, totalBalance, savings }

      setData(res.data);
    } catch (err) {
      console.error("Error fetching dashboard:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Percentage calculation (optional)
  const incomePercent =
    data.totalIncome > 0
      ? ((data.totalIncome - data.totalExpense) / data.totalIncome * 100).toFixed(0)
      : 0;

  const expensePercent =
    data.totalIncome > 0
      ? ((data.totalExpense / data.totalIncome) * 100).toFixed(0)
      : 0;

  // 🔹 Dynamic Cards
  const cards = [
    {
      title: "Total Balance",
      amount: `₹${data.totalBalance}`,
      subtitle: "This Month",
      icon: Wallet,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Income",
      amount: `₹${data.totalIncome}`,
      subtitle: "This Month",
      extra: `+${incomePercent}%`,
      icon: TrendingUp,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Expense",
      amount: `₹${data.totalExpense}`,
      subtitle: "This Month",
      extra: `-${expensePercent}%`,
      icon: TrendingDown,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Savings",
      amount: `₹${data.savings}`,
      subtitle: "This Month",
      extra: `${incomePercent}%`,
      icon: PiggyBank,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  // if (loading) {
  //   return <p className="text-center mt-10">Loading dashboard...</p>;
  // }

  return (
    <div className="p-3">

      {/* 🔹 Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-3 flex items-center justify-between hover:shadow-md transition"
            >
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {card.title}
                </p>

                <h3 className="text-xl font-semibold mt-1 text-gray-800 dark:text-white">
                  {card.amount}
                </h3>

                <div className="flex items-center gap-2 text-sm mt-1">
                  <span className="text-gray-400">{card.subtitle}</span>

                  {card.extra && (
                    <span
                      className={`font-medium ${
                        card.extra.includes("+")
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {card.extra}
                    </span>
                  )}
                </div>
              </div>

              <div className={`p-3 rounded-xl ${card.color}`}>
                <Icon size={20} />
              </div>
            </div>
          );
        })}
      </div>

      {/* 🔹 Charts + AI Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">

        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <Expensechart />
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <Categorychart />
        </div>

        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <Recenttransactions />
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white p-4 rounded-xl shadow">
          <AIPrediction />
        </div>

      </div>
    </div>
  );
}

export default Cards;