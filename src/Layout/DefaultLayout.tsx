import React, { useEffect, useState } from "react";
import {
  AreaChartOutlined,
  MenuFoldOutlined,
  FormOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, ConfigProvider } from "antd";
import { NavLink, useLocation } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;
const items = [
  { icon: <AreaChartOutlined />, label: "Graphics", path: "/" },
  { icon: <FormOutlined />, label: "Forms", path: "/forms" },
];

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    // Check if the clicked element is not inside the sidebar and not the button
    if (
      !target.closest(".ant-layout-sider") &&
      !target.closest(".ant-btn") &&
      collapsed === false
    ) {
      setCollapsed(true);
    }
  };

  const handleSiderClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Stop event propagation to prevent document click
  };
  useEffect(() => {
    if (!collapsed) {
      // Add event listener to the document
      document.addEventListener("click", handleDocumentClick);

      // Cleanup the event listener on component unmount
      return () => {
        document.removeEventListener("click", handleDocumentClick);
      };
    }
  }, [collapsed]); // Include collapsed in the dependency array

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          // Alias Token
          colorBgContainer: "#19375B",
          colorBgLayout: "#19375B",
          colorText: "white",
          colorTextPlaceholder: "white",
          colorIcon: "#19375B",
        },
      }}
    >
      <Layout>
        {collapsed ? null : (
          <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            style={{
              overflow: "auto",
              minHeight: "100vh",
            }}
            onClick={handleSiderClick}
          >
            <div className="demo-logo-vertical">
              <h1 style={{ color: "white", textAlign: "center" }}>
                Ant Design
              </h1>
            </div>
            <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
              {items.map((item) => (
                <Menu.Item key={item.path} icon={item.icon}>
                  <NavLink to={item.path}>{item.label}</NavLink>
                </Menu.Item>
              ))}
            </Menu>
          </Sider>
        )}
        <Layout>
          <Header style={{ padding: 0, background: "#19375B" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              style={{
                fontSize: "16px",
                margin: "15px",
              }}
              onMouseDown={handleToggleCollapse}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              minHeight: 280,
              background: "#19375B",
            }}
          >
            {children}
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Yedil Sanatov
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default DefaultLayout;
