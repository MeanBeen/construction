import { createGlobalStyle } from "styled-components";

import styled from "styled-components";
import { Button } from "antd";

export const GlobalStyle = createGlobalStyle`
  body,html {
    
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: Rubik;
    }
    `;

export const PrimaryButton = styled(Button)`
  &:where(.css-dev-only-do-not-override-3rel02).ant-btn {
    font-size: 20px;
    margin-top: 10px;
    padding: 25px 45px;
    border-radius: 1px;
    background-color: black;
    text-align: center;
    color: #fff;
    height: 30px;
  }

  &:where(.css-dev-only-do-not-override-3rel02).ant-btn-default:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    color: #fff;
    background-color: rgb(0, 0, 0, 0.2);
  }
`;
