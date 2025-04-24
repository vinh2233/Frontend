import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { register } from '@/services/authService/authService';

const useRegistry = () => {
  const navigate = useNavigate();

  const handleRegister = async (values: any) => {
    try {
      const response = await register(values);
      if (response.success) {
        message.success('Đăng ký thành công!');
        navigate('/login');
      } else {
        message.error(response.message || 'Đăng ký thất bại');
      }
    } catch (error: any) {
      message.error(error.response?.data?.message || 'Đăng ký thất bại');
    }
  };

  return { handleRegister };
};

export default useRegistry;