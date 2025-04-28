import React from 'react';
import { Card, Typography } from 'antd';
import ForgotPasswordForm from '@/components/ForgotPasswordForm/ForgotPasswordForm';
import useForgotPassword from './useForgotPassword';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const { handleForgotPassword } = useForgotPassword();

  return (
    <div className="forgot-password-container">
      <Card className="forgot-password-card">
        <Typography.Title level={3} className="forgot-password-title">
          Quên mật khẩu
        </Typography.Title>
        <ForgotPasswordForm onFinish={handleForgotPassword} />
      </Card>
    </div>
  );
};

export default ForgotPassword;