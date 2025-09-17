// import React, { useState } from "react";
// import { Card, Typography, Avatar } from "@mui/material";
// import { People, PersonAdd, BarChart } from "@mui/icons-material";
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";

// const User = () => {
//   // Dummy Summary Data
//   const summary = [
//     {
//       title: "Total Users",
//       value: 1240,
//       icon: (
//         <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md shadow-lg text-blue-600">
//           <People fontSize="large" />
//         </div>
//       ),
//     },
//     {
//       title: "New This Month",
//       value: 85,
//       icon: (
//         <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md shadow-lg text-green-600">
//           <PersonAdd fontSize="large" />
//         </div>
//       ),
//     },
//     {
//       title: "Active Users",
//       value: 920,
//       icon: (
//         <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md shadow-lg text-purple-600">
//           <BarChart fontSize="large" />
//         </div>
//       ),
//     },
//   ];

//   // Dummy Chart Data
//   const monthlyData = [
//     { label: "Jan", users: 50 },
//     { label: "Feb", users: 120 },
//     { label: "Mar", users: 90 },
//     { label: "Apr", users: 140 },
//     { label: "May", users: 200 },
//     { label: "Jun", users: 170 },
//   ];

//   const weeklyData = [
//     { label: "Week 1", users: 30 },
//     { label: "Week 2", users: 50 },
//     { label: "Week 3", users: 70 },
//     { label: "Week 4", users: 90 },
//   ];

//   const yearlyData = [
//     { label: "2021", users: 600 },
//     { label: "2022", users: 850 },
//     { label: "2023", users: 1200 },
//     { label: "2024", users: 1400 },
//     { label: "2025", users: 1700 },
//   ];

//   const [filter, setFilter] = useState("month");

//   const getChartData = () => {
//     switch (filter) {
//       case "week":
//         return weeklyData;
//       case "year":
//         return yearlyData;
//       default:
//         return monthlyData;
//     }
//   };

//   // Dummy Table Data
//   const rows = [
//     { id: 1, name: "Ali Khan", email: "ali@example.com", role: "User", joined: "2025-01-10" },
//     { id: 2, name: "Sara Ahmed", email: "sara@example.com", role: "Admin", joined: "2025-01-12" },
//     { id: 3, name: "Usman Tariq", email: "usman@example.com", role: "User", joined: "2025-02-01" },
//     { id: 4, name: "Fatima Noor", email: "fatima@example.com", role: "User", joined: "2025-02-15" },
//     { id: 5, name: "Hamza Ali", email: "hamza@example.com", role: "Moderator", joined: "2025-03-01" },
//   ];

//   // Role Colors
//   const roleColors = {
//     Admin: "bg-red-100 text-red-600",
//     User: "bg-blue-100 text-blue-600",
//     Moderator: "bg-green-100 text-green-600",
//   };

//   return (
//     <div className="space-y-6 w-full">
//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {summary.map((item, idx) => (
//           <Card
//             key={idx}
//             className="p-6 bg-white/30 backdrop-blur-md border border-white/40 shadow-lg flex items-center space-x-4 hover:scale-105 transition rounded-2xl"
//           >
//             {item.icon}
//             <div>
//               <Typography variant="subtitle2" className="text-gray-700">
//                 {item.title}
//               </Typography>
//               <Typography variant="h5" className="font-extrabold text-gray-900">
//                 {item.value.toLocaleString()}
//               </Typography>
//             </div>
//           </Card>
//         ))}
//       </div>

//       {/* Chart */}
//       <Card className="p-6 bg-white/30 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl">
//         <div className="flex justify-between items-center mb-6">
//           <Typography variant="h6" className="font-bold text-gray-800">
//             User Registrations
//           </Typography>

//           {/* Segmented Filter */}
//           <div className="flex space-x-2 bg-gray-100 p-1 rounded-xl">
//             {["week", "month", "year"].map((key) => (
//               <button
//                 key={key}
//                 onClick={() => setFilter(key)}
//                 className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
//                   filter === key
//                     ? "bg-indigo-600 text-white shadow"
//                     : "text-gray-600 hover:bg-gray-200"
//                 }`}
//               >
//                 {key === "week" ? "Week" : key === "month" ? "Month" : "Year"}
//               </button>
//             ))}
//           </div>
//         </div>

//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={getChartData()}>
//             <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//             <XAxis dataKey="label" stroke="#6b7280" />
//             <YAxis stroke="#6b7280" />
//             <Tooltip />
//             <Line
//               type="monotone"
//               dataKey="users"
//               stroke="#4f46e5"
//               strokeWidth={3}
//               dot={{ r: 5 }}
//               activeDot={{ r: 8 }}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </Card>

//       {/* Users Table */}
//       <Card className="p-6 bg-white/30 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl overflow-x-auto">
//         <Typography variant="h6" className="mb-4 font-bold text-gray-800">
//           All Users
//         </Typography>
//         <table className="min-w-full text-sm text-left rounded-lg overflow-hidden">
//           <thead className="bg-gray-100 text-gray-700">
//             <tr>
//               <th className="px-4 py-2">ID</th>
//               <th className="px-4 py-2">Name</th>
//               <th className="px-4 py-2">Email</th>
//               <th className="px-4 py-2">Role</th>
//               <th className="px-4 py-2">Joined On</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, idx) => (
//               <tr
//                 key={row.id}
//                 className={`${
//                   idx % 2 === 0 ? "bg-white/40" : "bg-white/20"
//                 } hover:bg-indigo-50 transition`}
//               >
//                 <td className="px-4 py-2">{row.id}</td>
//                 <td className="px-4 py-2 flex items-center space-x-2">
//                   <Avatar>{row.name.charAt(0)}</Avatar>
//                   <span>{row.name}</span>
//                 </td>
//                 <td className="px-4 py-2">{row.email}</td>
//                 <td className="px-4 py-2">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                       roleColors[row.role] || "bg-gray-100 text-gray-600"
//                     }`}
//                   >
//                     {row.role}
//                   </span>
//                 </td>
//                 <td className="px-4 py-2">{row.joined}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Card>
//     </div>
//   );
// };

// export default User;












// import React from "react";
// import DashboardCharts from "./DashboardCharts";

// const UserDashboard = ({ mode }) => {
//   const monthsArr = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];
//   const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//   const currentDate = new Date();

//   const day = daysArr[currentDate.getDay()];
//   const todayDate = currentDate.getDate();
//   const month = monthsArr[currentDate.getMonth()];
//   const year = currentDate.getFullYear();

//   const userWidgets = [
//     { name: "Saved Jobs", numbers: 12, icon: "⭐" },
//     { name: "Applications Submitted", numbers: 5, icon: "📝" },
//     { name: "Interviews Scheduled", numbers: 2, icon: "✅" },
//     { name: "Messages", numbers: 7, icon: "💌" },
//   ];

//   const jobRecommendations = [
//     { title: "Frontend Developer", company: "Techify", location: "Karachi" },
//     { title: "UI/UX Designer", company: "DesignHub", location: "Lahore" },
//     { title: "Backend Engineer", company: "CodeWorks", location: "Remote" },
//   ];

//   const notifications = [
//     "Your application for Frontend Developer at Techify is under review.",
//     "Interview scheduled with DesignHub on 20 Sep.",
//     "3 new jobs match your saved preferences.",
//   ];

//   return (
//     <div className="w-full">
//       {/* Header */}
//       <div
//         className={`p-6 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4
//           ${
//             mode === "light"
//               ? "bg-white shadow-md text-black"
//               : "bg-[#292930] text-white"
//           }`}
//       >
//         <div>
//           <h1 className="text-2xl font-bold">Hi Muhammad 👋</h1>
//           <p className="text-sm opacity-80 mt-1">
//             Welcome back! You have <span className="font-semibold">3 new job matches</span> today.
//           </p>
//         </div>

//         <div className="text-sm font-medium whitespace-nowrap">
//           {day}, {todayDate} {month} {year}
//         </div>

//         <button className="bg-[#6851ff] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#7a65ff] transition-colors">
//           View Profile
//         </button>
//       </div>

//       {/* Widgets */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
//         {userWidgets.map((item, i) => (
//           <div
//             key={i}
//             className={`relative rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 cursor-pointer
//               ${
//                 mode === "light"
//                   ? "bg-white/80 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl"
//                   : "bg-[#292930] backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-white/20"
//               }`}
//           >
//             <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white text-2xl shadow-lg mb-4">
//               {item.icon}
//             </div>
//             <p className="text-3xl font-extrabold tracking-wide">
//               {item.numbers.toLocaleString()}
//             </p>
//             <p className={`mt-2 text-sm font-medium ${mode === "light" ? "text-black" : "text-white"}`}>
//               {item.name}
//             </p>
//             <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 blur-2xl"></div>
//           </div>
//         ))}
//       </div>

//       {/* Job Recommendations */}
//       <div className="mt-8">
//         <h2 className="text-xl font-bold mb-4">Recommended for You</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {jobRecommendations.map((job, i) => (
//             <div
//               key={i}
//               className={`p-6 rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer
//                 ${mode === "light" ? "bg-white shadow-md" : "bg-[#1f1f27] border border-white/10"}`}
//             >
//               <h3 className="font-semibold text-lg">{job.title}</h3>
//               <p className="text-sm opacity-80 mt-1">{job.company}</p>
//               <p className="text-xs opacity-60 mt-1">{job.location}</p>
//               <button className="mt-4 bg-[#6851ff] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-[#7a65ff] transition-colors">
//                 Apply Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Activity Chart */}
//       <div className="mt-10">
//         <h2 className="text-xl font-bold mb-4">Your Activity</h2>
//         <DashboardCharts mode={mode} />
//       </div>

//       {/* Notifications */}
//       <div className="mt-10">
//         <h2 className="text-xl font-bold mb-4">Latest Updates</h2>
//         <ul className={`space-y-3 ${mode === "light" ? "text-gray-700" : "text-gray-300"}`}>
//           {notifications.map((note, i) => (
//             <li
//               key={i}
//               className={`p-4 rounded-lg transition-all duration-200 hover:scale-[1.01] hover:shadow-md
//                 ${mode === "light" ? "bg-gray-100" : "bg-[#2a2a32] border border-white/10"}`}
//             >
//               {note}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;









import React from "react";
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const UserDetail = ({ mode }) => {
  // dummy user
  const user = {
    name: "Muhammad Hasan",
    email: "hasan@example.com",
    role: "Job Seeker",
    joinDate: "12 Jan 2024",
    avatar: "https://i.pravatar.cc/150?img=32",
  };

  // widgets data
  const userStats = [
    { name: "Total Users", value: 5023, icon: "👤" },
    { name: "Last Year Users", value: 2000, icon: "👤" },
    { name: "Last Month Users", value: 786, icon: "👤" },
    { name: "This Week Users", value: 100, icon: "👤" },
  ];
//   📝 ⭐ ✅ 💌

  // line chart data
  const monthlyUsers = [
    { month: "Jan", applied: 20 },
    { month: "Feb", applied: 13 },
    { month: "Mar", applied: 15 },
    { month: "Apr", applied: 40 },
    { month: "May", applied: 20 },
    { month: "Jun", applied: 196 },
    { month: "Aug", applied: 16 },
    { month: "Sep", applied: 6 },
    { month: "Oct", applied: 26 },
    { month: "Nov", applied: 39 },
    { month: "Dec", applied: 96 },
  ];

  // pie chart data
  const statusData = [
    { name: "Candidates", value: 12, color: "#fbbf24" },
    { name: "Employers", value: 3, color: "#34d399" },
    // { name: "Rejected", value: 2, color: "#f87171" },
    // { name: "Hired", value: 1, color: "#fbbf24" },
  ];

  // timeline activities
  const activities = [
    "Applied for Frontend Developer at Techify (15 Sep)",
    "Interview Scheduled with DesignHub (20 Sep)",
    "Profile Updated (10 Sep)",
  ];

  // applications table
  const users = [
    { username: "Hasan", role: "Admin", date: "15 Sep 2025", status: "Under Review" },
    { username: "Ahsan", role: "Candidate", date: "15 Sep 2025", status: "Under Review" },
    { username: "Jaffar", role: "Admin", date: "15 Sep 2025", status: "Under Review" },

  ];

  return (
    <div className="w-full space-y-8">
      {/* User Info */}
      <div className={`flex flex-wrap lg:flex-nowrap gap-4 items-center justify-between p-4 rounded-lg
        ${
          mode === "light"
            ? "bg-white shadow-md text-black"
            : "bg-[#292930] text-white"
        }`}>
        <h2 className="text-2xl font-bold">User Details</h2>
        {/* <img src={user.avatar} alt="avatar" className="w-20 h-20 rounded-full object-cover" /> */}
        {/* <div>
          
        </div> */}
      </div>


{/* Stats Widgets */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {userStats.map((stat, i) => (
    <div
      key={i}
      className={`relative p-6 rounded-2xl flex flex-col items-center justify-center text-center transition-all duration-300 transform hover:scale-105 cursor-pointer
        ${
          mode === "light"
            ? "bg-white/80 backdrop-blur-md border border-gray-200 shadow-md hover:shadow-xl"
            : "bg-[#292930] backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-white/20"
        }`}
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white text-2xl shadow-lg mb-4">
        {stat.icon}
      </div>
      <p className="text-3xl font-extrabold tracking-wide">
        {stat.value}
      </p>
      <p
        className={`mt-2 text-sm font-medium ${
          mode === "light" ? "text-black" : "text-white"
        }`}
      >
        {stat.name}
      </p>

      {/* Overlay hover gradient effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-20 transition duration-300 bg-gradient-to-r from-purple-500 to-indigo-500 blur-2xl"></div>
    </div>
  ))}
</div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Line Chart */}
        <div className={`p-6 rounded-xl ${mode === "light" ? "bg-white shadow-md" : "bg-[#292930] border border-white/10"}`}>
          <h3 className="font-bold mb-4">User Registration Over Time</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={monthlyUsers}>
              <XAxis dataKey="month" stroke={mode === "light" ? "#333" : "#ccc"} />
              <YAxis stroke={mode === "light" ? "#333" : "#ccc"} />
              <Tooltip />
              <Line type="monotone" dataKey="applied" stroke="#6851ff" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Donut Chart */}
        <div className={`p-6 rounded-xl ${mode === "light" ? "bg-white shadow-md" : "bg-[#292930] border border-white/10"}`}>
          <h3 className="font-bold mb-4">User Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={statusData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={5}>
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      
      {/* Applications Table */}
      <div className={`p-6 rounded-xl overflow-x-auto ${mode === "light" ? "bg-white shadow-md" : "bg-[#292930] border border-white/10"}`}>
        <h3 className="font-bold mb-4">Recent Account Registrations</h3>
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className={`${mode === "light" ? "bg-gray-100" : "bg-[#2a2a32]"}`}>
              <th className="p-3">UserName</th>
              <th className="p-3">Role</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-t">
                <td className="p-3">{u.username}</td>
                <td className="p-3">{u.role}</td>
                <td className="p-3">{u.date}</td>
                <td className="p-3">{u.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetail;













// import React, { useState } from "react";
// import { Card, Typography, Select, MenuItem } from "@mui/material";
// import { People, PersonAdd, BarChart } from "@mui/icons-material";
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";

// const User = () => {
//   // Dummy Summary Data
//   const summary = [
//     {
//       title: "Total Users",
//       value: 1240,
//       icon: (
//         <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow">
//           <People fontSize="large" />
//         </div>
//       ),
//     },
//     {
//       title: "New This Month",
//       value: 85,
//       icon: (
//         <div className="p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow">
//           <PersonAdd fontSize="large" />
//         </div>
//       ),
//     },
//     {
//       title: "Active Users",
//       value: 920,
//       icon: (
//         <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow">
//           <BarChart fontSize="large" />
//         </div>
//       ),
//     },
//   ];

//   // Dummy Chart Data (Month wise)
//   const monthlyData = [
//     { label: "Jan", users: 50 },
//     { label: "Feb", users: 120 },
//     { label: "Mar", users: 90 },
//     { label: "Apr", users: 140 },
//     { label: "May", users: 200 },
//     { label: "Jun", users: 170 },
//   ];

//   // Weekly Dummy Data
//   const weeklyData = [
//     { label: "Week 1", users: 30 },
//     { label: "Week 2", users: 50 },
//     { label: "Week 3", users: 70 },
//     { label: "Week 4", users: 90 },
//   ];

//   // Yearly Dummy Data
//   const yearlyData = [
//     { label: "2021", users: 600 },
//     { label: "2022", users: 850 },
//     { label: "2023", users: 1200 },
//     { label: "2024", users: 1400 },
//     { label: "2025", users: 1700 },
//   ];

//   const [filter, setFilter] = useState("month");

//   const getChartData = () => {
//     switch (filter) {
//       case "week":
//         return weeklyData;
//       case "year":
//         return yearlyData;
//       default:
//         return monthlyData;
//     }
//   };

//   // Dummy Table Data
//   const rows = [
//     { id: 1, name: "Ali Khan", email: "ali@example.com", role: "User", joined: "2025-01-10" },
//     { id: 2, name: "Sara Ahmed", email: "sara@example.com", role: "Admin", joined: "2025-01-12" },
//     { id: 3, name: "Usman Tariq", email: "usman@example.com", role: "User", joined: "2025-02-01" },
//     { id: 4, name: "Fatima Noor", email: "fatima@example.com", role: "User", joined: "2025-02-15" },
//     { id: 5, name: "Hamza Ali", email: "hamza@example.com", role: "Moderator", joined: "2025-03-01" },
//   ];

//   return (
//     <div className="space-y-6 w-full">
//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {summary.map((item, idx) => (
//           <Card
//             key={idx}
//             className="p-6 shadow-md flex items-center space-x-4 hover:shadow-lg transition rounded-2xl"
//           >
//             {item.icon}
//             <div>
//               <Typography variant="h6" className="text-gray-600 font-medium">
//                 {item.title}
//               </Typography>
//               <Typography variant="h5" className="font-extrabold text-gray-900">
//                 {item.value.toLocaleString()}
//               </Typography>
//             </div>
//           </Card>
//         ))}
//       </div>

//       {/* Chart */}
//       <Card className="p-6 shadow-md rounded-2xl">
//         <div className="flex justify-between items-center mb-4">
//           <Typography variant="h6" className="font-semibold">
//             User Registrations
//           </Typography>

//           {/* Filter Dropdown */}
//           <Select
//             size="small"
//             value={filter}
//             onChange={(e) => setFilter(e.target.value)}
//           >
//             <MenuItem value="week">This Week</MenuItem>
//             <MenuItem value="month">This Month</MenuItem>
//             <MenuItem value="year">This Year</MenuItem>
//           </Select>
//         </div>

//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={getChartData()}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="label" />
//             <YAxis />
//             <Tooltip />
//             <Line
//               type="monotone"
//               dataKey="users"
//               stroke="#4f46e5"
//               strokeWidth={3}
//               dot={{ r: 5 }}
//               activeDot={{ r: 8 }}
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </Card>

//       {/* Users Table (Responsive) */}
//       <Card className="p-6 shadow-md rounded-2xl overflow-x-auto">
//         <Typography variant="h6" className="mb-4 font-semibold">
//           All Users
//         </Typography>
//         <table className="min-w-full text-sm text-left border rounded-lg overflow-hidden">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-4 py-2 border">ID</th>
//               <th className="px-4 py-2 border">Name</th>
//               <th className="px-4 py-2 border">Email</th>
//               <th className="px-4 py-2 border">Role</th>
//               <th className="px-4 py-2 border">Joined On</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row) => (
//               <tr key={row.id} className="hover:bg-gray-50">
//                 <td className="px-4 py-2 border">{row.id}</td>
//                 <td className="px-4 py-2 border">{row.name}</td>
//                 <td className="px-4 py-2 border">{row.email}</td>
//                 <td className="px-4 py-2 border">{row.role}</td>
//                 <td className="px-4 py-2 border">{row.joined}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Card>
//     </div>
//   );
// };

// export default User;





// import React from "react";
// import { Card, Typography } from "@mui/material";
// import { People, PersonAdd, BarChart } from "@mui/icons-material";
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
// } from "recharts";

// const User = () => {
//   // Dummy Summary Data
//   const summary = [
//     { title: "Total Users", value: 1240, icon: <People fontSize="large" color="primary" /> },
//     { title: "New This Month", value: 85, icon: <PersonAdd fontSize="large" color="success" /> },
//     { title: "Active Users", value: 920, icon: <BarChart fontSize="large" color="secondary" /> },
//   ];

//   // Dummy Chart Data
//   const monthlyData = [
//     { month: "Jan", users: 50 },
//     { month: "Feb", users: 120 },
//     { month: "Mar", users: 90 },
//     { month: "Apr", users: 140 },
//     { month: "May", users: 200 },
//     { month: "Jun", users: 170 },
//   ];

//   // Dummy Table Data
//   const rows = [
//     { id: 1, name: "Ali Khan", email: "ali@example.com", role: "User", joined: "2025-01-10" },
//     { id: 2, name: "Sara Ahmed", email: "sara@example.com", role: "Admin", joined: "2025-01-12" },
//     { id: 3, name: "Usman Tariq", email: "usman@example.com", role: "User", joined: "2025-02-01" },
//     { id: 4, name: "Fatima Noor", email: "fatima@example.com", role: "User", joined: "2025-02-15" },
//     { id: 5, name: "Hamza Ali", email: "hamza@example.com", role: "Moderator", joined: "2025-03-01" },
//   ];

//   return (
//     <div className="space-y-6 w-full ">
//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {summary.map((item, idx) => (
//           <Card key={idx} className="p-6 shadow-md flex items-center space-x-4">
//             {item.icon}
//             <div>
//               <Typography variant="h6">{item.title}</Typography>
//               <Typography variant="h5" className="font-bold">
//                 {item.value.toLocaleString()}
//               </Typography>
//             </div>
//           </Card>
//         ))}
//       </div>

//       {/* Chart */}
//       <Card className="p-6 shadow-md">
//         <Typography variant="h6" className="mb-4 font-semibold">
//           Monthly User Registrations
//         </Typography>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart data={monthlyData}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="month" />
//             <YAxis />
//             <Tooltip />
//             <Line type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={3} />
//           </LineChart>
//         </ResponsiveContainer>
//       </Card>

//       {/* Users Table (Tailwind based) */}
//       <Card className="p-6 shadow-md overflow-x-auto">
//         <Typography variant="h6" className="mb-4 font-semibold">
//           All Users
//         </Typography>
//         <table className="min-w-full text-sm text-left border">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="px-4 py-2 border">ID</th>
//               <th className="px-4 py-2 border">Name</th>
//               <th className="px-4 py-2 border">Email</th>
//               <th className="px-4 py-2 border">Role</th>
//               <th className="px-4 py-2 border">Joined On</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row) => (
//               <tr key={row.id} className="hover:bg-gray-50">
//                 <td className="px-4 py-2 border">{row.id}</td>
//                 <td className="px-4 py-2 border">{row.name}</td>
//                 <td className="px-4 py-2 border">{row.email}</td>
//                 <td className="px-4 py-2 border">{row.role}</td>
//                 <td className="px-4 py-2 border">{row.joined}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Card>
//     </div>
//   );
// };

// export default User;
