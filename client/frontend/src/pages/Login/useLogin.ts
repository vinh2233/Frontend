import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '@/services/authService/authService';

const useLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    try {
      const response = await login(values); // Gọi API từ service
      if (response.success) {
        localStorage.setItem('token', response.data.token); // Lưu token vào localStorage
        message.success('Đăng nhập thành công');
        navigate('/home'); // Điều hướng đến trang Home
      } else {
        message.error(response.message || 'Đăng nhập thất bại');
      }
    } catch (error: any) {
      message.error(error.response?.data?.message || 'Đăng nhập thất bại');
    }
  };

  return { handleLogin };
};

export default useLogin;