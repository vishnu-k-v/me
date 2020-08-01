import React, { Component } from "react";
import { Card, Avatar, Skeleton } from "antd";

const { Meta } = Card;

class Profile extends React.Component {
  render() {
    return (
      <Card
        hoverable
        style={{ width: 500 }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta
          avatar={
            <Avatar src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          }
          title="Europe Street beat"
          description="www.instagram.com"
        />
        <Skeleton avatar active>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
    );
  }
}

export default Profile;
