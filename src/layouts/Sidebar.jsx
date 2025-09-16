// // import { useState } from "react";
// // import { Link } from "react-router-dom";
// // import DashboardIcon from "@mui/icons-material/Dashboard";
// // import WorkIcon from "@mui/icons-material/Work";
// // import BusinessIcon from "@mui/icons-material/Business";
// // import PeopleIcon from "@mui/icons-material/People";
// // import SettingsIcon from "@mui/icons-material/Settings";
// // import React from "react";

// // const Sidebar = () => {
// //   const [open, setOpen] = useState(true);

// //   const menus = [
// //     { name: "Dashboard", icon: <DashboardIcon />, path: "/" },
// //     { name: "Jobs", icon: <WorkIcon />, path: "/jobs" },
// //     { name: "Employers", icon: <BusinessIcon />, path: "/employers" },
// //     { name: "Candidates", icon: <PeopleIcon />, path: "/candidates" },
// //     { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
// //   ];

// //   return (
// //     <div className={` bg-[#6851ff] text-white h-screen p-4 ${open ? "w-64" : "w-20"} duration-300`}>
// //       <button
// //         className="text-white mb-6 btn"
// //         onClick={() => setOpen(!open)}
// //       >
// //         {open ? "Collapse" : "Expand"}
// //       </button>

// //       <ul className="space-y-4">
// //         {menus.map((menu, i) => (
// //           <li key={i}>
// //             <Link
// //               to={menu.path}
// //               className="flex items-center gap-3 p-2 hover:bg-[#6851ff] rounded-md"
// //             >
// //               {menu.icon}
// //               {open && <span>{menu.name}</span>}
// //             </Link>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;



import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkIcon from "@mui/icons-material/Work";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";

const Sidebar = ({ open }) => {
  // const [open, setOpen] = useState(true);

  const menus = [
    { name: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { name: "Jobs", icon: <WorkIcon />, path: "/jobs" },
    { name: "Employers", icon: <BusinessIcon />, path: "/employers" },
    { name: "Candidates", icon: <PeopleIcon />, path: "/candidates" },
    { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  return (
    <div className={` bg-[#6851ff] text-white h-auto p-4 ${open ? "w-64" : "w-20"} duration-300`}>
      {/* <button
        className="text-white mb-6 btn"
        // onClick={() => setOpen(!open)}
      >
        {open ? "Collapse" : "Expand"}
      </button> */}

      <ul className="space-y-4">
        {menus.map((menu, i) => (
          <li key={i}>
            <Link
              to={menu.path}
              className="flex items-center gap-3 p-2 hover:bg-[#6851ff] rounded-md"
            >
              {menu.icon}
              {open && <span>{menu.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;






// import * as React from "react";
// import { Link } from "react-router-dom";
// import Drawer from "@mui/material/Drawer";
// import Box from "@mui/material/Box";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

// import DashboardIcon from "@mui/icons-material/Dashboard";
// import WorkIcon from "@mui/icons-material/Work";
// import BusinessIcon from "@mui/icons-material/Business";
// import PeopleIcon from "@mui/icons-material/People";
// import SettingsIcon from "@mui/icons-material/Settings";

// const drawerWidth = 240;

// export default function Sidebar() {
//   const menus = [
//     { name: "Dashboard", icon: <DashboardIcon />, path: "/" },
//     { name: "Jobs", icon: <WorkIcon />, path: "/jobs" },
//     { name: "Employers", icon: <BusinessIcon />, path: "/employers" },
//     { name: "Candidates", icon: <PeopleIcon />, path: "/candidates" },
//     { name: "Settings", icon: <SettingsIcon />, path: "/settings" },
//   ];

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         "& .MuiDrawer-paper": {
//           width: drawerWidth,
//           boxSizing: "border-box",
//           backgroundColor: "#6851ff",
//           color: "white",
//         },
//       }}
//     >
//       <Box sx={{ overflow: "auto", mt: 2 }}>
//         <List>
//           {menus.map((menu, index) => (
//             <ListItem key={index} disablePadding>
//               <ListItemButton component={Link} to={menu.path}>
//                 <ListItemIcon sx={{ color: "white" }}>{menu.icon}</ListItemIcon>
//                 <ListItemText primary={menu.name} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Box>
//     </Drawer>
//   );
// }