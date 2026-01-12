// src/GraduateCollaborationPage.tsx
import React, { FC } from 'react';
import { Row, Col, Card, Typography, Button, Divider, Steps } from 'antd';
import { GlobalOutlined, ArrowsAltOutlined, ExperimentOutlined, TeamOutlined, RightCircleOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import UniversityCarousel from '../university-carousel/UniversityCarousel';
import './GraduateCollaboration.css'; 


import heroImage from '../../assets/images/bk2-2.png';

const { Title, Paragraph } = Typography;

const GraduateCollaborationPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const purpleColor = '#6d28d9';

  const features = [
    {
      icon: <GlobalOutlined style={{ fontSize: '24px', color: purpleColor }} />,
      titleKey: 'graduate.features.feature1.title',
      descKey: 'graduate.features.feature1.desc',
    },
    {
      icon: <ArrowsAltOutlined style={{ fontSize: '24px', color: purpleColor }} />,
      titleKey: 'graduate.features.feature2.title',
      descKey: 'graduate.features.feature2.desc',
    },
    {
      icon: <ExperimentOutlined style={{ fontSize: '24px', color: purpleColor }} />,
      titleKey: 'graduate.features.feature3.title',
      descKey: 'graduate.features.feature3.desc',
    },
    {
      icon: <TeamOutlined style={{ fontSize: '24px', color: purpleColor }} />,
      titleKey: 'graduate.features.feature4.title',
      descKey: 'graduate.features.feature4.desc',
    },
  ];

  const steps = [
    {
      titleKey: 'graduate.structure.step1.title',
      descKey: 'graduate.structure.step1.desc',
    },
    {
      titleKey: 'graduate.structure.step2.title',
      descKey: 'graduate.structure.step2.desc',
    },
    {
      titleKey: 'graduate.structure.step3.title',
      descKey: 'graduate.structure.step3.desc',
    },
  ];

  return (
    <div style={{ overflow: 'hidden' }}>
      {/* --- Hero Section --- */}
      <div style={{ position: 'relative', height: '50vh', color: '#fff' }}>
        <img src={heroImage} alt={t('graduate.title')} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
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
            <Title style={{ color: '#fff' }}>{t('graduate.title')}</Title>
            <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '800px', fontSize: '18px' }}>
              {t('graduate.subtitle')}
            </Paragraph>
          </Fade>
        </div>
      </div>

      <div style={{ padding: '50px 5%' }}>
        {/* --- Our Approach Section --- */}
        <div style={{ textAlign: 'center', margin: '50px 0' }}>
          <Slide direction="down" triggerOnce>
            <Title level={2}>{t('graduate.features.title')}</Title>
          </Slide>
          <Row gutter={[24, 24]} style={{ marginTop: '40px' }}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} key={index}>
                <Fade delay={index * 100} triggerOnce>
                  <Card hoverable style={{ height: '100%', cursor: 'default'}}>
                    {feature.icon}
                    <Title level={4} style={{ marginTop: '16px' }}>{t(feature.titleKey)}</Title>
                    <Paragraph type="secondary">{t(feature.descKey)}</Paragraph>
                  </Card>
                </Fade>
              </Col>
            ))}
          </Row>
        </div>

        <Divider />

        {/* --- Program Structure Section --- */}
        <div style={{ margin: '50px 0px' }}>
          <Slide direction="down" triggerOnce>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>{t('graduate.structure.title')}</Title>
          </Slide>
          <Slide direction="up" triggerOnce>
            <div className="graduate-steps-container">
              <Steps current={-1} direction="horizontal" responsive>
                {steps.map((step, index) => (
                  <Steps.Step key={index} title={t(step.titleKey)} description={t(step.descKey)} />
                ))}
              </Steps>
            </div>
          </Slide>
        </div>
        
        {/* --- University Partners Carousel --- */}
        <UniversityCarousel />

        <Divider />

        {/* --- Call to Action Section --- */}
        <div style={{ margin: '50px 0' }}>
          <Fade triggerOnce>
            <Card style={{ textAlign: 'center', backgroundColor: '#f9fafb' }}>
              <Title level={3}>{t('graduate.cta.title')}</Title>
              <Paragraph>{t('graduate.cta.desc')}</Paragraph>
              <Button type="primary" size="large" onClick={() => navigate('/contact')} style={{ backgroundColor: purpleColor }}>
                {t('graduate.cta.button')} <RightCircleOutlined />
              </Button>
            </Card>
          </Fade>
        </div>

      </div>
    </div>
  );
};

export default GraduateCollaborationPage;