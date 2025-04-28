// import { message } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import { verifyOtp } from '@/services/authService/authService';

// const useResetPassword = () => {
//   const navigate = useNavigate();

//   const handleResetPassword = async (values: { email: string; otp: string; new_password: string }) => {
//     try {
//       const data = await verifyOtp(values.email, values.otp, values.new_password); // Gọi API xác minh OTP
//       message.success(data.message || 'Mật khẩu đã được đặt lại thành công!');
//       navigate('/login'); // Điều hướng đến trang đăng nhập
//     } catch (error: any) {
//       message.error(error.message || 'Đặt lại mật khẩu thất bại');
//     }
//   };

//   return { handleResetPassword };
// };

// export default useResetPassword;
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { verifyOtp } from '@/services/authService/authService';

const useResetPassword = () => {
  const navigate = useNavigate();

  const handleResetPassword = async (values: { email: string; otp: string; new_password: string }) => {
    try {
      const data = await verifyOtp(values.email, values.otp, values.new_password); // Gọi API xác minh OTP

      // Hiển thị thông báo từ phản hồi
      message.success(data.message || 'Mật khẩu đã được đặt lại thành công!');

      // Điều hướng đến trang đăng nhập
      navigate('/login');
    } catch (error: any) {
      // Hiển thị thông báo lỗi chi tiết
      message.error(error.message || 'Đặt lại mật khẩu thất bại');
    }
  };

  return { handleResetPassword };
};

export default useResetPassword;