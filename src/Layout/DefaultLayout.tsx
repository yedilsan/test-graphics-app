import { AreaChartOutlined, FormOutlined } from "@ant-design/icons";
import { ConfigProvider, Layout, Menu } from "antd";
import React, { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";

const { Content, Footer, Sider } = Layout;
const items = [
  { icon: <AreaChartOutlined />, label: "Graphics", path: "/" },
  { icon: <FormOutlined />, label: "Forms", path: "/forms" },
];

const DefaultLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

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
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="demo-logo-vertical">
            <h1 style={{ color: "white", textAlign: "center" }}>Ant Design</h1>
          </div>
          <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
            {items.map((item) => (
              <Menu.Item key={item.path} icon={item.icon}>
                <NavLink to={item.path}>{item.label}</NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout
          className="site-layout"
          style={{
            marginLeft: 200,
          }}
        >
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
            }}
          >
            <div
              style={{
                padding: 24,
                textAlign: "center",
              }}
            >
              {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};
export default DefaultLayout;
