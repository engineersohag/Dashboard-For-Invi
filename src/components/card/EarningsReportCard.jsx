import React, { useState, useEffect } from "react";

export default function EarningsReportCard() {
  const [tooltip, setTooltip] = useState(null);
  const [scale, setScale] = useState(1);
  const [year, setYear] = useState("2025");

  const chartData = [
    { label: "Jan", earn: 280, exp: -110 },
    { label: "Feb", earn: 200, exp: -120 },
    { label: "Mar", earn: 180, exp: -100 },
    { label: "Apr", earn: 190, exp: -130 },
    { label: "May", earn: 240, exp: -90 },
    { label: "Jun", earn: 260, exp: -60 },
    { label: "Jul", earn: 230, exp: -70 },
    { label: "Aug", earn: 250, exp: -80 },
    { label: "Sep", earn: 150, exp: -130 },
  ];

  // ------------------
  // 🎯 Zoom SVG on Scroll
  // ------------------
  const handleScroll = (e) => {
    if (e.deltaY < 0) {
      setScale((s) => Math.min(s + 0.1, 2.5)); // zoom in
    } else {
      setScale((s) => Math.max(s - 0.1, 0.6)); // zoom out
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex w-full relative">

      {/* TOOLTIP */}
      {tooltip && (
        <div
          className="absolute bg-gray-800 text-white px-3 py-1 text-xs rounded-md pointer-events-none"
          style={{
            top: tooltip.y,
            left: tooltip.x,
            transform: "translate(-50%, -120%)",
          }}
        >
          {tooltip.text}
        </div>
      )}

      {/* LEFT CHART AREA */}
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

        {/* Chart */}
        <div className="flex justify-between items-end h-80 pb-4">

          {chartData.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-10">
              
              {/* Bars Container */}
              <div className="relative flex flex-col justify-end h-64">

                {/* Earning Bar */}
                <div
                  className="w-1.5 bg-indigo-500 rounded-full mb-6 cursor-pointer"
                  style={{ height: `${Math.abs(item.earn)}px` }}
                  onMouseEnter={(e) =>
                    setTooltip({
                      text: `Earning: $${item.earn}`,
                      x: e.clientX,
                      y: e.clientY,
                    })
                  }
                  onMouseLeave={() => setTooltip(null)}
                ></div>

                {/* Expense Bar */}
                <div
                  className="w-1.5 bg-orange-400 rounded-full cursor-pointer"
                  style={{ height: `${Math.abs(item.exp)}px` }}
                  onMouseEnter={(e) =>
                    setTooltip({
                      text: `Expense: $${Math.abs(item.exp)}`,
                      x: e.clientX,
                      y: e.clientY,
                    })
                  }
                  onMouseLeave={() => setTooltip(null)}
                ></div>
              </div>

              {/* Label */}
              <span className="text-xs text-gray-500 mt-2">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SUMMARY PANEL */}
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
          <h1 className="text-4xl font-semibold text-gray-800">$25,825</h1>
          <p className="text-gray-500 mt-1">Budget: 56,800</p>
        </div>

        {/* Mini Graph (Zoomable SVG) */}
        <div
          className="mt-10 flex justify-center"
          style={{ transform: `scale(${scale})`, transition: "0.2s" }}
        >
          <svg width="180" height="60">
            <path
              d="M0 40 Q30 20 60 30 T120 35 T180 25"
              fill="none"
              stroke="#6366f1"
              strokeWidth="2"
            />
            <path
              d="M0 45 Q30 35 60 40 T120 50 T180 40"
              fill="none"
              stroke="#d4d4d4"
              strokeWidth="2"
              strokeDasharray="4"
            />
          </svg>
        </div>

        {/* Button */}
        <button className="mt-10 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-medium shadow">
          Increase Button
        </button>
      </div>
    </div>
  );
}
