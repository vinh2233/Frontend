import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;

const TaskForm = ({ formData, onChange }: { formData: any; onChange: (data: any) => void }) => {
  return (
    <Form layout="vertical" onValuesChange={onChange} initialValues={formData}>
      <Form.Item
        label="Task Name"
        name="name"
        rules={[{ required: true, message: 'Please enter the task name' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Task Type"
        name="type"
        rules={[{ required: true, message: 'Please select a task type' }]}
      >
        <Select placeholder="Select task type">
          <Option value="task">Task</Option>
          <Option value="bug">Bug</Option>
          <Option value="subtask">Subtask</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please enter the description' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
    </Form>
  );
};

export default TaskForm;