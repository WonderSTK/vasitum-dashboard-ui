"use client";
import Image from "next/image";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    pv: 3200,
    uv: 2780,
    amt: 2000,
  },
  {
    name: "Page B",
    pv: 3800,
    uv: 2890,
    amt: 2181,
  },
  {
    name: "Page C",
    pv: 3500,
    uv: 2390,
    amt: 2500,
  },
  {
    name: "Page D",
    pv: 4200,
    uv: 3490,
    amt: 2100,
  },
  {
    name: "Page E",
    pv: 4100,
    uv: 3890,
    amt: 2100,
  },
  {
    name: "Page F",
    pv: 4300,
    uv: 3990,
    amt: 2100,
  }
];

const EmployeeChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 py-5 flex gap-2 border border-gray-300">
      {/* LEFT SECTION: Displays the total number of employees and their gender distribution */}
      <div className="w-full flex justify-start gap-5 flex-col">
        {/* Title for the total employees section */}
        <h1 className="font-medium text-base lg:text-lg text-vaistumDarkBlue">
          Total Employees
        </h1>
        {/* Total number of employees */}
        <h2 className="font-medium text-[42px] lg:text-5xl text-vaistumDarkBlue">
          242
        </h2>

        {/* Gender distribution */}
        <div className="flex flex-col justify-start gap-2">
          <span className="text-xs text-[#686868]">120 Men</span>
          <span className="text-xs text-[#686868]">96 Women</span>
        </div>
      </div>

      {/* RIGHT SECTION: Displays the line chart with employee data */}
      <div className="w-full relative h-36">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={data} style={{ transform: 'rotate(-20deg)' }}>
            {/* Add a shadow filter to the line */}
            <defs>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="3"
                  floodColor="#FF5151"
                />
              </filter>
            </defs>
            {/* Line representing the data */}
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#FF5151"
              strokeWidth={2}
              dot={false}
              filter="url(#shadow)"
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Percentage increase indicator */}
        <div className="flex flex-col gap-2 items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4">
          <span className="text-[10px] text-vaistumOrange">+2%</span>
          <Image src="/arrow-up.svg" alt="" height={5} width={5} />
        </div>

        {/* Past month percentage change */}
        <div className="flex justify-end -m-4 mr-2">
          <span className="text-xs text-[#303030] bg-[#FFEFE7] px-2 py-1 rounded-md">+2% Past month</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeChart;