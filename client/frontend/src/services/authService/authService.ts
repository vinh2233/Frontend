
const backendUrl = 'http://192.168.50.227:5001/api/v1/auth';

export const login = async (values: any) => {
  try {
    const response = await fetch(`${backendUrl}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const result = await response.json();

    if (response.ok) {
      // Lưu trữ accessToken, refreshToken và username
      localStorage.setItem('accessToken', result.access_token);
      localStorage.setItem('refreshToken', result.refresh_token);
      localStorage.setItem('username', result.user.name); // Lưu username

      return result.user; // Trả về thông tin người dùng
    } else {
      throw new Error(result.message || 'Đăng nhập thất bại');
    }
  } catch (error: any) {
    console.error('Lỗi đăng nhập:', error.message);
    throw error;
  }
};


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
      throw new Error('Registration failed');
    }

    const data = await response.json();
    console.log('API Response:', data);

    // Kiểm tra dựa trên phản hồi từ API
    if (response.status === 201 && data.message) {
      console.log(data.message || 'Đăng ký thành công'); // Chỉ log thông báo thành công
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
  try {
    const accessToken = localStorage.getItem('accessToken'); // Lấy accessToken từ localStorage

    const response = await fetch(`${backendUrl}/logout`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`, // Thêm token vào header
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Logout failed');
    }

    // Xóa token khỏi localStorage sau khi đăng xuất thành công
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');

    console.log('Logout successful');
    return true; // Trả về trạng thái thành công
  } catch (error: any) {
    console.error('Error during logout:', error.message);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm
  }
};