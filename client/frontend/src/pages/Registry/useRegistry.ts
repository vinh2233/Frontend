// import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { register } from '@/services/authService/authService';

const useRegistry = () => {
  const navigate = useNavigate();

  const handleRegister = async (values: any) => {
    try {
      const user = await register(values); // Gọi hàm register
      console.log('User registered:', user);
  
      // Điều hướng đến trang login
      navigate('/login'); // Sử dụng hook `useNavigate` từ React Router
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return { handleRegister };
};

export default useRegistry;