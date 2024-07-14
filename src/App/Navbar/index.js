import React, { useState, useEffect } from "react";
import { Image, Layout, Row, Col } from "antd";
import { StyledText } from "./styles";
import PopOver from "../../Components/Popover";

const Navbar = () => {
  const { Content } = Layout;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingDown(currentScrollPos > scrollPosition);
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  const navbarStyle = {
    position: isScrollingDown ? "fixed" : "fixed",
    width: "100%",
    top: "0",
    left: "0",
    background: isScrollingDown ? "rgba(0, 0, 0, 0.8)" : "black",
    zIndex: "999",
    boxShadow: isScrollingDown ? "0 2px 3px rgba(0, 0, 0, 0.1)" : "none",
    paddingTop: "10px",
    opacity: isScrollingDown ? 0 : 1,
    transform: isScrollingDown
      ? "translate3d(0, -100%, 0)"
      : "translate3d(0, 0, 0)",
    transition: "opacity 0.3s ease, transform 0.3s ease",
  };

  return (
    <Content style={navbarStyle}>
      <Row justify={"space-between"} align={"middle"}>
        <Col>
          <Image
            preview={false}
            alt="logo"
            src="https://civiltraksydney.com.au/wp-content/themes/seg/images/logo.png"
          />
        </Col>
        <Col>
          <PopOver />
        </Col>

        <Col>
          <StyledText>02 9627 9363</StyledText>
        </Col>
      </Row>
    </Content>
  );
};

export default Navbar;
