import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../../Admin/AdminDashboard";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<AdminDashboard />} />
      {/* More admin-only routes here */}
    </Routes>
  );
};

export default AdminRouter;