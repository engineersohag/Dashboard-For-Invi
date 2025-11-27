// pages/Dashboard.jsx
import React from "react";
import StatCard from "../components/StatCard";
import ProgressCard from "../components/ProgressCard";

const Dashboard = () => {
  const stats = [
    {
      title: "Sales",
      value: "4,679",
      change: "+28%",
      icon: "💰",
      color: "green",
    },
    {
      title: "Customers",
      value: "2,123",
      change: "+18%",
      icon: "👥",
      color: "blue",
    },
    {
      title: "Products",
      value: "1,245",
      change: "+12%",
      icon: "📦",
      color: "orange",
    },
    {
      title: "Revenue",
      value: "$12,345",
      change: "+32%",
      icon: "💳",
      color: "purple",
    },
  ];

  const progressItems = [
    { title: "Email Completion", progress: 100, color: "green" },
    { title: "Dashboard Design", progress: 75, color: "blue" },
    { title: "Chat Implementation", progress: 45, color: "yellow" },
    { title: "Calendar Setup", progress: 30, color: "orange" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"></div>
    </div>
  );
};

export default Dashboard;
