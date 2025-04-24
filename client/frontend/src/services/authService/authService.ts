import axios from 'axios';

// Địa chỉ URL đầy đủ của máy chủ API
const backendUrl = 'http://192.168.50.227:5001/api/v1/auth';

// Gọi API đăng nhập
export const login = async (values: any) => {
  const response = await axios.post(`${backendUrl}/login`, values);  // Sử dụng URL đầy đủ
  return response.data;
};

// // Gọi API đăng ký
// export const register = async (values: any) => {
//   const response = await axios.post(`${backendUrl}/register`, values);  // Sử dụng URL đầy đủ
//   return response.data;
// };
export const register = async (values: any) => {
    console.log('Registering with:', values);
    const response = await axios.post(`${backendUrl}/register`, values);
    return response.data;

  };
