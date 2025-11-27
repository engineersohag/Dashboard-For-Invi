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
import ClientPaymentsCard from "./components/card/ClientPaymentsCard";
import RecentPaymentsCard from "./components/card/RecentPaymentsCard";
import MonthlySalesCard from "./components/card/MonthlySalesCard";
import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white shadow-lg duration-300`}
      >
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content Area */}
        <main className="p-6 flex-1 overflow-y-auto space-y-6">
          {/* Cards Grid */}
          <div className="flex gap-6">
            <div className="flex-[0_0_40%]">
              <WelcomeCard />
            </div>
            <div className="flex-[0_0_58%]">
              <Statistics />
            </div>
          </div>

          <div>
            <EarningsReportCard />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <ProfitCard />
            <ExpenseCard />
            <GeneratedLeadsCard />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            <TransactionsCard />
            <MonthlySalesCard/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            <ClientPaymentsCard />
            <RecentPaymentsCard />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
