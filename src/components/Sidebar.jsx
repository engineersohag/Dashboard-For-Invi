import React from "react";
import { FaTachometerAlt, FaEnvelope, FaShoppingCart, FaBars } from "react-icons/fa";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Email", icon: <FaEnvelope /> },
    { name: "E-commerce", icon: <FaShoppingCart /> },
  ];

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b">
        <h1 className={`text-xl font-bold duration-300 ${sidebarOpen ? "opacity-100" : "opacity-0"}`}>
          Admin
        </h1>
        <button
          className="p-2 rounded-md hover:bg-gray-200"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars />
        </button>
      </div>

      <nav className="flex-1 mt-4">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center p-4 hover:bg-gray-200 rounded-lg transition-colors"
          >
            <span className="text-lg">{item.icon}</span>
            {sidebarOpen && <span className="ml-3">{item.name}</span>}
          </a>
        ))}
      </nav>
    </div>
  );
}
