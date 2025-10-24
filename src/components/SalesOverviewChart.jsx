import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Apr", sales: 100, revenue: 60 },
  { month: "May", sales: 200, revenue: 150 },
  { month: "Jun", sales: 150, revenue: 100 },
  { month: "Jul", sales: 300, revenue: 200 },
  { month: "Aug", sales: 400, revenue: 250 },
  { month: "Sep", sales: 250, revenue: 220 },
  { month: "Oct", sales: 350, revenue: 280 },
  { month: "Nov", sales: 500, revenue: 350 },
];

const SalesOverviewChart = () => (
  <div className="bg-white shadow rounded-2xl p-4">
    <h2 className="font-semibold mb-4">Sales Overview</h2>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#8884d8"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#82ca9d"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default SalesOverviewChart;
