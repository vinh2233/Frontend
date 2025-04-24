import React from 'react';
import { Card, Row, Col, Space, Button } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import useTask from './useTask';
import TaskForm from '@/components/TaskTable/TaskForm';
import TaskDetails from '@/components/TaskTable/TaskDetails';
import TaskActivity from '@/components/TaskTable/TaskActivity';

const TaskPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    formData,
    setFormData,
    details,
    setDetails,
    comments,
    newComment,
    setNewComment,
    isEditMode,
    handleSaveOrUpdate,
    handleAddComment,
  } = useTask(id);

  return (
    <Card>
      <Row gutter={24}>
        <Col span={16}>
          <TaskForm formData={formData} onChange={setFormData} />
          <TaskActivity
            comments={comments}
            newComment={newComment}
            onAddComment={handleAddComment}
            onCommentChange={setNewComment}
          />
        </Col>
        <Col span={8}>
          <TaskDetails details={details} onChange={setDetails} />
        </Col>
      </Row>
      <Row justify="end" style={{ marginTop: 24 }}>
        <Space>
          <Button onClick={() => navigate('/')}>Hủy</Button>
          <Button type="primary" onClick={handleSaveOrUpdate}>
            {isEditMode ? 'Cập nhật' : 'Lưu'}
          </Button>
        </Space>
      </Row>
    </Card>
  );
};

export default TaskPage;