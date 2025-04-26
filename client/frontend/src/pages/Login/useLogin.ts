import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '@/services/authService/authService';

const useLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    try {
      const user = await login(values); // Gọi hàm login
      if (user) {
        message.success(`Chào mừng ${user.name}! Đăng nhập thành công.`);
        navigate('/home'); // Điều hướng đến giao diện chính
      }
    } catch (error: any) {
      message.error(error.message || 'Đăng nhập thất bại'); // Hiển thị thông báo lỗi
    }
  };

  return { handleLogin };
};

export default useLogin;