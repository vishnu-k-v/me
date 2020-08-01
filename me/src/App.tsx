import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPart from "./components/Main";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <MainPart />
    </div>
  );
}

export default App;
