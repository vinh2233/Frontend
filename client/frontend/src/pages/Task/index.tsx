// import React from 'react';
// import { Card, Row, Col, Space, Button } from 'antd';
// import { useParams, useNavigate } from 'react-router-dom';
// import useTask from './useTask';
// import TaskForm from '@/components/TaskTable/TaskForm';
// import TaskDetails from '@/components/TaskTable/TaskDetails';
// import TaskActivity from '@/components/TaskTable/TaskActivity';

// const TaskPage = () => {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();
//   const {
//     formData,
//     setFormData,
//     details,
//     setDetails,
//     comments,
//     newComment,
//     setNewComment,
//     isEditMode,
//     handleSaveOrUpdate,
//     handleAddComment,
//   } = useTask(id);

//   return (
//     <Card>
//       <Row gutter={24}>
//         <Col span={16}>
//           <TaskForm formData={formData} onChange={setFormData} />
//           <TaskActivity
//             comments={comments}
//             newComment={newComment}
//             onAddComment={handleAddComment}
//             onCommentChange={setNewComment}
//           />
//         </Col>
//         <Col span={8}>
//           <TaskDetails details={details} onChange={setDetails} />
//         </Col>
//       </Row>
//       <Row justify="end" style={{ marginTop: 24 }}>
//         <Space>
//           <Button onClick={() => navigate('/')}>Hủy</Button>
//           <Button type="primary" onClick={handleSaveOrUpdate}>
//             {isEditMode ? 'Cập nhật' : 'Lưu'}
//           </Button>
//         </Space>
//       </Row>
//     </Card>
//   );
// };

// export default TaskPage;

import { Button, Card, Col, Row, Space, message } from 'antd';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TaskActivity from '@/components/TaskTable/TaskActivity';
import TaskDetails from '@/components/TaskTable/TaskDetails';
import TaskForm from '@/components/TaskTable/TaskForm';
import axios from 'axios';

const TaskPage = () => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>({ name: '', description: '' }); // Giá trị mặc định
  const [comments, setComments] = useState<string[]>([]);
  const [details, setDetails] = useState<any>({
    status: 'New',
    priority: 'Normal',
    assignee: '',
    startDate: null,
    endDate: null,
    labels: [],
  }); // Giá trị mặc định
  const isEditMode = !!id; // Kiểm tra nếu có ID thì là chế độ chỉnh sửa

  useEffect(() => {
    const fetchTaskDetails = async () => {
      if (!id) return; // Nếu không có ID, không cần tải dữ liệu
      try {
        const response = await axios.get(`/api/tasks/${id}`);
        if (response.data.success) {
          const task = response.data.data;
          setFormData({ 
            name: task.name || '', 
            description: task.description || '',
            type: task.type || '',});
          setDetails({
            status: task.status || 'New',
            priority: task.priority || 'Normal',
            assignee: task.assignee || '',
            startDate: task.startDate || null,
            endDate: task.endDate || null,
            labels: task.labels || [],
            estimatedTime: task.estimatedTime || null,
          });
          setComments(task.comments || []);
        } else {
          message.error('Không thể tải thông tin task');
        }
      } catch (error) {
        console.error('Error fetching task details:', error);
        message.error('Lỗi khi tải thông tin task');
      }
    };

    fetchTaskDetails();
  }, [id]);

  const handleSaveOrUpdate = async () => {
    try {
      if (isEditMode) {
        // Cập nhật task
        const response = await axios.put(`/api/tasks/${id}`, {
          ...formData,
          ...details,
          comments,
        });
        console.log('Task updated:', response.data);
        message.success('Cập nhật thông tin thành công!');
      } else {
        // Tạo mới task
        const response = await axios.post('/api/tasks', {
          ...formData,
          ...details,
          comments,
        });
        console.log('Task created:', response.data);
        message.success('Tạo task thành công!');
      }
      navigate('/');
    } catch (error) {
      console.error('Lỗi khi lưu thông tin:', error);
      message.error('Lưu thông tin thất bại!');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Card>
      <Row gutter={24}>
        <Col span={16}>
          {/* Truyền formData vào TaskForm */}
          <TaskForm onChange={(data: any) => setFormData(data)} initialValues={formData} />
          {/* Truyền comments vào TaskActivity */}
          <TaskActivity taskId={Number(id)} onCommentsChange={(data: string[]) => setComments(data)} />
        </Col>
        <Col span={8}>
          {/* Truyền details vào TaskDetails */}
          <TaskDetails
            taskId={Number(id)}
            onDetailsChange={(data: any) => setDetails(data)}
            initialValues={details}
          />
        </Col>
      </Row>

      <Row justify="end" style={{ marginTop: 24 }}>
        <Space>
          <Button onClick={handleCancel}>Hủy</Button>
          <Button type="primary" onClick={handleSaveOrUpdate}>
            {isEditMode ? 'Cập nhật' : 'Lưu'}
          </Button>
        </Space>
      </Row>
    </Card>
  );
};

export default TaskPage;
