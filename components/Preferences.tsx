import React from "react";
import Image from "next/image";
import { HiOutlineMenu } from "react-icons/hi";

const Preferences = ({ toggle, setToggle }: any) => {
  return (
    <>
      <div className="flex flex-col h-screen w-full bg-gray-100">
        <div className="flex justify-between items-center w-full bg-white h-[52px]">
          <div className="ml-4 flex gap-2 items-center">
            <HiOutlineMenu
              className="text-2xl md:hidden block"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
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
          <button className="hidden md:block mr-2 border text-sm border-[#6656FF] py-2 px-4 rounded-3xl hover:bg-[#6656FF] hover:text-white">
            Invite Friends
          </button>
        </div>
        <div className="flex flex-col gap-y-4 items-center w-full justify-center flex-grow">
          {[...Array(7)].map((_, index) => (
            <form
              key={index}
              className="w-[80%] bg-white p-4 rounded-xl shadow-2xl border-2"
            >
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name={`question ${index + 1}`}
                  id={`question ${index + 1}`}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-md text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Describe your Entrepreneurial Journey
                </label>
              </div>
            </form>
          ))}
        </div>
      </div>
    </>
  );
};

export default Preferences;
