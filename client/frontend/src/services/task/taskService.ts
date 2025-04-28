
const backendUrl = 'http://192.168.50.227:3000/tasks';

export const fetchTasks = async () => {
  const accessToken = localStorage.getItem('accessToken'); // Lấy accessToken từ localStorage
  const username = localStorage.getItem('username'); // Lấy username từ localStorage

  if (!accessToken) {
    throw new Error('Access token is missing');
  }

  if (!username) {
    throw new Error('Username is missing');
  }

  const response = await fetch(`${backendUrl}/Alltasks`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`, // Gửi accessToken trong header
      'Content-Type': 'application/json',
      username: username, // Gửi username trong header
    },
  });

  if (response.status === 401) {
    throw new Error('Unauthorized: Invalid or expired access token');
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch tasks: ${response.statusText}`);
  }

  return await response.json(); // Trả về dữ liệu từ API
};



export const createTask = async (values: any) => {
  const accessToken = localStorage.getItem('accessToken'); // Lấy accessToken từ localStorage

  try {
    const response = await fetch(`${backendUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`, // Thêm token vào header
      },
      body: JSON.stringify(values), // Chuyển đổi dữ liệu thành JSON
    });

    if (!response.ok) {
      throw new Error('Failed to create task'); // Ném lỗi nếu phản hồi không thành công
    }

    const data = await response.json(); // Phân tích phản hồi JSON
    return data; // Trả về dữ liệu từ API
  } catch (error: any) {
    console.error('Error creating task:', error.message);
    throw error; // Ném lỗi để xử lý ở nơi gọi hàm
  }
};
// Update an existing task
export const updateTask = async (id: number, values: any) => {
  const accessToken = localStorage.getItem('accessToken'); // Lấy accessToken từ localStorage

  const response = await fetch(`${backendUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`, // Thêm token vào header
    },
    body: JSON.stringify(values), // Chuyển đổi dữ liệu thành JSON
  });

  if (!response.ok) {
    throw new Error('Failed to update task');
  }

  return await response.json(); // Trả về dữ liệu từ API
};

// Fetch task details for editing
export const fetchTaskDetails = async (id: number) => {
  const accessToken = localStorage.getItem('accessToken'); // Lấy accessToken từ localStorage

  const response = await fetch(`${backendUrl}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`, // Thêm token vào header
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch task details');
  }

  return await response.json(); // Trả về dữ liệu từ API
};

export const fetchTaskById = async (id: number) => {
  const accessToken = localStorage.getItem('accessToken');
  const username = localStorage.getItem('username');

  if (!accessToken) {
    console.error('Access token is missing');
    throw new Error('Access token is missing');
  }

  if (!username) {
    console.error('Username is missing');
    throw new Error('Username is missing');
  }

  console.log('Fetching task with ID:', id);
  console.log('Access Token:', accessToken);
  console.log('Username:', username);

  const response = await fetch(`${backendUrl}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      username: username,
    },
  });

  if (response.status === 401) {
    console.error('Unauthorized: Invalid or expired access token');
    throw new Error('Unauthorized: Invalid or expired access token');
  }

  if (!response.ok) {
    console.error(`Failed to fetch task: ${response.statusText}`);
    throw new Error(`Failed to fetch task: ${response.statusText}`);
  }

  return await response.json();
};