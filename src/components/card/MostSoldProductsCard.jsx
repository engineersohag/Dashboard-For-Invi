import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// Sample data – replace with your real product data
const productData = [
  { name: "Anua Peach 70% Niacin Serum 30ml", value: 0.23 },
  { name: "Mary&May Blackberry Complex Glow Washoff Pack 30g", value: 0.02 },
  { name: "Hyaluronic Deep Moisture Essence", value: 0.15 },
  { name: "Green Tea Pore Cleanser Foam", value: 0.12 },
  { name: "Vitamin C Brightening Ampoule", value: 0.18 },
  { name: "Ceramide Barrier Repair Cream", value: 0.14 },
  { name: "Midnight Recovery Sleeping Pack", value: 0.1 },
  { name: "Daily SPF 50+ Shield", value: 0.06 },
];

// Refined blue gradient-like palette
const COLORS = [
  "#004a7c",
  "#005f9e",
  "#007bbf",
  "#1490cf",
  "#35a3dd",
  "#5cb8e8",
  "#003057",
  "#001d36",
];

export default function MostSoldProductsCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSliceEnter = (_, index) => {
    setActiveIndex(index);
  };

  const selectedItem = productData[activeIndex];

  // For rank & dynamic “top product” (based on active slice)
  const sorted = [...productData].sort((a, b) => b.value - a.value);
  const selectedRank =
    sorted.findIndex((p) => p.name === selectedItem.name) + 1;

  return (
    <div
      className="bg-white rounded-2xl shadow-2xl overflow-hidden"
      style={{ width: "530.286px", height: "530.286px" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          Most Sold Products
        </h2>
      </div>

      {/* Summary row */}
      <div className="grid grid-cols-3 gap-4 px-6 py-3 bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
        {/* Top product (now follows active slice) */}
        <div className="text-center">
          <p className="text-[11px] text-gray-500 uppercase tracking-wider">
            Top Product
          </p>
          <div className="mt-1 max-h-10 overflow-y-auto px-1 custom-scrollbar">
            <p className="text-xs font-semibold text-emerald-700 leading-snug">
              {selectedItem.name}
            </p>
          </div>
        </div>

        {/* Active share */}
        <div className="text-center border-x border-gray-200">
          <p className="text-[11px] text-gray-500 uppercase tracking-wider">
            Active Share
          </p>
          <p className="text-xl font-bold text-emerald-600">
            {selectedItem.value.toFixed(2)}%
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5">
            Rank #{selectedRank}
          </p>
        </div>

        {/* Count */}
        <div className="text-center">
          <p className="text-[11px] text-gray-500 uppercase tracking-wider">
            Products
          </p>
          <p className="text-xl font-bold text-blue-600">
            {productData.length}
          </p>
          <p className="text-[11px] text-gray-400 mt-0.5">in this chart</p>
        </div>
      </div>

      {/* Chart Area */}
      <div className="px-4 pb-4" style={{ height: "360px" }}>
        <div className="relative w-full h-full bg-white flex items-center justify-center">
          {/* Soft radial glow */}
          <div className="absolute inset-10 rounded-full bg-gradient-to-br from-sky-200/45 via-emerald-100/40 to-slate-100/60 blur-2xl pointer-events-none" />

          <div className="relative w-[86%] h-[86%]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                {/* FULL ROUND PIE */}
                <Pie
                  data={productData}
                  cx="50%"
                  cy="50%"
                  outerRadius="95%"
                  paddingAngle={3}
                  dataKey="value"
                  stroke="#ffffff"
                  strokeWidth={4} // white separators between slices
                  isAnimationActive={false}
                  onMouseEnter={handleSliceEnter}
                >
                  {productData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      style={{
                        transform:
                          index === activeIndex ? "scale(1.04)" : "scale(1)",
                        transformOrigin: "center",
                        transition: "transform 0.25s ease-out",
                        opacity: index === activeIndex ? 1 : 0.9,
                      }}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Center content: perfectly round overlay */}
            <div className="pointer-events-none absolute inset-[29%] flex flex-col items-center justify-center text-center rounded-full bg-white/96 shadow-lg backdrop-blur-sm border border-gray-200">
              {/* Rank chip – small round pill */}
              <span className="inline-flex items-center justify-center px-3 py-0.5 rounded-full bg-emerald-50 text-[10px] font-semibold text-emerald-700 border border-emerald-100 mb-1">
                Rank #{selectedRank}
              </span>

              {/* Product name */}
              <p className="px-4 text-[11px] font-semibold text-emerald-900 tracking-tight leading-snug max-w-[220px] line-clamp-2">
                {selectedItem.name}
              </p>

              {/* Percentage */}
              <p className="mt-2 text-3xl font-extrabold text-emerald-700 tracking-tight">
                {selectedItem.value.toFixed(2)}%
              </p>

              {/* Subtitle */}
              <p className="mt-1 text-[10px] text-gray-400 uppercase tracking-[0.20em]">
                Share of Total Sales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
