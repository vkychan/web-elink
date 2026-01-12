// src/steamEducationPage.tsx
import React, { FC } from "react";
import { Row, Col, Card, Typography, Divider, Space, Button, Tag } from "antd";
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
  TrophyOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Fade, Slide } from "react-awesome-reveal";

import heroImage from "../../assets/images/bk1.png";
import programImage1 from "../../assets/images/bk1.png";
import programImage2 from "../../assets/images/bk1.png";
import programImage3 from "../../assets/images/bk1.png";
import programImage4 from "../../assets/images/bk1.png";
import mentorImage from "../../assets/images/bk1.png";
import SchoolCarousel from "../school-carousel/SchoolCarousel";
import { Link, useNavigate } from "react-router-dom";
import "./SteamEducation.css";

const { Title, Paragraph, Text } = Typography;

const SteamEducationPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const purpleColor = "#6d28d9";

  const goals = [
    {
      num: "01",
      descKey: "steam.goals.goal1",
    },
    {
      num: "02",
      descKey: "steam.goals.goal2",
    },
    {
      num: "03",
      descKey: "steam.goals.goal3",
    },
  ];

  const programs = [
    {
      img: programImage1,
      titleKey: "steam.programs.program1.title", // eLink future scientist training course
      descKey: "steam.programs.program1.desc",
      path: "/services/steam-education/future-scientist",
    },
    {
      img: programImage2,
      titleKey: "steam.programs.program2.title", // eLink innovative steam course
      descKey: "steam.programs.program2.desc",
      path: "/services/steam-education/innovative-tech-tours",
    },
    {
      img: programImage3,
      titleKey: "steam.programs.program3.title", // eLink astronomer experience program
      descKey: "steam.programs.program3.desc",
      path: "/services/steam-education/astronomer-experience-program",
    },
    {
      img: programImage4,
      titleKey: "steam.programs.program4.title", // eLink innovative tech tour
      descKey: "steam.programs.program4.desc",
      path: "/services/steam-education/steam-course",
    },
  ];

  const courseGroups = [
    {
      ageKey: "steamPhilosophy.courses.age_4_7.age",
      titleKey: "steamPhilosophy.courses.age_4_7.title",
      courses: [
        {
          nameKey: "steamPhilosophy.courses.age_4_7.course1",
          path: "/steam-education/mtiny",
          icon: <RobotOutlined />,
        },
        {
          nameKey: "steamPhilosophy.courses.age_4_7.course2",
          path: "/steam-education/scratch-jr",
          icon: <DesktopOutlined />,
        },
        {
          nameKey: "steamPhilosophy.courses.age_4_7.course3",
          path: "/steam-education/little-discoverers",
          icon: <ExperimentOutlined />,
        },
      ],
    },
    {
      ageKey: "steamPhilosophy.courses.age_7_12.age",
      titleKey: "steamPhilosophy.courses.age_7_12.title",
      courses: [
        {
          nameKey: "steamPhilosophy.courses.age_7_12.course1",
          path: "/steam-education/scratch",
          icon: <DesktopOutlined />,
        },
        {
          nameKey: "steamPhilosophy.courses.age_7_12.course2",
          path: "/steam-education/microbit",
          icon: <RobotOutlined />,
        },
        {
          nameKey: "steamPhilosophy.courses.age_7_12.course3",
          path: "/steam-education/app-inventor",
          icon: <CodeOutlined />,
        },
        {
          nameKey: "steamPhilosophy.courses.age_7_12.course4",
          path: "/steam-education/3d-printing",
          icon: <BuildOutlined />,
        },
        {
          nameKey: "steamPhilosophy.courses.age_7_12.course5",
          path: "/steam-education/delightex",
          icon: <CameraOutlined />,
        },
        {
          nameKey: "steamPhilosophy.courses.age_7_12.course6",
          path: "/steam-education/ai-assistant",
          icon: <ProjectOutlined />,
        },
        {
          nameKey: "steamPhilosophy.courses.age_7_12.course7",
          path: "/steam-education/science-lab",
          icon: <ExperimentOutlined />,
        },
        {
          nameKey: "steamPhilosophy.courses.age_7_12.course8",
          path: "/steam-education/astronomer",
          icon: <GlobalOutlined />,
        },
        {
          nameKey: "steamPhilosophy.courses.age_7_12.course9",
          path: "/steam-education/competition-team",
          icon: <TrophyOutlined />,
        },
      ],
    },
    {
      ageKey: "steamPhilosophy.courses.age_12_18.age",
      titleKey: "steamPhilosophy.courses.age_12_18.title",
      courses: [
        {
          nameKey: "steamPhilosophy.courses.age_12_18.course1",
          path: "/steam-education/python",
          icon: <CodeOutlined />,
        },
        {
          nameKey: "steamPhilosophy.courses.age_12_18.course2",
          path: "/steam-education/design-thinking",
          icon: <ProjectOutlined />,
        },
        {
          nameKey: "steamPhilosophy.courses.age_12_18.course3",
          path: "/steam-education/ai-innovators",
          icon: <RobotOutlined />,
        },
        {
          nameKey: "steamPhilosophy.courses.age_12_18.course4",
          path: "/steam-education/competition-team",
          icon: <TrophyOutlined />,
        },
      ],
    },
  ];

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        {/* --- Hero Section --- */}
        <div style={{ position: "relative", height: "50vh", color: "#fff" }}>
          <img
            src={heroImage}
            alt={t("steam.title1")}
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
              justifyContent: "center",
              alignItems: "center",
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
              <Title
                style={{
                  color: "#fff",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                }}
              >
                {t("steam.title", "steam Education")}
              </Title>
            </Fade>
          </div>
        </div>

        <div style={{ padding: "50px 5%" }}>
          {/* --- Three Major Goals Section --- */}
          <div style={{ textAlign: "center", margin: "50px 0" }}>
            <Slide direction="down" triggerOnce>
              <Title level={2}>
                {t("steam.goals.title", "Our Three Major Goals")}
              </Title>
            </Slide>
            <Row
              gutter={[24, 24]}
              justify="center"
              style={{ marginTop: "40px" }}
            >
              {goals.map((goal, index) => (
                <Col xs={24} md={8} key={index}>
                  <Slide direction="up" delay={index * 100} triggerOnce>
                    <Card
                      style={{
                        height: "100%",
                        borderColor: purpleColor,
                        borderWidth: "2px",
                      }}
                    >
                      <Text
                        strong
                        style={{
                          fontSize: "48px",
                          color: purpleColor,
                          opacity: 0.7,
                        }}
                      >
                        {goal.num}
                      </Text>
                      <Paragraph
                        style={{
                          marginTop: "16px",
                          fontSize: "16px",
                          minHeight: "100px",
                        }}
                      >
                        {t(goal.descKey)}
                      </Paragraph>
                    </Card>
                  </Slide>
                </Col>
              ))}
            </Row>
          </div>

          <Divider />

          {/* --- Programs & Services Section --- */}
          <div style={{ textAlign: "center", margin: "50px 0" }}>
            <Slide direction="down" triggerOnce>
              <Title level={2}>{t("steamPhilosophy.courses.title")}</Title>
              <Paragraph
                style={{
                  fontSize: "16px",
                  maxWidth: "800px",
                  margin: "0 auto 40px auto",
                }}
              >
                {t("steamPhilosophy.courses.subtitle")}
              </Paragraph>
            </Slide>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "40px" }}
            >
              {courseGroups.map((group, index) => (
                <Slide
                  direction="up"
                  delay={index * 100}
                  triggerOnce
                  key={index}
                >
                  <Card
                    bordered={false}
                    style={{
                      backgroundColor: "#f5f5f7",
                      borderRadius: "24px",
                      textAlign: "left",
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
                    <Row gutter={[16, 16]}>
                      {group.courses.map((course, courseIndex) => (
                        <Col xs={24} md={12} lg={8} key={courseIndex}>
                          <Link to={course.path} className="course-list-item">
                            <span
                              style={{
                                color: purpleColor,
                                marginRight: "16px",
                                fontSize: "1.5rem",
                              }}
                            >
                              {course.icon}
                            </span>
                            <Text strong style={{ fontSize: "1rem" }}>
                              {t(course.nameKey)}
                            </Text>
                          </Link>
                        </Col>
                      ))}
                    </Row>
                  </Card>
                </Slide>
              ))}
            </div>
          </div>

          <Divider />

          {/* --- Programs & Services Section --- */}
          <div style={{ textAlign: "center", margin: "50px 0" }}>
            <Slide direction="down" triggerOnce>
              <Title level={2}>
                {t("steam.programs.title", "Our Programs and Services")}
              </Title>
            </Slide>
            <Row gutter={[24, 24]} style={{ marginTop: "40px" }}>
              {programs.map((program, index) => (
                <Col xs={24} sm={12} key={index}>
                  <Fade delay={index * 100} triggerOnce>
                    {program.path ? (
                      <Link
                        to={program.path}
                        style={{ textDecoration: "none" }}
                      >
                        <Card
                          hoverable
                          cover={
                            <img alt={t(program.titleKey)} src={program.img} />
                          }
                        >
                          <Card.Meta
                            title={t(program.titleKey)}
                            description={t(program.descKey)}
                          />
                        </Card>
                      </Link>
                    ) : (
                      <Card
                        hoverable
                        cover={
                          <img alt={t(program.titleKey)} src={program.img} />
                        }
                      >
                        <Card.Meta
                          title={t(program.titleKey)}
                          description={t(program.descKey)}
                        />
                      </Card>
                    )}
                  </Fade>
                </Col>
              ))}
            </Row>
          </div>

          <Divider />

          {/* --- Mentor Qualifications Section --- */}
          <div style={{ width: "100%", padding: "50px 5%" }}>
            <Row gutter={[48, 40]} align="middle">
              <Col xs={24} md={10}>
                <Slide direction="left" triggerOnce>
                  <img
                    src={mentorImage}
                    alt={t("steam.mentors.title")}
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
                  <Title level={3}>
                    {t("steam.mentors.title", "Expert Mentor Team")}
                  </Title>
                  <Paragraph style={{ fontSize: "16px" }}>
                    {t(
                      "steam.mentors.desc",
                      "Our strength lies in our instructors..."
                    )}
                  </Paragraph>
                  <Space direction="vertical">
                    <Text>
                      <CheckCircleOutlined style={{ color: purpleColor }} />{" "}
                      {t(
                        "steam.mentors.point1",
                        "University researchers and PhD-level experts"
                      )}
                    </Text>
                    <Text>
                      <CheckCircleOutlined style={{ color: purpleColor }} />{" "}
                      {t(
                        "steam.mentors.point2",
                        "Experienced industry professionals from leading tech firms"
                      )}
                    </Text>
                    <Text>
                      <CheckCircleOutlined style={{ color: purpleColor }} />{" "}
                      {t(
                        "steam.mentors.point3",
                        "Passionate educators with proven teaching records"
                      )}
                    </Text>
                  </Space>
                </Slide>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <SchoolCarousel />
    </>
  );
};

export default SteamEducationPage;
