// src/CollaborativeResearchPage.tsx
import React, { FC } from "react";
import { Row, Col, Card, Typography, Button, Divider, List, Tag } from "antd";
import {
  ApiOutlined,
  ArrowLeftOutlined,
  BarChartOutlined,
  CheckCircleOutlined,
  ExperimentOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

import heroImage from "../../assets/images/bk2-2.png";
import caseStudyImage from "../../assets/images/bk2-2.png";

const { Title, Paragraph, Text } = Typography;

const CollaborativeResearchPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const purpleColor = "#6d28d9";

  const researchAreas = [
    {
      icon: <ApiOutlined style={{ fontSize: "32px", color: purpleColor }} />,
      titleKey: "research.areas.area1.title",
      descKey: "research.areas.area1.desc",
    },
    {
      icon: (
        <ExperimentOutlined style={{ fontSize: "32px", color: purpleColor }} />
      ),
      titleKey: "research.areas.area2.title",
      descKey: "research.areas.area2.desc",
    },
    {
      icon: (
        <BarChartOutlined style={{ fontSize: "32px", color: purpleColor }} />
      ),
      titleKey: "research.areas.area3.title",
      descKey: "research.areas.area3.desc",
    },
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      {/* --- Hero Section --- */}
      <div style={{ position: "relative", height: "50vh", color: "#fff" }}>
        <img
          src={heroImage}
          alt={t("research.title")}
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
          <Fade triggerOnce>
            <Title style={{ color: "#fff" }}>{t("research.title")}</Title>
            <Paragraph
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                maxWidth: "800px",
                fontSize: "18px",
              }}
            >
              {t("research.subtitle")}
            </Paragraph>
          </Fade>

          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate(-1)}
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              zIndex: 2,
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            {/* {t('common.back')} */}
          </Button>
        </div>
      </div>

      <div style={{ padding: "50px 5%" }}>
        {/* --- Key Research Areas Section --- */}
        <div style={{ textAlign: "center", margin: "50px 0" }}>
          <Slide direction="down" triggerOnce>
            <Title level={2}>{t("research.areas.title")}</Title>
          </Slide>
          <Row gutter={[24, 24]} style={{ marginTop: "40px" }}>
            {researchAreas.map((area, index) => (
              <Col xs={24} md={8} key={index}>
                <Fade delay={index * 100} triggerOnce>
                  <Card hoverable style={{ height: "100%", cursor: "default" }}>
                    {area.icon}
                    <Title level={4} style={{ marginTop: "16px" }}>
                      {t(area.titleKey)}
                    </Title>
                    <Paragraph type="secondary">{t(area.descKey)}</Paragraph>
                  </Card>
                </Fade>
              </Col>
            ))}
          </Row>
        </div>

        <Divider />

        {/* --- Case Study Section --- */}
        <div style={{ margin: "50px 0" }}>
          <Row gutter={[48, 40]} align="middle">
            <Col xs={24} md={10}>
              <Slide direction="left" triggerOnce>
                <img
                  src={caseStudyImage}
                  alt={t("research.caseStudy.title")}
                  style={{
                    width: "100%",
                    borderRadius: "16px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                />
              </Slide>
            </Col>
            <Col xs={24} md={14}>
              <Slide direction="right" triggerOnce>
                <Tag color="purple">{t("research.caseStudy.tag")}</Tag>
                <Title level={3} style={{ marginTop: "10px" }}>
                  {t("research.caseStudy.title")}
                </Title>
                <Paragraph style={{ fontSize: "16px" }}>
                  {t("research.caseStudy.desc")}
                </Paragraph>
                <List
                  size="small"
                  dataSource={[
                    t("research.caseStudy.point1"),
                    t("research.caseStudy.point2"),
                    t("research.caseStudy.point3"),
                  ]}
                  renderItem={(item) => (
                    <List.Item style={{ border: "none", padding: "4px 0" }}>
                      <Text>
                        <CheckCircleOutlined
                          style={{ color: purpleColor, marginRight: "12px" }}
                        />
                        {item}
                      </Text>
                    </List.Item>
                  )}
                />
              </Slide>
            </Col>
          </Row>
        </div>

        <Divider />

        {/* --- Call to Action Section --- */}
        <div style={{ margin: "50px 0" }}>
          <Fade triggerOnce>
            <Card style={{ textAlign: "center", backgroundColor: "#f9fafb" }}>
              <Title level={3}>{t("research.cta.title")}</Title>
              <Paragraph>{t("research.cta.desc")}</Paragraph>
              <Button
                type="primary"
                size="large"
                onClick={() => navigate("/contact")}
                style={{ backgroundColor: purpleColor }}
              >
                {t("research.cta.button")} <RightCircleOutlined />
              </Button>
            </Card>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default CollaborativeResearchPage;
