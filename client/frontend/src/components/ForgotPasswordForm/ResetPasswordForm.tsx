import React from 'react';
import { Form, Input, Button } from 'antd';

interface ResetPasswordFormProps {
  onFinish: (values: { email: string; otp: string; new_password: string }) => void;
}

const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({ onFinish }) => {
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Vui lòng nhập email!' },
          { type: 'email', message: 'Email không hợp lệ!' },
        ]}
      >
        <Input placeholder="Nhập email của bạn" />
      </Form.Item>
      <Form.Item
        label="OTP"
        name="otp"
        rules={[{ required: true, message: 'Vui lòng nhập mã OTP!' }]}
      >
        <Input placeholder="Nhập mã OTP" />
      </Form.Item>
      <Form.Item
        label="Mật khẩu mới"
        name="new_password"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới!' }]}
      >
        <Input.Password placeholder="Nhập mật khẩu mới" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Đặt lại mật khẩu
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResetPasswordForm;