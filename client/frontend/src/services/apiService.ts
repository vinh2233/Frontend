// import axios from 'axios';

// // Địa chỉ URL đầy đủ của máy chủ API
// const backendUrl = 'http://192.168.50.227:5001/api/v1/auth';

// // Gọi API đăng nhập
// export const login = async (values: any) => {
//   const response = await axios.post(`${backendUrl}/login`, values);  // Sử dụng URL đầy đủ
//   return response.data;
// };

// // // Gọi API đăng ký

// export const register = async (values: any) => {
//     console.log('Registering with:', values);
//     const response = await axios.post(`${backendUrl}/register`, values,);
//     return response.data;

//   };
// //   import axios from 'axios';

// //   // Lấy danh sách nhiệm vụ
// //   export const fetchTasks = async () => {
// //     const response = await axios.get('/api/tasks');
// //     return response.data;
// //   };
  
// //   // Đăng xuất
// //   export const logout = async () => {
// //     const response = await axios.post('/api/logout');
// //     return response.data;
// //   };
// //   export const createTask = async (values: any) => {
// //     const response = await axios.post('/api/tasks', values);
// //     return response.data; // Assuming the response contains a "success" field
// //   };
  
// //   // Update an existing task
// //   export const updateTask = async (id: number, values: any) => {
// //     const response = await axios.put(`/api/tasks/${id}`, values);
// //     return response.data; // Assuming the response contains a "success" field
// //   };
  
// //   // Fetch task details for editing
// //   export const fetchTaskDetails = async (id: number) => {
// //     const response = await axios.get(`/api/tasks/${id}`);
// //     return response.data; // Assuming the response contains task data and a "success" field
// //   };
