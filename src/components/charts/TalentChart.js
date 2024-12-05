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

const TalentChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4 py-5 flex gap-2 border border-gray-300">
      {/* left section: displays the talent request details */}
      <div className="w-full flex justify-start gap-5 flex-col">
        {/* title for the talent request section */}
        <h1 className="font-medium text-base lg:text-lg text-vaistumDarkBlue">
          Talent Request
        </h1>
        {/* total number of talent requests */}
        <h2 className="font-medium text-[42px] lg:text-5xl text-vaistumDarkBlue">
          16
        </h2>

        {/* gender distribution of the talent requests */}
        <div className="flex flex-col justify-start gap-2">
          <span className="text-xs text-[#686868]">6 Men</span>
          <span className="text-xs text-[#686868]">10 Women</span>
        </div>
      </div>

      {/* right section: displays the line chart with talent request data */}
      <div className="relative w-full h-36">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={300} height={100} data={data} style={{ transform: 'rotate(-20deg)' }}>
            {/* add a shadow filter to the line */}
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
            {/* line representing the data */}
            <Line
              type="natural"
              dataKey="pv"
              stroke="#FF5151"
              strokeWidth={2}
              dot={false}
              filter="url(#shadow)"
            />
          </LineChart>
        </ResponsiveContainer>

        {/* percentage increase indicator */}
        <div className="flex flex-col gap-2 items-center justify-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4">
          <span className="text-[10px] text-vaistumOrange">+5%</span>
          <Image src="/arrow-up.svg" alt="" height={5} width={5} />
        </div>

        {/* past month percentage change */}
        <div className="flex justify-end -m-4 mr-2">
          <span className="text-xs text-[#303030] bg-[#FFEFE7] px-2 py-1 rounded-md">+5% Past Month</span>
        </div>
      </div>
    </div>
  );
};

export default TalentChart;