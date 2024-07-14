import React, { useRef, useState, useEffect } from "react";
import {
  Layout,
  Button,
  Typography,
  Row,
  Col,
  Image,
  Divider,
  Space,
  Input,
} from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import { PrimaryButton } from "../../globalStyles";
import {
  StyledContent,
  StyledContent2,
  StyledContent3,
  FadeInComponent,
} from "./style";
import { ImgaeData } from "../../Utils/constant";

const { Content, Footer } = Layout;
const { Text, Title, Link } = Typography;
const { TextArea } = Input;

const HomePage = () => {
  const footerRef = useRef(null);
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Content>
      <Content
        style={{
          position: "relative",
          width: "99.2vw",
          height: "100vh",

          padding: 0,
        }}
      >
        <video
          ref={videoRef}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            marginTop: 25,
          }}
          controls
          poster="https://www.balestrierigroup.com/wp-content/uploads/2021/06/IMG_2629_DeolitionHeroOption.jpg"
        >
          <source
            type="video/mp4"
            src="https://civiltraksydney.com.au/wp-content/themes/seg/video/Revised.mp4"
          />
        </video>
        {!isPlaying && (
          <Button
            type="primary"
            shape="circle"
            icon={<PlayCircleOutlined />}
            size="large"
            onClick={handlePlayPause}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(255, 255, 255, 0.7)",
              border: "none",
              zIndex: 1,
            }}
          />
        )}
      </Content>
      <FadeInComponent className="fade-in">
        <Content
          style={{
            backgroundImage: `url("https://civiltraksydney.com.au/wp-content/themes/seg/images/about-secbg.jpg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            height: "30vh",
          }}
        >
          <Content style={{ width: "600px", marginLeft: "100px" }}>
            <Title style={{ width: "150px" }} level={2}>
              KNOW ABOUT US
            </Title>
            <Text style={{ fontSize: "20px" }}>
              Civiltrak Sydney posses expertise in the field of Demolition, Bulk
              and Detail Excavation, Shoring and Underpinning works.
            </Text>
          </Content>
        </Content>
      </FadeInComponent>
      <FadeInComponent className="fade-in">
        <Row style={{ marginTop: "5%" }} justify={"space-evenly"}>
          <Col>
            <Content style={{ width: "500px" }}>
              <Title level={2}>WHAT WE DO</Title>
              <Text style={{ fontSize: "15px" }}>
                If Excavation services is what you are after then we will
                deliver a professional reliable and affordable Excavation
                service. Our excavation services include everything from small
                detailed excavations for footings, trenches etc.
              </Text>
              <Title level={5} style={{ fontWeight: "bold", margin: 0 }}>
                CERTIFICATIONS
              </Title>
              <Divider
                style={{
                  marginTop: "5px",
                  width: "30%",
                  minWidth: "30%",
                  borderBlockStart: "1.8px solid rgba(5, 5, 5, 0.5)",
                }}
              />
              <Space>
                <Image
                  preview={false}
                  src="https://civiltraksydney.com.au/wp-content/uploads/2021/03/Certifications1.jpg"
                />

                <Image
                  preview={false}
                  src="https://civiltraksydney.com.au/wp-content/uploads/2021/03/Certifications2.jpg"
                />
                <Image
                  preview={false}
                  src="https://civiltraksydney.com.au/wp-content/uploads/2021/03/Certifications3.jpg"
                />
              </Space>
            </Content>
            <PrimaryButton>Know More</PrimaryButton>
          </Col>

          <Col>
            <Image
              preview={false}
              height={380}
              width={400}
              src="https://civiltraksydney.com.au/wp-content/uploads/2021/03/image1.jpg"
            />
          </Col>
        </Row>
      </FadeInComponent>
      <FadeInComponent className="fade-in">
        <Row style={{ marginTop: 50 }} justify={"space-evenly"}>
          {ImgaeData.map((data) => (
            <Col>
              <StyledContent>
                <StyledContent3>
                  <StyledContent2>
                    <Image
                      style={{
                        position: "relative",
                        left: "12%",
                        top: "50%",
                      }}
                      preview={false}
                      src={data.imageUrl}
                    />
                  </StyledContent2>
                </StyledContent3>
              </StyledContent>
              <Content style={{ width: "180px" }}>
                <Title level={4}>Demolition</Title>
                <Text>
                  Civiltrak Sydney has a proud history which gives the company a
                  vast experience…
                </Text>
                <Link href="https://ant.design" target="_blank">
                  LEARN MORE
                </Link>
              </Content>
            </Col>
          ))}
        </Row>
      </FadeInComponent>
      <FadeInComponent className="fade-in">
        <Row justify={"center"}>
          <Title level={2}>OUR PROJECTS</Title>
        </Row>
      </FadeInComponent>

      <FadeInComponent className="fade-in">
        <Row justify={"space-evenly"}>
          <Col>
            <Text>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3313.289122658977!2d151.079125!3d-33.856439!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb3329e67b03%3A0x762efe8b8023fac!2sBusiness%20Village%2C%20Homebush%20Business%20Village%2C%2053%2F21%20Underwood%20Rd%2C%20Homebush%20NSW%202140!5e0!3m2!1sen!2sau!4v1718177840545!5m2!1sen!2sau"
                width="800"
                height="600"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Text>
          </Col>
          <Col>
            <Title level={2}>CONTACT US</Title>
            <Title level={4}>
              Unit 15, 8 Avenue of the Americas, Newington NSW 2127
            </Title>
            <Title level={4}>02 9627 9363</Title>
            <Title level={4}>admin@civiltraksydney.com.au</Title>
            <Title level={3}>GET IN TOUCH</Title>
            <Space
              direction="vertical"
              style={{
                width: "100%",
              }}
            >
              <Input size="large" placeholder="NAME" />
              <Space direction="horizontal" size="middle">
                <Space>
                  <Input size="large" placeholder="EMAIL" />
                  <Input size="large" placeholder="PHONE" />
                </Space>
              </Space>
              <TextArea rows={4} placeholder="MESSAGE" />
              <PrimaryButton>Submit</PrimaryButton>
            </Space>
          </Col>
        </Row>
        <Footer style={{ backgroundColor: "black" }} ref={footerRef}>
          <Row justify={"space-evenly"} align={"middle"}>
            <Text style={{ color: "#fff" }}>
              © 2024 All rights reserved. Civiltrak Sydney website Powered by KK
            </Text>
            <Image
              preview={false}
              src="https://civiltraksydney.com.au/wp-content/themes/seg/images/linkedin.png"
            />
          </Row>
        </Footer>
      </FadeInComponent>
    </Content>
  );
};

export default HomePage;
