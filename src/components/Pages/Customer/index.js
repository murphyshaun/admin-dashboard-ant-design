import { Avatar, Rate, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { getCustomer } from "../../../API";
import "./index.css";

function Customer() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomer().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <div className="customer">
      <Space size={20} direction="vertical">
        <Typography.Title>Customer</Typography.Title>
        <Table
          columns={[
            {
              title: "Photo",
              dataIndex: "image",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            {
              title: "FirstName",
              dataIndex: "firstName",
            },
            {
              title: "LastName",
              dataIndex: "lastName",
            },
            {
              title: "Email",
              dataIndex: "email",
            },
            {
              title: "Phone",
              dataIndex: "phone",
            },
            {
              title: "Address",
              dataIndex: "address",
              render: (address) => {
                return (
                  <span>
                    {address.address}, {address.city}
                  </span>
                );
              },
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

export default Customer;
