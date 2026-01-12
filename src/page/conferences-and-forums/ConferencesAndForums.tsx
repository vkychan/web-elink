// src/ConferencesAndForumsPage.tsx
import React, { FC } from "react";
import { Row, Col, Card, Typography, Button, Divider, Tag, Space } from "antd";
import {
  BulbOutlined,
  WechatOutlined,
  TeamOutlined,
  RightCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

import heroImage from "../../assets/images/forum/202405-1.png";
import eventImage1 from "../../assets/images/banner1.png";
import eventImage2 from "../../assets/images/banner1.png";
import eventImage3 from "../../assets/images/banner1.png";

const { Title, Paragraph, Text } = Typography;

const ConferencesAndForumsPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const purpleColor = "#6d28d9";

  const features = [
    {
      icon: <BulbOutlined style={{ fontSize: "24px", color: purpleColor }} />,
      titleKey: "forums.features.feature1.title",
      descKey: "forums.features.feature1.desc",
    },
    {
      icon: <WechatOutlined style={{ fontSize: "24px", color: purpleColor }} />,
      titleKey: "forums.features.feature2.title",
      descKey: "forums.features.feature2.desc",
    },
    {
      icon: <TeamOutlined style={{ fontSize: "24px", color: purpleColor }} />,
      titleKey: "forums.features.feature3.title",
      descKey: "forums.features.feature3.desc",
    },
  ];

  const pastEvents = [
    {
      image: eventImage1,
      eventTypeKey: "forums.events.event1.eventType",
      titleKey: "forums.events.event1.title",
      dateKey: "forums.events.event1.date",
      summaryKey: "forums.events.event1.summary",
    },
    {
      image: eventImage2,
      eventTypeKey: "forums.events.event2.eventType",
      titleKey: "forums.events.event2.title",
      dateKey: "forums.events.event2.date",
      summaryKey: "forums.events.event2.summary",
    },
    {
      image: eventImage3,
      eventTypeKey: "forums.events.event3.eventType",
      titleKey: "forums.events.event3.title",
      dateKey: "forums.events.event3.date",
      summaryKey: "forums.events.event3.summary",
    },
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      {/* --- Hero Section --- */}
      <div style={{ position: "relative", height: "50vh", color: "#fff" }}>
        <img
          src={heroImage}
          alt={t("forums.title")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate(-1)}
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              border: "none",
            }}
          >
            {/* {t("common.back")} */}
          </Button>
          <Fade triggerOnce>
            <Title style={{ color: "#fff" }}>{t("forums.title")}</Title>
            <Paragraph
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: "800px",
                fontSize: "18px",
              }}
            >
              {t("forums.subtitle")}
            </Paragraph>
          </Fade>
        </div>
      </div>

      <div style={{ padding: "50px 5%" }}>
        {/* --- Features Section --- */}
        <div style={{ textAlign: "center", margin: "50px 0" }}>
          <Slide direction="down" triggerOnce>
            <Title level={2}>{t("forums.features.title")}</Title>
          </Slide>
          <Row gutter={[24, 24]} style={{ marginTop: "40px" }}>
            {features.map((feature, index) => (
              <Col xs={24} md={8} key={index}>
                <Fade delay={index * 100} triggerOnce>
                  <Card hoverable style={{ height: "100%", cursor: "default" }}>
                    {feature.icon}
                    <Title level={4} style={{ marginTop: "16px" }}>
                      {t(feature.titleKey)}
                    </Title>
                    <Paragraph type="secondary">{t(feature.descKey)}</Paragraph>
                  </Card>
                </Fade>
              </Col>
            ))}
          </Row>
        </div>

        <Divider />

        {/* --- Featured Past Event Section --- */}
        <div style={{ margin: "50px 0" }}>
          <Slide direction="down" triggerOnce>
            <Title
              level={2}
              style={{ textAlign: "center", marginBottom: "40px" }}
            >
              {t("forums.pastEventsTitle")}
            </Title>
          </Slide>

          {pastEvents.map((event, index) => {
            // Determine if the layout should be reversed on desktop
            const isReversed = index % 2 !== 0;

            return (
              <Card style={{ marginBottom: "40px", width: "100%" }} key={index}>
                <Row gutter={[32, 32]} align="middle">
                  <Col
                    xs={{ span: 24, order: 1 }}
                    md={{ span: 12, order: isReversed ? 2 : 1 }}
                  >
                    <Slide
                      direction={isReversed ? "right" : "left"}
                      triggerOnce
                    >
                      <Tag color="purple">{t(event.eventTypeKey)}</Tag>
                      <Title level={3} style={{ marginTop: "10px" }}>
                        {t(event.titleKey)}
                      </Title>
                      <Text strong>{t("forums.dateLabel", "Date")}:</Text>{" "}
                      <Text>{t(event.dateKey)}</Text>
                      <Paragraph style={{ marginTop: "20px" }}>
                        {t(event.summaryKey)}
                      </Paragraph>
                    </Slide>
                  </Col>
                  <Col
                    xs={{ span: 24, order: 0 }}
                    md={{ span: 12, order: isReversed ? 1 : 2 }}
                  >
                    <Slide
                      direction={isReversed ? "left" : "right"}
                      triggerOnce
                    >
                      <img
                        src={event.image}
                        alt={t(event.titleKey)}
                        style={{ width: "100%", borderRadius: "8px" }}
                      />
                    </Slide>
                  </Col>
                </Row>
              </Card>
            );
          })}
        </div>

        <Divider />

        {/* --- Call to Action Section --- */}
        <div style={{ margin: "50px 0" }}>
          <Fade triggerOnce>
            <Card style={{ textAlign: "center", backgroundColor: "#f9fafb" }}>
              <Title level={3}>{t("forums.cta.title")}</Title>
              <Paragraph>{t("forums.cta.desc")}</Paragraph>
              <Button
                type="primary"
                size="large"
                onClick={() => navigate("/contact")}
                style={{ backgroundColor: purpleColor }}
              >
                {t("forums.cta.button")} <RightCircleOutlined />
              </Button>
            </Card>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ConferencesAndForumsPage;
