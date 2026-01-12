// src/CollaborativeProjectPage.tsx
import React, { FC } from 'react';
import { Row, Col, Typography, Button, Divider, List } from 'antd';
import { ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';

import projectImage1 from '../../assets/images/bk2-2.png';
import projectImage2 from '../../assets/images/bk2-2.png';
import projectImage3 from '../../assets/images/bk2-2.png';
import heroImage from '../../assets/images/bk2-2.png';

const { Title, Paragraph, Text } = Typography;

const ProjectSection: FC<{
  image: string;
  titleKey: string;
  descKey: string;
  imageOnLeft?: boolean;
}> = ({ image, titleKey, descKey, imageOnLeft = false }) => {
  const { t } = useTranslation();
  const imageCol = (
    <Col xs={24} md={10}>
      <Slide direction={imageOnLeft ? 'left' : 'right'} triggerOnce>
        <img
          src={image}
          alt={t(titleKey)}
          style={{ width: '100%', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
        />
      </Slide>
    </Col>
  );

  const textCol = (
    <Col xs={24} md={14}>
      <Slide direction={imageOnLeft ? 'right' : 'left'} triggerOnce>
        <Title level={3}>{t(titleKey)}</Title>
        <Paragraph style={{ fontSize: '16px' }}>{t(descKey)}</Paragraph>
      </Slide>
    </Col>
  );

  return (
    <Row gutter={[48, 40]} align="middle" style={{ marginBottom: '60px' }}>
      {imageOnLeft ? [imageCol, textCol] : [textCol, imageCol]}
    </Row>
  );
};

const CollaborativeProjectPage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const purpleColor = '#6d28d9';

  const completedProjects = [
    'collaborativeProject.completed.item1',
    'collaborativeProject.completed.item2',
    'collaborativeProject.completed.item3',
    'collaborativeProject.completed.item4',
  ];

  return (
<div style={{ overflow: 'hidden' }}>
      {/* --- HERO SECTION --- */}
      <div style={{ position: 'relative', height: '50vh', color: '#fff' }}>
        <img
          src={heroImage}
          alt={t('collaborativeProject.title')}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
          }}
        >
          <Fade triggerOnce>
            <Title style={{ color: '#fff' }}>{t('collaborativeProject.title')}</Title>
            {/* <Paragraph style={{ color: 'rgba(255, 255, 255, 0.9)', maxWidth: '800px', fontSize: '18px' }}>
              {t('collaborativeProject.subtitle')}
            </Paragraph> */}
          </Fade>
        </div>

        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 2,
            color: '#fff',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          {/* {t('common.back')} */}
        </Button>
      </div>

      <div style={{ padding: '50px 5%' }}>

      {/* --- Main Projects --- */}
      <ProjectSection
        image={projectImage1}
        titleKey="collaborativeProject.main.item1.title"
        descKey="collaborativeProject.main.item1.desc"
        imageOnLeft={true}
      />
      <ProjectSection
        image={projectImage2}
        titleKey="collaborativeProject.main.item2.title"
        descKey="collaborativeProject.main.item2.desc"
        imageOnLeft={false}
      />
      <ProjectSection
        image={projectImage3}
        titleKey="collaborativeProject.main.item3.title"
        descKey="collaborativeProject.main.item3.desc"
        imageOnLeft={true}
      />

      <Divider />

      {/* --- Completed Projects --- */}
      <div style={{ marginTop: '60px' }}>
        <Slide direction="up" triggerOnce>
          <Title level={3} style={{ textAlign: 'center', marginBottom: '40px' }}>
            {t('collaborativeProject.completed.title')}
          </Title>
          <List
            dataSource={completedProjects}
            renderItem={(itemKey) => (
              <List.Item>
                <Text style={{ fontSize: '16px' }}>
                  <CheckCircleOutlined style={{ color: purpleColor, marginRight: '12px' }} />
                  {t(itemKey)}
                </Text>
              </List.Item>
            )}
          />
        </Slide>
      </div>
    </div>
    </div>
  );
};

export default CollaborativeProjectPage;