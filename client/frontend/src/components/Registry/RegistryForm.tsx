

// // export default RegistryForm;
// import React from 'react';
// import { Form, Input, Button } from 'antd';

// interface RegistryFormProps {
//   onFinish: (values: any) => void;
// }

// const RegistryForm: React.FC<RegistryFormProps> = ({ onFinish }) => {
//   return (
//     <Form onFinish={onFinish} layout="vertical">
//       <Form.Item
//         label="Username"
//         name="username"
//         rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}
//       >
//         <Input placeholder="Username" />
//       </Form.Item>
//       <Form.Item
//         label="Email"
//         name="email"
//         rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
//       >
//         <Input placeholder="Email" />
//       </Form.Item>
//       <Form.Item
//         label="Password"
//         name="password"
//         rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
//       >
//         <Input.Password placeholder="Password" />
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

interface RegistryFormProps {
  onFinish: (values: any) => void;
}

const RegistryForm: React.FC<RegistryFormProps> = ({ onFinish }) => {
  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Vui lòng nhập tên người dùng!' }]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: 'Vui lòng nhập email!' },
          { type: 'email', message: 'Email không hợp lệ!' },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
      >
        <Input.Password placeholder="Password" />
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