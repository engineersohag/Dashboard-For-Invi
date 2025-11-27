import { useState, useEffect, useRef } from "react";
import {
  FiBell,
  FiSettings,
  FiUser,
  FiLogOut,
  FiChevronDown,
  FiPackage
} from "react-icons/fi";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [openNotif, setOpenNotif] = useState(false);
  const [openUser, setOpenUser] = useState(false);

  const notifRef = useRef(null);
  const userRef = useRef(null);

  // 👉 Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setOpenNotif(false);
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setOpenUser(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 mr-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex items-center space-x-6">

      {/* ========== Notification Dropdown ========== */}
      <div className="relative" ref={notifRef}>
        <button
          onClick={() => {
            setOpenNotif(!openNotif);
            setOpenUser(false);
          }}
          className="p-2 rounded-lg hover:bg-gray-100 relative"
        >
          <FiBell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </button>

        {openNotif && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 border z-50 animate-fadeIn">
            <a className="flex items-center px-4 py-2 gap-2 hover:bg-gray-100 cursor-pointer">
              <FiPackage size={16} /> Plugins
            </a>
            <a className="flex items-center px-4 py-2 gap-2 hover:bg-gray-100 cursor-pointer">
              <FiSettings size={16} /> Updates
            </a>
            <a className="flex items-center px-4 py-2 gap-2 hover:bg-gray-100 cursor-pointer">
              <FiUser size={16} /> Tutorials
            </a>
          </div>
        )}
      </div>

      {/* ========== User Profile Dropdown ========== */}
      <div className="relative flex items-center space-x-3 cursor-pointer" ref={userRef}>
        <div
          className="flex items-center space-x-3"
          onClick={() => {
            setOpenUser(!openUser);
            setOpenNotif(false);
          }}
        >
          <div className="text-right">
            <p className="text-sm font-semibold">John Doe</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>

          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
            JD
          </div>

          <FiChevronDown className="text-gray-600" />
        </div>

        {openUser && (
          <div className="absolute right-0 top-14 w-48 bg-white shadow-xl rounded-lg py-2 border z-50 animate-fadeIn">
            <a className="flex items-center px-4 py-2 gap-2 hover:bg-gray-100 cursor-pointer">
              <FiUser size={16} /> Profile Settings
            </a>
            <a className="flex items-center px-4 py-2 gap-2 hover:bg-gray-100 cursor-pointer">
              <FiSettings size={16} /> Account
            </a>
            <a className="flex items-center px-4 py-2 gap-2 hover:bg-gray-100 cursor-pointer text-red-600">
              <FiLogOut size={16} /> Logout
            </a>
          </div>
        )}
      </div>

    </div>


      </div>
    </header>
  );
};

export default Header;
