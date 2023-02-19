import { Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getOrders } from "../../../API";
import "./index.css";

function Orders() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <div className="order">
      <Space size={20} direction="vertical">
        <Typography.Title>Orders</Typography.Title>
        <Table
          columns={[
            {
              title: "Title",
              dataIndex: "title",
            },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "Quantity",
              dataIndex: "quantity",
            },
            {
              title: "Total",
              dataIndex: "total",
            },
            {
              title: "DiscountedPrice",
              dataIndex: "discountedPrice",
              render: (value) => <span>${value}</span>,
            },
          ]}
          dataSource={dataSource}
          loading={loading}
          pagination={{
            pageSize: 5,
          }}
        ></Table>
      </Space>
    </div>
  );
}

export default Orders;
