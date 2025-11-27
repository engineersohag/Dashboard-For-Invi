// import { useState } from "react";
// import Welcome from "./components/Welcome";
// import Ecommerce from "./pages/Ecommerce";

// export default function App() {
//   return (
//     <>
//       <h1>sfh</h1>
//       <Welcome></Welcome>
//     </>
//   );
// }

// App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Email from "./pages/Email";
import Ecommerce from "./pages/Ecommerce";

function App() {
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "email":
        return <Email />;
      case "ecommerce":
        return <Ecommerce />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isOpen={sidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1 overflow-y-auto p-6">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;
