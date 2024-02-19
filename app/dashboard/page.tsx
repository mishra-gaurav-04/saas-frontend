import React from "react";
import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
const page = () => {
  return (
    <>
    <div className="flex">
      <Sidebar />
      <Profile />
    </div>
    </>
  );
};

export default page;
