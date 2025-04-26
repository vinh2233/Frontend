// import React, { useEffect, useState } from 'react';
// import { Button, Col, message, Row } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import { fetchTasks } from '@/services/task/taskService';
// import { logout } from '@/services/authService/authService';
// import TaskTable from '@/components/TaskTable/TaskTable';
// import './Home.css'; // Import CSS file
// const Home = () => {
//   const navigate = useNavigate();
//   const [tasks, setTasks] = useState<any[]>([]);

//   useEffect(() => {
//     const loadTasks = async () => {
//       try {
//         const data = await fetchTasks(); // Gọi API để lấy danh sách task
//         console.log('Tasks fetched:', data); // Kiểm tra dữ liệu trả về từ API
  
//         // Nếu API trả về một mảng task, cập nhật state
//         setTasks(data);
//       } catch (error: any) {
//         console.error('Error fetching tasks:', error);
      
//         if (error.message.includes('Unauthorized')) {
//           message.error('Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.');
//           navigate('/login'); // Điều hướng về trang đăng nhập
//         } else {
//           message.error('Lỗi khi tải danh sách công việc');
//           navigate('/login'); // Điều hướng về trang đăng nhập
//         }
//       }
//     };
  
//     loadTasks();
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await logout();
//       message.success('Đăng xuất thành công!');
//       navigate('/login');
//     } catch (error: any) {
//       message.error(error.message || 'Đăng xuất thất bại!');
//     }
//   };

//   const handleRowClick = (id: number) => {
//     navigate(`/tasks/${id}`);
//   };

//   return (
//     <div className="home-container">
//     <Row justify="center" align="middle" gutter={[16, 16]} className="home-card">
//       {/* Header */}
//       <Col span={24}>
//         <div className="home-header">
//           <h2 className="home-title">Task List</h2>
//           <Col span={24} className="log-buttons">
//           <Button type="default" onClick={handleLogout} className="home-button">
//             Đăng xuất
//           </Button>
//           </Col>
//         </div>
//       </Col>

//       {/* Task Table */}
//       <Col span={24}>
//         <TaskTable tasks={tasks} onRowClick={handleRowClick} />
//       </Col>

//       {/* Add Task Button */}
//       <Col span={24} className="add-buttons">
//         <Button type="primary" onClick={() => navigate('/task')} className="home-button">
//           Thêm công việc
//         </Button>
//       </Col>
//     </Row>
//   </div>
//   );
// };

// export default Home;
import React from 'react';
import useHome from './useHome';
import HomeForm from '@/components/Home/HomeForm';

const Home = () => {
  const { tasks, handleLogout, handleRowClick, handleAddTask } = useHome();

  return (
    <HomeForm
      tasks={tasks}
      onLogout={handleLogout}
      onAddTask={handleAddTask}
      onRowClick={handleRowClick}
    />
  );
};

export default Home;