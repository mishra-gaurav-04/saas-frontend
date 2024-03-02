'use client'
import React from "react";
import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import { useState } from "react";
import Prefernces from "@/components/Preferences";
 
const Page = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="flex">
        <div className={`${ toggle ? "block" : "hidden"} md:block w-1/7`}>
          <Sidebar />
        </div>
        <div className="hidden md:block w-1/4">
          <Profile />
        </div>
        <Prefernces
        toggle={toggle}
        setToggle={setToggle}
        />
      </div>
    </>
  );
};

export default Page;
