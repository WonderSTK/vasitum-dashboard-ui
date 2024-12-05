import Image from "next/image";
import React from "react";

const UpcomingSchedule = () => {
  const scheduleData = [
    {
      status: "Priority",
      items: [
        {
          title: "Review candidate applications",
          time: "Today - 11.30 AM",
        },
      ],
    },
    {
      status: "Other",
      items: [
        {
          title: "Interview with candidates",
          time: "Today - 10.30 AM",
        },
        {
          title: "Short meeting with product designer from IT Department",
          time: "Today - 09.30 AM",
        },
        {
          title: "Team lunch",
          time: "Today - 12.30 PM",
        },
        {
          title: "Client call",
          time: "Today - 02.00 PM",
        },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-xl w-full max-h-[500px] flex flex-col content-between gap-2 border border-gray-300 overflow-y-auto">
      <div className="p-4 flex flex-col gap-2 relative">
        {/* HEADING */}
        <div className="flex gap-3 justify-between mb-4">
          <h1 className="font-medium text-base lg:text-lg text-vaistumDarkBlue">
            Upcoming Schedule
          </h1>

          <div className="flex justify-center gap-2 items-center p-2 border rounded-md">
            <span className="text-xs text-[#686868]">Today, 13 Sep 2021</span>
            <Image src="/arrow-down.svg" alt="" width={14} height={14} />
          </div>
        </div>

        {/* LIST */}
        {scheduleData?.map((i) => (
          <div className="flex flex-col gap-2" key={i.status}>
            <span className="text-xs text-[#686868]">{i.status}</span>
            {i.items.map((item) => (
              <div
                className="w-full bg-[#FAFAFA] flex justify-between items-center rounded-md p-4 border border-[#E0E0E0]"
                key={item.title}
              >
                <div className="flex flex-col gap-1 w-full">
                  <span className="text-base text-[#303030]">{item.title}</span>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-[#686868]">
                      {item.time}
                    </span>
                    
                  </div>
                </div>

                <div>
                  <Image src="/more.svg" alt="" width={20} height={20} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="w-full bg-white border-t border-t-[#E0E0E0] flex justify-center items-center p-2 sticky bottom-0">
        <span className="text-small font-medium text-vaistumOrange">
          Create a Schedule
        </span>
      </div>
    </div>
  );
};

export default UpcomingSchedule;