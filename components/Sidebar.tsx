"use client";
import React from "react";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { PiChats } from "react-icons/pi";
import { TbBulb } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "next-auth/react";
import { BiSolidLogIn } from "react-icons/bi";

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
                href="/onboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#493dbc] dark:hover:bg-gray-700 group"
              >
                <BiSolidLogIn className="text-2xl text-white" />
                <span className="flex-1 ms-3 whitespace-nowrap text-white">
                  OnBoard
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
        <div className="px-4 pb-4">
          <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#493dbc] dark:hover:bg-gray-700">
            <IoIosLogOut className="text-2xl text-white" />
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              type="submit"
              className="flex-1 ms-3 whitespace-nowrap text-white"
            >
              LogOut
            </button>
          </li>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
