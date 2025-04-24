import axios from 'axios';

// Lấy danh sách nhiệm vụ
export const fetchTasks = async () => {
  const response = await axios.get('/api/tasks');
  return response.data;
};

// Đăng xuất
export const logout = async () => {
  const response = await axios.post('/api/logout');
  return response.data;
};
export const createTask = async (values: any) => {
  const response = await axios.post('/api/tasks', values);
  return response.data; // Assuming the response contains a "success" field
};

// Update an existing task
export const updateTask = async (id: number, values: any) => {
  const response = await axios.put(`/api/tasks/${id}`, values);
  return response.data; // Assuming the response contains a "success" field
};

// Fetch task details for editing
export const fetchTaskDetails = async (id: number) => {
  const response = await axios.get(`/api/tasks/${id}`);
  return response.data; // Assuming the response contains task data and a "success" field
};