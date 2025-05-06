import { useEffect, useState } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { fetchTasks } from '@/services/task/taskService';
import { logout } from '@/services/authService/authService';

const useHome = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        console.log('Tasks fetched:', data); // Log the fetched tasks
        setTasks(data);
      } catch (error: any) {
        console.error('Error fetching tasks:', error);
        if (error.message.includes('Unauthorized')) {
          message.error('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
          navigate('/login');
        } else {
          message.error('Lỗi khi tải danh sách công việc');
        }
      }
    };

    loadTasks();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      message.success('Đăng xuất thành công!');
      navigate('/login');
    } catch (error: any) {
      message.error(error.message || 'Đăng xuất thất bại!');
    }
  };

  const handleRowClick = (id: number) => {
    navigate(`/tasks/${id}`);
  };

  const handleAddTask = () => {
    navigate('/task');
  };

  return {
    tasks,
    handleLogout,
    handleRowClick,
    handleAddTask,
  };
};

export default useHome;