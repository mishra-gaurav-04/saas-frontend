import React from "react";
import Image from "next/image";
import { IoAddCircleSharp } from "react-icons/io5";
import { MdSend } from "react-icons/md";

const Chat = () => {
  return (
    <>
      <div className="h-screen w-2/3 bg-gray-100">
        <div className="flex justify-between items-center w-full bg-white h-[52px]">
          <div className="ml-4 flex gap-2">
            <Image
              src="/assets/logo.svg"
              alt=""
              width={30}
              height={30}
              className="rounded-full"
            />
            <div>
              <p className="text-md">Test User</p>
              <p className="text-sm text-gray-500">TestUseremail.com</p>
            </div>
          </div>
          <button className="mr-2 border text-sm border-[#6656FF] py-2 px-4 rounded-3xl hover:bg-[#6656FF] hover:text-white">
            Invite Friends
          </button>
        </div>

        <form className="fixed bottom-0 w-[65%] m-4">
          <label
            form="submit"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 -start-1 flex items-center ps-3 hover:cursor-pointer">
              <IoAddCircleSharp className="text-3xl text-[#4b3ebe] " />
            </div>
            <input
              type="text"
              id="chat"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
              placeholder="Tell me what do you want"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <MdSend />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chat;
