import React from "react";
import Sidebar from "@/components/Sidebar";
import Profile from "@/components/Profile";
import Prefernces from "@/components/Preferences";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Profile />
      <Prefernces />
    </div>
  );
};

export default page;
