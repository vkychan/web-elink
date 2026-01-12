// src/page/innovative-tech-tours/InnovativeTechTours.tsx
import React, { FC, useRef, useEffect, useMemo } from 'react'; // 仅新增 useMemo
import {
  Row, Col, Card, Typography, Button, Divider,
  Space, Steps, Avatar, Carousel // 仅新增 Carousel
} from 'antd';
import {
  ArrowLeftOutlined, CodeOutlined, BankOutlined,
  UsbOutlined, BookOutlined, RocketOutlined,
  RightCircleOutlined, LaptopOutlined,
  DatabaseOutlined, CiOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

import './InnovativeTechTours.css';
import heroImage from "../../assets/images/bk1.png";

const { Title, Paragraph, Text } = Typography;

// 仅新增：轮播图片类型接口（不影响其他代码）
interface CarouselImage {
  src: string;
  alt: string;
  desc: string;
}

const InnovativeTechTours: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const primaryColor = '#6d28d9';
  const learningPathRef = useRef<HTMLDivElement>(null); // 锚点定位用

  // 响应式判断
  const screens = {
    xs: window.innerWidth < 576,
    sm: window.innerWidth >= 576 && window.innerWidth < 768,
    md: window.innerWidth >= 768
  };

  // 自定义Ghost按钮样式（兼容低版本antd）
  const ghostButtonStyle = {
    borderColor: primaryColor,
    color: primaryColor,
    backgroundColor: 'transparent',
    fontSize: '16px',
    fontWeight: 600,
    borderWidth: 2
  };

  // 仅新增：轮播图片加载逻辑（不影响其他代码）
  const carouselImages = useMemo<CarouselImage[]>(() => {
    try {
      // @ts-ignore 忽略TS检查，兼容webpack图片批量导入
      const imageContext = require.context(
        '../../assets/images/eLink programming', // 你的轮播图片文件夹路径，可自行修改
        false,
        /\.(png|jpg|jpeg|webp|gif|svg)$/i
      );

      const imgKeys = imageContext.keys();
      return imgKeys.map((imgPath: string, index: number): CarouselImage => {
        // @ts-ignore
        const imgSrc = imageContext(imgPath) as string;
        return {
          src: imgSrc,
          alt: `Innovative Tech Carousel ${index + 1}`,
          desc: t(`innovativeTech.carousel.desc${index + 1}`, `Tech Scene ${index + 1}`)
        };
      });
    } catch (error) {
      console.warn("轮播图片加载失败（文件夹不存在或无图片）：", error);
      return [];
    }
  }, [t]);

  // 核心支柱数据（替换为翻译键值）
  const corePillars = [
    {
      icon: <CodeOutlined style={{ fontSize: '32px', color: primaryColor }} />,
      titleKey: 'innovativeTech.pillars.codingFoundations.title',
      descKey: 'innovativeTech.pillars.codingFoundations.desc',
      bgColor: 'rgba(109, 40, 217, 0.05)'
    },
    {
      icon: <BankOutlined style={{ fontSize: '32px', color: primaryColor }} />, // 替换BrainOutlined
      titleKey: 'innovativeTech.pillars.artificialIntelligence.title',
      descKey: 'innovativeTech.pillars.artificialIntelligence.desc',
      bgColor: 'rgba(109, 40, 217, 0.08)'
    },
    {
      icon: <UsbOutlined style={{ fontSize: '32px', color: primaryColor }} />,
      titleKey: 'innovativeTech.pillars.hardwareIntegration.title',
      descKey: 'innovativeTech.pillars.hardwareIntegration.desc',
      bgColor: 'rgba(109, 40, 217, 0.05)'
    }
  ];

  // 学习路径数据（替换为翻译键值）
  const learningPath = [
    {
      titleKey: 'innovativeTech.learningPath.beginner.title',
      descKey: 'innovativeTech.learningPath.beginner.desc',
      icon: <BookOutlined style={{ color: primaryColor }} />
    },
    {
      titleKey: 'innovativeTech.learningPath.intermediate.title',
      descKey: 'innovativeTech.learningPath.intermediate.desc',
      icon: <CodeOutlined style={{ color: primaryColor }} />
    },
    {
      titleKey: 'innovativeTech.learningPath.advanced.title',
      descKey: 'innovativeTech.learningPath.advanced.desc',
      icon: <RocketOutlined style={{ color: primaryColor }} />
    }
  ];

  // 技术栈数据（技术名称无需翻译，保留通用英文）
  const techStack = [
    {
      name: 'Python',
      icon: <LaptopOutlined style={{ fontSize: '24px' }} />
    },
    {
      name: 'TensorFlow',
      icon: <DatabaseOutlined style={{ fontSize: '24px' }} />
    },
    {
      name: 'OpenCV',
      icon: <BankOutlined style={{ fontSize: '24px' }} />, // 替换BrainOutlined
    },
    {
      name: 'Arduino',
      icon: <CiOutlined style={{ fontSize: '24px' }} /> // 替换CpuOutlined
    }
  ];

  // 核心修复：组件挂载后强制滚动到顶部
  useEffect(() => {
    // 方法1：标准滚动到顶部（无动画，立即生效）
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });

    // 方法2：兜底方案（兼容部分浏览器/环境）
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 方法3：禁用浏览器的滚动记忆（解决路由切换后的残留问题）
    window.history.scrollRestoration = 'manual';
  }, []); // 空依赖：仅组件挂载时执行一次

  // 锚点滚动函数
  const scrollToLearningPath = () => {
    learningPathRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 内联样式替代外部CSS（避免文件找不到报错）
  const styles = {
    ghostBtnHover: {
      transition: 'all 0.3s ease-in-out',
      ':hover': {
        backgroundColor: primaryColor,
        color: '#fff',
        borderColor: primaryColor,
        transform: 'translateY(-2px)'
      }
    },
    solidBtn: {
      ...ghostButtonStyle,
      backgroundColor: primaryColor,
      color: '#fff',
      transition: 'all 0.3s ease-in-out',
      ':hover': {
        backgroundColor: '#5b21b6',
        borderColor: '#5b21b6',
        transform: 'translateY(-2px)'
      }
    },
    pillarCard: {
      height: '100%',
      borderRadius: '12px',
      border: 'none',
      boxShadow: '0 8px 24px rgba(109, 40, 217, 0.1)',
      transition: 'all 0.4s ease',
      ':hover': {
        transform: 'translateY(-8px)',
        boxShadow: '0 12px 32px rgba(109, 40, 217, 0.15)'
      }
    },
    techItem: {
      padding: '16px',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      ':hover': {
        backgroundColor: 'rgba(109, 40, 217, 0.05)',
        transform: 'scale(1.05)'
      }
    }
  };

  return (
    <div style={{ overflow: 'hidden', backgroundColor: '#fff' }}>
      {/* 1. Hero Section 英雄区 - 统一样式版 */}
        <div style={{ position: 'relative', height: screens.xs ? '70vh' : '60vh', color: '#fff' }}>
          <img
            src={heroImage}
            alt={t('innovativeTech.hero.alt', 'Coding & AI: Shaping Future Innovators')}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            // 替换纯色为统一渐变遮罩
            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(40, 10, 80, 0.85))',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px'
          }}>
            {/* 返回按钮 - 样式保持但优化交互一致性 */}
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
                borderRadius: '8px', // 统一圆角
                transition: 'background-color 0.3s ease' // 增加过渡动画
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
              }}
            />

            {/* 增加统一的渐变动画时长 */}
            <Fade triggerOnce duration={1000}>
              <Title style={{
                color: '#fff',
                marginBottom: '24px',
                fontSize: screens.xs ? '28px' : '42px',
                fontWeight: 700,
                letterSpacing: screens.xs ? '1px' : '2px', // 统一字间距
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)' // 增加文字阴影提升可读性
              }}>
                {t('innovativeTech.hero.mainTitle', 'Coding & AI: Shaping Future Innovators')}
              </Title>
              <Paragraph style={{
                color: 'rgba(255, 255, 255, 0.95)',
                maxWidth: '900px',
                fontSize: screens.xs ? '16px' : '20px',
                lineHeight: 1.8,
                marginBottom: '40px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)' // 增加文字阴影
              }}>
                {t('innovativeTech.hero.desc', 'Mastery of Python, AI applications, and hardware integration for the leaders of tomorrow.')}
              </Paragraph>

              {/* 双CTA按钮 - 统一样式+交互 */}
              <Space size={screens.xs ? 12 : 24}>
                {/* 幽灵按钮 - 统一交互和视觉 */}
                <Button
                  type="default"
                  size="large"
                  onClick={scrollToLearningPath}
                  style={{
                    ...ghostButtonStyle, // 保留原有幽灵按钮样式
                    borderColor: '#fff',
                    color: '#fff',
                    padding: '14px 40px', // 统一内边距
                    borderRadius: '50px', // 统一圆形圆角
                    boxShadow: '0 0 20px rgba(109, 40, 217, 0.3)', // 统一阴影
                    borderWidth: 1,
                    borderStyle: 'solid',
                    transition: 'all 0.3s ease' // 统一过渡动画
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = primaryColor;
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(109, 40, 217, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(109, 40, 217, 0.3)';
                    e.currentTarget.style.borderColor = '#fff';
                  }}
                >
                  {t('innovativeTech.hero.cta1', 'View Curriculum')}
                  <RightCircleOutlined style={{ marginLeft: '10px' }} /> {/* 统一图标间距 */}
                </Button>

                {/* 实心按钮 - 统一样式+交互 */}
                <Button
                  type="default"
                  size="large"
                  onClick={() => navigate('/contact')}
                  style={{
                    ...styles.solidBtn, // 保留原有实心按钮样式
                    padding: '14px 40px', // 统一内边距
                    borderRadius: '50px', // 统一圆形圆角
                    boxShadow: '0 0 20px rgba(109, 40, 217, 0.4)', // 统一阴影
                    border: 'none',
                    transition: 'all 0.3s ease' // 统一过渡动画
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 25px rgba(109, 40, 217, 0.6)';
                    e.currentTarget.style.transform = 'scale(1.05)'; // 轻微放大效果
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(109, 40, 217, 0.4)';
                    e.currentTarget.style.transform = 'scale(1)'; // 还原大小
                  }}
                >
                  {t('innovativeTech.hero.cta2', 'Book a Demo')}
                </Button>
              </Space>
            </Fade>
          </div>
        </div>

      {/* 2. Core Pillars 核心支柱 */}
      <div style={{ padding: screens.xs ? '40px 5%' : '80px 5%', backgroundColor: 'transparent' }}>
        <Slide direction="down" triggerOnce>
          <Title level={2} style={{
            textAlign: 'center',
            color: primaryColor,
            marginBottom: '48px',
            fontWeight: 700
          }}>
            {t('innovativeTech.sections.corePillars', 'Core Pillars')}
          </Title>
        </Slide>

        {/* ====== 新增：轮播组件（插入在Core Pillars标题下方，不影响其他代码） ====== */}
        <div style={{ marginBottom: screens.xs ? '32px' : '48px' }}>
          {carouselImages.length > 0 ? (
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(109, 40, 217, 0.15)',
              position: 'relative'
            }}>
              <Carousel
                effect="fade"
                autoplay={true}
                autoplaySpeed={3000}
                dots={{ className: 'custom-innovative-carousel-dots' }}
                arrows={true}
                pauseOnHover={true}
              >
                {carouselImages.map((img, index) => (
                  <div key={index} style={{ position: 'relative', height: screens.xs ? '250px' : '400px' }}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                    {/* 渐变遮罩，提升视觉层次 */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '40%',
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
                    }} />
                  </div>
                ))}
              </Carousel>
            </div>
          ) : (
            // 兜底提示：无图片时显示，不报错
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '80px 20px',
              borderRadius: '16px',
              border: `1px dashed ${primaryColor}`,
              textAlign: 'center',
              color: '#666'
            }}>
              <Paragraph>No carousel images found. Please add images to the folder.</Paragraph>
            </div>
          )}
        </div>
        {/* ====== 轮播组件结束 ====== */}

        <Row gutter={[screens.xs ? 16 : 24, 32]} justify="center" style={{ alignItems: 'stretch' }}>
          {corePillars.map((pillar, index) => (
            <Col xs={24} md={8} key={index} style={{ display: 'flex' }}>
              <Zoom delay={index * 200} triggerOnce>
                <Card
                  style={{
                    ...styles.pillarCard,
                    backgroundColor: pillar.bgColor,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    flex: 1
                  }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: '24px',
                      boxShadow: '0 4px 12px rgba(109, 40, 217, 0.2)'
                    }}>
                      {pillar.icon}
                    </div>
                    <Title level={4} style={{
                      fontWeight: 700,
                      marginBottom: '16px',
                      minHeight: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {t(pillar.titleKey,
                        pillar.titleKey.includes('codingFoundations') ? 'Coding Foundations' :
                        pillar.titleKey.includes('artificialIntelligence') ? 'Artificial Intelligence' : 'Hardware Integration')}
                    </Title>
                    <Paragraph type="secondary" style={{
                      lineHeight: 1.7,
                      flex: 1,
                      margin: 0
                    }}>
                      {t(pillar.descKey,
                        pillar.descKey.includes('codingFoundations') ? 'Scratch to Python/C++ - Build a solid programming foundation from visual to text-based coding.' :
                        pillar.descKey.includes('artificialIntelligence') ? 'Machine Learning, Facial Recognition, and Voice Control - Apply AI to real-world scenarios.' :
                        'Connecting code to the physical world via sensors and robotics - Bring code to life.')}
                    </Paragraph>
                  </div>
                </Card>
              </Zoom>
            </Col>
          ))}
        </Row>
      </div>

      <Divider style={{ borderColor: `${primaryColor}20`, margin: 0 }} />

      {/* 3. Learning Path 学习路径 */}
      <div
        ref={learningPathRef}
        style={{ padding: screens.xs ? '40px 5%' : '80px 5%', backgroundColor: '#f9fafb' }}
      >
        <Slide direction="up" triggerOnce>
          <Title level={2} style={{
            textAlign: 'center',
            color: primaryColor,
            marginBottom: '48px',
            fontWeight: 700
          }}>
            {t('innovativeTech.sections.learningPath', 'Learning Path')}
          </Title>
        </Slide>

        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Steps
            current={-1}
            direction={screens.xs ? 'vertical' : 'horizontal'}
            style={{ marginBottom: '40px' }}
            items={learningPath.map((step, index) => ({
              title: (
                <Text strong style={{ fontSize: '18px', color: primaryColor }}>
                  {t(step.titleKey,
                    step.titleKey.includes('beginner') ? 'Beginner (Level 1)' :
                    step.titleKey.includes('intermediate') ? 'Intermediate (Level 2)' : 'Advanced (Level 3)')}
                </Text>
              ),
              description: <Paragraph style={{ marginTop: '8px' }}>
                {t(step.descKey,
                  step.descKey.includes('beginner') ? 'Graphical programming & Basic AI logic - Perfect for students new to coding.' :
                  step.descKey.includes('intermediate') ? 'Python syntax & AI Model training - Build and train simple AI models.' :
                  'Real-world project implementation and Competition prep - Ready for tech challenges.')}
              </Paragraph>,
              icon: step.icon
            }))}
          />
        </div>
      </div>

      <Divider style={{ borderColor: `${primaryColor}20`, margin: 0 }} />

      {/* 4. Tech Stack 技术栈 */}
      <div style={{ padding: screens.xs ? '40px 5%' : '80px 5%', backgroundColor: 'transparent' }}>
        <Fade triggerOnce>
          <Title level={2} style={{
            textAlign: 'center',
            color: primaryColor,
            marginBottom: '48px',
            fontWeight: 700
          }}>
            {t('innovativeTech.sections.techStack', 'Our Tech Stack')}
          </Title>
        </Fade>

        <Row gutter={[32, 32]} justify="center" align="middle"> {/* 新增align="middle"确保行内元素垂直居中 */}
          {techStack.map((tech, index) => (
            <Col xs={6} sm={4} md={3} key={index} style={{ display: 'flex', justifyContent: 'center' }}> {/* 列内强制水平居中 */}
              <Slide direction="up" delay={index * 150} triggerOnce>
                <div style={{
                  ...styles.techItem,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center', // 容器内所有元素水平居中
                  justifyContent: 'center', // 容器内所有元素垂直居中
                  textAlign: 'center',
                  width: '100%', // 占满列宽，避免宽度不一致导致对齐偏差
                  height: '100%' // 统一高度
                }}>
                  <Avatar
                    size={screens.xs ? 64 : 80}
                    style={{
                      backgroundColor: primaryColor,
                      margin: '0 auto 16px',
                      display: 'flex',
                      alignItems: 'center', // Avatar内部图标垂直居中
                      justifyContent: 'center' // Avatar内部图标水平居中
                    }}
                    icon={tech.icon} // 改用icon属性（推荐），替代直接嵌套
                  />
                  <Text style={{
                    display: 'block',
                    textAlign: 'center',
                    fontSize: screens.xs ? '14px' : '16px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap', // 防止文字换行导致高度变化
                    lineHeight: 1.2 // 统一文字行高
                  }}>
                    {tech.name}
                  </Text>
                </div>
              </Slide>
            </Col>
          ))}
        </Row>
      </div>

      {/* 5. Final CTA 底部行动按钮 */}
      <div style={{ padding: screens.xs ? '40px 5%' : '80px 5%', backgroundColor: 'transparent' }}>
        <Fade triggerOnce>
          <Card
            style={{
              textAlign: 'center',
              backgroundColor: 'rgba(109, 40, 217, 0.08)',
              border: `2px solid ${primaryColor}`,
              borderRadius: '16px',
              padding: screens.xs ? '20px' : '40px'
            }}
          >
            <Title level={3} style={{
              color: primaryColor,
              marginBottom: '24px',
              fontWeight: 700
            }}>
              {t('innovativeTech.finalCta.title', 'Ready to bring AI to your classroom?')}
            </Title>
            <Paragraph style={{
              maxWidth: '800px',
              margin: '0 auto 32px',
              fontSize: screens.xs ? '16px' : '18px'
            }}>
              {t('innovativeTech.finalCta.desc', 'Our Coding & AI program is tailored to equip students with the skills needed to thrive in the digital age. Contact our education consultants to learn more about custom programs, pricing, and implementation.')}
            </Paragraph>
        <Button
          type="default"
          size="large"
          onClick={() => navigate('/contact')}
          style={{
            ...ghostButtonStyle,
            // 关键1：响应式内边距 - 移动端减小左右内边距
            padding: screens.xs ? '12px 24px' : '16px 48px',
            // 关键2：响应式字体大小 - 移动端减小字体
            fontSize: screens.xs ? '13px' : '16px',
            ...styles.ghostBtnHover,
            // 关键3：兜底样式 - 防止按钮超出父容器
            maxWidth: '100%', // 按钮宽度不超过父容器
            boxSizing: 'border-box', // 内边距计入宽度，不额外增加总宽度
            // 关键4：文字换行控制 - 移动端允许文字换行，避免溢出
            whiteSpace: screens.xs ? 'normal' : 'nowrap', // 移动端取消强制单行
            wordBreak: 'break-word', // 长单词自动换行
            textAlign: 'center' // 换行后文字居中对齐
          }}
        >
          {t('innovativeTech.finalCta.cta', 'Contact us')}
          {/* 关键5：响应式图标间距 - 移动端减小图标与文字的间距 */}
          <RightCircleOutlined style={{
            marginLeft: screens.xs ? '2px' : '12px', // 移动端间距6px，桌面端12px
            fontSize: screens.xs ? '9px' : '16px' // 移动端图标缩小，更协调
          }} />
        </Button>
          </Card>
        </Fade>
      </div>
    </div>
  );
};

export default InnovativeTechTours;