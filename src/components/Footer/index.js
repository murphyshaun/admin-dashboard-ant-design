import React from "react";
import "./index.css";
import { Typography } from "antd";

function Footer() {
  return (
    <div className="footer">
      <Typography.Link href="tel: 0888881486">+0888881486</Typography.Link>
      <Typography.Link href="">Privacy Policy</Typography.Link>
      <Typography.Link href="">Terms of User</Typography.Link>
    </div>
  );
}

export default Footer;
