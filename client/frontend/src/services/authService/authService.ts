// const REACT_APP_API_URL='https://fox-positive-loon.ngrok-free.app';
const backendUrl = `https://f338-116-193-67-10.ngrok-free.app/api/v1/auth`;



export const login = async (values: { email: string; password: string }) => {
  try {
    const response = await fetch(`${backendUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });

    const responseText = await response.text(); // Lấy phản hồi dưới dạng text
    console.log('Raw Response from Backend:', responseText); // Log phản hồi từ backend

    if (!response.ok) {
      throw new Error(`API Error: ${responseText}`);
    }

    const result = JSON.parse(responseText); // Parse JSON từ phản hồi
    console.log('Parsed JSON Response:', result); // Log JSON đã parse

    // Kiểm tra phản hồi từ API
    if (result.success) {
      localStorage.setItem('accessToken', result.data.access_token);
      localStorage.setItem('refreshToken', result.data.refresh_token);
      localStorage.setItem('username', result.data.username); // Lưu username

      console.log('Login successful:', result.message);
      return result.data;
    } else {
      throw new Error(result.message || 'Đăng nhập thất bại');
    }
  } catch (error: any) {
    console.error('Error during login:', error.message);
    throw error;
  }
};
// export const login = async (values: { email: string; password: string }) => {
//   try {
//     const response = await fetch(`${backendUrl}/login`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: values.email,
//         password: values.password,
//       }),
//     });

//     const result = await response.json();

//     console.log('HTTP Status:', response.status);
//     console.log('API Response:', result);

//     // Kiểm tra phản hồi từ API
//     if (result.success) {
//       // Lưu trữ accessToken và refreshToken
//       localStorage.setItem('accessToken', result.data.access_token);
//       localStorage.setItem('refreshToken', result.data.refresh_token);
//       // localStorage.setItem('username', result.data.username); // Lưu trữ username nếu cần thiết
//       console.log('Login successful:', result.message);
//       return result.data; // Trả về token hoặc thông tin cần thiết
//     } else {
//       throw new Error(result.message || 'Đăng nhập thất bại');
//     }
//   } catch (error: any) {
//     console.error('Error during login:', error.message);
//     throw error; // Ném lỗi để xử lý ở nơi gọi hàm
//   }
// };

export const register = async (values: any) => {
  console.log('Registering with:', values);


  try {
    const response = await fetch(`${backendUrl}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    console.log('HTTP Status:', response.status);

    if (!response.ok) {
      const errorText = await response.text(); // Lấy nội dung lỗi nếu cần
      throw new Error(`API Error: ${errorText}`);
    }

    const data = await response.json(); // Chỉ gọi `response.json()` một lần
    console.log('API Response:', data);

    // Kiểm tra phản hồi từ API
    if (response.status === 201 && data.message) {
      console.log(data.message || 'Đăng ký thành công');
      return data.user; // Trả về thông tin người dùng
    } else {
      throw new Error(data.message || 'Đăng ký thất bại');
    }
  } catch (error) {
    console.error('Error during registration:', error);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm
  }
};
export const logout = async () => {
  const refreshToken = localStorage.getItem('refreshToken'); // Lấy refresh token từ localStorage

  if (!refreshToken) {
    throw new Error('Refresh token is missing');
  }

  try {
    const response = await fetch(`${backendUrl}/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }), // Gửi refresh token trong body
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to logout: ${errorText}`);
    }

    console.log('Logout successful');
    // Xóa token khỏi localStorage sau khi logout thành công
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('username');
  } catch (error: any) {
    console.error('Error during logout:', error.message);
    throw error;
  }
};

//forgot password
// export const forgotPassword = async (email: string) => {
//   try {
//     const response = await fetch(`${backendUrl}/forgot-password`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email }),
//     });

//     const result = await response.json();

//     console.log('HTTP Status:', response.status);
//     console.log('API Response:', result);

//     // Kiểm tra phản hồi từ API
//     if (response.ok && result.success) {
//       console.log(result.data.message || 'OTP đã được gửi đến email của bạn!');
//       return result.data; // Trả về thông tin từ API
//     } else {
//       throw new Error(result.message || 'Gửi OTP thất bại');
//     }
//   } catch (error: any) {
//     console.error('Error during forgot password:', error.message);
//     throw error; // Ném lỗi để xử lý ở nơi gọi hàm
//   }
// };

export const forgotPassword = async (email: string) => {
  try {
    const response = await fetch(`${backendUrl}/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorText = await response.text(); // Lấy nội dung lỗi từ API
      throw new Error(`API Error: ${errorText}`);
    }

    const result = await response.json();
    console.log('HTTP Status:', response.status);
    console.log('API Response:', result);

    // Kiểm tra phản hồi từ API
    if (result.success) {
      console.log(result.message || 'OTP đã được gửi đến email của bạn!');
      return result; // Trả về toàn bộ phản hồi từ API
    } else {
      throw new Error(result.message || 'Gửi OTP thất bại');
    }
  } catch (error: any) {
    // Thêm giá trị cụ thể vào lỗi
    const errorMessage = `Gửi OTP thất bại. Email: ${email}`;
    console.error(errorMessage, error.message);

    // Ném lỗi với thông tin bổ sung
    throw new Error(`${errorMessage} | Chi tiết: ${error.message}`);
  }
};
// export const verifyOtp = async (email: string, otp: string, newPassword: string) => {
//   try {
//     const response = await fetch(`${backendUrl}/verify-otp`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         otp,
//         new_password: newPassword,
//       }),
//     });

//     const result = await response.json();

//     console.log('HTTP Status:', response.status);
//     console.log('API Response:', result);

//     if (response.ok && result.success) {
//       return result.data; // Trả về thông tin từ API
//     } else {
//       throw new Error(result.message || 'Xác minh OTP thất bại');
//     }
//   } catch (error: any) {
//     console.error('Error during OTP verification:', error.message);
//     throw error; // Ném lỗi để xử lý ở nơi gọi hàm
//   }
// };
export const verifyOtp = async (email: string, otp: string, newPassword: string) => {
  try {
    const response = await fetch(`${backendUrl}/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        otp,
        new_password: newPassword,
      }),
    });

    const result = await response.json();

    console.log('HTTP Status:', response.status);
    console.log('API Response:', result);

    // Kiểm tra phản hồi từ API
    if (result.success) {
      console.log(result.message || 'OTP verified successfully!');
      return result; // Trả về toàn bộ phản hồi từ API
    } else {
      throw new Error(result.message || 'Xác minh OTP thất bại');
    }
  } catch (error: any) {
    console.error('Error during OTP verification:', error.message);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm
  }
};