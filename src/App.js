import React from "react";
import { Layout } from "antd";
import Navbar from "./App/Navbar";

const App = () => {
  const { Content } = Layout;
  return (
    <Content>
      <Navbar />
    </Content>
  );
};

export default App;
