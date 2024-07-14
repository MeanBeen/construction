import React from "react";
import { Layout } from "antd";
import Navbar from "./App/Navbar";
import HomePage from "./Containers/Homepage";
import { GlobalStyle } from "./globalStyles";

const App = () => {
  const { Content } = Layout;
  return (
    <Content>
      <GlobalStyle />
      <Navbar />
      <HomePage />
    </Content>
  );
};

export default App;
