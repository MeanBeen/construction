import React from "react";
import { Space, Button } from "antd";
import { StyledPopover } from "./style";

const PopOver = () => {
  return (
    <>
      <Space wrap>
        <StyledPopover>
          <Button href="homepage">Home</Button>
        </StyledPopover>
        <StyledPopover>
          <Button href="shop">About Us</Button>
        </StyledPopover>
        <StyledPopover>
          <Button href="contact">Services</Button>
        </StyledPopover>
        <StyledPopover>
          <Button href="User">Projects</Button>
        </StyledPopover>
        <StyledPopover>
          <Button href="User">Darud Sandstorm</Button>
        </StyledPopover>
        <StyledPopover>
          <Button href="User">Contact Us</Button>
        </StyledPopover>
        <StyledPopover>
          <Button href="User">Request A Quote</Button>
        </StyledPopover>
      </Space>
    </>
  );
};

export default PopOver;
