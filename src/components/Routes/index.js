import React from "react";
import { Routes, Route } from "react-router-dom";
import Customer from "../Pages/Customer";
import Dashboard from "../Pages/Dashboard";
import Inventory from "../Pages/Inventory";
import Orders from "../Pages/Order";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/inventory" element={<Inventory />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customer />}></Route>
    </Routes>
  );
}

export default AppRoutes;
