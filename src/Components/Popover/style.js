import styled from "styled-components";
import { Popover } from "antd";

export const StyledPopover = styled(Popover)`
  font-size: 20px;
  border: none;
  padding: 2px;
  color: #fff;
  background-color: black;
  box-shadow: none;
  /* text-decoration: underline;
  text-decoration-color: transparent; */
  /* transition: text-decoration-color 0.3s ease-in-out; */

  &:where(.css-dev-only-do-not-override-3rel02).ant-btn-default:not(
      :disabled
    ):not(.ant-btn-disabled):hover {
    color: white;
    border-color: black;
    background: black;
    text-decoration: underline;

    /* text-decoration-color: white; */
  }
`;

/* &::after {
      content: "";
      position: absolute;
      z-index: -1;
      left: 0; 
      right: 0; 
      bottom: 10px;
      background: #fff;
      height: 3px;
      transition: left 0.3s ease-out, right 0.3s ease-out;
    } */
