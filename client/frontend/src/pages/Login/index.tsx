import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import useLogin from './useLogin';
import LoginForm from '@/components/Login/LoginForm';

const Login = () => {
  const { handleLogin } = useLogin(); // Sử dụng logic từ useLogin

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={24} sm={20} md={12} lg={8}>
        <Card title="Login" bordered={false}>
          <LoginForm onSubmit={handleLogin} /> {/* Sử dụng component LoginForm */}
          <Typography.Text>
            Bạn chưa có tài khoản? <Link to="/registry">Đăng ký</Link>
          </Typography.Text>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;