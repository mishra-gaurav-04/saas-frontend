"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { getUserPrompts } from "@/lib/actions/user.action";
import { useEffect, useState } from "react";

const Profile = () => {
  const { data: session, status } = useSession();
  const userId = session?.user?.id;
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const res = await getUserPrompts(userId);
        setPrompts(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPrompts();
  }, []);
  // console.log("These are prompts for the profile\n", prompts);
  return (
    <>
      <div className="top-0 h-screen w-full bg-black p-4 border-black">
        <form className="flex items-center max-w-sm mx-auto mb-4">
          <label className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FaSearch />
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-zinc-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              required
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ms-2 text-sm font-medium text-white border border-gray-400 bg-zinc-900 hover:bg-zinc-700 hover:border-zinc-700 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
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

          <p className="text-2xl text-white">{session?.user?.name}</p>
          <p className="text-gray-400">{session?.user?.email}</p>
        </div>
        <div className="mt-4 space-y-3 max-h-screen">
          <p className="text-xl font-semibold text-white mb-2">My Posts</p>
          {prompts.slice(0, 2).map((prompt, index) => (
            <div className="bg-zinc-900 border border-zinc-900 hover:bg-zinc-700 hover:border-zinc-700 p-2 rounded-lg cursor-pointer">
              <p className="text-white font-semibold text-lg">
                Post {index + 1}
              </p>
              <p className="text-gray-100">{prompt?.response}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
