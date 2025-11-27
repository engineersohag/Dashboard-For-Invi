import React from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow">
      <button
        className="md:hidden p-2 rounded-md hover:bg-gray-200"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <FaBars />
      </button>

      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaUserCircle className="text-3xl text-gray-600" />
      </div>
    </header>
  );
}
