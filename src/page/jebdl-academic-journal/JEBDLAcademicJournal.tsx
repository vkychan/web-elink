import React, { FC } from "react";
import { Row, Col, Card, Typography, Button, Divider } from "antd";
import {
  ArrowLeftOutlined,
  DownloadOutlined,
  ReadOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { Fade, Slide } from "react-awesome-reveal";

import heroImage from "../../assets/images/banner1.png";
import journalCover from "../../assets/images/jebde2.png";
import journalContents from "../../assets/images/jebde.png";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const JEBDLAcademicJournalPage: FC = () => {
  const { t } = useTranslation();
  const purpleColor = "#6d28d9";
  const emeraldLink = "https://www.emerald.com/jebde";
  const downloadUrl = "/jebde2.pdf";
  const navigate = useNavigate();

  return (
    <div style={{ overflow: "hidden" }}>
      {/* --- Hero Section --- */}
      <div style={{ position: "relative", height: "50vh", color: "#fff" }}>
        <img
          src={heroImage}
          alt={t("journal.title")}
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
            <Title style={{ color: "#fff" }}>
              {t("journal.title", "JEBDE Academic Journal")}
            </Title>
            <Paragraph
              style={{ color: "rgba(255, 255, 255, 0.9)", maxWidth: "700px" }}
            >
              {t(
                "journal.subtitle",
                "The Journal of Electronic Business & Digital Economics"
              )}
            </Paragraph>
          </Fade>
        </div>
      </div>

      <div style={{ padding: "50px 5%" }}>
        {/* --- About the Journal Section  --- */}
        <Fade triggerOnce>
          <Row gutter={[48, 40]} align="middle">
            <Col xs={24} md={14}>
              <Title level={3}>
                {t("journal.about.title", "About the Journal")}
              </Title>
              <Paragraph style={{ fontSize: "16px" }}>
                {t(
                  "journal.about.desc",
                  "Co-founded with leading academic institutions, JEBDE is a peer-reviewed journal dedicated to advancing research and practice in the fields of electronic business and the digital economy. It serves as a premier platform for academics, researchers, and industry professionals to share innovative ideas and impactful findings."
                )}
              </Paragraph>
            </Col>
            <Col xs={24} md={10} style={{ textAlign: "center" }}>
              <Card hoverable>
                <Title level={4}>
                  {t("journal.cta.title", "Explore the Full Collection")}
                </Title>
                <Paragraph>
                  {t(
                    "journal.cta.desc",
                    "Visit the official page on Emerald Publishing for the latest issues, submission guidelines, and editorial board information."
                  )}
                </Paragraph>
                <Button
                  type="primary"
                  size="large"
                  icon={<ReadOutlined />}
                  href={emeraldLink}
                  target="_blank"
                  style={{ backgroundColor: purpleColor }}
                >
                  {t("journal.cta.button", "Visit Emerald Page")}
                </Button>
              </Card>
            </Col>
          </Row>
        </Fade>

        <Divider style={{ margin: "60px 0" }} />

        <div style={{ textAlign: "center" }}>
          <Slide direction="down" triggerOnce>
            <Title level={2}>{t("journal.previews.title")}</Title>
          </Slide>
          <Row justify="center" style={{ marginTop: "40px" }}>
            <Col xs={24} lg={20} xl={16}>
              <Slide direction="up" triggerOnce>
                <Card>
                  <Title level={4}>{t("journal.issue.title")}</Title>
                  <Paragraph type="secondary">
                    {t("journal.issue.desc")}
                  </Paragraph>

                  <Row gutter={[16, 16]} style={{ margin: "24px 0" }}>
                    <Col xs={24} sm={12}>
                      <img
                        src={journalCover}
                        alt={t("journal.issue.coverAlt")}
                        style={{
                          width: "100%",
                          borderRadius: "8px",
                          border: "1px solid #f0f0f0",
                        }}
                      />
                    </Col>
                    <Col xs={24} sm={12}>
                      <img
                        src={journalContents}
                        alt={t("journal.issue.contentsAlt")}
                        style={{
                          width: "100%",
                          borderRadius: "8px",
                          border: "1px solid #f0f0f0",
                        }}
                      />
                    </Col>
                  </Row>

                  <Button
                    type="primary"
                    icon={<DownloadOutlined />}
                    href={downloadUrl}
                    download
                    style={{ backgroundColor: purpleColor }}
                  >
                    {t("journal.previews.download")}
                  </Button>
                </Card>
              </Slide>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default JEBDLAcademicJournalPage;
