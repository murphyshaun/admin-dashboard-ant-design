import { Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getOrders } from "../../../../../API";

function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text level={20}>Recent Orders</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
          },
        ]}
        dataSource={dataSource}
        loading={loading}
        pagination={false}
      ></Table>
    </>
  );
}

export default RecentOrders;
