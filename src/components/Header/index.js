import React, { useEffect, useState } from "react";
import "./index.css";
import { Image, Typography, Space, Badge, Drawer, List } from "antd";
import admin from "../../images/admin.png";
import { MailOutlined, BellFilled } from "@ant-design/icons";
import { getComments, getOrders } from "../../API";

function Header() {
  const [comments, setComments] = useState([]);
  const [orders, setOrders] = useState([]);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });

    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="header">
      <Image src={admin} width={40}></Image>
      <Typography.Title>Shaun Dashboard</Typography.Title>
      <Space size={20}>
        <Badge count={comments.length}>
          <MailOutlined
            style={{ fontSize: 24 }}
            onClick={() => setCommentsOpen(true)}
          />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled
            style={{ fontSize: 24 }}
            onClick={() => setNotificationsOpen(true)}
          />
        </Badge>
      </Space>
      <Drawer
        title="Comments"
        open={commentsOpen}
        onClose={() => setCommentsOpen(false)}
        maskClosable
      >
        <List
          dataSource={comments}
          renderItem={(item) => {
            return <List.Item>{item.body}</List.Item>;
          }}
        ></List>
      </Drawer>
      <Drawer
        title="Notifications"
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        maskClosable
      >
        <List
          dataSource={orders}
          renderItem={(item) => {
            return (
              <List.Item>
                <Typography.Text strong>{item.title}</Typography.Text> has been
                ordered!
              </List.Item>
            );
          }}
        ></List>
      </Drawer>
    </div>
  );
}

export default Header;
