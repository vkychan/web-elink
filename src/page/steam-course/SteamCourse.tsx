// src/page/steam-course/SteamCourse.tsx
import React, { FC, useRef, useEffect,useMemo } from 'react'; 
import {
  Row, Col, Card, Typography, Button, Divider,
  Space, List, Avatar, Tag,Carousel
} from 'antd';
import {
  ArrowLeftOutlined, TrophyOutlined, GlobalOutlined,
  StarOutlined, TeamOutlined, ShopOutlined,
  RightCircleOutlined, LinkOutlined, BackwardOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import heroImage from "../../assets/images/bk1.png";
import './steamcourse.css';

const { Title, Paragraph, Text } = Typography;


const SteamCourse: FC = () => {
 
  const { t } = useTranslation();
  const navigate = useNavigate();
  const primaryColor = '#6d28d9';

interface ActivityCarouselImage {
  src: string;
  alt: string;
}

const activityCarouselImages = useMemo<ActivityCarouselImage[]>(() => {
  try {
    // @ts-ignore 
    const imageContext = require.context(
      '../../assets/images/steamcourse', 
      false, 
      /\.(png|jpg|jpeg|webp|gif|svg)$/i 
    );
    const imgKeys = imageContext.keys();
    return imgKeys.map((imgPath: string, index: number) => {
      const imgSrc = imageContext(imgPath) as string;
      return {
        src: imgSrc,
        alt: `Astronomer Activity ${index + 1}`
      };
    });
  } catch (error) {
    console.warn("failed, fold not exit or picture not exist.", error);
    return [];
  }
}, []);
  const competitionRef = useRef<HTMLDivElement>(null); 
  const screens = {
    xs: window.innerWidth < 576,
    sm: window.innerWidth >= 576 && window.innerWidth < 768,
    md: window.innerWidth >= 768
  };

  useEffect(() => {
    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    window.history.scrollRestoration = 'manual';
  }, []); 
  const ghostButtonStyle = {
    borderColor: primaryColor,
    color: primaryColor,
    backgroundColor: 'transparent',
    fontSize: screens.xs ? '16px' : '18px',
    fontWeight: 600,
    borderWidth: 2,
    borderRadius: '8px',
    transition: 'all 0.3s ease'
  };

  const competitionHighlights = [
    {
      nameKey: 'steamCourse.competitions.robofest.name',
      descKey: 'steamCourse.competitions.robofest.desc'
    },
    {
      nameKey: 'steamCourse.competitions.aiChallenges.name',
      descKey: 'steamCourse.competitions.aiChallenges.desc'
    },
    {
      nameKey: 'steamCourse.competitions.roboticsOlympiads.name',
      descKey: 'steamCourse.competitions.roboticsOlympiads.desc'
    }
  ];

  const exchangePrograms = [
    {
      location: 'Silicon Valley', 
      highlightKey: 'steamCourse.exchange.siliconValley.highlight'
    },
    {
      location: 'Boston', 
      highlightKey: 'steamCourse.exchange.boston.highlight'
    },
    {
      location: 'Singapore',
      highlightKey: 'steamCourse.exchange.singapore.highlight'
    }
  ];

  const successStories = [
    {
      name: 'Emma Liu',
      achievement: 'Robofest World Champion 2024',
      quoteKey: 'steamCourse.success.emma.quote'
    },
    {
      name: 'Alex Chen',
      achievement: 'AI Challenge Top 10 Global Finalist',
      quoteKey: 'steamCourse.success.alex.quote'
    },
    {
      name: 'Team Horizon',
      achievement: 'Robotics Olympiad Gold Medal',
      quoteKey: 'steamCourse.success.teamHorizon.quote'
    }
  ];

  const partners = [
    'MIT Media Lab', 'Robofest International', 'Stanford AI Lab',
    'Singapore Science Centre', 'Boston Robotics Institute', 'Silicon Valley Tech Hub'
  ];

  const scrollToCompetitions = () => {
    competitionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={{ overflow: 'hidden', backgroundColor: '#fff' }}>
        <div style={{ position: 'relative', height: screens.xs ? '70vh' : '65vh', color: '#fff' }}>
          <img
            src={heroImage}
            alt={t('steamCourse.hero.alt', 'The Global Stage for Future Innovators')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(40, 10, 80, 0.85))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px'
          }}>
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
                borderRadius: "8px", 
                transition: 'all 0.3s ease' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // 新增hover交互
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
              }}
            />
            <Fade triggerOnce duration={1000}>
              <TrophyOutlined style={{
                fontSize: screens.xs ? '40px' : '56px',
                marginBottom: '20px',
                color: '#fff', 
                textShadow: '0 0 15px rgba(255,255,255,0.3)' 
              }} />
              <Title style={{
                fontSize: screens.xs ? '28px' : '48px',
                fontWeight: 800,
                marginBottom: '24px', 
                lineHeight: 1.2,
                letterSpacing: screens.xs ? '1px' : '2px', 
                color: '#fff', 
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)' 
              }}>
                {t('steamCourse.hero.mainTitle', 'The Global Stage for Future Innovators')}
              </Title>
              <Paragraph style={{
                fontSize: screens.xs ? '16px' : '20px',
                lineHeight: 1.8, 
                maxWidth: '800px', 
                marginBottom: '40px', 
                color: 'rgba(255,255,255,0.9)', 
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)' 
              }}>
                {t('steamCourse.hero.desc', 'Empowering students to excel in international technology competitions and gain world-class academic perspectives.')}
              </Paragraph>

        
              <Space size={screens.xs ? 16 : 24}>
                <Button
                  type="default"
                  size="large"
                  onClick={scrollToCompetitions}
                  style={{
                    ...ghostButtonStyle,
                    backgroundColor: '#fff',
                    color: primaryColor,
                    padding: '14px 40px', 
                    borderRadius: '50px', 
                    boxShadow: '0 0 20px rgba(109, 40, 217, 0.3)', 
                    border: 'none',
                    transition: 'all 0.3s ease' 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = primaryColor;
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(109, 40, 217, 0.5)'; // 对齐hover阴影
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.color = primaryColor;
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(109, 40, 217, 0.3)';
                  }}
                >
                  {t('steamCourse.hero.cta1', 'Explore Competitions')}
                  <RightCircleOutlined style={{ marginLeft: '10px' }} /> 
                </Button>

                <Button
                  type="default"
                  size="large"
                  onClick={() => navigate('/contact')}
                  style={{
                    ...ghostButtonStyle,
                    backgroundColor: 'transparent',
                    color: '#fff',
                    borderColor: '#fff',
                    padding: '14px 40px', 
                    borderRadius: '50px', 
                    boxShadow: '0 0 20px rgba(109, 40, 217, 0.2)', 
                    borderWidth: 1,
                    borderStyle: 'solid',
                    transition: 'all 0.3s ease' 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fff';
                    e.currentTarget.style.color = primaryColor;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(109, 40, 217, 0.4)'; // 对齐hover阴影
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(109, 40, 217, 0.2)';
                  }}
                >
                  {t('steamCourse.hero.cta2', 'Inquire for Schools')}
                </Button>
              </Space>
            </Fade>
          </div>
        </div>

      <div
        ref={competitionRef}
        style={{ padding: screens.xs ? '60px 5%' : '80px 5%', backgroundColor: 'transparent' }}
      >
        <Slide direction="down" triggerOnce>
          <Title level={2} style={{
            textAlign: 'center',
            color: primaryColor,
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            {t('steamCourse.sections.competitionExcellence', 'Competition Excellence')}
          </Title>
          <Paragraph style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 48px auto',
            fontSize: '18px',
            color: '#666'
          }}>
            {t('steamCourse.sections.competitionDesc', 'We provide comprehensive support for leading international technology competitions')}
          </Paragraph>
        </Slide>
<div style={{
  marginBottom: screens.xs ? '32px' : '48px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  marginLeft: 0,
  marginRight: 0
}}>
  {activityCarouselImages.length > 0 ? (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 8px 24px rgba(109, 40, 217, 0.15)',
      position: 'relative',
      height: screens.xs ? '250px' : '700px',
      width: '100%'
    }}>
      <Carousel
        effect="fade"
        autoplay={true}
        autoplaySpeed={3000}
        dots={{ className: 'astronomer-activity-carousel-dots' }}
        arrows={true}
        pauseOnHover={true}
        style={{
          height: '100%',
          width: '100%',
          position: 'relative'
        }}
      >
        {activityCarouselImages.map((img, index) => (
          <div key={index} style={{
            position: 'relative',
            height: '100%',
            width: '100%',
            overflow: 'hidden',
            padding: 0,
            margin: 0,
            backgroundColor: '#000'
          }}>
            <img
              src={img.src}
              alt={img.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                display: 'block',
                verticalAlign: 'top',
                padding: 0,
                margin: 0,
                border: 'none',
                lineHeight: 0
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              zIndex: 1,
              margin: 0,
              padding: 0
            }} />
          </div>
        ))}
      </Carousel>
      <style>
        {`
          .ant-carousel,
          .ant-carousel .slick-list,
          .ant-carousel .slick-track,
          .ant-carousel .slick-slide {
            height: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
            line-height: 0 !important;
          }

          .ant-carousel .slick-prev,
          .ant-carousel .slick-next {
            top: 50% !important;
            transform: translateY(-50%) !important;
            z-index: 2 !important;
            margin: 0 !important;
          }

          @media (max-width: 575px) {
            .ant-carousel .slick-prev,
            .ant-carousel .slick-next {
              width: 30px !important;
              height: 30px !important;
              top: 50% !important;
              transform: translateY(-50%) !important;
            }
            .astronomer-activity-carousel-dots {
              margin-bottom: 10px !important;
              padding: 0 !important;
            }
          }

          @media (min-width: 576px) {
            .ant-carousel .slick-prev {
              left: 20px !important;
            }
            .ant-carousel .slick-next {
              right: 20px !important;
            }
          }
        `}
      </style>
    </div>
  ) : (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 20px',
      borderRadius: '16px',
      border: `1px dashed ${primaryColor}`,
      textAlign: 'center',
      color: '#666',
      width: '100%'
    }}>
      <Paragraph>No activity carousel images found.</Paragraph>
    </div>
  )}
</div>
<Row gutter={[screens.xs ? 20 : 30, 30]} justify="center" style={{ alignItems: 'stretch', width: '100%' }}>
  {/* 竞赛列表 */}
  <Col xs={24} sm={24} md={8} style={{ display: 'flex' }}>
    <Zoom triggerOnce style={{ width: '100%', display: 'flex' }}>
      <Card
        style={{
          height: '100%',
          width: '100%',
          maxHeight: screens.xs ? '450px' : 'none', 
          borderRadius: '16px',
          border: `1px solid ${primaryColor}15`,
          boxShadow: '0 8px 24px rgba(109, 40, 217, 0.08)',
          padding: '16px', 
          boxSizing: 'border-box' 
        }}
      >
        <Space direction="vertical" size="large" style={{ width: '100%', flex: 1, display: 'flex' }}>
          <Title level={4} style={{
            color: primaryColor,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            width: '100%' 
          }}>
            <TrophyOutlined style={{ marginRight: '8px' }} />
            {t('steamCourse.competitions.title', 'Major Competitions')}
          </Title>
          <List
            dataSource={competitionHighlights}
            style={{ paddingLeft: 0, width: '100%', flex: 1 }}
            renderItem={(item) => (
              <List.Item style={{
                padding: screens.xs ? '8px 0' : '12px 0', 
                width: '100%'
              }}>
                <List.Item.Meta
                  title={<Text strong>{t(item.nameKey,
                    item.nameKey.includes('robofest') ? 'Robofest' :
                    item.nameKey.includes('aiChallenges') ? 'AI Challenges' : 'Robotics Olympiads')}</Text>}
                  description={<Text
                    type="secondary"
                    style={{
                      wordWrap: 'break-word', 
                      whiteSpace: 'normal', 
                      width: '100%', 
                      lineHeight: 1.6 
                    }}
                  >{t(item.descKey,
                    item.descKey.includes('robofest') ? 'International robotics competition focusing on autonomous robots and creative problem-solving.' :
                    item.descKey.includes('aiChallenges') ? 'Global AI hackathons and competitions for developing real-world AI applications.' :
                    'Olympiad-style competition testing robotics engineering and programming skills.')}</Text>}
                />
              </List.Item>
            )}
          />
        </Space>
      </Card>
    </Zoom>
  </Col>

  <Col xs={24} md={16} style={{ display: 'flex' }}>
    <Zoom triggerOnce delay={200} style={{ width: '100%', display: 'flex' }}>
      <Card
        style={{
          height: '100%',
          width: '100%',
          borderRadius: '16px',
          backgroundColor: 'rgba(109, 40, 217, 0.05)',
          border: `1px solid ${primaryColor}20`,
          boxShadow: '0 8px 24px rgba(109, 40, 217, 0.08)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Space direction="vertical" size="large" style={{ flex: 1, display: 'flex' }}>
          <Title level={4} style={{
            color: primaryColor,
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            margin: 0
          }}>
            <TeamOutlined style={{ marginRight: '8px' }} />
            {t('steamCourse.training.title', 'Intensive Training & Coaching')}
          </Title>
          <Paragraph style={{ lineHeight: 1.8, margin: 0 }}>
            {t('steamCourse.training.intro', 'Our training program combines technical skill-building with competition strategy to ensure participants are fully prepared for the global stage. We offer:')}
          </Paragraph>
          <List
            style={{ paddingLeft: '16px', flex: 1 }}
            dataSource={[
              { key: 'steamCourse.training.point1', default: '8-week intensive technical training led by industry experts' },
              { key: 'steamCourse.training.point2', default: 'Mock competitions with real-time feedback and improvement plans' },
              { key: 'steamCourse.training.point3', default: 'One-on-one coaching for presentation and technical interview skills' },
              { key: 'steamCourse.training.point4', default: 'Access to state-of-the-art robotics and AI equipment for practice' },
              { key: 'steamCourse.training.point5', default: 'Mental preparation and stress management for high-pressure competition environments' }
            ]}
            renderItem={(item) => (
              <List.Item style={{ padding: '8px 0' }}>
                <StarOutlined style={{ color: primaryColor, marginRight: '8px' }} />
                {t(item.key, item.default)}
              </List.Item>
            )}
          />
        </Space>
      </Card>
    </Zoom>
  </Col>
</Row>
      </div>

      <Divider style={{ borderColor: `${primaryColor}15`, margin: 0 }} />

      {/* 3. International Experience Exchange  */}
      <div style={{ padding: screens.xs ? '60px 5%' : '80px 5%', backgroundColor: '#f9fafb' }}>
        <Slide direction="up" triggerOnce>
          <Title level={2} style={{
            textAlign: 'center',
            color: primaryColor,
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            {t('steamCourse.sections.internationalExchange', 'International Experience Exchange')}
          </Title>
          <Paragraph style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 48px auto',
            fontSize: '18px',
            color: '#666'
          }}>
            {t('steamCourse.sections.exchangeDesc', 'Beyond competitions – global exposure and cultural collaboration')}
          </Paragraph>
        </Slide>

<Row gutter={[screens.xs ? 20 : 30, 30]} justify="center" style={{ alignItems: 'stretch' }}>
  {exchangePrograms.map((program, index) => (
    <Col xs={24} sm={12} md={8} key={index} style={{ display: 'flex' }}>
      <Zoom delay={index * 200} triggerOnce style={{ width: '100%' }}>
        <Card
          style={{
            height: '100%',
            borderRadius: '16px',
            border: 'none',
            boxShadow: '0 8px 24px rgba(109, 40, 217, 0.1)',
            transition: 'all 0.3s ease',
            display: 'flex',
            flexDirection: 'column'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(109, 40, 217, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(109, 40, 217, 0.1)';
          }}
        >
          <div style={{
            textAlign: 'center',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center' 
          }}>
            <GlobalOutlined style={{
              fontSize: '48px',
              color: primaryColor,
              marginBottom: '16px',
              display: 'block' 
            }} />
            <Title level={4} style={{
              fontWeight: 700,
              marginBottom: '8px',
              minHeight: '40px'
            }}>
              {program.location}
            </Title>
            <Tag color={primaryColor} style={{
              marginBottom: '16px',
              padding: '4px 12px', 
              whiteSpace: 'nowrap', 
              textAlign: 'center'
            }}>
              {t('steamCourse.exchange.tag', 'Global Experience')}
            </Tag>
            <Paragraph style={{
              lineHeight: 1.7,
              color: '#666',
              margin: 0,
              flex: 1,
              width: '100%' 
            }}>
              {t(program.highlightKey,
                program.highlightKey.includes('siliconValley') ? 'Tech company visits and startup mentorship' :
                program.highlightKey.includes('boston') ? 'Ivy League university workshops and lab tours' :
                'Asian tech hub collaboration and innovation labs')}
            </Paragraph>
          </div>
        </Card>
      </Zoom>
    </Col>
  ))}

  <Col xs={24} style={{ marginTop: '20px' }}>
    <Fade triggerOnce>
      <Card
        style={{
          borderRadius: '16px',
          border: `2px solid ${primaryColor}20`,
          backgroundColor: '#fff'
        }}
      >
        <Paragraph style={{
          textAlign: 'center',
          fontSize: '18px',
          lineHeight: 1.8,
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <Text strong style={{ color: primaryColor }}>{t('steamCourse.exchange.keyValue', 'Key Value: ')}</Text>
          {t('steamCourse.exchange.valueDesc', 'Our exchange programs foster cross-cultural collaboration, provide networking opportunities with global tech experts, and broaden students\' horizons beyond technical skills – preparing them to be global citizens and future leaders in technology.')}
        </Paragraph>
      </Card>
    </Fade>
  </Col>
</Row>
      </div>

      <Divider style={{ borderColor: `${primaryColor}15`, margin: 0 }} />
      <div style={{ padding: screens.xs ? '60px 5%' : '80px 5%', backgroundColor: 'transparent' }}>
        <Fade triggerOnce>
          <Title level={2} style={{
            textAlign: 'center',
            color: primaryColor,
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            {t('steamCourse.sections.wallOfFame', 'Wall of Fame')}
          </Title>
          <Paragraph style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 48px auto',
            fontSize: '18px',
            color: '#666'
          }}>
            {t('steamCourse.sections.fameDesc', 'Celebrating our students\' outstanding achievements on the global stage')}
          </Paragraph>
        </Fade>

        <Row gutter={[screens.xs ? 20 : 30, 30]} justify="center" style={{ alignItems: 'stretch' }}>
  {successStories.map((story, index) => (
    <Col xs={24} md={8} key={index} style={{ display: 'flex' }}>
      <Slide direction="up" delay={index * 150} triggerOnce style={{ width: '100%' }}>
        <Card
          style={{
            height: '100%',
            width: '100%',
            borderRadius: '16px',
            borderLeft: `4px solid ${primaryColor}`,
            boxShadow: '0 8px 24px rgba(109, 40, 217, 0.08)',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Space direction="vertical" size="large" style={{ flex: 1, display: 'flex', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Avatar
                size={64}
                style={{
                  backgroundColor: primaryColor,
                  fontWeight: 700
                }}
              >
                {story.name.charAt(0)}
              </Avatar>
            </div>
            <Title level={5} style={{
              textAlign: 'center',
              fontWeight: 600,
              minHeight: '32px', 
              margin: 0
            }}>
              {story.name}
            </Title>
            <Text style={{
              display: 'block',
              textAlign: 'center',
              color: primaryColor,
              marginBottom: '16px',
              minHeight: '24px' 
            }}>
              {story.achievement}
            </Text>
            <Paragraph style={{
              fontStyle: 'italic',
              lineHeight: 1.7,
              color: '#666',
              textAlign: 'center',
              margin: 0,
              flex: 1 
            }}>
              "{t(story.quoteKey,
                story.quoteKey.includes('emma') ? 'This program gave me the confidence to compete on the global stage and connect with like-minded innovators.' :
                story.quoteKey.includes('alex') ? 'The intensive training prepared me not just for the competition, but for future STEM careers.' :
                'Cross-cultural collaboration was the key to our success – we learned as much from others as we taught.')}"
            </Paragraph>
          </Space>
        </Card>
      </Slide>
    </Col>
  ))}
</Row>
      </div>

      <Divider style={{ borderColor: `${primaryColor}15`, margin: 0 }} />

      <div style={{ padding: screens.xs ? '60px 5%' : '80px 5%', backgroundColor: '#f9fafb' }}>
        <Fade triggerOnce>
          <Title level={2} style={{
            textAlign: 'center',
            color: primaryColor,
            fontWeight: 700,
            marginBottom: '48px'
          }}>
            {t('steamCourse.sections.globalPartners', 'Our Global Partners')}
          </Title>
        </Fade>

<Row gutter={[screens.xs ? 16 : 24, 24]} justify="center" style={{ alignItems: 'stretch' }}>
  {partners.map((partner, index) => (
    <Col xs={12} sm={8} md={4} key={index} style={{ display: 'flex' }}>
      <div
        style={{
          padding: '20px 16px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          transition: 'all 0.3s ease',
          border: `1px solid #eee`,
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center' 
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = primaryColor;
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#fff';
          e.currentTarget.style.color = '#333';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >

        <ShopOutlined style={{
          fontSize: '24px',
          marginBottom: '8px',
          display: 'block' 
        }} />
        <Text style={{
          fontSize: screens.xs ? '14px' : '16px',
          fontWeight: 600,
          display: 'block',
          minHeight: '24px' 
        }}>
          {partner}
        </Text>
      </div>
    </Col>
  ))}
</Row>
      </div>


      <div style={{
        padding: screens.xs ? '60px 5%' : '80px 5%',
        backgroundColor: 'transparent',
        marginBottom: '40px'
      }}>
        <Fade triggerOnce>
          <Card
            style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.1), rgba(111, 66, 193, 0.05))',
              border: `2px solid ${primaryColor}`,
              borderRadius: '20px',
              padding: screens.xs ? '40px 20px' : '60px 40px',
              boxShadow: '0 12px 36px rgba(109, 40, 217, 0.1)'
            }}
          >

            <BackwardOutlined style={{
              fontSize: screens.xs ? '48px' : '64px',
              color: primaryColor,
              marginBottom: '24px'
            }} />
            <Title level={3} style={{
              color: primaryColor,
              fontWeight: 700,
              marginBottom: '24px',
              fontSize: screens.xs ? '24px' : '32px'
            }}>
              {t('steamCourse.finalCta.title', 'Is your school ready to compete globally?')}
            </Title>
            <Paragraph style={{
              maxWidth: '700px',
              margin: '0 auto 36px auto',
              fontSize: '18px',
              lineHeight: 1.8,
              color: '#666'
            }}>
              {t('steamCourse.finalCta.desc', 'Partner with us to bring world-class competition training and international exposure to your students. Our tailored programs adapt to your school\'s needs and goals, ensuring maximum impact for your students.')}
            </Paragraph>

<div style={{ width: '100%', maxWidth: '300px', margin: '0 auto' }}>
  <Button
    type="default"
    size="large"
    onClick={() => navigate('/contact')}
    style={{
      ...ghostButtonStyle,
      padding: '16px 48px',
      fontSize: '18px',
      borderRadius: '8px',
      boxSizing: 'border-box', // 内边距计入总宽度
      width: '100%', // 按钮宽度自适应父容器
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = primaryColor;
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = '0 8px 20px rgba(109, 40, 217, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = primaryColor;
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    {t('steamCourse.finalCta.cta', 'Partner With Us')}
    <LinkOutlined style={{ marginLeft: '12px' }} />
  </Button>
</div>
          </Card>
        </Fade>
      </div>
    </div>
  );
};

export default SteamCourse;