import React from "react";
import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import Hero from "@/components/Hero";
const page = () => {
  return (
    <>
    <div className="flex">
      <Sidebar />
      <Profile />
      <Hero />
    </div>
    </>
  );
};

export default page;
