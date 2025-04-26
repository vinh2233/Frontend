
import React from 'react';
import { Card, Typography } from 'antd';
import { Link } from '@umijs/max';
import useRegistry from './useRegistry';
import RegistryForm from '@/components/Registry/RegistryForm';
import './Registry.css';

const Registry = () => {
  const { handleRegister } = useRegistry();

  const onFinish = (values: any) => {
    console.log('Form values:', values); // Log dữ liệu form
    handleRegister(values); // Gọi hàm handleRegister khi submit form
  };

  return (
    <div className="registry-container">
      <Card className="registry-card">
        <Typography.Title level={3} className="registry-title">Register</Typography.Title>
        <RegistryForm onFinish={onFinish} />
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </div>
      </Card>
    </div>
  );
};

export default Registry;