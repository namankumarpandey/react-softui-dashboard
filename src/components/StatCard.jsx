import React from "react";

const StatCard = ({ title, value, change, icon }) => {
  const isPositive = change.includes("+");
  return (
    <div className="bg-white shadow rounded-2xl p-4 flex justify-between items-center">
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <p className="text-2xl font-semibold">${value}</p>
        <span
          className={`text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>
      <div className="bg-pink-500 p-3 rounded-xl text-white text-lg">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
