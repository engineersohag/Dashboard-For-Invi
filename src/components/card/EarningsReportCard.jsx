import React from "react";
import { FaChartLine, FaDollarSign, FaCreditCard } from "react-icons/fa";


export default function EarningsReportCard() {
  const chartData = [
    { day: "Mo", sales: 30, collection: 25 },
    { day: "Tu", sales: 90, collection: 80 },
    { day: "We", sales: 50, collection: 65 },
    { day: "Th", sales: 35, collection: 40 },
    { day: "Fr", sales: 130, collection: 120 },
    { day: "Sa", sales: 60, collection: 70 },
    { day: "Su", sales: 95, collection: 100 },
  ];

  const stats = [
    {
      title: "Net Profit",
      subtitle: "12.4k Sales",
      value: "$1,619",
      trend: "▲ 18.6%",
      icon: <FaChartLine />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Total Income",
      subtitle: "Sales, Affiliation",
      value: "$3,571",
      trend: "▲ 39.6%",
      icon: <FaDollarSign />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "Total Expenses",
      subtitle: "ADVT, Marketing",
      value: "$430",
      trend: "▲ 52.8%",
      icon: <FaCreditCard />,
      iconBg: "bg-gray-100",
      iconColor: "text-gray-500",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Sales VS Collection</h2>
          <p className="text-gray-500 text-sm mt-1">
            Weekly overview of sales and collection
          </p>
        </div>
        <button className="mt-3 md:mt-0 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition">
          View Details
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center flex-col gap-3 bg-gray-50 p-5 rounded-xl text-center"
          >
            <div
              className={`p-4 rounded-lg flex items-center justify-center ${stat.iconBg}`}
            >
              <span className={`text-2xl ${stat.iconColor}`}>{stat.icon}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{stat.value}</h3>
              <p className="text-gray-500 text-sm">{stat.subtitle}</p>
              <p className="text-green-500 text-sm font-medium mt-1">{stat.trend}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="flex justify-between items-end mt-10 gap-2">
        {chartData.map((data, i) => (
          <div key={i} className="flex flex-col items-center gap-1 w-full">
            {/* Sales Bar */}
            <div
              className="w-4 rounded-t-lg bg-purple-600 transition-all duration-300"
              style={{ height: `${data.sales}px` }}
            ></div>
            {/* Collection Bar */}
            <div
              className="w-4 rounded-t-lg bg-green-400 transition-all duration-300 -mt-1"
              style={{ height: `${data.collection}px` }}
            ></div>
            <span className="text-gray-400 text-xs">{data.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
