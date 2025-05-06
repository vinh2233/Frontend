
// export default TaskPage;

import { Button, Card, Col, Row, Space, message } from 'antd';
import { useState, } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TaskActivity from '@/components/TaskTable/TaskActivity';
import TaskDetails from '@/components/TaskTable/TaskDetails';
import TaskForm from '@/components/TaskTable/TaskForm';
import axios from 'axios';

const TaskPage = () => {
  const { id } = useParams<{ id: string }>(); // Lấy id từ URL
  const navigate = useNavigate();
  const [formData, setFormData] = useState<any>({ name: '', description: '' }); // Giá trị mặc định
  const [, setComments] = useState<string[]>([]);
  const [details, setDetails] = useState<any>({
    status: 'New',
    priority: 'Normal',
    assignee: '',
    startDate: null,
    endDate: null,
    labels: [],
  }); // Giá trị mặc định
  const isEditMode = !!id; // Kiểm tra nếu có ID thì là chế độ chỉnh sửa

  

  const handleSaveOrUpdate = async () => {
    try {
      const requestBody = {
        name: formData.name,
        description: formData.description,
        type_id: formData.type,
        status_id: details.status,
        priority_id: details.priority,
        time_start: details.startDate,
        time_stop: details.endDate,
      };
  
      if (isEditMode) {
        // Update task
        const response = await axios.put(`/api/tasks/${id}`, requestBody);
        console.log('Task updated:', response.data);
        message.success('Cập nhật thông tin thành công!');
      } else {
        // Create new task
        const response = await axios.post('/api/tasks', requestBody);
        console.log('Task created:', response.data);
        message.success('Tạo task thành công!');
      }
      navigate('/home');
    } catch (error) {
      console.error('Lỗi khi lưu thông tin:', error);
      message.error('Lưu thông tin thất bại!');
    }
  };
  

  const handleCancel = () => {
    navigate('/home');
  };

  return (
    <Card>
      <Row gutter={24}>
        <Col span={16}>
          {/* Truyền formData vào TaskForm */}
          <TaskForm onChange={(data: any) => setFormData(data)} initialValues={formData} />
          {/* Truyền comments vào TaskActivity */}
          <TaskActivity taskId={Number(id)} onCommentsChange={(data: string[]) => setComments(data)} comments={[]} />
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
