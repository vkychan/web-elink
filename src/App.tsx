import React, { useState, FC, useEffect, useRef } from "react";
import {
  Layout,
  Menu,
  Carousel,
  Dropdown,
  Button,
  Grid,
  Drawer,
  FloatButton,
  Row,
  Col,
  Typography,
  Card,
} from "antd";
import {
  MenuOutlined,
  GlobalOutlined,
  DownOutlined,
  LaptopOutlined,
  BarChartOutlined,
  SolutionOutlined,
  MailOutlined,
  WhatsAppOutlined,
  FundProjectionScreenOutlined,
  ExperimentOutlined,
  TeamOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import "./index.css";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { MenuProps } from "antd/lib/menu";
import { Fade, Slide } from "react-awesome-reveal";
import logo from "../src/assets/icon/logo2.png";
import carousebg1 from "../src/assets/images/bk2-1.png";
import carousebg2 from "../src/assets/images/bk2-2.png";
import carousebg3 from "../src/assets/images/bk2-3.png";
import aboutusimg from "../src/assets/images/bk1.png";
import alipayLogo from "../src/assets/images/co/alipay.png";
import wechatpayLogo from "../src/assets/images/co/wechatpay.png";
import abchinaLogo from "../src/assets/images/co/abchina.png";
import aliyunLogo from "../src/assets/images/co/aliyun.png";
import ankLogo from "../src/assets/images/co/ank.png";
import baiduLogo from "../src/assets/images/co/baidu.png";
import bocPayLogo from "../src/assets/images/co/boc-pay.png";
import bocLogo from "../src/assets/images/co/boc.png";
import cbelifeLogo from "../src/assets/images/co/cbelife.png";
import ccbLogo from "../src/assets/images/co/ccb.png";
import cebLogo from "../src/assets/images/co/ceb.png";
import ciscoLogo from "../src/assets/images/co/cisco.png";
import counectLogo from "../src/assets/images/co/counect.png";
import fudianLogo from "../src/assets/images/co/fudian.png";
import hikvisionLogo from "../src/assets/images/co/hikvision.png";
import huaweiLogo from "../src/assets/images/co/huawei.png";
import ibmLogo from "../src/assets/images/co/ibm.png";
import icbcLifeLogo from "../src/assets/images/co/icbc-life.png";
import iflytekLogo from "../src/assets/images/co/iflytek.png";
import jdQLogo from "../src/assets/images/co/jd-q.png";
import meituanLogo from "../src/assets/images/co/meituan.png";
import octopusLogo from "../src/assets/images/co/octopus.png";
import oracleLogo from "../src/assets/images/co/oracle.png";
import koubeiLogo from "../src/assets/images/co/koubei.png";
import qqwalletLogo from "../src/assets/images/co/qqwallet.png";
import sensetimeLogo from "../src/assets/images/co/sensetime.png";
import spdbLogo from "../src/assets/images/co/spdb.png";
import tencentAiLogo from "../src/assets/images/co/tencent-ai.png";
import tencentCloudLogo from "../src/assets/images/co/tencent-cloud.png";
import { Link, Outlet, useLocation } from "react-router-dom";

import pastEvent1 from "../src/assets/images/bk4-1.png";
import pastEvent2 from "../src/assets/images/bk4-2.png";
import pastEvent3 from "../src/assets/images/forum/202405-1.png";

const { Header, Content, Footer } = Layout;
const { useBreakpoint } = Grid;
const { Title, Paragraph } = Typography;

const logoImages: Record<string, string> = {
  alipay: alipayLogo,
  wechatpay: wechatpayLogo,
  koubei: koubeiLogo,
  abchina: abchinaLogo,
  aliyun: aliyunLogo,
  ank: ankLogo,
  baidu: baiduLogo,
  bocPay: bocPayLogo,
  boc: bocLogo,
  cbelife: cbelifeLogo,
  ccb: ccbLogo,
  ceb: cebLogo,
  cisco: ciscoLogo,
  counect: counectLogo,
  fudian: fudianLogo,
  hikvision: hikvisionLogo,
  huawei: huaweiLogo,
  ibm: ibmLogo,
  icbcLife: icbcLifeLogo,
  iflytek: iflytekLogo,
  jdQ: jdQLogo,
  meituan: meituanLogo,
  octopus: octopusLogo,
  oracle: oracleLogo,
  sensetime: sensetimeLogo,
  spdb: spdbLogo,
  tencentAi: tencentAiLogo,
  tencentCloud: tencentCloudLogo,
};

// --- Type Definitions ---
interface CarouselSlideProps {
  imgUrl: string;
  title: string;
  desc: string;
}

interface NavMenuProps {
  mode: "horizontal" | "vertical" | "inline";
}

const useAnimateOnScroll = (ref: React.RefObject<HTMLElement>) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
  return isVisible;
};

const OurServices: FC = () => {
  const { t } = useTranslation();
  const services = [
    {
      titleKey: "services.item1.title",
      descKey: "services.item1.desc",
      imgUrl: carousebg1,
      path: "/services/graduate-collaboration",
    },
    {
      titleKey: "services.item2.title",
      descKey: "services.item2.desc",
      imgUrl: carousebg2,
      path: "/services/steam-education",
    },
    {
      titleKey: "services.item3.title",
      descKey: "services.item3.desc",
      imgUrl: carousebg3,
      path: "/services/collaborative-projects",
    },
  ];

  return (
    <div style={{ padding: "50px 5%", backgroundColor: "#f0f2f5" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "50px" }}>
        {t("services.title")}
      </Title>
      <Row gutter={[24, 24]} justify="center">
        {services.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Link
              to={service.path}
              style={{ textDecoration: "none" }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <Fade delay={index * 200} triggerOnce>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={t(service.titleKey)}
                      src={service.imgUrl}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  }
                  style={{ height: "100%" }}
                >
                  <Card.Meta
                    title={t(service.titleKey)}
                    description={t(service.descKey)}
                  />
                </Card>
              </Fade>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const PastEvents: FC = () => {
  const { t } = useTranslation();
  const screens = useBreakpoint();
  const events = [
    {
      titleKey: "pastEvents.item1.title",
      descKey: "pastEvents.item1.desc",
      imgUrl: pastEvent1,
      path: "/aboutus/jebdl-academic-journal",
    },
    {
      titleKey: "pastEvents.item2.title",
      descKey: "pastEvents.item2.desc",
      imgUrl: pastEvent2,
      path: "/aboutus/collaborative-research",
    },
    {
      titleKey: "pastEvents.item3.title",
      descKey: "pastEvents.item3.desc",
      imgUrl: pastEvent3,
      path: "/aboutus/conferences-and-forums",
    },
  ];

  return (
    <div
      style={{
        padding: "50px 5%",
        backgroundColor: "#fff",
        overflow: "hidden",
      }}
    >
      <Title level={2} style={{ textAlign: "center", marginBottom: "50px" }}>
        {t("pastEvents.title")}
      </Title>
      {events.map((event, index) => {
        const isReversed = index % 2 === 1;
        const isMobile = !screens.md;

        const imageCol = (
          <Col xs={24} md={8}>
            <Slide
              direction={isMobile ? "up" : isReversed ? "right" : "left"}
              triggerOnce
            >
              <img
                src={event.imgUrl}
                alt={t(event.titleKey)}
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Slide>
          </Col>
        );

        const textCol = (
          <Col xs={24} md={16}>
            <Slide
              direction={isMobile ? "up" : isReversed ? "left" : "right"}
              triggerOnce
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                  alignItems: isMobile
                    ? "flex-start"
                    : isReversed
                    ? "flex-end"
                    : "flex-start",
                  textAlign: isMobile ? "left" : isReversed ? "right" : "left",
                  marginTop: isMobile ? "24px" : "0",
                }}
              >
                <Title level={3}>{t(event.titleKey)}</Title>
                <Paragraph>{t(event.descKey)}</Paragraph>
                <Button
                  href={event.path}
                  type="primary"
                  style={{ backgroundColor: "#6d28d9", borderColor: "#6d28d9" }}
                >
                  {t("pastEvents.button")}
                </Button>
              </div>
            </Slide>
          </Col>
        );

        return (
          <Card
            hoverable
            key={index}
            style={{
              marginBottom: "40px",
              cursor: "default",
              backgroundColor: "rgba(247, 247, 247, 0.65)",
            }}
            bodyStyle={{ padding: isMobile ? "24px" : "32px" }}
          >
            {isMobile ? (
              <Row gutter={[32, 24]}>
                {imageCol}
                {textCol}
              </Row>
            ) : (
              <Row gutter={[32, 24]} align="middle">
                {isReversed ? [textCol, imageCol] : [imageCol, textCol]}
              </Row>
            )}
          </Card>
        );
      })}
    </div>
  );
};

const BusinessPartners: FC = () => {
  const { t } = useTranslation();
  const partnerLogos = {
    finance: [
      "alipay",
      "wechatpay",
      "koubei",
      "jdQ",
      "boc",
      "octopus",
      "ccb",
      "meituan",
      "spdb",
      "abchina",
      "bocPay",
      "ceb",
      "icbcLife",
      "ank",
      "fudian",
      "cbelife",
    ],
    network: [
      "ibm",
      "oracle",
      "huawei",
      "hikvision",
      "aliyun",
      "counect",
      "cisco",
      "iflytek",
      "sensetime",
      "tencentCloud",
      "tencentAi",
    ],
  };

  const cardStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    cursor: "default",
  };

  return (
    <div
      style={{
        padding: "50px 5%",
        backgroundColor: "#f0f2f5",
        cursor: "default",
      }}
    >
      <Title level={2} style={{ textAlign: "center", marginBottom: "50px" }}>
        {t("partners.title")}
      </Title>

      <Fade cascade damping={0.1} triggerOnce>
        <Title level={4} style={{ marginBottom: "30px" }}>
          {t("partners.finance.title")}
        </Title>
        <Row gutter={[24, 24]}>
          {partnerLogos.finance.map((logo) => (
            <Col key={logo} xs={12} sm={8} md={6} lg={4}>
              <Card hoverable style={cardStyle}>
                <img
                  src={logoImages[logo]}
                  alt={`${logo} logo`}
                  style={{ maxWidth: "100%", maxHeight: "55px" }}
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Title level={4} style={{ marginTop: "50px", marginBottom: "30px" }}>
          {t("partners.network.title")}
        </Title>
        <Row gutter={[24, 24]}>
          {partnerLogos.network.map((logo) => (
            <Col key={logo} xs={12} sm={8} md={6} lg={4}>
              <Card hoverable style={cardStyle}>
                <img
                  src={logoImages[logo]}
                  alt={`${logo} logo`}
                  style={{ maxWidth: "100%", maxHeight: "55px" }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Fade>
    </div>
  );
};

const CarouselSlide: FC<CarouselSlideProps> = ({ imgUrl, title, desc }) => {
  const screens = useBreakpoint();
  const slideHeight = screens.md ? "55vh" : "40vh";
  const contentPadding = screens.md ? "30px" : "10px";

  return (
    <div style={{ position: "relative", height: slideHeight, color: "#fff" }}>
      <img
        src={imgUrl}
        alt={title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: contentPadding,
        }}
      >
        <h3
          style={{
            color: "#fff",
            fontSize: "clamp(1rem, 5vw, 3rem)",
            fontWeight: "bold",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: "clamp(0.9rem, 2.5vw, 1.5rem)",
            maxWidth: "800px",
            textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
            lineHeight: 1.5,
            marginTop: "1rem",
          }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

export const HomePage: FC = () => {
  const { t } = useTranslation();
  return (
    <Fade triggerOnce>
      <Carousel autoplay>
        <div>
          <CarouselSlide
            imgUrl={carousebg1}
            title={t("carousel.slide1.title")}
            desc={t("carousel.slide1.desc")}
          />
        </div>
        <div>
          <CarouselSlide
            imgUrl={carousebg2}
            title={t("carousel.slide2.title")}
            desc={t("carousel.slide2.desc")}
          />
        </div>
        <div>
          <CarouselSlide
            imgUrl={carousebg3}
            title={t("carousel.slide3.title")}
            desc={t("carousel.slide3.desc")}
          />
        </div>
      </Carousel>
      <AboutSection />
      <OurServices />
      <PastEvents />
      <BusinessPartners />
    </Fade>
  );
};

const AboutSection: FC = () => {
  const { t } = useTranslation();
  return (
    <div
      style={{
        padding: "80px 5%",
        backgroundColor: "#ffffffff",
        overflow: "hidden",
      }}
    >
      <Row gutter={[64, 24]} align="middle">
        <Col xs={24} md={10}>
          <Slide direction="left" triggerOnce>
            <div className="collage-container">
              <img
                src={aboutusimg}
                className="collage-image image-top-left"
                alt="About eLink 1"
              />
              <img
                src={aboutusimg}
                className="collage-image image-top-right"
                alt="About eLink 2"
              />
            </div>
          </Slide>
        </Col>
        <Col xs={24} md={14}>
          <Slide direction="right" triggerOnce>
            <Title level={2}>{t("nav.about")}</Title>
            <Paragraph
              style={{ fontSize: "16px", color: "rgba(118, 118, 118, 1)" }}
            >
              {t("about.description")}
            </Paragraph>
            <Button
              href="/aboutus"
              type="primary"
              size="large"
              style={{
                backgroundColor: "#6d28d9",
                borderColor: "#6d28d9",
                marginTop: "40px",
              }}
            >
              {t("about.button")}
            </Button>
          </Slide>
        </Col>
      </Row>
    </div>
  );
};

const App: FC = () => {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState<boolean>(false);
  const screens = useBreakpoint();
  const location = useLocation();

  const whatsappPhoneNumber = "85251285045";

  const changeLanguage = (lng: string): void => {
    i18n.changeLanguage(lng);
  };

  const showDrawer = (): void => {
    setVisible(true);
  };

  const onClose = (): void => {
    setVisible(false);
  };

  const languageMenu = (
    <Menu>
      <Menu.Item key="en" onClick={() => changeLanguage("en")}>
        {t("lang.en")}
      </Menu.Item>
      <Menu.Item key="zh" onClick={() => changeLanguage("zh")}>
        {t("lang.zh")}
      </Menu.Item>
      <Menu.Item key="zh-CN" onClick={() => changeLanguage("zh-CN")}>
        {t("lang.zh-CN")}
      </Menu.Item>
    </Menu>
  );

  const navMenuItems: MenuProps["items"] = [
    {
      key: "/",
      label: <Link to="/">{t("nav.home")}</Link>,
      icon: <SolutionOutlined />,
    },
    {
      key: "/aboutus",
      // label: <Button to="/aboutus">{t("nav.about")} </Button>,
      label: <Link to="/aboutus">{t("nav.about")} </Link>,
      icon: <LaptopOutlined />,
    },    
    
    {
      key: "/services",
      label: t("nav.services"),
      icon: <BarChartOutlined />,
      children: [
        {
          key: "/services/graduate-collaboration",
          icon: <TeamOutlined />,
          label: (
            <Link to="/services/graduate-collaboration">
              {t("services.item1.title")}
            </Link>
          ),
        },
        {
          key: "/services/steam-education",
          icon: <ExperimentOutlined />,
          label: (
            <Link to="/services/steam-education">
              {t("services.item2.title")}
            </Link>
          ),
        },
        {
          key: "/services/collaborative-projects",
          icon: <FundProjectionScreenOutlined />,
          label: (
            <Link to="/services/collaborative-projects">
              {t("services.item3.title")}
            </Link>
          ),
        },
      ],
    },
    {
      key: "/contact",
      label: <Link to="/contact">{t("nav.contact")}</Link>,
      icon: <MailOutlined />,
    },
    // {
    //   key: "/career",
    //   // label: <Button to="/aboutus">{t("nav.about")} </Button>,
    //   label: <Link to="/career">{t("career.career")} </Link>,
    //   icon: <AuditOutlined />,
    // }
  ];

  const NavMenu: FC<NavMenuProps> = ({ mode }) => (
    <Menu
      theme="light"
      mode={mode}
      selectedKeys={[location.pathname]}
      items={navMenuItems}
      onClick={onClose}
      style={{
        lineHeight: "64px",
        backgroundColor: "transparent",
        borderBottom: "none",
        borderRight: 0,
        minWidth: screens.xl ? "450px" : "100%",
        display: mode === "horizontal" ? "flex" : "block",
        justifyContent: mode === "horizontal" ? "flex-end" : "flex-start",
      }}
    />
  );

  return (
    <>
      <style>{`
        .ant-menu-light.ant-menu-horizontal > .ant-menu-item,
        .ant-menu-light.ant-menu-horizontal > .ant-menu-submenu {
          padding: 0 15px;
        }
        .ant-menu-light.ant-menu-horizontal > .ant-menu-item:hover,
        .ant-menu-light.ant-menu-horizontal > .ant-menu-submenu:hover,
        .ant-menu-light .ant-menu-item-active,
        .ant-menu-light .ant-menu-submenu-active {
          background-color: transparent !important;
          color: #6d28d9 !important;
        }
        .ant-menu-light .ant-menu-item-selected,
        .ant-menu-light .ant-menu-submenu-selected {
          background-color: transparent !important;
          color: #6d28d9 !important;
        }
        .ant-menu-light.ant-menu-horizontal > .ant-menu-item:hover::after,
        .ant-menu-light.ant-menu-horizontal > .ant-menu-item-selected::after,
        .ant-menu-light.ant-menu-horizontal > .ant-menu-submenu-selected::after,
        .ant-menu-light.ant-menu-horizontal > .ant-menu-submenu:hover::after {
          border-bottom-color: #6d28d9 !important;
        }
        .ant-menu-submenu-popup .ant-menu-item-selected,
        .ant-menu-submenu-popup .ant-menu-item:hover {
          color: #6d28d9 !important;
          background-color: rgba(109, 40, 217, 0.08) !important;
        }
        
        .ant-menu-light .ant-menu-submenu-selected .ant-menu-submenu-title {
          color: #6d28d9 !important;

        }
        .header-lang-button, .header-menu-button {
          color: black !important;
          background: transparent !important;
          border-color: #d9d9d9 !important;
        }
        .header-lang-button:hover, .header-menu-button:hover {
          color: #6d28d9 !important;
          border-color: #6d28d9 !important;
        }
      `}</style>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            position: "sticky",
            top: 0,
            zIndex: 10,
            backgroundColor: "#fff",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="eLink Logo"
              style={{ height: "40px", marginRight: "16px" }}
            />
          </div>
          {screens.xl ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                flex: 1,
              }}
            >
              <NavMenu mode="horizontal" />
              <Dropdown overlay={languageMenu}>
                <Button
                  className="header-lang-button"
                  style={{ marginLeft: "16px" }}
                >
                  <GlobalOutlined />
                  <span>
                    {{
                      en: t("lang.en"),
                      zh: t("lang.zh"),
                      "zh-CN": t("lang.zh-CN"),
                    }[i18n.language] || "Language"}
                  </span>
                  <DownOutlined />
                </Button>
              </Dropdown>
            </div>
          ) : (
            <Button className="header-menu-button" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          )}
        </Header>

        {/* --- Mobile Menu --- */}
        <Drawer
          title={t("nav.menu")}
          placement="right"
          onClose={onClose}
          open={visible}
          bodyStyle={{ padding: 0 }}
        >
          <NavMenu mode="inline" />
          <div style={{ padding: "16px" }}>
            <Dropdown overlay={languageMenu}>
              <Button className="header-lang-button" style={{ width: "100%" }}>
                <GlobalOutlined />{" "}
                <span>
                  {{
                    en: t("lang.en"),
                    zh: t("lang.zh"),
                    "zh-CN": t("lang.zh-CN"),
                  }[i18n.language] || "Language"}
                </span>{" "}
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        </Drawer>

        <Content>
          <Outlet />
        </Content>

        <Fade triggerOnce>
          <Footer
            style={{
              textAlign: "center",
              backgroundColor: "#001529",
              color: "rgba(255, 255, 255, 0.65)",
            }}
          >
            {t("footer.copyright")}
          </Footer>
        </Fade>

        <Fade triggerOnce delay={250}>
          <FloatButton
            icon={<WhatsAppOutlined />}
            type="primary"
            tooltip="Contact us on WhatsApp"
            href={`https://api.whatsapp.com/send?phone=${whatsappPhoneNumber}&text=Hello, I would like to know more about your services.`}
            target="_blank"
            style={{
              right: 45,
              bottom: 100,
              backgroundColor: "#25D366",
              zIndex: 1000,
            }}
          />
        </Fade>
      </Layout>
    </>
  );
};

export default App;
