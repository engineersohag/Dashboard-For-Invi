import React, { useState } from "react";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip as ReTooltip,
} from "recharts";

export default function EarningsReportCard() {
  const [tooltip, setTooltip] = useState(null);
  const [year, setYear] = useState("2025");

  const chartData = [
    { label: "Jan", earn: 280, exp: 110 },
    { label: "Feb", earn: 200, exp: 120 },
    { label: "Mar", earn: 180, exp: 100 },
    { label: "Apr", earn: 190, exp: 130 },
    { label: "May", earn: 240, exp: 90 },
    { label: "Jun", earn: 260, exp: 60 },
    { label: "Jul", earn: 230, exp: 70 },
    { label: "Aug", earn: 250, exp: 80 },
    { label: "Sep", earn: 150, exp: 130 },
  ];

  const miniGraphData = [
    { number: 40 },
    { number: 30 },
    { number: 35 },
    { number: 25 },
    { number: 20 },
    { number: 15 },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex w-full relative">

      {/* ==== Tooltip (Bars Hover) ==== */}
      {tooltip && (
        <div
          className="absolute bg-gray-800 text-white px-3 py-1 text-xs rounded-md pointer-events-none"
          style={{
            top: tooltip.y - 30,
            left: tooltip.x,
            transform: "translateX(-50%)",
          }}
        >
          {tooltip.text}
        </div>
      )}

      {/* ==== LEFT CHART AREA ==== */}
      <div className="w-2/3 pr-8 border-r relative">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Sells VS Collection</h2>

          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
              <span className="text-gray-600 text-sm">Sells</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-400"></span>
              <span className="text-gray-600 text-sm">Collection</span>
            </div>
          </div>
        </div>

        {/* ==== Custom Bar Chart ==== */}
        <div className="flex justify-between items-end h-80 pb-4">
          {chartData.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-14">
              
              <div className="relative flex flex-col justify-end h-64">

                {/* Sell Bar */}
                <div
                  className="w-3 bg-indigo-500 rounded-md mb-6 cursor-pointer"
                  style={{ height: `${item.earn}px` }}
                  onMouseEnter={(e) =>
                    setTooltip({
                      text: `Sells: $${item.earn}`,
                      x: e.clientX,
                      y: e.clientY,
                    })
                  }
                  onMouseLeave={() => setTooltip(null)}
                ></div>

                {/* Collection Bar */}
                <div
                  className="w-3 bg-orange-400 rounded-md cursor-pointer"
                  style={{ height: `${item.exp}px` }}
                  onMouseEnter={(e) =>
                    setTooltip({
                      text: `Collection: $${item.exp}`,
                      x: e.clientX,
                      y: e.clientY,
                    })
                  }
                  onMouseLeave={() => setTooltip(null)}
                ></div>
              </div>

              <span className="text-xs text-gray-500 mt-2">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ==== RIGHT PANEL ==== */}
      <div className="w-1/3 pl-8 flex flex-col">

        {/* Year Dropdown */}
        <div className="flex justify-end">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium"
          >
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
        </div>

        {/* Amount */}
        <div className="mt-8">
          <h1 className="text-4xl font-semibold text-gray-800">25,825 (৳)</h1>
          <p className="text-gray-500 mt-1">Budget: 56,800</p>
        </div>

        {/* ==== Mini Graph (NO ZOOM) ==== */}
        <div className="mt-10 flex justify-center">
          <div style={{ width: 200, height: 60 }}>
            <ResponsiveContainer>
              <LineChart data={miniGraphData}>
                <Line
                  type="monotone"
                  dataKey="number"
                  stroke="#6366f1"
                  strokeWidth={2}
                />
                <ReTooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Button */}
        <button className="mt-10 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-medium shadow">
          Increase Button
        </button>
      </div>
    </div>
  );
}
