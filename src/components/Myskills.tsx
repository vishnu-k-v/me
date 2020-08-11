import * as React from "react";
import { Component } from "react";
import { Row, Col, Divider, Typography, Progress, Tag } from "antd";
import { Card, Badge } from "antd";

const { Title, Text } = Typography;
const { Meta } = Card;

const myskills: any[] = [
  {
    skillName: "Microsoft .NET, C#, ASP.NET",
    Experiance: "3 Years",
    Percent: 85,
  },
  { skillName: "Angular 8", Experiance: "2 Years", Percent: 85 },
  {
    skillName: "SQL and No-SQL databases",
    Experiance: "3 Years",
    Percent: 90,
  },
  { skillName: "HTML & CSS", Experiance: "2 Years", Percent: 65 },
  { skillName: "JavaScript", Experiance: "2.8 Years", Percent: 80 },
  { skillName: "Agile development", Experiance: "2 Years", Percent: 59 },
];

const workedItems = [
  "REACT",
  "ANGULAR",
  ".NET CORE MVC",
  "WEB API REST",
  "JWT",
  "TYPESCRIPT",
  "NODE",
  "SASS",
  "GIT",
  "SQL SERVER",
  "ENTITY FRAMEWORK",
  "VISUAL STUDIO",
  "MATERIAL DESIGN",
  "SCRUM",
];

const Skills: React.SFC = () => {
  return (
    <div>
      <Title type="secondary">My Skills</Title>
      <Card style={{ width: 1050 }}>
        <Row gutter={[48, 16]}>
          <Col span={12}>
            <SkillBox start="0" end="2" />
          </Col>
          <Col span={12}>
            <SkillBox start="3" end="5" />
          </Col>
        </Row>
        <Row>
          <Title level={2} type="secondary">
            {" "}
            Recently I've worked with these...
          </Title>
        </Row>
        <Row>
          {workedItems.map((item) => (
            <Tag
              key={item}
              color="geekblue"
              style={{ marginBottom: "2 px", paddingBottom: "2 px" }}
            >
              {item}
            </Tag>
          ))}
          <Tag>Tag 1</Tag>
        </Row>
      </Card>
    </div>
  );
};

//single skill component
const SkillBox = (props: any) => {
  let data: any[] = [];
  for (let index = props.start; index <= props.end; index++) {
    const element = myskills[index];
    data.push(
      <div key={index}>
        <Row>
          <Col span={12}>
            <Text strong>{element.skillName}</Text>
          </Col>
          <Col span={12}>{element.Experiance}</Col>
        </Row>
        <Row>
          <Progress showInfo={false} percent={element.Percent} />
        </Row>
      </div>
    );
  }
  return <div>{data}</div>;
};

export default Skills;
