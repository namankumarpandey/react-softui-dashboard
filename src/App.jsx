import React from "react";
import StatCard from "./components/StatCard";
import ActiveUsersChart from "./components/ActiveUsersChart";
import SalesOverviewChart from "./components/SalesOverviewChart";
import stats from "./data/stats.json";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard title="Today's Money" value={stats.todayMoney} change="+55%" icon="💰" />
        <StatCard title="Today's Users" value={stats.todayUsers} change="+3%" icon="👤" />
        <StatCard title="New Clients" value={stats.newClients} change="-2%" icon="🧑‍💼" />
        <StatCard title="Sales" value={stats.sales} change="+5%" icon="🛒" />
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-2">Soft UI Dashboard</h2>
          <p className="text-gray-500 text-center">
            From colors, cards, typography to complex elements, find full documentation.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Work with the rockets 🚀</h2>
          <p>Wealth creation is an evolutionary positive-sum game. Take the opportunity first!</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ActiveUsersChart />
        <SalesOverviewChart />
      </div>
    </div>
  );
};

export default App;
