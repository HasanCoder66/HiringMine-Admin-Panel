import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";
import React, { useMemo, useState } from "react";

const MainLayout = ({mode, setMode}) => {
  const [open, setOpen] = useState(true);
  

  const toggleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div className="">
      <div className="flex">
        <Topbar mode={mode} setMode={setMode} toggleSidebar={toggleSidebar} open={open} />
      </div>

      <div className="flex-1">
        <div className="flex ">
          {/* Sidebar */}
          <Sidebar open={open} />
          <div className=" flex-1 p-[20px] min-h-screen">
            {/* Main Content */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
