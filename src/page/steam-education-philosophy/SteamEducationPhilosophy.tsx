// src/SteamPhilosophyPage.tsx
import React, { FC, ReactNode } from "react";
import { Row, Col, Typography, Button, Card, List, Tag } from "antd";
import {
  ArrowLeftOutlined,
  BuildOutlined,
  CameraOutlined,
  CheckCircleOutlined,
  CodeOutlined,
  DesktopOutlined,
  ExperimentOutlined,
  GlobalOutlined,
  ProjectOutlined,
  RightCircleOutlined,
  RobotOutlined,
  RocketOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";
import "../../index.css";
import "./SteamEducationPhilosophy.css";

const { Title, Paragraph, Text } = Typography;

const ArticleSection: FC<{ children: ReactNode }> = ({ children }) => (
  <section
    style={{ maxWidth: "900px", margin: "80px auto", padding: "0 20px" }}
  >
    {children}
  </section>
);

const SteamPhilosophyPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const purpleColor = "#6d28d9";

  const wefSkills = [
    { key: "steamPhilosophy.wefSkills.skill1" },
    { key: "steamPhilosophy.wefSkills.skill2" },
    { key: "steamPhilosophy.wefSkills.skill3" },
    { key: "steamPhilosophy.wefSkills.skill4" },
    { key: "steamPhilosophy.wefSkills.skill5" },
    { key: "steamPhilosophy.wefSkills.skill6" },
    { key: "steamPhilosophy.wefSkills.skill7" },
    { key: "steamPhilosophy.wefSkills.skill8" },
    { key: "steamPhilosophy.wefSkills.skill9" },
    { key: "steamPhilosophy.wefSkills.skill10" },
  ];

  const stage1Disciplines = [
    { key: "steamPhilosophy.part2.stage1.discipline.s", color: "#ef4444" },
    { key: "steamPhilosophy.part2.stage1.discipline.t", color: "#3b82f6" },
    { key: "steamPhilosophy.part2.stage1.discipline.e", color: "#22c55e" },
    { key: "steamPhilosophy.part2.stage1.discipline.a", color: "#8b5cf6" },
    { key: "steamPhilosophy.part2.stage1.discipline.m", color: "#f97316" },
  ];

  const stage2Disciplines = [
    {
      letterKey: "steamPhilosophy.part2.stage2.discipline.sm.letter",
      descKey: "steamPhilosophy.part2.stage2.discipline.sm.desc",
      color: "#ef4444",
    },
    {
      letterKey: "steamPhilosophy.part2.stage2.discipline.t.letter",
      descKey: "steamPhilosophy.part2.stage2.discipline.t.desc",
      color: "#3b82f6",
    },
    {
      letterKey: "steamPhilosophy.part2.stage2.discipline.e.letter",
      descKey: "steamPhilosophy.part2.stage2.discipline.e.desc",
      color: "#22c55e",
    },
    {
      letterKey: "steamPhilosophy.part2.stage2.discipline.a.letter",
      descKey: "steamPhilosophy.part2.stage2.discipline.a.desc",
      color: "#8b5cf6",
    },
  ];

  const stage3Disciplines = [
    {
      letterKey: "steamPhilosophy.part2.stage3.discipline.sm.letter",
      descKey: "steamPhilosophy.part2.stage3.discipline.sm.desc",
      color: "#ef4444",
    },
    {
      letterKey: "steamPhilosophy.part2.stage3.discipline.t.letter",
      descKey: "steamPhilosophy.part2.stage3.discipline.t.desc",
      color: "#3b82f6",
    },
    {
      letterKey: "steamPhilosophy.part2.stage3.discipline.e.letter",
      descKey: "steamPhilosophy.part2.stage3.discipline.e.desc",
      color: "#22c55e",
    },
    {
      letterKey: "steamPhilosophy.part2.stage3.discipline.a.letter",
      descKey: "steamPhilosophy.part2.stage3.discipline.a.desc",
      color: "#8b5cf6",
    },
  ];

  const courseGroups = [
    {
      ageKey: "steamPhilosophy.courses.age_4_7.age",
      titleKey: "steamPhilosophy.courses.age_4_7.title",
      courses: [
        {
          key: "steamPhilosophy.courses.age_4_7.course1",
          icon: <RobotOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_4_7.course2",
          icon: <DesktopOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_4_7.course3",
          icon: <ExperimentOutlined />,
        },
      ],
    },
    {
      ageKey: "steamPhilosophy.courses.age_7_12.age",
      titleKey: "steamPhilosophy.courses.age_7_12.title",
      courses: [
        {
          key: "steamPhilosophy.courses.age_7_12.course1",
          icon: <DesktopOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_7_12.course2",
          icon: <RobotOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_7_12.course3",
          icon: <CodeOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_7_12.course4",
          icon: <BuildOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_7_12.course5",
          icon: <CameraOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_7_12.course6",
          icon: <ProjectOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_7_12.course7",
          icon: <ExperimentOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_7_12.course8",
          icon: <GlobalOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_7_12.course9",
          icon: <TrophyOutlined />,
        },
      ],
    },
    {
      ageKey: "steamPhilosophy.courses.age_12_18.age",
      titleKey: "steamPhilosophy.courses.age_12_18.title",
      courses: [
        {
          key: "steamPhilosophy.courses.age_12_18.course1",
          icon: <CodeOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_12_18.course2",
          icon: <CodeOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_12_18.course3",
          icon: <BuildOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_12_18.course4",
          icon: <CameraOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_12_18.course5",
          icon: <ProjectOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_12_18.course6",
          icon: <RobotOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_12_18.course7",
          icon: <RocketOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_12_18.course8",
          icon: <GlobalOutlined />,
        },
        {
          key: "steamPhilosophy.courses.age_12_18.course9",
          icon: <TrophyOutlined />,
        },
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: "#fff", color: "#1d1d1f" }}>
      

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
      <div style={{ textAlign: "center", padding: "120px 20px 60px 20px" }}>
        <Fade triggerOnce>
          <Title
            style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700 }}
          >
            {t("steamPhilosophy.hero.title")}
          </Title>
          <Title
            level={2}
            style={{ color: "#86868b", marginTop: "1rem", fontWeight: 500 }}
          >
            {t("steamPhilosophy.hero.subtitle")}
          </Title>
        </Fade>
      </div>

      {/* --- Introduction --- */}
      <ArticleSection>
        <Slide direction="up" triggerOnce>
          <Card
            style={{
              backgroundColor: "#f5f5f7",
              border: "none",
              borderRadius: "24px",
              padding: "20px",
            }}
          >
            <Paragraph style={{ fontSize: "1.2rem", lineHeight: 1.7 }}>
              {t("steamPhilosophy.intro.p1")}
            </Paragraph>
            <Paragraph
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.7,
                fontWeight: 600,
                color: purpleColor,
              }}
            >
              {t("steamPhilosophy.intro.p2")}
            </Paragraph>
          </Card>
        </Slide>
      </ArticleSection>

      {/* --- Part 1: I-Talent vs T-Talent --- */}
      <ArticleSection>
        <Slide direction="up" triggerOnce>
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            {t("steamPhilosophy.part1.title")}
          </Title>
        </Slide>
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Slide direction="up" triggerOnce>
              <Card
                title={t("steamPhilosophy.part1.iTalent.title")}
                bordered={false}
                style={{
                  backgroundColor: "#f5f5f7",
                  borderRadius: "24px",
                  height: "100%",
                }}
              >
                <Paragraph>{t("steamPhilosophy.part1.iTalent.desc")}</Paragraph>
              </Card>
            </Slide>
          </Col>
          <Col xs={24} md={12}>
            <Slide direction="up" triggerOnce delay={100}>
              <Card
                title={t("steamPhilosophy.part1.tTalent.title")}
                bordered={false}
                style={{
                  backgroundColor: "#f5f5f7",
                  borderRadius: "24px",
                  height: "100%",
                }}
              >
                <Paragraph>{t("steamPhilosophy.part1.tTalent.desc")}</Paragraph>
              </Card>
            </Slide>
          </Col>
        </Row>
      </ArticleSection>

      {/* --- WEF Skills Section --- */}
<ArticleSection>
  <Slide direction="up" triggerOnce>
    <div style={{
      backgroundColor: '#000',
      color: '#fff',
      borderRadius: '24px',
      padding: '40px 30px'
    }}>
      <Title level={3} style={{ color: '#fff', textAlign: 'center' }}>
        {t('steamPhilosophy.wefSkills.title', "Top 10 Fastest-Growing Skills by 2030")}
      </Title>
      <Paragraph style={{ color: '#a1a1a6', textAlign: 'center', marginBottom: '40px' }}>
        {t('steamPhilosophy.wefSkills.subtitle', "According to the World Economic Forum's 'Future of Jobs Report'")}
      </Paragraph>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Row gutter={[32, 16]} style={{ maxWidth: '800px' }}> 
          {wefSkills.map((item, index) => (
            <Col xs={24} md={12} key={item.key}>
              <div className="skill-item-hover">
                <Text style={{ color: '#f5f5f7', fontSize: '1rem' }}>
                  <span style={{ color: '#86868b', marginRight: '12px', minWidth: '25px', display: 'inline-block' }}>
                    {index + 1}.
                  </span>
                  {t(item.key)}
                </Text>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  </Slide>
</ArticleSection>

      {/* --- Part 2: The Developmental Blueprint --- */}
      <div
        style={{
          backgroundColor: "#f5f5f7",
          padding: "10px 0",
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <ArticleSection>
          <Slide direction="up" triggerOnce>
            <Title level={2} style={{ textAlign: "center" }}>
              {t("steamPhilosophy.part2.title")}
            </Title>
            <Paragraph
              style={{
                textAlign: "center",
                fontSize: "1.2rem",
                color: "#86868b",
                marginBottom: "60px",
              }}
            >
              {t("steamPhilosophy.part2.subtitle")}
            </Paragraph>
          </Slide>

          {/* --- Stage 1: Ages 4-7 --- */}
          <Slide direction="up" triggerOnce>
            <Card
              bordered={false}
              style={{ borderRadius: "24px", marginBottom: "40px" }}
            >
              <Title level={3}>{t("steamPhilosophy.part2.stage1.title")}</Title>
              <Text type="secondary">
                {t("steamPhilosophy.part2.stage1.psychology")}
              </Text>
              <Row gutter={[24, 24]} style={{ marginTop: "24px" }}>
                <Col xs={24} md={12}>
                  <Title level={5}>
                    {t("steamPhilosophy.part2.perspectiveTitle")}
                  </Title>
                  <Paragraph>
                    {t("steamPhilosophy.part2.stage1.perspectiveDesc")}
                  </Paragraph>
                </Col>
                <Col xs={24} md={12}>
                  <Title level={5}>
                    {t("steamPhilosophy.part2.focusTitle")}
                  </Title>
                  <Paragraph>
                    {t("steamPhilosophy.part2.stage1.focusDesc")}
                  </Paragraph>
                </Col>
              </Row>
              <Row
                gutter={[16, 16]}
                justify="center"
                style={{ marginTop: "24px" }}
              >
                {stage1Disciplines.map((disc) => (
                  <Col xs={24} sm={12} md={8} key={disc.key}>
                    {/* Using Card's `bodyStyle` for flexbox centering */}
                    <Card
                      style={{
                        backgroundColor: disc.color,
                        color: "#fff",
                        textAlign: "center",
                        height: "100%",
                        borderRadius: "16px",
                      }}
                      bodyStyle={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "20px 16px",
                        minHeight: "150px",
                      }}
                    >
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: "2rem",
                          fontWeight: "bold",
                          lineHeight: 1,
                        }}
                      >
                        {t(`${disc.key}.letter`)}
                      </Text>
                      <Paragraph
                        style={{
                          color: "rgba(255, 255, 255, 0.9)",
                          marginTop: "8px",
                          marginBottom: 0,
                        }}
                      >
                        {t(`${disc.key}.desc`)}
                      </Paragraph>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Slide>

          <Slide direction="up" triggerOnce>
            <Card
              bordered={false}
              style={{ borderRadius: "24px", marginBottom: "40px" }}
            >
              <Title level={3}>{t("steamPhilosophy.part2.stage2.title")}</Title>
              <Text type="secondary">
                {t("steamPhilosophy.part2.stage2.psychology")}
              </Text>
              <Row gutter={[24, 24]} style={{ marginTop: "24px" }}>
                <Col xs={24} md={12}>
                  <Title level={5}>
                    {t("steamPhilosophy.part2.perspectiveTitle")}
                  </Title>
                  <Paragraph>
                    {t("steamPhilosophy.part2.stage2.perspectiveDesc")}
                  </Paragraph>
                </Col>
                <Col xs={24} md={12}>
                  <Title level={5}>
                    {t("steamPhilosophy.part2.focusTitle")}
                  </Title>
                  <Paragraph>
                    {t("steamPhilosophy.part2.stage2.focusDesc")}
                  </Paragraph>
                </Col>
              </Row>
              <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
                {stage2Disciplines.map((disc) => (
                  <Col xs={24} md={6} key={disc.letterKey}>
                    <Card
                      style={{
                        backgroundColor: "#fff",
                        borderLeft: `4px solid ${disc.color}`,
                        height: "100%",
                      }}
                    >
                      <Text strong style={{ color: disc.color }}>
                        {t(disc.letterKey)}
                      </Text>
                      <Paragraph style={{ marginTop: "8px" }}>
                        {t(disc.descKey)}
                      </Paragraph>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Slide>

          {/* --- Stage 3: Ages 12-18 --- */}
          <Slide direction="up" triggerOnce>
            <Card
              bordered={false}
              style={{ borderRadius: "24px", marginBottom: "40px" }}
            >
              <Title level={3}>{t("steamPhilosophy.part2.stage3.title")}</Title>
              <Text type="secondary">
                {t("steamPhilosophy.part2.stage3.psychology")}
              </Text>
              <Row gutter={[24, 24]} style={{ marginTop: "24px" }}>
                <Col xs={24} md={12}>
                  <Title level={5}>
                    {t("steamPhilosophy.part2.perspectiveTitle")}
                  </Title>
                  <Paragraph>
                    {t("steamPhilosophy.part2.stage3.perspectiveDesc")}
                  </Paragraph>
                </Col>
                <Col xs={24} md={12}>
                  <Title level={5}>
                    {t("steamPhilosophy.part2.focusTitle")}
                  </Title>
                  <Paragraph>
                    {t("steamPhilosophy.part2.stage3.focusDesc")}
                  </Paragraph>
                </Col>
              </Row>
              <Row gutter={[16, 16]} style={{ marginTop: "24px" }}>
                {stage3Disciplines.map((disc) => (
                  <Col xs={24} md={6} key={disc.letterKey}>
                    <Card
                      style={{
                        backgroundColor: "#fff",
                        borderLeft: `4px solid ${disc.color}`,
                        height: "100%",
                      }}
                    >
                      <Text strong style={{ color: disc.color }}>
                        {t(disc.letterKey)}
                      </Text>
                      <Paragraph style={{ marginTop: "8px" }}>
                        {t(disc.descKey)}
                      </Paragraph>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Slide>
        </ArticleSection>
      </div>

      {/* --- Course by Age --- */}
      {/* <ArticleSection>
        <Slide direction="up" triggerOnce>
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            {t("steamPhilosophy.courses.title")}
          </Title>
        </Slide>
        <Row gutter={[24, 24]}>
          {courseGroups.map((group, index) => (
            <Col xs={24} md={8} key={index}>
              <Slide direction="up" delay={index * 100} triggerOnce>
                <Card
                  bordered={false}
                  style={{
                    backgroundColor: "#f5f5f7",
                    borderRadius: "24px",
                    height: "100%",
                    padding: "8px",
                  }}
                >
                  <Tag
                    color="purple"
                    style={{ fontSize: "1rem", padding: "6px 12px" }}
                  >
                    {t(group.ageKey)}
                  </Tag>
                  <Title level={4} style={{ marginTop: "16px" }}>
                    {t(group.titleKey)}
                  </Title>
                  <List
                    dataSource={group.courses}
                    renderItem={(course) => (
                      <List.Item style={{ border: "none", padding: "6px 0" }}>
                        <Text
                          style={{
                            display: "flex",
                            alignItems: "center",
                            fontSize: "1rem",
                          }}
                        >
                          <span
                            style={{
                              color: purpleColor,
                              marginRight: "12px",
                              fontSize: "1.2rem",
                            }}
                          >
                            {course.icon}
                          </span>
                          {t(course.key)}
                        </Text>
                      </List.Item>
                    )}
                  />
                </Card>
              </Slide>
            </Col>
          ))}
        </Row>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Button
            href="/services/steam-education"
            type="primary"
            size="large"
            style={{ backgroundColor: purpleColor }}
          >
            {t("steamPhilosophy.courses.button")} <RightCircleOutlined />
          </Button>
        </div>
      </ArticleSection> */}

      {/* --- Conclusion --- */}
      <div
        style={{
          backgroundColor: "#f5f5f7",
          padding: "1px 20px",
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        <ArticleSection>
          <Fade triggerOnce>
            <Title level={2} style={{ textAlign: "center" }}>
              {t("steamPhilosophy.conclusion.title")}
            </Title>
            <Paragraph
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.7,
                textAlign: "center",
                color: "#86868b",
                marginTop: "1rem",
              }}
            >
              {t("steamPhilosophy.conclusion.p1")}
            </Paragraph>
            <Paragraph
              style={{
                fontSize: "1.5rem",
                lineHeight: 1.7,
                textAlign: "center",
                fontWeight: 600,
                marginTop: "2rem",
              }}
            >
              {t("steamPhilosophy.conclusion.p2")}
            </Paragraph>
          </Fade>
        </ArticleSection>
      </div>
    </div>
  );
};

export default SteamPhilosophyPage;
