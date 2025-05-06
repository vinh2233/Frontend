

// export default ForgotPasswordForm;
import React from 'react';
import { Form, Input, Button } from 'antd';

interface ForgotPasswordFormProps {
  onFinish: (values: { email: string }) => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onFinish }) => {
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
      <Form.Item>
        <Button className='btn' color='purple' variant='outlined' htmlType="submit" block>
          Gửi OTP
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ForgotPasswordForm;