// src/ContactUs.tsx
import React, { FC, useRef, useState } from 'react';
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  Card,
  Divider,
  message,
  Space,
} from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
  FacebookOutlined,
  InstagramOutlined,
  ArrowLeftOutlined,
} from '@ant-design/icons';
import emailjs from '@emailjs/browser';
import { Fade, Slide } from 'react-awesome-reveal';
import ClipLoader from 'react-spinners/ClipLoader';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';


const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

interface ContactFormValues {
  from_name: string;
  from_email: string;
  phone_number: string;
  message: string;
}

export const KeyContactsSection: FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: '60px' }}>

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
          
      <Slide direction="up" triggerOnce>
        <Divider>
          <Title level={3}>{t('contact.keyContactsTitle', 'Key Contacts')}</Title>
        </Divider>
      </Slide>

      <Row gutter={[24, 24]} justify="center">
        {/* YC Chan's Contact Card */}
        <Col xs={24} md={12} lg={10}>
          <Slide direction="up" triggerOnce delay={100}>
            <Card style={{ height: '100%' }}>
              <Title level={4} style={{ color: '#6d28d9' }}>{t('contact.cooperationTitle')}</Title>
              <Title level={5} style={{ marginTop: 0 }}>{t('contact.ycchan')}</Title>
              <Text type="secondary">{t('contact.director')}</Text>
              <Divider style={{ margin: '16px 0' }} />
              <Space direction="vertical" size="middle">
                <Text><PhoneOutlined /> 91913034 (HK) / 13609771890 (PRC)</Text>
                <Text><PhoneOutlined /> (852) 34285300</Text>
                <Text><MailOutlined /> ycchan@elink-int.com</Text>
                <Text><HomeOutlined /> {t('contact.address')}</Text>
              </Space>
            </Card>
          </Slide>
        </Col>

        {/* Oscar Chan's Contact Card */}
        <Col xs={24} md={12} lg={10}>
          <Slide direction="up" triggerOnce delay={200}>
            <Card style={{ height: '100%' }}>
              <Title level={4} style={{ color: '#6d28d9' }}>{t('contact.steamTitle')}</Title>
              <Title level={5} style={{ marginTop: 0 }}>{t('contact.oscarchan')}</Title>
              <Text type="secondary">{t('contact.program-director')}</Text>
              <Divider style={{ margin: '16px 0' }} />
              <Space direction="vertical" size="middle">
                <Text><PhoneOutlined /> 51285045 (HK) / 14714608419 (PRC)</Text>
                <Text><PhoneOutlined /> (852) 34285300</Text>
                <Text><MailOutlined /> oscar.chan@elink-int.com</Text>
                <Text><HomeOutlined /> {t('contact.address')}</Text>
              </Space>
            </Card>
          </Slide>
        </Col>
      </Row>
    </div>
  );
};

const ContactUs: FC = () => {
  const { t } = useTranslation(); 
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<any>(null);

  const sendEmail = async (values: Record<string, unknown>) => {
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID ;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY ;

    if (!serviceID || !templateID || !publicKey) {
      const errorMessage = t('contact.status.error');
      console.error('EmailJS environment variables are not configured correctly.');
      message.error(errorMessage);
      return;
    }

    setIsLoading(true);
    try {
      await emailjs.send(serviceID, templateID, values, publicKey);
      message.success({ content: t('contact.status.success'), duration: 3 });
      formRef.current?.resetFields();
    } catch (err) {
      console.error('FAILED...', err);
      message.error({ content: t('contact.status.error'), duration: 3 });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '50px 5%', overflow: 'hidden', position: 'relative' }}>
      {isLoading && (
        <div className="loader-overlay">
          <ClipLoader color="#6d28d9" size={50} />
        </div>
      )}

      <Fade triggerOnce>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <Title level={2}>{t('contact.title')}</Title>
          <Paragraph>{t('contact.description')}</Paragraph>
        </div>
      </Fade>

      <Row gutter={[48, 48]}>
        <Col xs={24} md={14}>
          <Slide direction="left" triggerOnce>
            <Title level={4}>{t('contact.formTitle')}</Title>
            <Form layout="vertical" onFinish={sendEmail} ref={formRef}>
              <Form.Item
                label={t('contact.nameLabel')}
                name="from_name"
                rules={[{ required: true, message: t('contact.nameRule') }]}
              >
                <Input placeholder={t('contact.namePlaceholder')} />
              </Form.Item>
              <Form.Item
                label={t('contact.emailLabel')}
                name="from_email"
                rules={[{ required: true, type: 'email', message: t('contact.emailRule') }]}
              >
                <Input placeholder={t('contact.emailPlaceholder')} />
              </Form.Item>
              <Form.Item
                label={t('contact.phoneLabel', 'Phone Number')} 
                name="phone_number" 
                rules={[{ required: true, message: t('contact.phoneRule', 'Please enter your phone number!') }]}
              >
                <Input placeholder={t('contact.phonePlaceholder', '+852 1234 5678')} />
              </Form.Item>
              <Form.Item
                label={t('contact.messageLabel')}
                name="message"
                rules={[{ required: true, message: t('contact.messageRule') }]}
              >
                <TextArea rows={6} placeholder={t('contact.messagePlaceholder')} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" style={{ backgroundColor: '#6d28d9' }}>
                  {t('contact.sendButton')}
                </Button>
              </Form.Item>
            </Form>
          </Slide>
        </Col>

        <Col xs={24} md={10}>
          <Slide direction="right" triggerOnce>
            <Card>
              <Title level={4} style={{ color: '#6d28d9' }}>{t('contact.infoTitle')}</Title>
              <Paragraph>
                <Space><MailOutlined /><Text>general.eLink@gmail.com</Text></Space>
              </Paragraph>
              <Paragraph>
                <Space><PhoneOutlined /><Text>+852 34285300</Text></Space>
              </Paragraph>
              <Paragraph>
                <Space><HomeOutlined /><Text>{t('contact.address')}</Text></Space>
              </Paragraph>
              <Divider />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.441357476151!2d114.10323838382024!3d22.374713087696943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f8faaa53bc73%3A0x2b2ecaa48ef68ad0!2z6aaZ5riv5p-054Gj6KeS5rKZ5ZKA6YGTMTHomZ_pgZTosr_kuK3lv4M!5e0!3m2!1szh-TW!2sjp!4v1753699451546!5m2!1szh-TW!2sjp"
                width="100%" height="250" style={{ border: 0 }}
                allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title={t('contact.mapTitle')}
              ></iframe>
            </Card>

            <Card style={{ marginTop: '24px' }}>
              <Title level={4}>{t('contact.followTitle')}</Title>
              <Space size="large">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '32px', color: '#1877F2' }}><FacebookOutlined /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '32px', color: '#E4405F' }}><InstagramOutlined /></a>
              </Space>
            </Card>
          </Slide>
        </Col>
      </Row>
      <KeyContactsSection />
    </div>
  );
};

export default ContactUs;