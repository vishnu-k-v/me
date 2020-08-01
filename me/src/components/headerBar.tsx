import React, { Component } from "react";
import { Layout, Menu } from "antd";

const { Header, Footer, Sider, Content } = Layout;

class HeaderBar extends React.Component {
  state = { menus: ["About", "Portfolio", "Skills", "Journey", "Contact"] };
  render() {
    return (
      <div>
        <div className="logo">Vishnu K V</div>
        <Menu theme="dark" mode="horizontal">
          {this.state.menus.map((menu, index) => (
            <Menu.Item key={index}>{menu}</Menu.Item>
          ))}
        </Menu>
      </div>
    );
  }
}

export default HeaderBar;
