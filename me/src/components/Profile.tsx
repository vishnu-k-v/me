import React, { Component } from "react";
import { Card } from "antd";

const { Meta } = Card;

class Profile extends React.Component {
  render() {
    const profileStyle = {
      padding: "100px",
    };
    return (
      <div style={profileStyle}>
        <Card
          hoverable
          style={{ width: 1200 }}
          cover={
            <div>
              <div className="row">
                <div className="col-4">Photo</div>
                <div className="col-8">
                  <div className="row">Name </div>
                  <div className="row">Caontact </div>
                  <div className="row">something </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12"> Contacts insta git and</div>
              </div>
            </div>
          }
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </div>
    );
  }
}

export default Profile;
