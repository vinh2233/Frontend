import React, { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { fetchTasks, logout } from '@/services/task/taskService';
import TaskTable from '@/components/TaskTable/TaskTable'; // Giả sử bạn đã tạo component TaskTable

const Home = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        if (data.success) {
          setTasks(data.data);
        } else {
          message.error('Không thể tải danh sách công việc');
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
        message.error('Lỗi khi tải danh sách công việc');
      }
    };

    loadTasks();
  }, []);

  const handleLogout = async () => {
    try {
      const data = await logout();
      if (data.success) {
        message.success(data.message);
        localStorage.removeItem('user');
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during logout:', error);
      message.error('Logout failed');
    }
  };

  const handleRowClick = (id: number) => {
    navigate(`/tasks/${id}`);
  };

  return (
    <div style={{ padding: 24 }}>
      <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
        <h2>Danh sách công việc</h2>
        <Button type="default" onClick={handleLogout}>
          Đăng xuất
        </Button>
      </div>

      <TaskTable tasks={tasks} onRowClick={handleRowClick} />

      <Button type="primary" onClick={() => navigate('/task')} style={{ marginTop: 16 }}>
        Thêm công việc
      </Button>
    </div>
  );
};

export default Home;