import React, { useEffect, useState } from "react";
import "./Header.scss";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Logo from "../assets/kofishia.jpg";

const Header = () => {
  const { Header } = Layout;
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuItems = [
    {
      key: "1",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "2",
      label: <Link to="/addCoffee">Add Coffee</Link>,
    },
    {
      key: "3",
      label: <Link to="/users">Users</Link>,
    },
    {
      key: "4",
      label: <Link to="/login">Login</Link>,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Header className="header">
      <Link to="/">
        <div className="logo" style={{ color: "white", fontSize: "24px" }}>
          <img src={Logo} alt="" width="150" />
        </div>
      </Link>
      {!isMobile ? (
        <div className="desktop-menu">
          <Menu mode="horizontal" theme="dark" items={menuItems} />
        </div>
      ) : (
        <div className="mobile-menu">
          <Button
            style={{ backgroundColor: "#d2b48c" }}
            type="primary"
            icon={<MenuOutlined />}
            onClick={showDrawer}
          />
          <Drawer
            title="Coffe Menu"
            placement="right"
            onClose={onClose}
            open={visible}
          >
            <Menu mode="vertical" items={menuItems} />
          </Drawer>
        </div>
      )}
    </Header>
  );
};

export default Header;
