// components/Sidebar.jsx
import React from "react";

const Sidebar = ({ activePage, setActivePage, isOpen }) => {
  const menuItems = [
    {
      category: "DASHBOARDS",
      items: [
        { id: "dashboard", name: "Dashboard", icon: "📊", completed: false },
      ],
    },
    {
      category: "APPS & PAGES",
      items: [
        { id: "email", name: "Email", icon: "📧", completed: true },
        { id: "chat", name: "Chat", icon: "💬", completed: false },
        { id: "calendar", name: "Calendar", icon: "📅", completed: false },
        { id: "kanban", name: "Kanban", icon: "📋", completed: false },
        { id: "ecommerce", name: "eCommerce", icon: "🛒", completed: false },
      ],
    },
    {
      category: "ECOMMERCE",
      items: [
        { id: "products", name: "Products", icon: "📦", completed: false },
        { id: "orders", name: "Orders", icon: "📝", completed: false },
        { id: "customers", name: "Customers", icon: "👥", completed: false },
        { id: "reviews", name: "Manage Reviews", icon: "⭐", completed: false },
      ],
    },
  ];

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gray-900 text-white transition-all duration-300 flex flex-col`}
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        {isOpen ? (
          <h1 className="text-xl font-bold text-white">Vuexy</h1>
        ) : (
          <div className="text-center text-xl">V</div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        {menuItems.map((section, index) => (
          <div key={index} className="mb-6">
            {isOpen && (
              <h3 className="text-xs uppercase text-gray-400 font-semibold mb-3">
                {section.category}
              </h3>
            )}

            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActivePage(item.id)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg transition-colors ${
                      activePage === item.id
                        ? "bg-purple-600 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <span className="text-lg mr-3">{item.icon}</span>
                    {isOpen && (
                      <>
                        <span className="flex-1 text-left">{item.name}</span>
                        {item.completed && (
                          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        )}
                      </>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
