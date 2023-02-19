import { Card, Space, Statistic } from "antd";
import React from "react";

function DashboardCard({ icon, title, value }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}

export default DashboardCard;
