// src/models/userModel.ts
export interface User {
    username: string;
    email: string;
    password: string;
  }
  
  class UserModel {
    // Phương thức đăng ký người dùng
    static async register(user: User) {
      try {
        // Gọi API đăng ký hoặc lưu dữ liệu vào cơ sở dữ liệu
        const response = await fetch('http://172.20.10.2:5001/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });
  
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error registering user:', error);
        throw new Error('Registration failed');
      }
    }
  }
  
  export default UserModel;
  