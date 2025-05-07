const backendUrl = `https://f338-116-193-67-10.ngrok-free.app/api/v1/tasks`;
export const fetchTasks = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const username = localStorage.getItem('username');

  // console.log('username:', username);
  // console.log('Fetching tasks from:', `${backendUrl}/Alltasks/${username}`);
  // console.log('Access Token:', accessToken);

  if (!accessToken) {
    throw new Error('Access token is missing');
  }

  if (!username) {
    throw new Error('Username is missing');
  }

  try {
    const response = await fetch(`${backendUrl}/alltasks/${username}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    // Log toàn bộ phản hồi trước khi parse JSON
    const responseBody = await response.text();
    // console.log('Response body:', responseBody);

    if (!response.ok) {
      console.error('Error response:', responseBody);
      throw new Error(`Failed to fetch tasks: ${response.statusText}`);
    }

    // Parse JSON từ phản hồi
    const data = JSON.parse(responseBody);
    // console.log('Parsed response data:', data);

    return data.data.tasks; // Truy cập đúng cấu trúc phản hồi
  } catch (error: any) {
    console.error('Error fetching tasks:', error.message);
    throw error;
  }
};

export const fetchDropdownData = async () => {
  const accessToken = localStorage.getItem('accessToken');
  // console.log('Access Token:', accessToken); // Log access token để kiểm tra

  if (!accessToken) {
    throw new Error('Access token is missing');
  }

  try {
    const [statusResponse, priorityResponse, labelResponse, typeResponse] = await Promise.all([
      fetch(`${backendUrl}/getStatusTask`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }),
      fetch(`${backendUrl}/getPriorityTask`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }),
      fetch(`${backendUrl}/getLabelTask`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }),
      fetch(`${backendUrl}/getTypeTask`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }),
    ]);

    // Kiểm tra trạng thái của từng phản hồi
    if (!statusResponse.ok) {
      const errorText = await statusResponse.text();
      console.error('Error fetching status data:', errorText);
      throw new Error(`Failed to fetch status data: ${statusResponse.statusText}`);
    }
    if (!priorityResponse.ok) {
      const errorText = await priorityResponse.text();
      console.error('Error fetching priority data:', errorText);
      throw new Error(`Failed to fetch priority data: ${priorityResponse.statusText}`);
    }
    if (!labelResponse.ok) {
      const errorText = await labelResponse.text();
      console.error('Error fetching label data:', errorText);
      throw new Error(`Failed to fetch label data: ${labelResponse.statusText}`);
    }
    if (!typeResponse.ok) {
      const errorText = await typeResponse.text();
      console.error('Error fetching task types data:', errorText);
      throw new Error(`Failed to fetch task types data: ${typeResponse.statusText}`);
    }

    // Parse JSON từ từng phản hồi
    const statuses = await statusResponse.json();
    const priorities = await priorityResponse.json();
    const labels = await labelResponse.json();
    const types = await typeResponse.json();

    // Xử lý dữ liệu để ánh xạ sang các trường `status`, `priority`, `type`, và `taskTypes`
    const processedData = {
      statuses: statuses.data.taskStatuses.map((item: any) => ({
        value: item.id,
        label: item.status, // Sử dụng trường `status`
      })),
      priorities: priorities.data.taskPriorities.map((item: any) => ({
        value: item.id,
        label: item.priority, // Sử dụng trường `priority`
      })),
      labels: labels.data.taskLabels.map((item: any) => ({
        value: item.id,
        label: item.type, // Sử dụng trường `type`
      })),
      taskTypes: types.data.taskTypes.map((item: any) => ({
        value: item.id,
        label: item.type, // Sử dụng trường `type`
      })),
    };

    // console.log('Processed dropdown data:', processedData);

    return processedData;
  } catch (error: any) {
    console.error('Error fetching dropdown data:', error.message);
    throw error;
  }
};
// Create a new task
export const createTask = async (values: any) => {
  const accessToken = localStorage.getItem('accessToken');
  const username = localStorage.getItem('username');

  if (!accessToken) {
    throw new Error('Access token is missing');
  }
  if (!username) {
    throw new Error('Username is missing');
  }
  try {
    const response = await fetch(`${backendUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to create task: ${errorText}`);
    }

    const data = await response.json();
    console.log('Task created successfully:', data);
    return data;
  } catch (error: any) {
    console.error('Error creating task:', error.message);
    throw error;
  }
};

// Update an existing task
export const updateTask = async (id: number, values: any) => {
  const accessToken = localStorage.getItem('accessToken');
  const username = localStorage.getItem('username');

  if (!accessToken) {
    throw new Error('Access token is missing');
  }
  if (!username) {
    throw new Error('Username is missing');
  }

  try {
    const response = await fetch(`${backendUrl}/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to update task: ${errorText}`);
    }

    const data = await response.json();
    console.log('Task updated successfully:', data);
    return data;
  } catch (error: any) {
    console.error('Error updating task:', error.message);
    throw error;
  }
};

// Fetch task details by ID
export const fetchTaskDetails = async (id: number) => {
  const accessToken = localStorage.getItem('accessToken');

  if (!accessToken) {
    throw new Error('Access token is missing');
  }

  try {
    const response = await fetch(`${backendUrl}/getById/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch task details: ${errorText}`);
    }

    const data = await response.json();
    console.log('Fetched task details:', data);

    // Ánh xạ dữ liệu trả về từ backend
    const task = data.data.task;
    return {
      id: task.id,
      name: task.name,
      description: task.description,
      type_id: task.type.id,
      status_id: task.status.id,
      priority_id: task.priority.id,
      label_id: task.label ? [task.label.id] : [],
      time_start: task.date_start,
      time_stop: task.date_stop,
    };
  } catch (error: any) {
    console.error('Error fetching task details:', error.message);
    throw error;
  }
};

