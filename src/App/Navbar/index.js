import React from "react";
import {
  Image,
  Layout,
  Row,
  Col,
  Button,
  Popover,
  Typography,
  Space,
} from "antd";

const Navbar = () => {
  const { Content } = Layout;
  const { Text } = Typography;

  return (
    <Content style={{ backgroundColor: "black" }}>
      <Row>
        <Col>
          <Image
            preview={false}
            alt="logo"
            src="https://civiltraksydney.com.au/wp-content/themes/seg/images/logo.png"
          />
        </Col>
        {/* <Col span={8}>
          <Space wrap>
            <Styledpopover>
              <Button href="homepage">Home</Button>
            </Styledpopover>
            <Styledpopover>
              <Button href="shop">Shop</Button>
            </Styledpopover>
            <Styledpopover>
              <Button href="contact">Contact Us</Button>
            </Styledpopover>
            <Styledpopover>
              <Button href="User">Users</Button>
            </Styledpopover>
          </Space>
        </Col> */}

        <Col>
          <Text>02 9627 9363</Text>
        </Col>
      </Row>
    </Content>
  );
};

export default Navbar;
