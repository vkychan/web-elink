import React, { useState, FC } from 'react';
import {
  Row,
  Col,
  Typography,
  Input,
  Radio,
  Slider,
  Select,
  Button,
  Card,
  Spin,
  Empty,
  Divider,
} from 'antd';
import { HighlightOutlined } from '@ant-design/icons';


const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;
const { Option } = Select;

// Define the structure for a single question and its options
interface Question {
    id: string;
    question_text: string;
    type: 'multiple-choice' | 'true-false' | 'fill-in-the-blanks' | 'open-question';
    options?: { id: string; text: string }[];
    correct_answer_id?: string;
    correct_answers?: string[]; // For fill-in-the-blanks
    sample_answer?: string;     // For open-question
}

// Define the structure for the API response
interface ApiResponse {
    questions: Question[];
}

// Helper component to render the correct answer based on question type
const AnswerDisplay: FC<{ question: Question }> = ({ question }) => {
    switch (question.type) {
        case 'multiple-choice':
        case 'true-false':
            const correctAnswer = question.options?.find(opt => opt.id === question.correct_answer_id);
            if (!correctAnswer) return null;
            return (
                <Text type="success" strong style={{ marginTop: '8px', display: 'block' }}>
                    Correct Answer: {correctAnswer.text}
                </Text>
            );
        case 'fill-in-the-blanks':
            if (!question.correct_answers || question.correct_answers.length === 0) return null;
            return (
                <Text type="success" strong style={{ marginTop: '8px', display: 'block' }}>
                    Correct Answer(s): {question.correct_answers.join(', ')}
                </Text>
            );
        case 'open-question':
            if (!question.sample_answer) return null;
            return (
                 <div style={{ marginTop: '8px' }}>
                    <Text type="success" strong>Sample Answer:</Text>
                    <Paragraph type="success" style={{ margin: 0 }}>{question.sample_answer}</Paragraph>
                 </div>
            );
        default:
            return null;
    }
};


const DemoGen: FC = () => {

  // State for user inputs
  const [contextText, setContextText] = useState<string>('');
  const [questionType, setQuestionType] = useState<string>('multiple-choice');
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [difficulty, setDifficulty] = useState<string>('medium');
  const [illustrations, setIllustrations] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>('en');
  
  // State for API interaction
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedQuestions, setGeneratedQuestions] = useState<Question[]>([]);

  const handleGenerate = async () => {
    setIsLoading(true);
    setGeneratedQuestions([]);

    // 1. Prepare the request payload in JSON format
    const requestPayload = {
      context: contextText,
      config: {
        type: questionType,
        count: questionCount,
        difficulty: difficulty,
        include_illustrations: illustrations,
        language: language,
      },
    };

    console.log("--- Sending to backend ---");
    console.log(JSON.stringify(requestPayload, null, 2));

    try {
        const response = await fetch('http://localhost:3001/api/generate-questions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestPayload),
        });

        if (!response.ok) {
            // Handle HTTP errors like 404 or 500
            throw new Error(`Server responded with ${response.status}`);
        }

        const data = await response.json();
        console.log("--- Received from backend ---");
        console.log(data);

        setGeneratedQuestions(data.questions);

    } catch (error) {
        console.error("Failed to fetch questions:", error);
        // Here you could set an error state to show a message to the user
    } finally {
        // This ensures loading is turned off whether the call succeeds or fails
        setIsLoading(false);
    }
  };
  
  return (
    <div style={{ padding: '40px 5%', backgroundColor: '#f0f2f5' }}>
      <Row gutter={[32, 32]}>
        {/* Left Column: Controls */}
        <Col xs={24} lg={8}>
          <Card>
            <Title level={4}>Controls</Title>
            <Divider />
            
            <div style={{ marginBottom: 24 }}>
              <Text strong>Language</Text>
              <Select value={language} onChange={setLanguage} style={{ width: '100%', marginTop: 8 }}>
                <Option value="en">English</Option>
                <Option value="zh">繁體中文</Option>
              </Select>
            </div>
            
            <div style={{ marginBottom: 24 }}>
              <Text strong>Question Type</Text>
              <Select value={questionType} onChange={setQuestionType} style={{ width: '100%', marginTop: 8 }}>
                <Option value="multiple-choice">Multiple Choice</Option>
                <Option value="true-false">True/False</Option>
                <Option value="fill-in-the-blanks">Fill in the Blanks</Option>
              </Select>
            </div>
            
            <div style={{ marginBottom: 24 }}>
              <Text strong>Difficulty Level</Text>
              <Radio.Group value={difficulty} onChange={(e) => setDifficulty(e.target.value)} style={{ display: 'block', marginTop: 8 }}>
                <Radio.Button value="easy">Easy</Radio.Button>
                <Radio.Button value="medium">Medium</Radio.Button>
                <Radio.Button value="hard">Hard</Radio.Button>
              </Radio.Group>
            </div>
            
            {/* <div style={{ marginBottom: 24 }}>
              <Text strong>Question Illustrations</Text>
              <Radio.Group value={illustrations} onChange={(e) => setIllustrations(e.target.value)} style={{ display: 'block', marginTop: 8 }}>
                <Radio.Button value={true}>Yes</Radio.Button>
                <Radio.Button value={false}>No</Radio.Button>
              </Radio.Group>
            </div> */}
            
            <div style={{ marginBottom: 24 }}>
              <Text strong>Question Count: {questionCount}</Text>
              <Slider min={1} max={20} value={questionCount} onChange={setQuestionCount} style={{ marginTop: 8 }}/>
            </div>

            <Button
              type="primary"
              icon={<HighlightOutlined />}
              size="large"
              style={{ width: '100%', backgroundColor: '#6d28d9' }}
              onClick={handleGenerate}
              loading={isLoading}
            >
              Generate
            </Button>
          </Card>
        </Col>

        {/* Right Column: Content and Output */}
        <Col xs={24} lg={16}>
           <Card style={{marginBottom: 24}}>
              <Title level={4}>Content</Title>
              <Paragraph>Provide the context from which to generate questions.</Paragraph>
               <TextArea
                  rows={8}
                  placeholder="Example: Force and Motion"
                  value={contextText}
                  onChange={(e) => setContextText(e.target.value)}
              />
           </Card>

          <Card>
            <Title level={4}>Generated Questions</Title>
            <div style={{ minHeight: '400px', position: 'relative' }}>
              {isLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', position: 'absolute', width: '100%' }}>
                  <Spin size="large" />
                </div>
              ) : generatedQuestions.length > 0 ? (
                <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                  {generatedQuestions.map((q, index) => (
                      <div key={q.id || `q-${index}`} style={{ marginBottom: '20px' }}>
                          <Text strong>{q.id ? q.id.replace('q', 'Question ') : `Question ${index + 1}`}: {q.question_text}</Text>
                          
                          {q.options && q.options.length > 0 && (
                            <Radio.Group style={{ display: 'block', marginTop: '8px' }}>
                                {q.options.map(opt => (
                                    <Radio key={opt.id} value={opt.id} style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '4px' }}>
                                        {opt.id}.   {opt.text}
                                    </Radio>
                                ))}
                            </Radio.Group>
                          )}
                          
                          <AnswerDisplay question={q} />
                          <Divider />
                      </div>
                  ))}
                </div>
              ) : (
                <Empty description="Questions will appear here after generation." />
              )}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DemoGen;