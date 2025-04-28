import React from 'react';
import { Card, Typography } from 'antd';
import ResetPasswordForm from '@/components/ForgotPasswordForm/ResetPasswordForm';
import useResetPassword from './useResetPassword';
import './ResetPassword.css';

const ResetPassword = () => {
  const { handleResetPassword } = useResetPassword();

  return (
    <div className="reset-password-container">
      <Card className="reset-password-card">
        <Typography.Title level={3} className="reset-password-title">
          Đặt lại mật khẩu
        </Typography.Title>
        <ResetPasswordForm onFinish={handleResetPassword} />
      </Card>
    </div>
  );
};

export default ResetPassword;