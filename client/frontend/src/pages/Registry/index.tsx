import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import useRegistry from './useRegistry';
import RegistryForm from '@/components/Registry/RegistryForm';
import { Link } from '@umijs/max';

const Registry = () => {
  const { handleRegister } = useRegistry();

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={24} sm={20} md={12} lg={8}>
        <Card title="Register" bordered={false}>
          <RegistryForm onSubmit={handleRegister} />
          <Typography.Text>
            Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
          </Typography.Text>
        </Card>
      </Col>
    </Row>
  );
};

export default Registry;