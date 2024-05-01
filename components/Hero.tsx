"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { useSession } from "next-auth/react";
import { getUserPrompts } from "@/lib/actions/user.action";

const Hero = ({ toggle, setToggle }: any) => {
  // console.log(window.innerWidth);
  const [windowWidth, setWindowWidth] = useState(0);
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

  console.log("These are prompts for the profile\n", prompts);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // Set initial window width
    setWindowWidth(window.innerWidth);
    // Event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="h-screen w-full md:w-2/3 bg-zinc-800">
        <div className="flex justify-between items-center w-full bg-zinc-900 h-[52px]">
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
              <p className="text-md text-white">{session?.user?.name}</p>
              <p className="text-sm text-gray-500">{session?.user?.email}</p>
            </div>
          </div>
          <button className="hidden md:block mr-2 text-sm text-white bg-zinc-600 py-2 px-4 rounded-3xl hover:bg-zinc-700">
            Invite Friends
          </button>
        </div>
        <p className="text-4xl ml-4 my-2 font-semibold text-gray-500">
          <span className="text-slate-500">Exam</span>
          <span className="text-slate-400">ples</span>
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-4">
          {prompts.slice(0, 6).map((prompt, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-xl bg-zinc-600 shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 delay-150 duration-200 mb-4"
            >
              <div className="bg-gray-100 w-full max-h-[65%] flex justify-center rounded-t-xl">
                <Image
                  src="https://t3.ftcdn.net/jpg/01/83/50/32/360_F_183503230_heDoLySnwt4W968RVTJOf7LFHbkZdCHA.jpg"
                  alt="Image Description"
                  width={120}
                  height={120}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="w-full p-2">
                <h3 className="text-md font-bold text-white">
                  Post {index + 1}
                </h3>
                <div className="w-full">
                  <p className="text-sm mt-1 text-gray-300">
                    {prompt?.response}
                  </p>
                </div>
                <div className="flex justify-between w-full gap-2">
                  <p className="text-sm mt-1 text-gray-400 justify-end">
                    15th feb
                  </p>
                  <p className="text-sm mt-1 text-gray-400 justify-end">
                    {session?.user?.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
