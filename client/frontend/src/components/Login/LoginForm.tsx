import React from 'react';
import { Form, Input, Button } from 'antd';

const LoginForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
  return (
    <Form onFinish={onSubmit} layout="vertical">
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please enter your username' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;