import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import WelcomeCard from "./components/card/WelcomeCard";
import Statistics from "./components/card/StatisticsCard";
import ProfitCard from "./components/card/ProfitCard";
import ExpenseCard from "./components/card/ExpenseCard";
import EarningsReportCard from "./components/card/EarningsReportCard";
import GeneratedLeadsCard from "./components/card/GeneratedLeadsCard";
import TransactionsCard from "./components/card/TransactionsCard";
import "./App.css";


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-20"} bg-white shadow-lg duration-300`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content Area */}
        <main className="p-6 flex-1 overflow-y-auto space-y-6">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <WelcomeCard />
            <Statistics />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
           
            <ProfitCard />
            <ExpenseCard />
            <GeneratedLeadsCard />
            <EarningsReportCard />
            <TransactionsCard />
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;
