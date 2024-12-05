import  Announcements from "@/components/Announcements";
import EmployeeChart from "@/components/charts/EmployeeChart";
import TalentChart from "@/components/charts/TalentChart";
import RecentActivity from "@/components/RecentActivity";
import UpcomingSchedule from "@/components/UpcomingSchedule";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="p-4 lg:pl-10 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full md:w-full lg:w-2/3 flex flex-col gap-8">
        <span className="font-medium text-xl lg:text-2xl text-vaistumDarkBlue ">
          Dashboard
        </span>

        {/* USER CARDS*/}
        <div className="flex gap-4 justify-between flex-wrap">
          {/* USER CARD 1 */}
          <div className="rounded-xl bg-vaistumPaleOrange p-4 flex-1 min-w-[200px]">
            <h2 className="text-base font-medium text-vaistumDarkBlue">
              Available Position
            </h2>
            <h1 className="text-3xl font-medium my-4">24</h1>
            <span className="text-sm text-vaistumOrange">4 Urgently needed</span>
          </div>

           {/* USER CARD 2 */}
           <div className="rounded-xl bg-vaistumSkyLight p-4 flex-1 min-w-[200px]">
            <h2 className="text-base font-medium text-vaistumDarkBlue">
              Job Open
            </h2>
            <h1 className="text-3xl font-medium my-4">10</h1>
            <span className="text-sm text-vaistumBlue">4 Active hiring</span>
          </div>

           {/* USER CARD 3 */}
           <div className="rounded-xl bg-vaistumPalePink p-4 flex-1 min-w-[200px]">
            <h2 className="text-base font-medium text-vaistumDarkBlue">
              New Employees
            </h2>
            <h1 className="text-3xl font-medium my-4">24</h1>
            <span className="text-sm text-vaistumPink">4 Department</span>
          </div>
        </div>

         {/* MIDDLE CHARTS */}
         <div className="flex gap-4 flex-col lg:flex-row">
          {/* Employee CHART */}
          <div className="w-full lg:w-1/2 h-[200px]">
            <EmployeeChart />
          </div>
          {/* Talent CHART */}
          <div className="w-full lg:w-1/2 h-[200px]">
            <TalentChart />
          </div>
        </div>

        {/* ANNOUNCEMENTS */}
        <div className="w-full lg:h-96 h-full">
            <Announcements/>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-full lg:w-1/3 flex flex-col gap-8 pt-16">
        {/* RECENT ACTIVITY */}
        <div className="w-full h-64">
        <RecentActivity />
        </div>

        {/* UPCOMING SCHEDULE */}
        <div className="w-full h-[500px]">
            <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
