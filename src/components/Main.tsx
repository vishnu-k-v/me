import React, { Component } from "react";
import { Layout } from "antd";
import HeaderBar from "./headerBar";
import Profile from "./Profile";
import { Row, Col, Divider, Space } from "antd";
import Skills from "./Myskills";
import PortFolio from "./Portfolio";

const { Header, Footer, Sider, Content } = Layout;

class MainPart extends React.Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <HeaderBar />
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Row>
            <Profile></Profile>
          </Row>
          <Row gutter={[48, 52]} align="bottom">
            <Skills />
          </Row>

          <Row align="bottom">
            <PortFolio />
          </Row>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

export default MainPart;
