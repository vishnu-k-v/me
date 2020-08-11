import React, { Component } from "react";
import { Card, Badge, Typography } from "antd";
import Profilepic from "../Assets/Images/Profile.jpg";
import { Row, Col, Divider, Space } from "antd";

const { Meta } = Card;
const { Title, Text } = Typography;

export interface ProfileProps {}

const Profile: React.SFC<ProfileProps> = () => {
  const profileStyle = {
    // padding: "100px",
    // paddingRight: "100px",
    // paddingLeft: "100px",
    // height: "150px",
  };

  const DemoBox = (props: any) => (
    <p className={`height-${props.value}`}>{props.children}</p>
  );

  const style = { background: "#0092ff", padding: "8px 0" };

  const Contact = () => (
    <div>
      <Row>
        <Col span={6}>
          <Text strong>Email</Text>
        </Col>
        <Col span={6}>vishnu_kv@outlook.com</Col>
      </Row>
      <Row>
        <Col span={6}>
          <Text strong>Phone</Text>
        </Col>
        <Col span={6}>9744589609</Col>
      </Row>
      <Row>
        <Col span={6}>
          <Text strong>Skype</Text>
        </Col>
        <Col span={6}>hee</Col>
      </Row>
    </div>
  );

  return (
    <div style={profileStyle}>
      <Row gutter={[48, 100]}>
        <Card hoverable style={{ width: 1050 }}>
          <Row justify="space-around" align="middle">
            <Col span={6}>
              <img style={{ width: "65%", height: "90%" }} src={Profilepic} />
            </Col>
            <Col span={18}>
              <Row align="top">
                <Badge.Ribbon placement="start" text="Hi There"></Badge.Ribbon>
                <DemoBox value={50}>.</DemoBox>
              </Row>
              <Row>
                <Title level={3}>I'm </Title>

                <Title>Samuli Haverinen</Title>
              </Row>
              <Row>
                <Text strong>Full-Stack Web developer and Freelancer</Text>
              </Row>
              <Divider />

              <Contact />
            </Col>
          </Row>
          <Row style={style} justify="space-around" align="middle">
            <DemoBox value={200}>.</DemoBox>

            <div className="col-12"> Contacts insta git and</div>
          </Row>
        </Card>
      </Row>
      <Row gutter={[48, 50]}>
        Hi! I'm Samuli Haverinen. An experienced web developer, software
        architect and consultant. I'm very familiar with Microsoft .NET
        framework, modern client-side frameworks and both SQL and No-SQL
        databases. I've built a bunch of websites running in the cloud,
        participated in product development at startups and consulted some of
        the biggest companies in Finland.
      </Row>
    </div>
  );
};

export default Profile;
