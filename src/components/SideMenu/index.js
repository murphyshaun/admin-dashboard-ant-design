import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./index.css";

function SideMenu() {
  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    setSelectedKeys(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div className="sideMenu">
      <Menu
        className="menu"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/",
          },
          {
            label: "Inventory",
            icon: <ShopOutlined />,
            key: "/inventory",
          },
          {
            label: "Orders",
            icon: <ShoppingCartOutlined />,
            key: "/orders",
          },
          {
            label: "Customers",
            icon: <UserOutlined />,
            key: "/customers",
          },
        ]}
      ></Menu>
    </div>
  );
}

export default SideMenu;
