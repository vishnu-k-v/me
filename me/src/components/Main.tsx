import React, { Component } from "react";
import { Layout } from "antd";
import HeaderBar from "./headerBar";
import Profile from "./Profile";

const { Header, Footer, Sider, Content } = Layout;

class MainPart extends React.Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <HeaderBar />
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Profile />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default MainPart;
