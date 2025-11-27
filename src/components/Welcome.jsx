import React from "react";

// ---- Card 1: Sales Card ----
export const SalesCard = () => {
  return (
    <div className="w-full bg-white rounded-2xl shadow p-6 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">Congratulations John! 🎉</h2>
        <p className="text-gray-500">Best seller of the month</p>
        <p className="text-4xl font-bold mt-3">$48.9k</p>
        <button className="mt-4 bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700">
          View Sales
        </button>
      </div>
      <img src="/character.png" alt="User" className="w-32" />
    </div>
  );
};
