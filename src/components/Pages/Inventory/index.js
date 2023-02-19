import { Avatar, Rate, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getInventory } from "../../../API";
import "./index.css";

function Inventory() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <div className="inventory">
      <Space size={20} direction="vertical">
        <Typography.Title>Inventory</Typography.Title>
        <Table
          columns={[
            {
              title: "Thumbnail",
              dataIndex: "thumbnail",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
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
              title: "Rating",
              dataIndex: "rating",
              render: (rating) => {
                return <Rate value={rating} allowHalf disabled />;
              },
            },
            {
              title: "Stock",
              dataIndex: "stock",
            },
            {
              title: "Brand",
              dataIndex: "brand",
            },
            {
              title: "Category",
              dataIndex: "category",
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

export default Inventory;
