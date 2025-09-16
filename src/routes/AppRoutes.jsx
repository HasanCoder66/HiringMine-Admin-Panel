import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import React from "react";
import Dashboard from "../components/Dashboard";
// const Dashboard = () => <h2>Dashboard Page</h2>;
const Jobs = () => <h2>Jobs Page</h2>;
const Employers = () => <h2>Employers Page</h2>;
const Candidates = () => <h2>Candidates Page</h2>;
const Settings = () => <h2>Settings Page</h2>;

const AppRoutes = ({mode, setMode}) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout mode={mode} setMode={setMode} />}>
          <Route index element={<Dashboard mode={mode}  />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="employers" element={<Employers />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
