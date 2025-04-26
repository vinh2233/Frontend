// export default Login;
import React from 'react';
import { Card, Typography } from 'antd';
import { Link } from '@umijs/max';
import './Login.css';
import useLogin from './useLogin';
import LoginForm from '@/components/Login/LoginForm';
const Login = () => {
  const { handleLogin } = useLogin();

  const onFinish = (values: any) => {
    console.log('Form values:', values); // Log dữ liệu form
    handleLogin(values); // Gọi hàm handleLogin khi submit form
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <Typography.Title level={3} className="login-title">Đăng nhập</Typography.Title>
        <LoginForm onFinish={onFinish} />
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          Chưa có tài khoản? <Link to="/registry">Đăng ký</Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;