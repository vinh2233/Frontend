import React from 'react';
import { Button, Col, Row } from 'antd';
import TaskTable from '@/components/TaskTable/TaskTable';
import '@/pages/Home/Home.css';

interface HomeFormProps {
  tasks: any[];
  onLogout: () => void;
  onAddTask: () => void;
  onRowClick: (id: number) => void;
}

const HomeForm: React.FC<HomeFormProps> = ({ tasks, onLogout, onAddTask, onRowClick }) => {
  return (
    <div className="home-container">
      <Row justify="center" align="middle" gutter={[16, 16]} className="home-card">
        {/* Header */}
        <Col span={24}>
          <div className="home-header">
            <h2 className="home-title">Task List</h2>
            <Col span={24} className="log-buttons">
              <Button type="default" onClick={onLogout} className="home-button">
                Đăng xuất
              </Button>
            </Col>
          </div>
        </Col>

        {/* Task Table */}
        <Col span={24}>
          <TaskTable tasks={tasks} onRowClick={onRowClick} />
        </Col>

        {/* Add Task Button */}
        <Col span={24} className="add-buttons">
          <Button type="primary" onClick={onAddTask} className="home-button">
            Thêm công việc
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default HomeForm;