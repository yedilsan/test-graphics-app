import { AreaChartOutlined, FormOutlined } from "@ant-design/icons";
import { ConfigProvider, Layout, Menu } from "antd";
import React from "react";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const { Content, Footer, Sider } = Layout;

// eslint-disable-next-line react/prop-types
const DefaultLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<AreaChartOutlined />}>
              <NavLink to="/">Graphics</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<FormOutlined />}>
              <NavLink to="/forms">Forms</NavLink>
            </Menu.Item>
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
