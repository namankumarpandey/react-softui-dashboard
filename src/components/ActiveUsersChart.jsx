import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", users: 200 },
  { name: "Tue", users: 300 },
  { name: "Wed", users: 150 },
  { name: "Thu", users: 400 },
  { name: "Fri", users: 250 },
  { name: "Sat", users: 350 },
  { name: "Sun", users: 300 }
];

const ActiveUsersChart = () => (
  <div className="bg-white shadow rounded-2xl p-4">
    <h2 className="font-semibold mb-4">Active Users</h2>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="users" fill="#8884d8" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ActiveUsersChart;
