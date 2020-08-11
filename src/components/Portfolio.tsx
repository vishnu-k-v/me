import * as React from "react";
import { Component, useState, useEffect } from "react";
import { Row, Col, Divider, Carousel, Typography, Progress, Tag } from "antd";
import { Card, Badge } from "antd";

const { Title, Text } = Typography;
const { Meta } = Card;

export interface PortFolioProps {}

const PortFolio: React.SFC<PortFolioProps> = () => {
  const [projectDetails, setProjectDetails] = useState(String);
  const contentStyle = {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    background: "#364d79",
  };

  const changeHandler = (current: number) => {
    setProjectDetails(projects[current]);
  };

  const projects = [
    "Writing Assistant",
    "Gym Management",
    "Doctor appoinment schedular",
    "My PortFolio",
  ];
  return (
    <div>
      <Title type="secondary">Portfolio</Title>
      <Text>
        Here are a few projects that I've been working with lately. The list
        isn't comprehensive so please ask me for more details!
      </Text>
      <Card style={{ width: 1050 }}>
        <Carousel afterChange={changeHandler} autoplay>
          {projects.map((item, index) => (
            <div key={index}>
              <h3 style={contentStyle}>item</h3>
            </div>
          ))}
        </Carousel>
        <Row>{projectDetails}</Row>
      </Card>
    </div>
  );
};

export default PortFolio;
