import Image from "next/image";

const menuItems = [
  {
    title: "MAIN MENU",
    items: [
      {
        icon: "/dashboard.svg",
        label: "Dashboard",
        href: "/dashboard",
      },
      {
        icon: "/recruitment.svg",
        label: "Recruitment",
        href: "/dashboard",
      },
      {
        icon: "/schedule.svg",
        label: "Schedule",
        href: "/dashboard",
      },
      {
        icon: "/employee.svg",
        label: "Employee",
        href: "/dashboard",
      },
      {
        icon: "/department.svg",
        label: "Department",
        href: "/dashboard",
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        icon: "/support.svg",
        label: "Support",
        href: "/dashboard",
      },
      {
        icon: "/settings.svg",
        label: "Settings",
        href: "/dashboard",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {/* iterate over each menu section */}
      {menuItems?.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          {/* section title */}
          <span className="hidden lg:block text-gray-400 font-medium text-[12px] mb-3 mt-6">
            {i.title}
          </span>
          {/* iterate over each item in the section */}
          {i.items.map((item) => {
            return (
              <a
                href={item.href}
                key={item.label}
                className={`flex items-center justify-center lg:justify-start gap-4 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight ${
                  item.label === "Dashboard" ? "text-[#FF5151]" : "text-gray-500"
                }`}
              >
                {/* item icon */}
                <Image src={item.icon} alt={item.label} width={20} height={20} />
                {/* item label */}
                <span className="hidden lg:block font-normal text-base">{item.label}</span>
              </a>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;