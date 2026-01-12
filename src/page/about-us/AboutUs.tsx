// src/AboutUsPage.tsx
import React, { FC } from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Avatar,
  Divider,
  Space,
  Button,
} from "antd";
import {
  BankOutlined,
  TeamOutlined,
  ToolOutlined,
  RocketOutlined,
  ExperimentOutlined,
  CheckCircleOutlined,
  ArrowLeftOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Fade, Slide } from "react-awesome-reveal";

import steamImage from "../../assets/images/bk2-2.png";
import { KeyContactsSection } from "../contact-us/ContactUs";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const AboutUsPage: FC = () => {
  const { t } = useTranslation();
  const purpleColor = "#6d28d9";
  const navigate = useNavigate();

  const focusAreas = [
    { key: "about.steam.area1", text: "Robotics and AI Literacy Workshops" },
    {
      key: "about.steam.area2",
      text: "Creative Coding and Game Design Programs",
    },
    {
      key: "about.steam.area3",
      text: "Digital Arts and Virtual Reality Projects",
    },
  ];

  const pillars = [
    {
      icon: <BankOutlined style={{ fontSize: "24px", color: purpleColor }} />,
      titleKey: "about.pillars.academia.title",
      descKey: "about.pillars.academia.desc",
    },
    {
      icon: <TeamOutlined style={{ fontSize: "24px", color: purpleColor }} />,
      titleKey: "about.pillars.institutions.title",
      descKey: "about.pillars.institutions.desc",
    },
    {
      icon: <ToolOutlined style={{ fontSize: "24px", color: purpleColor }} />,
      titleKey: "about.pillars.tech.title",
      descKey: "about.pillars.tech.desc",
    },
    {
      icon: <RocketOutlined style={{ fontSize: "24px", color: purpleColor }} />,
      titleKey: "about.pillars.commercial.title",
      descKey: "about.pillars.commercial.desc",
    },
  ];

  return (
    <div style={{ padding: "80px 5%", overflow: "hidden" }}>
      <Button
        type="text"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)}
        style={{
          position: "absolute",
          top: "85px",
          left: "20px",
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "none",
        }}
      >
        {/* {t("common.back")} */}
      </Button>

      {/* --- Hero Section --- */}
      <Fade triggerOnce>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <Title level={2}>{t("about.pageTitle", "About Our Mission")}</Title>
          <Paragraph
            style={{ fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}
          >
            {t(
              "about.summary",
              "eLink targets future technologies like AI, Metaverse, and 6G..."
            )}
          </Paragraph>
        </div>
      </Fade>

      {/* --- Ecosystem Section --- */}
      <div style={{ marginBottom: "60px" }}>
        <Slide direction="up" triggerOnce>
          <Title
            level={3}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            {t(
              "about.ecosystemTitle",
              "Government-Industry-Academia-Research-Application Ecosystem"
            )}
          </Title>
        </Slide>
        <Row gutter={[24, 24]}>
          {pillars.map((pillar, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <Slide direction="up" delay={index * 100} triggerOnce>
                <Card
                  hoverable
                  style={{
                    height: "18rem",
                    textAlign: "center",
                    cursor: "default",
                  }}
                >
                  <Avatar
                    size={64}
                    icon={pillar.icon}
                    style={{ backgroundColor: "rgba(109, 40, 217, 0.1)" }}
                  />
                  <Title level={5} style={{ marginTop: "20px" }}>
                    {t(pillar.titleKey)}
                  </Title>
                  <Paragraph type="secondary">{t(pillar.descKey)}</Paragraph>
                </Card>
              </Slide>
            </Col>
          ))}
        </Row>
      </div>

      <Divider />

      <div style={{ marginTop: "60px" }}>
        <Row gutter={[48, 40]} align="middle">
          <Col xs={24} md={12}>
            <Slide direction="left" triggerOnce>
              <Title level={3}>
                {t("about.steam.title", "STEAM Education Initiatives")}
              </Title>
              <Paragraph style={{ fontSize: "16px" }}>
                {t(
                  "about.steam.desc",
                  "Beyond business, we are committed to nurturing the next generation of innovators..."
                )}
              </Paragraph>
              <Text strong>{t("about.steam.focusAreas", "Focus Areas:")}</Text>

              <div
                style={{
                  backgroundColor: "rgba(109, 40, 217, 0.05)",
                  padding: "24px",
                  borderRadius: "12px",
                  marginTop: "16px",
                }}
              >
                <Space
                  direction="vertical"
                  size="middle"
                  style={{ width: "100%" }}
                >
                  {focusAreas.map((area) => (
                    <Text key={area.key} style={{ fontSize: "16px" }}>
                      <CheckCircleOutlined
                        style={{ color: purpleColor, marginRight: "12px" }}
                      />
                      {t(area.key, area.text)}
                    </Text>
                  ))}
                </Space>
              </div>

              <Button
                href='/services/steam-education/steam-education-philosophy'
                type="primary"
                size="large"
                style={{ backgroundColor: purpleColor, marginTop: "24px" }}
              >
                {t("about.steam.button")} <RightCircleOutlined />
              </Button>
            </Slide>
          </Col>
          <Col xs={24} md={12}>
            <Slide direction="right" triggerOnce>
              <img
                src={steamImage}
                alt="STEAM Education"
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
              />
            </Slide>
          </Col>
        </Row>
      </div>
      <KeyContactsSection />
    </div>
  );
};

export default AboutUsPage;
