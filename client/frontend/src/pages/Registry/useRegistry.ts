import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { register } from '@/services/authService/authService';

const useRegistry = () => {
  const navigate = useNavigate();

  const handleRegister = async (values: any) => {
    try {
      const user = await register(values); // Gọi hàm register
      if (user) {
        message.success('Đăng ký thành công!');
        navigate('/login'); // Điều hướng đến giao diện đăng nhập
      }
    } catch (error: any) {
      message.error(error.message || 'Đăng ký thất bại'); // Hiển thị thông báo lỗi
    }
  };

  return { handleRegister };
};

export default useRegistry;