import { Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import DashboardCard from "./components/DashboardCard";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import "./index.css";
import RecentOrders from "./components/RecentOrders";
import DashboardChart from "./components/DashboardChart";
import { getCustomer, getInventory, getOrders } from "../../../API";

function Dashboard() {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    getOrders().then((res) => {
      setOrders(res.total);
      setRevenue(res.discountedTotal);
    });
    getInventory().then((res) => {
      setInventory(res.total);
    });
    getCustomer().then((res) => {
      setCustomers(res.total);
    });
  }, []);

  return (
    <div className="dashboard">
      <Typography.Title level={4}>Dashboard</Typography.Title>
      <Space>
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0, 255, 0, 0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Orders"
          value={orders}
        />
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0, 0, 255, 0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Inventory"
          value={inventory}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0, 255, 255, 0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Customer"
          value={customers}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255, 0, 0, 0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title="Revenue"
          value={revenue}
        />
      </Space>

      <br />
      <Space style={{ marginTop: 20 }}>
        <RecentOrders />
        <DashboardChart />
      </Space>
    </div>
  );
}

export default Dashboard;
