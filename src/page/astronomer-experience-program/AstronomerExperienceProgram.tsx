// src/page/astronomer-experience-program/AstronomerExperienceProgram.tsx
import React, { FC, useEffect, useMemo, useState } from 'react';
import {
  Row, Col, Card, Typography, Button, Divider,
  Space, List, Avatar
} from 'antd';
import {
  ArrowLeftOutlined, StarOutlined, LeftOutlined,
  RocketOutlined, BookOutlined, GlobalOutlined,
  RightCircleOutlined, LaptopOutlined, CompassOutlined,
  EyeOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide, Flip } from 'react-awesome-reveal';
import heroImage from "../../assets/images/bk1.png";

const { Title, Paragraph, Text } = Typography;

const AstronomerExperienceProgram: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const primaryColor = '#6d28d9';

  // 2. 静态导入多个文件夹图片（复用原有可行写法）
  const activityImagesMap = useMemo<Record<string, string[]>>(() => {
    const map: Record<string, string[]> = {};
    try {
      // 文件夹 1
      // @ts-ignore 兼容 webpack require.context
      const ctx1 = require.context(
        '../../assets/images/astronomer experience/1',
        false,
        /\.(png|jpg|jpeg|webp|gif|svg)$/i
      );
      map['1'] = ctx1.keys().map(ctx1);

      // 文件夹 2
      // @ts-ignore 兼容 webpack require.context
      const ctx2 = require.context(
        '../../assets/images/astronomer experience/2',
        false,
        /\.(png|jpg|jpeg|webp|gif|svg)$/i
      );
      map['2'] = ctx2.keys().map(ctx2);

      // 文件夹 3
      // @ts-ignore 兼容 webpack require.context
      const ctx3 = require.context(
        '../../assets/images/astronomer experience/3',
        false,
        /\.(png|jpg|jpeg|webp|gif|svg)$/i
      );
      map['3'] = ctx3.keys().map(ctx3);

      // 文件夹 activity
      // @ts-ignore 兼容 webpack require.context
      const ctx4 = require.context(
        '../../assets/images/astronomer experience/activity',
        false,
        /\.(png|jpg|jpeg|webp|gif|svg)$/i
      );
      map['activity'] = ctx4.keys().map(ctx4);
    } catch (error) {
      console.warn("活动图片加载失败：", error);
      map['1'] = map['1'] || [];
      map['2'] = map['2'] || [];
      map['3'] = map['3'] || [];
      map['activity'] = map['activity'] || [];
    }
    return map;
  }, []);

  // 3. 活动列表数据（已配置翻译键值，无需修改）
const activityListData = [
  {
    nameKey: 'astronomer.activityList.activity1.name',
    descKey: 'astronomer.activityList.activity1.desc',
    folder: '1'
  },
  {
    nameKey: 'astronomer.activityList.activity2.name',
    descKey: 'astronomer.activityList.activity2.desc',
    folder: '2'
  },
  {
    nameKey: 'astronomer.activityList.activity3.name',
    descKey: 'astronomer.activityList.activity3.desc',
    folder: '3'
  },
  {
    nameKey: 'astronomer.activityList.activity4.name',
    descKey: 'astronomer.activityList.activity4.desc',
    folder: 'activity'
  }
];

  // 4. 状态管理
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // 5. 响应式判断
  const screens = {
    xs: window.innerWidth < 576,
    sm: window.innerWidth >= 576 && window.innerWidth < 768,
    md: window.innerWidth >= 768
  };

  // 6. 自定义按钮样式
  const ghostButtonStyle = {
    borderColor: primaryColor,
    color: primaryColor,
    backgroundColor: 'transparent',
    fontSize: screens.xs ? '16px' : '18px',
    fontWeight: 600,
    borderWidth: 2,
    transition: 'all 0.3s ease-in-out'
  };

  // 7. 项目目标数据
  const programObjectives = [
    {
      icon: <BookOutlined style={{ fontSize: '28px', color: primaryColor }} />,
      titleKey: 'astronomer.objectives.keyLearning.title',
      descKey: 'astronomer.objectives.keyLearning.desc'
    },
    {
      icon: <StarOutlined style={{ fontSize: '28px', color: primaryColor }} />,
      titleKey: 'astronomer.objectives.handsOnExperience.title',
      descKey: 'astronomer.objectives.handsOnExperience.desc'
    }
  ];

  // 8. 课程亮点数据
  const curriculumHighlights = [
    {
      icon: <CompassOutlined style={{ color: primaryColor }} />,
      titleKey: 'astronomer.curriculum.nightSkyObservation.title',
      descKey: 'astronomer.curriculum.nightSkyObservation.desc'
    },
    {
      icon: <RocketOutlined style={{ color: primaryColor }} />,
      titleKey: 'astronomer.curriculum.spaceTechnology.title',
      descKey: 'astronomer.curriculum.spaceTechnology.desc'
    },
    {
      icon: <LeftOutlined style={{ color: primaryColor }} />,
      titleKey: 'astronomer.curriculum.astrophysicsLite.title',
      descKey: 'astronomer.curriculum.astrophysicsLite.desc'
    }
  ];

  // 9. 硬件工具数据
  const hardwareTools = [
    {
      nameKey: 'astronomer.hardware.professionalTelescopes',
      icon: <EyeOutlined style={{ fontSize: '24px' }} />
    },
    {
      nameKey: 'astronomer.hardware.mobilePlanetariums',
      icon: <StarOutlined style={{ fontSize: '24px' }} />
    },
    {
      nameKey: 'astronomer.hardware.astronomicalSoftware',
      icon: <LaptopOutlined style={{ fontSize: '24px' }} />
    }
  ];

  // 10. 组件挂载时滚动到顶部
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

  return (
    <div style={{ overflow: 'hidden', backgroundColor: '#fff', fontFamily: 'Noto Sans, Inter, sans-serif' }}>
      <div style={{ position: 'relative', height: screens.xs ? '75vh' : '65vh', color: '#fff' }}>
        <img
          src={heroImage}
          alt={t('astronomer.hero.alt')}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(rgba(0,0,0,0.7), rgba(40, 10, 80, 0.85))',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: screens.xs ? '20px' : '40px'
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
              borderRadius: "8px"
            }}
          />
          <Fade triggerOnce duration={1000}>
            <StarOutlined style={{ fontSize: screens.xs ? '32px' : '48px', color: '#fff', marginBottom: '20px' }} />
            <Title style={{
              color: '#fff',
              marginBottom: '24px',
              fontSize: screens.xs ? '28px' : '48px',
              fontWeight: 800,
              letterSpacing: screens.xs ? '1px' : '2px'
            }}>
              {t('astronomer.hero.mainTitle')}
            </Title>
            <Title level={3} style={{
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '32px',
              fontWeight: 400,
              fontSize: screens.xs ? '18px' : '24px'
            }}>
              {t('astronomer.hero.subTitle')}
            </Title>
            <Paragraph style={{
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '800px',
              fontSize: screens.xs ? '16px' : '18px',
              lineHeight: 1.8,
              marginBottom: '40px'
            }}>
              {t('astronomer.hero.desc')}
            </Paragraph>
            <Button
              type="default"
              size="large"
              onClick={() => navigate('/contact')}
              style={{
                ...ghostButtonStyle,
                borderColor: '#fff',
                color: '#fff',
                padding: '14px 40px',
                borderRadius: '50px',
                boxShadow: '0 0 20px rgba(109, 40, 217, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = primaryColor;
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.boxShadow = '0 0 25px rgba(109, 40, 217, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.boxShadow = '0 0 20px rgba(109, 40, 217, 0.3)';
                e.currentTarget.style.borderColor = '#fff';
              }}
            >
              {t('astronomer.hero.cta')}
              <RightCircleOutlined style={{ marginLeft: '10px' }} />
            </Button>
          </Fade>
        </div>
      </div>

<div style={{ padding: screens.xs ? '50px 5%' : '80px 5%', backgroundColor: '#f8f9fa' }}>
  <div style={{ marginBottom: screens.xs ? '32px' : '48px' }}>
    {/* 顶部Tab栏：新增外层固定容器，让竖线固定在两侧 */}
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      marginBottom: screens.xs ? '20px' : '30px',
      position: 'relative' // 外层容器：作为竖线的固定定位参考（核心！）
    }}>
      {/* 内部滚动容器：仅承载Tab内容滚动，不影响竖线定位 */}
      <div style={{
        overflowX: 'auto',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
        {/* 隐藏webkit内核滚动条 */}
        <style>
          {`
            ::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {/* Tab容器：移动端预留竖线空间，支持横向滚动 */}
        <div className="tab-scroll-container" style={{
          display: 'flex',
          gap: screens.xs ? '10px' : '16px',
          padding: screens.xs ? '8px 12px' : '8px 0',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          {/* 原activityListData循环：底部平直色条高亮 */}
          {activityListData.map((item, index) => (
            <div
              key={index}
              style={{
                padding: screens.xs ? '8px 12px' : '10px 18px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textAlign: 'center',
                fontSize: screens.xs ? '14px' : '16px',
                whiteSpace: 'nowrap',
                color: currentActivityIndex === index ? primaryColor : '#333',
                fontWeight: currentActivityIndex === index ? 500 : 400,
                borderBottom: currentActivityIndex === index ? `2px solid ${primaryColor}` : `2px solid transparent`,
                backgroundColor: 'transparent'
              }}
              onClick={() => {
                setCurrentActivityIndex(index);
                setCurrentImgIndex(0);
              }}
              onMouseEnter={(e) => {
                if (currentActivityIndex !== index) {
                  e.currentTarget.style.color = primaryColor;
                }
              }}
              onMouseLeave={(e) => {
                if (currentActivityIndex !== index) {
                  e.currentTarget.style.color = '#333';
                }
              }}
            >
              {t(item.nameKey)}
            </div>
          ))}
        </div>
      </div>

      {/* 左侧粗竖线：基于外层固定容器定位，不跟随滚动（核心修改） */}
      <div style={{
        display: screens.xs ? 'block' : 'none',
        position: 'absolute',
        left: 0, // 固定在外侧容器左侧
        top: '50%',
        transform: 'translateY(-50%)',
        width: '3px',
        height: '20px',
        backgroundColor: primaryColor + '30',
        borderRadius: '1.5px',
        zIndex: 4
      }}></div>

      {/* 右侧粗竖线：基于外层固定容器定位，不跟随滚动（核心修改） */}
      <div style={{
        display: screens.xs ? 'block' : 'none',
        position: 'absolute',
        right: 0, // 固定在外侧容器右侧
        top: '50%',
        transform: 'translateY(-50%)',
        width: '3px',
        height: '20px',
        backgroundColor: primaryColor + '30',
        borderRadius: '1.5px',
        zIndex: 4
      }}></div>
    </div>

    {/* 原Row内容：完全保留你的原有代码，无修改 */}
    <Row gutter={[screens.xs ? 20 : 30, screens.xs ? 20 : 0]} style={{ maxWidth: '1200px', margin: '0 auto', alignItems: 'stretch' }}>
      <Col xs={24} md={24} style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(109, 40, 217, 0.15)',
          position: 'relative',
          flex: 1
        }}>
          {/* 图片区域：完全保留原有代码 */}
          {(() => {
            const currentFolder = activityListData[currentActivityIndex].folder;
            const currentImages = activityImagesMap[currentFolder] || [];
            const currentActivityName = t(activityListData[currentActivityIndex].nameKey);
            if (currentImages.length === 0) {
              return (
                <div style={{
                  height: screens.xs ? '250px' : '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f5f5f5',
                  color: '#999',
                  fontSize: screens.xs ? '14px' : '16px'
                }}>
                  暂无图片
                </div>
              );
            }
            return (
              <>
                <div style={{ position: 'relative', height: screens.xs ? '250px' : '400px' }}>
                  <img
                    src={currentImages[currentImgIndex]}
                    alt={currentActivityName}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
                  }} />
                  <button
                    onClick={() => setCurrentImgIndex(prev => (prev - 1 + currentImages.length) % currentImages.length)}
                    style={{
                      position: 'absolute',
                      left: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      color: '#fff',
                      cursor: 'pointer',
                      zIndex: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px'
                    }}
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setCurrentImgIndex(prev => (prev + 1) % currentImages.length)}
                    style={{
                      position: 'absolute',
                      right: '10px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      color: '#fff',
                      cursor: 'pointer',
                      zIndex: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px'
                    }}
                  >
                    →
                  </button>
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    color: '#fff',
                    fontSize: '12px',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    padding: '2px 8px',
                    borderRadius: '10px',
                    zIndex: 10
                  }}>
                    {currentImgIndex + 1}/{currentImages.length}
                  </div>
                </div>
              </>
            );
          })()}

          {/* 文案区域：完全保留原有代码 */}
          <div style={{
            padding: screens.xs ? '16px 20px' : '24px 30px',
            backgroundColor: '#fff',
            borderTop: `1px solid ${primaryColor}10`
          }}>
            <Paragraph style={{
              margin: 0,
              lineHeight: 1.8,
              color: '#333',
              fontSize: screens.xs ? '14px' : '16px'
            }}>
              {t(activityListData[currentActivityIndex].descKey)}
            </Paragraph>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</div>

      <div style={{ padding: screens.xs ? '50px 5%' : '80px 5%', backgroundColor: 'transparent' }}>
        {/* 项目目标标题 */}
        <Slide direction="down" triggerOnce>
          <Title level={2} style={{
            textAlign: 'center',
            color: primaryColor,
            marginBottom: '48px',
            fontWeight: 700
          }}>
            {t('astronomer.sections.programObjectives')}
          </Title>
        </Slide>

        {/* 项目目标内容 - 简化：移除默认值，直接使用翻译键值 */}
        <Row
          gutter={[screens.xs ? 20 : 20, 30]} // 核心：统一PC/移动端水平间距（减小PC端过大间距，保留移动端合理间距）
          justify="center"
          style={{ alignItems: 'stretch', width: '100%', maxWidth: '1200px', margin: '0 auto' }} // 新增maxWidth限制PC端最大宽度，避免卡片间距过大
        >
          {programObjectives.map((objective, index) => (
            <Col
              xs={24}
              md={12}
              key={index}
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                paddingLeft: screens.xs ? '8px' : '8px', // 微调内边距，进一步优化间距
                paddingRight: screens.xs ? '8px' : '8px'
              }}
            >
              <Flip
                direction={index % 2 === 0 ? 'horizontal' : 'vertical'}
                triggerOnce
                style={{ width: '100%', maxWidth: '500px', display: 'flex' }} // 减小PC端卡片最大宽度，间接优化间距视觉效果
              >
                <Card
                  style={{
                    height: '100%',
                    width: '100%',
                    minWidth: '280px',
                    backgroundColor: 'rgba(109, 40, 217, 0.03)',
                    border: `1px solid ${primaryColor}20`,
                    borderRadius: '16px',
                    boxShadow: '0 6px 18px rgba(109, 40, 217, 0.08)',
                    transition: 'all 0.4s ease',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(109, 40, 217, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 18px rgba(109, 40, 217, 0.08)';
                  }}
                >
                  <Space
                    direction="vertical"
                    size="large"
                    style={{
                      flex: 1,
                      display: 'flex',
                      width: '100%',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{ textAlign: 'center', width: '100%' }}>{objective.icon}</div>
                    <Title level={4} style={{
                      textAlign: 'center',
                      fontWeight: 700,
                      color: primaryColor,
                      minHeight: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: 0,
                      width: '100%'
                    }}>
                      {t(objective.titleKey)}
                    </Title>
                    <Paragraph style={{
                      textAlign: 'center',
                      lineHeight: 1.8,
                      color: '#333',
                      flex: 1,
                      margin: 0,
                      width: '100%'
                    }}>
                      {t(objective.descKey)}
                    </Paragraph>
                  </Space>
                </Card>
              </Flip>
            </Col>
          ))}
        </Row>
      </div>

      <Divider style={{ borderColor: `${primaryColor}20`, margin: 0 }} />

      {/* 3. Curriculum Highlights 课程亮点 - 简化：移除默认值，直接使用翻译键 */}
      <div style={{ padding: screens.xs ? '50px 5%' : '80px 5%', backgroundColor: '#f8f9fa' }}>
        <Slide direction="up" triggerOnce>
          <Title level={2} style={{
            textAlign: 'center',
            color: primaryColor,
            marginBottom: '48px',
            fontWeight: 700
          }}>
            {t('astronomer.sections.curriculumHighlights')}
          </Title>
        </Slide>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <List
            dataSource={curriculumHighlights}
            renderItem={(item, index) => (
              <Fade delay={index * 150} triggerOnce>
                <List.Item
                  style={{
                    marginBottom: '20px',
                    backgroundColor: '#fff',
                    borderRadius: '12px',
                    padding: '24px',
                    borderLeft: `4px solid ${primaryColor}`,
                    boxShadow: '0 4px 12px rgba(109, 40, 217, 0.05)'
                  }}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        size={56}
                        style={{
                          backgroundColor: 'rgba(109, 40, 217, 0.1)',
                          border: `2px solid ${primaryColor}`
                        }}
                      >
                        {item.icon}
                      </Avatar>
                    }
                    title={<Text strong style={{ fontSize: '18px', fontWeight: 600 }}>
                      {t(item.titleKey)}
                    </Text>}
                    description={<Paragraph style={{ marginTop: '8px', lineHeight: 1.7 }}>
                      {t(item.descKey)}
                    </Paragraph>}
                  />
                </List.Item>
              </Fade>
            )}
          />
        </div>
      </div>

      <Divider style={{ borderColor: `${primaryColor}20`, margin: 0 }} />

      {/* 4. Hardware & Tools 硬件工具 - 简化：移除默认值，直接使用翻译键 */}
      <div style={{ padding: screens.xs ? '50px 5%' : '80px 5%', backgroundColor: 'transparent' }}>
        <Fade triggerOnce>
          <Title level={2} style={{
            textAlign: 'center',
            color: primaryColor,
            marginBottom: '48px',
            fontWeight: 700
          }}>
            {t('astronomer.sections.hardwareTools')}
          </Title>
        </Fade>
<Row
  gutter={[screens.xs ? 20 : 40, 40]}
  justify="center"  // 确保Row内所有Col整体居中
  align="stretch"   // 确保同一行的Col高度一致，为卡片等高打下基础
  style={{
    width: '100%',
    boxSizing: 'border-box',
    padding: '0 16px', // 左右留白，避免贴边
    margin: '0 auto'   // 确保Row自身水平居中
  }}
>
  {hardwareTools.map((tool, index) => (
    <Col
      xs={24}    // 移动端：单行1个，垂直排列
      sm={24}
      md={8}     // PC端：单行3个（24/8=3），水平排列
      key={index}
      style={{
        display: 'flex',
        justifyContent: 'center', // 确保Col内的卡片水平居中
        boxSizing: 'border-box',
        padding: '0 8px' // 卡片间距留白，不挤压
      }}
    >
      <Slide direction="up" delay={index * 200} triggerOnce>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '24px 16px',
            borderRadius: '16px',
            backgroundColor: 'rgba(109, 40, 217, 0.04)',
            transition: 'all 0.3s ease',
            width: '100%',          // 卡片宽度自适应Col
            maxWidth: '300px',      // 统一最大宽度，确保PC端卡片大小一致
            minWidth: '200px',      // 统一最小宽度，避免移动端卡片过窄
            height: '100%',         // 卡片高度充满Col，确保同一行卡片等高
            flex: '0 0 auto',       // 固定尺寸，不拉伸不收缩
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.backgroundColor = 'rgba(109, 40, 217, 0.08)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.backgroundColor = 'rgba(109, 40, 217, 0.04)';
          }}
        >
          <Avatar
            size={screens.xs ? 60 : 72} // 响应式图标大小，保持视觉统一
            style={{
              backgroundColor: primaryColor,
              marginBottom: '16px'
            }}
          >
            {tool.icon}
          </Avatar>
          <Text style={{
            fontSize: screens.xs ? '14px' : '16px',
            fontWeight: 600,
            color: '#333',
            minHeight: '24px', // 固定文字最小高度，避免文字多少导致卡片高度差异
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            wordWrap: 'break-word',
            wordBreak: 'keep-all',
            width: '100%',
            padding: '0 4px'
          }}>
            {t(tool.nameKey)}
          </Text>
        </div>
      </Slide>
    </Col>
  ))}
</Row>
      </div>

      <Divider style={{ borderColor: `${primaryColor}20`, margin: 0 }} />

      {/* 5. Educational Impact 教育价值 - 简化：移除默认值，直接使用翻译键 */}
      <div style={{ padding: screens.xs ? '50px 5%' : '80px 5%', backgroundColor: 'transparent' }}>
        <Fade triggerOnce>
          <Title level={2} style={{
            textAlign: 'center',
            color: primaryColor,
            marginBottom: '32px',
            fontWeight: 700
          }}>
            {t('astronomer.sections.educationalImpact')} {/* 简化：translation.json已有配置 */}
          </Title>
        </Fade>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <Flip direction="horizontal" triggerOnce>
            <Card
              style={{
                backgroundColor: 'rgba(109, 40, 217, 0.05)',
                border: `2px solid ${primaryColor}15`,
                borderRadius: '20px',
                padding: '24px'
              }}
            >
              <Space direction="vertical" size="large" align="center">
                <GlobalOutlined style={{ fontSize: '48px', color: primaryColor }} />
                <Title level={4} style={{
                  textAlign: 'center',
                  fontWeight: 600,
                  color: '#222'
                }}>
                  {t('astronomer.impact.title')} {/* 简化：移除默认值，直接使用翻译键 */}
                </Title>
                <Paragraph style={{
                  textAlign: 'center',
                  lineHeight: 1.8,
                  fontSize: '16px'
                }}>
                  {t('astronomer.impact.desc')} {/* 简化：移除默认值，直接使用翻译键 */}
                </Paragraph>
              </Space>
            </Card>
          </Flip>
        </div>
      </div>

      <Divider style={{ borderColor: `${primaryColor}20`, margin: 0 }} />

      {/* 6. Final CTA 底部行动按钮 - 简化：移除默认值，直接使用翻译键 */}
      <div style={{ padding: screens.xs ? '50px 5%' : '80px 5%', backgroundColor: 'transparent', marginBottom: '40px' }}>
        <Fade triggerOnce>
          <Card
            style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.08), rgba(111, 66, 193, 0.05))',
              border: `2px solid ${primaryColor}`,
              borderRadius: '24px',
              padding: screens.xs ? '30px 20px' : '50px 30px',
              boxShadow: '0 10px 30px rgba(109, 40, 217, 0.1)',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            <Title level={3} style={{
              color: primaryColor,
              marginBottom: '24px',
              fontWeight: 700,
              fontSize: screens.xs ? '22px' : '28px'
            }}>
              {t('astronomer.finalCta.title')} {/* 简化：translation.json已有配置 */}
            </Title>
            <Paragraph style={{
              maxWidth: '700px',
              margin: '0 auto 36px',
              fontSize: screens.xs ? '16px' : '18px',
              lineHeight: 1.8
            }}>
              {t('astronomer.finalCta.desc')} {/* 简化：translation.json已有配置 */}
            </Paragraph>
<Button
  type="default"
  size="large"
  onClick={() => navigate('/contact')}
  style={{
    ...ghostButtonStyle,
    // 关键1：响应式内边距 - 移动端减小左右内边距，大幅缩小按钮宽度
    padding: screens.xs     ? '10px 22px' : '16px 50px',
    borderRadius: '50px',
    // 关键2：响应式字体大小 - 移动端减小字体，避免文字过长溢出
    fontSize: screens.xs ? '11px' : '18px',
    // 关键3：兜底防溢出样式 - 确保按钮不超出父容器
    maxWidth: '100%', // 按钮宽度不超过父容器
    boxSizing: 'border-box', // 内边距计入宽度，不额外增加总宽度
    // 关键4：文字换行控制 - 移动端允许文字换行，彻底解决长文本溢出
    whiteSpace: screens.xs ? 'normal' : 'nowrap', // 移动端取消强制单行
    wordBreak: 'break-word', // 长单词自动换行
    textAlign: 'center' // 换行后文字居中对齐，保证视觉美观
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = primaryColor;
    e.currentTarget.style.color = '#fff';
    e.currentTarget.style.transform = 'translateY(-3px)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = primaryColor;
    e.currentTarget.style.transform = 'translateY(0)';
  }}
>
  {t('astronomer.finalCta.cta')}
  {/* 关键5：响应式图标间距 - 移动端减小图标与文字的间距，更协调 */}
  <RightCircleOutlined style={{ marginLeft: screens.xs ? '2px' : '12px' }} />
</Button>
          </Card>
        </Fade>
      </div>
    </div>
  );
};

export default AstronomerExperienceProgram;