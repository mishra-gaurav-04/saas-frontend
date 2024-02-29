import React from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { PiChats } from "react-icons/pi";
import { TbBulb } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <>
      <aside
        id="default-sidebar"
        className="top-0 left-0 z-40 w-auto h-screen flex flex-col justify-between overflow-y-auto bg-[#6656FF] dark:bg-gray-800"
        aria-label="Sidebar"
      >
        <div className="px-3 py-4 overflow-y-auto">
          <div className="flex h-20 w-full justify-center items-center">
            <Image
              src="/assets/logo.svg"
              alt=""
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#493dbc] dark:hover:bg-gray-700 group"
              >
                <FaHome className="text-2xl text-white" />
                <span className="ms-3 text-white">My Ai</span>
              </a>
            </li>
            <li>
              <a
                href="/chat"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#493dbc] dark:hover:bg-gray-700 group"
              >
                <PiChats className="text-2xl text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap text-white">
                  Chats
                </span>
              </a>
            </li>
            <li>
              <a
                href="/preferences"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#493dbc] dark:hover:bg-gray-700 group"
              >
                <TbBulb className="text-2xl text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap text-white">
                  Preferences
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="px-3 pb-4">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#493dbc] dark:hover:bg-gray-700 group"
              >
                <IoIosLogOut className="text-2xl text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap text-white">
                  LogOut
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
