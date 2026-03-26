import React from "react";
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";

import Expensechart from "./Expensechart";
import Recenttransactions from "./Recenttransactions";
import AIPrediction from "./AIPrediction";
import Categorychart from "./Categorychart";

function Cards() {

  // ✅ FIX: Define cards array
  const cards = [
    {
      title: "Total Balance",
      amount: "₹0.00",
      subtitle: "This Month",
      icon: Wallet,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Income",
      amount: "₹0.00",
      subtitle: "This Month",
      extra: "00%",
      icon: TrendingUp,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Expense",
      amount: "₹0.00",
      subtitle: "This Month",
      extra: "00%",
      icon: TrendingDown,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Savings",
      amount: "₹0.00",
      subtitle: "This Month",
      extra: "00%",
      icon: PiggyBank,
      color: "bg-purple-100 text-purple-600",
    },
  ];

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

        {/* Monthly Expenses */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <Expensechart />
        </div>

        {/* Category */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <Categorychart />
        </div>

        {/* Transactions */}
        <div className="lg:col-span-2 bg-white  dark:bg-gray-800 p-4 rounded-xl shadow">
          <Recenttransactions />
        </div>

        {/* AI Prediction */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white p-4 rounded-xl shadow">
          <AIPrediction />
        </div>

      </div>
    </div>
  );
}

export default Cards;