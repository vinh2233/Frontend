import axios from 'axios';
import { message } from 'antd';
// Địa chỉ URL đầy đủ của máy chủ API
const backendUrl = 'http://192.168.50.227:5001/api/v1/auth';

// Gọi API đăng nhập
export const login = async (values: any) => {
  const response = await axios.post(`${backendUrl}/login`, values);  // Sử dụng URL đầy đủ
  return response.data;
};

// // Gọi API đăng ký

// export const register = async (values: any) => {
//     console.log('Registering with:', values);
//     const response = await axios.post(`${backendUrl}/register`, values,);
//     return response.data;
//   };
export const register = async (values: any) => {
  console.log('Registering with:', values);

  try {
      // Gửi yêu cầu đăng ký với fetch
      const response = await fetch(`${backendUrl}/register`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
      });

      // Kiểm tra xem phản hồi có thành công không
      if (!response.ok) {
          throw new Error('Registration failed');
      }

      // Chuyển đổi phản hồi thành JSON
      const data = await response.json();

      // Kiểm tra cấu trúc phản hồi chuẩn
      if (data.success) {
          // Hiển thị thông báo thành công
          message.success(data.message || 'Đăng ký thành công');
          return data.data;
      } else {
          // Hiển thị thông báo lỗi nếu có thông điệp lỗi
          message.error(data.message || 'Đăng ký thất bại');
          return null;
      }

  } catch (error) {
    // Kiểm tra nếu error là một đối tượng Error
    const errorMessage = error instanceof Error ? error.message : 'Đã xảy ra lỗi trong quá trình đăng ký';
    
    // Hiển thị thông báo lỗi chung nếu có lỗi bất thường
    message.error(errorMessage);
    return null;
}
};
