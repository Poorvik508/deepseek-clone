import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

const Sidebar = ({ expand, setExpand }) => {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen",
        expand ? "p-4 w-64" : "md:w-20 w-0 max-md:overflow-hidden"
      )}
    >
      <div>
        <div
          className={clsx(
            "flex",
            expand ? "flex-row gap-10" : "flex-col items-center gap-8"
          )}
        >
          {/* Logo */}
          <Image
            src={expand ? assets.logo_text : assets.logo_icon}
            alt="logo"
            width={expand ? 144 : 40}
            height={40}
            className={expand ? "w-36" : "w-10"}
          />

          {/* Sidebar toggle button */}
          <div
            onClick={() => setExpand(!expand)}
            className="group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer"
          >
            <Image
              src={assets.menu_icon}
              alt="menu"
              width={24}
              height={24}
              className="md:hidden"
            />
            <Image
              src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
              alt="sidebar toggle"
              width={28}
              height={28}
              className="hidden md:block"
            />

            {/* Tooltip */}
            <div
              className={clsx(
                "absolute w-max opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none",
                expand ? "left-1/2 -translate-x-1/2 top-12" : "-top-12 left-0"
              )}
            >
              {expand ? "Close sidebar" : "Open sidebar"}
              <div
                className={clsx(
                  "w-3 h-3 absolute bg-black rotate-45",
                  expand
                    ? "left-1/2 -top-1.5 -translate-x-1/2"
                    : "left-4 -bottom-1.5"
                )}
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
