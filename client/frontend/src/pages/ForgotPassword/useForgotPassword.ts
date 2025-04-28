// import { message } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import { forgotPassword } from '@/services/authService/authService';

// const useForgotPassword = () => {
//   const navigate = useNavigate();

//   const handleForgotPassword = async (values: { email: string }) => {
//     try {
//       const data = await forgotPassword(values.email); // Gọi API quên mật khẩu
//       message.success(data.message || 'OTP đã được gửi đến email của bạn!');
//       navigate('/reset-password'); // Điều hướng đến trang đặt lại mật khẩu
//     } catch (error: any) {
//       message.error(error.message || 'Gửi OTP thất bại');
//     }
//   };

//   return { handleForgotPassword };
// };

// export default useForgotPassword;
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '@/services/authService/authService';

const useForgotPassword = () => {
  const navigate = useNavigate();

  const handleForgotPassword = async (values: { email: string }) => {
    try {
      const result = await forgotPassword(values.email); // Gọi API quên mật khẩu

      // Hiển thị thông báo từ phản hồi
      message.success(result.message || 'OTP đã được gửi đến email của bạn!');

      // Điều hướng đến trang reset-password
      navigate('/reset-password');
    } catch (error: any) {
      // Hiển thị thông báo lỗi chi tiết
      message.error(error.message || 'Gửi OTP thất bại');
    }
  };

  return { handleForgotPassword };
};

export default useForgotPassword;