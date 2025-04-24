// import React from 'react';
// import { Form, Input, Button } from 'antd';

// const RegistryForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
//   return (
//     <Form onFinish={onSubmit} layout="vertical">
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[{ required: true, message: 'Please enter your username' }]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[{ required: true, message: 'Please enter your password' }]}
//       >
//         <Input.Password />
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit" block>
//           Register
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default RegistryForm;
import React from 'react';
import { Form, Input, Button } from 'antd';

const RegistryForm = ({ onSubmit }: { onSubmit: (values: any) => void }) => {
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
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Please enter your email' },
          { type: 'email', message: 'Please enter a valid email address' },
        ]}
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
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistryForm;