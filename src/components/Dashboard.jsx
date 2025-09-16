import React from "react";

const Dashboard = ({ mode }) => {
  const monthsArr = ["Jan", "Fab", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep","Oct","Nov","Dec"];
  const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];
  const currentDate = new Date();

  const day = daysArr[currentDate.getDay()];
  const todayDate = currentDate.getDate()
  const month = monthsArr[currentDate.getMonth()]
  const year = currentDate.getFullYear()
  // console.log(day)
  const tabs = [
    { name: "Today" },
    { name: "This Week" },
    { name: "This Month" },
    { name: "This Year" },
  ];

  const widgets = [
    { name: "Total Jobs Posted", numbers: 23 },
    { name: "Total Employers Registered", numbers: 203 },
    { name: "Total Candidates Registered", numbers: 5003 },
    { name: "Total Applications Submitted", numbers: 323 },
  ];
  //   const va

  return (
    <div className="">
      {/*Dashbaord Topbar  */}
      <div
        className={`h-[70px]  flex  gap-4 lg:flex-row items-center justify-around p-4
        ${
          mode === "light" ? "shadow-md text-black" : "bg-[#1e1e1e] text-white"
        }`}
      >
        <h1 className="text-2xl font-bold">Dashboard</h1>
        {/* Tabs */}
        <div className="flex gap-3">
          {tabs.map((tab, i) => (
            <button key={i} className=" p-2 w-[100px] cursor-pointer">
              {tab.name}
            </button>
          ))}
        </div>

        {/* Date */}
        <div>
          {/* 16-09-2025 */}
          {day} {todayDate} {month} {year}
        </div>

        {/* Button */}
        <button className="bg-[#6851ff] h-[40px] w-[150px] rounded-4xl cursor-pointer">
          Latest Report
        </button>
      </div>
      {/* Widgets  */}

      <div className=" flex gap-2 w-full  mt-2 mb-2 shadow-md ">
        {widgets.map((item) => (
          <div
            className={`w-[300px] h-[250px] shadow-md p-2 flex flex-col items-center font-bold text-[16px] ${
              mode === "light"
                ? "bg-white shadow-md text-black"
                : "bg-[#1e1e1e] text-white"
            }`}
          >
            <p>{item.name}</p>
            <p className="mt-4 text-2xl">{item.numbers}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;