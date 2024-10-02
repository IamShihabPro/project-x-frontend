"use client";
import React from "react";
import { FaHouse, FaBell, FaUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import SidebarItems from "./SidebarItems";
import SidebarPostButton from "./SidebarPostButton";

const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: FaHouse,
    },
    {
      label: "Notification",
      href: "/notification",
      icon: FaBell,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: FaUser,
    },
  ];

  return (
    <>
      {/* Sidebar for large devices */}
      <div className="hidden lg:block col-span-1 h-full pr-4 md:pr-6">
        <div className="flex flex-col justify-between h-full items-end">
          {/* Updated to sticky/fixed */}
          <div className="space-y-2 lg:w-[230px] sticky top-0">
            <h1 className="text-white font-bold text-3xl p-2">Project X</h1>

            {/* Sidebar Items */}
            {items.map((item) => (
              <SidebarItems
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                aria-label={item.label}
              />
            ))}

            {/* Logout Button */}
            <SidebarItems
              onClick={() => {
                console.log("Logout clicked!");
              }}
              icon={MdLogout}
              label={"Logout"}
            />
            <SidebarPostButton />
          </div>
        </div>
      </div>

      {/* Bottom Navbar for small devices */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t-[1px] border-neutral-800 lg:hidden">
        <div className="flex justify-around items-center py-2">
          {items.map((item) => (
            <SidebarItems
              key={item.label}
              href={item.href}
              icon={item.icon}
              label={item.label}
              aria-label={item.label}
            />
          ))}

          {/* Logout Button */}
          <SidebarItems
            onClick={() => {
              console.log("Logout clicked!");
            }}
            icon={MdLogout}
            label={"Logout"}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
