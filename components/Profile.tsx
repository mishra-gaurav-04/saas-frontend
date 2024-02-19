import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

const Profile = () => {
  return (
    <>
      <div className="top-0 h-screen w-[25%] bg-white p-4">
        <form className="flex items-center max-w-sm mx-auto mb-4">
          <label className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaSearch />
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaSearch />
            <span className="sr-only">Search</span>
          </button>
        </form>
        <div className="text-center border-b-2 pb-4">
          <div className="flex justify-center items-center mb-4">
            <Image
              src="/assets/logo.svg"
              width={100}
              height={100}
              alt=""
              className="rounded-full"
            />
          </div>

          <p className="text-2xl text-gray-600">Test User</p>
          <p className="text-gray-400">Test User email id</p>
        </div>
        <div className="mt-4 space-y-3">
          <p className="text-xl font-semibold text-black mb-2">My Posts</p>
          <div className="bg-gray-300 p-2 rounded-lg cursor-pointer">
            <p className="text-black text-lg">Post 1</p>
            <p className="text-gray-100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati, fugit?
            </p>
          </div>
          <div className="bg-gray-300 p-2 rounded-lg cursor-pointer">
            <p className="text-black text-lg">Post 1</p>
            <p className="text-gray-100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati, fugit?
            </p>
          </div>
          <div className="bg-gray-300 p-2 rounded-lg cursor-pointer">
            <p className="text-black text-lg">Post 1</p>
            <p className="text-gray-100">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Obcaecati, fugit?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
