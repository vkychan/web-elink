import React, { FC, useEffect, useMemo } from 'react';
import {
  Row, Col, Card, Typography, Button, Divider,
  Space, Tag, Carousel// 新增 Carousel 导入
} from 'antd';
import {
  ArrowLeftOutlined, BulbOutlined,
  UserOutlined, ExperimentOutlined, AimOutlined,
  LeftOutlined, LaptopOutlined, RightCircleOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Fade, Slide } from 'react-awesome-reveal';
import './FutureScientistTrainingCourse.css';

// 导入占位图片（原有）
import heroImage from "../../assets/images/bk1.png";

const { Title, Paragraph } = Typography;

// 1. 定义轮播图片类型接口（解决img隐式any错误）
interface CarouselImage {
  src: string;
  alt: string;
  desc: string;
}

const FutureScientistTrainingCoursePage: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // 主色调（项目统一紫色）
  const primaryColor = '#6d28d9';

  // 响应式判断（简化版）
  const screens = {
    xs: window.innerWidth < 576,
    sm: window.innerWidth >= 576 && window.innerWidth < 768,
    md: window.innerWidth >= 768
  };

  // 按钮样式：模拟ghost效果（兼容低版本antd）
  const customButtonStyle = {
    borderColor: primaryColor,
    color: primaryColor,
    backgroundColor: 'transparent',
    fontSize: '16px',
    fontWeight: 500,
    borderWidth: 1
  } as React.CSSProperties; // 明确样式类型

  // 课程模块数据（替换为翻译键值）
  const curriculumModules = [
    {
      icon: <ExperimentOutlined style={{ fontSize: '28px', color: primaryColor }} />,
      titleKey: 'futureScientist.curriculum.scientificMethod.title',
      descKey: 'futureScientist.curriculum.scientificMethod.desc'
    },
    {
      icon: <AimOutlined style={{ fontSize: '28px', color: primaryColor }} />,
      titleKey: 'futureScientist.curriculum.appliedPhysics.title',
      descKey: 'futureScientist.curriculum.appliedPhysics.desc'
    },
    {
      icon: <LeftOutlined style={{ fontSize: '28px', color: primaryColor }} />,
      titleKey: 'futureScientist.curriculum.biologicalInquiry.title',
      descKey: 'futureScientist.curriculum.biologicalInquiry.desc'
    },
    {
      icon: <LaptopOutlined style={{ fontSize: '28px', color: primaryColor }} />,
      titleKey: 'futureScientist.curriculum.sustainableTech.title',
      descKey: 'futureScientist.curriculum.sustainableTech.desc'
    }
  ];

  // 核心技能数据（替换为翻译键值）
  const keySkills = [
    {
      titleKey: 'futureScientist.skills.criticalThinking.title',
      descKey: 'futureScientist.skills.criticalThinking.desc'
    },
    {
      titleKey: 'futureScientist.skills.collaboration.title',
      descKey: 'futureScientist.skills.collaboration.desc'
    },
    {
      titleKey: 'futureScientist.skills.problemSolving.title',
      descKey: 'futureScientist.skills.problemSolving.desc'
    }
  ];

  // 目标受众数据（替换为翻译键值）
  const targetAudience = [
    {
      grade: 'K-6', // 通用标识无需翻译
      titleKey: 'futureScientist.audience.primary.title',
      descKey: 'futureScientist.audience.primary.desc'
    },
    {
      grade: '7-12', // 通用标识无需翻译
      titleKey: 'futureScientist.audience.secondary.title',
      descKey: 'futureScientist.audience.secondary.desc'
    }
  ];

  // 核心：Webpack 批量加载图片（彻底绕过 TS 类型检查，无报错）
  const carouselImages = useMemo<CarouselImage[]>(() => {
    try {
      // 关键：用 @ts-ignore 直接忽略 TS 类型检查，强制使用 require.context
      // 同时保留原有逻辑，Webpack 运行时会正常识别
      // @ts-ignore
      const imageContext = require.context(
        '../../assets/images/future scientist', // 保持你原有路径，无需修改
        false, // 不遍历子文件夹
        /\.(png|jpg|jpeg|webp|gif|svg)$/i // 支持所有图片格式，忽略大小写
      );

      // 遍历生成图片列表，明确类型消除隐式any
      const imgKeys = imageContext.keys();
      return imgKeys.map((imgPath: string, index: number): CarouselImage => {
        // @ts-ignore 再次忽略类型检查，确保图片路径正常获取
        const imgSrc = imageContext(imgPath) as string;
        return {
          src: imgSrc,
          alt: `Future Scientist Image ${index + 1}`,
          desc: t(`futureScientist.carousel.desc${index + 1}`, `Project Scene ${index + 1}`)
        };
      });
    } catch (error) {
      // 异常时返回空数组，不影响页面其他功能
      console.warn("加载轮播图片失败：", error);
      return [];
    }
  }, [t]);

  // 核心修复：组件挂载后强制滚动到顶部（原有代码，未修改）
  useEffect(() => {
    // 方法1：最直接的滚动到顶部
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 立即滚动，无动画
    });

    // 额外兜底：如果window滚动无效，滚动document.documentElement
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 可选：清除浏览器的滚动记忆（解决路由切换后的滚动残留）
    window.history.scrollRestoration = 'manual';
  }, []); // 空依赖：仅组件挂载时执行一次

  return (
    <div style={{ overflow: 'hidden', backgroundColor: '#fff' }}>
        {/* Future Scientist Hero Section 未来科学家英雄区（原有代码，未修改） */}
        <div style={{ position: 'relative', height: screens.xs ? '75vh' : '65vh', color: '#fff' }}>
          {/* 原生img标签 */}
          <img
            src={heroImage}
            alt={t('futureScientist.hero.alt', 'Future Scientist Training Program')}
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
            {/* 返回按钮 */}
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
            />
            <Fade triggerOnce duration={1000}>
              <Title style={{
                color: '#fff',
                marginBottom: '24px',
                fontSize: screens.xs ? '28px' : '48px',
                fontWeight: 800,
                letterSpacing: screens.xs ? '1px' : '2px'
              }}>
                {t('futureScientist.hero.mainTitle', 'Future Scientist Training Program')}
              </Title>
              <Paragraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: '800px',
                fontSize: screens.xs ? '16px' : '18px',
                lineHeight: 1.8,
                marginBottom: '40px'
              }}>
                {t('futureScientist.hero.desc', 'Empowering the next generation of innovators through hands-on STEAM exploration.')}
              </Paragraph>
              {/* CTA按钮：完全匹配参考代码的按钮样式 */}
              <Button
                type="default"
                size="large"
                onClick={() => navigate('/contact')}
                // 统一按钮基础样式（和参考代码完全一致）
                style={{
                  borderColor: '#fff',
                  color: '#fff',
                  backgroundColor: 'transparent',
                  fontSize: '16px',
                  fontWeight: 500,
                  borderWidth: 1,
                  padding: '14px 40px', // 参考代码的按钮内边距
                  borderRadius: '50px', // 参考代码的圆形圆角
                  boxShadow: '0 0 20px rgba(109, 40, 217, 0.3)', // 参考代码的初始阴影
                  borderStyle: 'solid' // 确保边框样式统一
                }}
                className="custom-ghost-btn"
                // 鼠标移入交互（和参考代码完全一致）
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLButtonElement;
                  target.style.backgroundColor = primaryColor;
                  target.style.color = '#fff';
                  target.style.boxShadow = '0 0 25px rgba(109, 40, 217, 0.5)';
                  target.style.borderColor = primaryColor; // 移入时边框色保持一致
                }}
                // 鼠标移出还原（和参考代码完全一致）
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLButtonElement;
                  target.style.backgroundColor = 'transparent';
                  target.style.color = '#fff';
                  target.style.boxShadow = '0 0 20px rgba(109, 40, 217, 0.3)';
                  target.style.borderColor = '#fff'; // 移出时边框色还原
                }}
              >
                {t('futureScientist.hero.cta', 'Learn More / Inquire Now')}
                <RightCircleOutlined style={{ marginLeft: '10px' }} /> {/* 和参考代码统一图标间距 */}
              </Button>
            </Fade>
          </div>
        </div>
      {/* 2. Program Overview 项目概述（集成轮播，原有代码仅保留渲染逻辑） */}
      <div style={{ padding: '60px 5%', backgroundColor: 'transparent' }}>
        <Slide direction="down" triggerOnce>
          <Title level={2} style={{ textAlign: 'center', color: primaryColor }}>
            {t('futureScientist.sections.programOverview', 'Program Overview')}
          </Title>
        </Slide>
        <Fade triggerOnce style={{ marginTop: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          <Paragraph style={{ fontSize: '16px', lineHeight: 1.8, textAlign: 'center' }}>
            {t('futureScientist.overview.desc', 'Our "Future Scientist" philosophy moves beyond passive learning to active scientific inquiry—empowering students to ask questions, design experiments, and discover answers through hands-on exploration.')}
          </Paragraph>
        </Fade>

        {/* 轮播组件：插入到项目概述和核心技能之间（渲染逻辑未修改，仅数据源变化） */}
        {carouselImages.length > 0 ? (
          <div style={{
            maxWidth: '1200px',
            margin: '30px auto 40px auto',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(109, 40, 217, 0.15)',
            position: 'relative', // 为箭头定位提供上下文
            textAlign: 'center' // 强制圆点居中
          }}>
            <Carousel
              effect="fade"
              autoplay={true}
              autoplaySpeed={2000}
              dots={{ className: 'custom-carousel-dots' }}
              arrows={true}
              pauseOnHover={true}
            >
              {/* 动态生成轮播项（移除文字描述，保留核心图片和遮罩） */}
              {carouselImages.map((img: CarouselImage, index: number) => (
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
                  {/* 渐变遮罩（保留，提升视觉层次，可按需删除） */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))'
                  }} />
                  {/* 已完全移除文字描述相关代码 */}
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          // 无图片时兜底提示（原有代码，未修改）
          <div style={{
            maxWidth: '1200px',
            margin: '30px auto 40px auto',
            padding: '80px 20px',
            borderRadius: '16px',
            border: `1px dashed ${primaryColor}`,
            textAlign: 'center',
            color: '#666'
          }}>
            <Paragraph>No images found in "future scientist" folder.</Paragraph>
          </div>
        )}

        {/* 核心技能展示（原有代码，未修改） */}
        <Row gutter={[24, 24]} style={{ marginTop: '0', alignItems: 'stretch' }}>
          {keySkills.map((skill, index) => (
            <Col xs={24} sm={12} md={8} key={index} style={{ display: 'flex' }}>
              <Fade delay={index * 100} triggerOnce>
                <Card
                  style={{
                    height: '100%',
                    border: `1px solid ${primaryColor}`,
                    borderRadius: '8px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <BulbOutlined style={{ fontSize: '24px', color: primaryColor, marginBottom: '16px' }} />
                  <Title level={4} style={{
                    fontWeight: 'bold',
                    color: primaryColor,
                    marginBottom: '12px',
                    minHeight: '40px', // 固定标题最小高度，避免文字行数差异导致高度偏差
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {t(skill.titleKey,
                      skill.titleKey.includes('criticalThinking') ? 'Critical Thinking' :
                      skill.titleKey.includes('collaboration') ? 'Collaboration' : 'Problem Solving')}
                  </Title>
                  <Paragraph type="secondary" style={{
                    flex: 1, // 自动填充卡片剩余空间，确保底部对齐
                    margin: 0 // 清除默认外边距，避免高度偏差
                  }}>
                    {t(skill.descKey,
                      skill.descKey.includes('criticalThinking') ? 'Learn to analyze information, evaluate evidence, and form logical conclusions.' :
                      skill.descKey.includes('collaboration') ? 'Work in teams to share ideas, divide tasks, and achieve common goals.' :
                      'Apply creative and analytical thinking to solve real-world scientific challenges.')}
                  </Paragraph>
                </Card>
              </Fade>
            </Col>
          ))}
        </Row>
      </div>

      <Divider style={{ borderColor: `${primaryColor}20` }} />

      {/* 3. Curriculum Highlights 课程亮点（原有代码，未修改） */}
      <div style={{ padding: '60px 5%', backgroundColor: 'transparent' }}>
        <Slide direction="down" triggerOnce>
          <Title level={2} style={{ textAlign: 'center', color: primaryColor }}>
            {t('futureScientist.sections.curriculumHighlights', 'Curriculum Highlights')}
          </Title>
        </Slide>

        <Row gutter={[24, 24]} style={{ marginTop: '40px', alignItems: 'stretch' }}>
          {curriculumModules.map((module, index) => (
            <Col xs={24} sm={12} md={6} key={index} style={{ display: 'flex' }}>
              <Fade delay={index * 100} triggerOnce>
                <Card
                  style={{
                    height: '100%',
                    boxShadow: '0 4px 12px rgba(111, 66, 193, 0.1)',
                    border: 'none',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                    {module.icon}
                  </div>
                  <Title level={4} style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    marginBottom: '12px',
                    minHeight: '40px', // 固定标题最小高度，避免文字多少导致高度差异
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {t(module.titleKey,
                      module.titleKey.includes('scientificMethod') ? 'Scientific Method' :
                      module.titleKey.includes('appliedPhysics') ? 'Applied Physics' :
                      module.titleKey.includes('biologicalInquiry') ? 'Biological Inquiry' : 'Sustainable Tech')}
                  </Title>
                  <Paragraph type="secondary" style={{
                    textAlign: 'center',
                    flex: 1, // 让文案区域自动填充剩余空间，确保卡片底部对齐
                    margin: 0 // 清除默认外边距，避免高度偏差
                  }}>
                    {t(module.descKey,
                      module.descKey.includes('scientificMethod') ? 'Master observation, hypothesis, experimentation, and conclusion.' :
                      module.descKey.includes('appliedPhysics') ? 'Explore motion, energy, and forces through hands-on experiments.' :
                      module.descKey.includes('biologicalInquiry') ? 'Study living organisms and their interactions with the environment.' :
                      'Design solutions for environmental challenges using green technology.')}
                  </Paragraph>
                </Card>
              </Fade>
            </Col>
          ))}
        </Row>
      </div>

      <Divider style={{ borderColor: `${primaryColor}20` }} />

      {/* 4. Target Audience 目标受众（原有代码，未修改） */}
      <div style={{ padding: '60px 5%', backgroundColor: 'transparent' }}>
        <Slide direction="down" triggerOnce>
          <Title level={2} style={{ textAlign: 'center', color: primaryColor }}>
            {t('futureScientist.sections.targetAudience', 'Target Audience')}
          </Title>
        </Slide>

        <Row gutter={[24, 24]} style={{ marginTop: '40px', maxWidth: '1000px', margin: '0 auto' }}>
          {targetAudience.map((audience, index) => (
            <Col xs={24} sm={12} key={index}>
              <Fade delay={index * 100} triggerOnce>
                <Card
                  style={{
                    height: '100%',
                    borderLeft: `4px solid ${primaryColor}`,
                    backgroundColor: 'rgba(111, 66, 193, 0.05)',
                    borderRadius: '8px'
                  }}
                >
                  <Space direction="horizontal" align="center" style={{ marginBottom: '16px' }}>
                    <Tag color={primaryColor} style={{ fontSize: '14px', padding: '4px 8px' }}>
                      {audience.grade}
                    </Tag>
                    <UserOutlined style={{ color: primaryColor }} />
                  </Space>
                  <Title level={4} style={{ fontWeight: 'bold' }}>
                    {t(audience.titleKey,
                      audience.titleKey.includes('primary') ? 'Primary School Students' : 'Secondary School Students')}
                  </Title>
                  <Paragraph>
                    {t(audience.descKey,
                      audience.descKey.includes('primary') ? 'Fun, play-based experiments to spark curiosity and foundational scientific thinking.' :
                      'Advanced projects and inquiry-based learning to build critical thinking and research skills.')}
                  </Paragraph>
                </Card>
              </Fade>
            </Col>
          ))}
        </Row>
      </div>

      {/* 5. Bottom CTA 底部行动按钮（原有代码，未修改） */}
      <div style={{ padding: '60px 5%', backgroundColor: 'transparent', marginBottom: '40px' }}>
        <Fade triggerOnce>
          <Card
            style={{
              textAlign: 'center',
              backgroundColor: 'rgba(111, 66, 193, 0.05)',
              border: `1px solid ${primaryColor}`,
              borderRadius: '8px'
            }}
          >
            <Title level={3} style={{ color: primaryColor }}>
              {t('futureScientist.finalCta.title', 'Ready to Ignite Curiosity?')}
            </Title>
            <Paragraph style={{ maxWidth: '700px', margin: '20px auto' }}>
              {t('futureScientist.finalCta.desc', 'For schools or parents interested in our Future Scientist Training Program, get in touch to learn more about enrollment, pricing, and customization options.')}
            </Paragraph>
            <Button
              type="default"
              size="large"
              onClick={() => navigate('/contact')}
              style={{ ...customButtonStyle, padding: '12px 32px' }}
              className="custom-ghost-btn"
            >
              {t('futureScientist.finalCta.cta', 'Get In Touch')}
              <RightCircleOutlined style={{ marginLeft: '8px' }} />
            </Button>
          </Card>
        </Fade>
      </div>
    </div>
  );
};

export default FutureScientistTrainingCoursePage;