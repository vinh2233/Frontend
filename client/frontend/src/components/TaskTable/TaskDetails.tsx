import React from 'react';
import { Form, Select, DatePicker, InputNumber, Input } from 'antd';

const { Option } = Select;

const TaskDetails = ({ details, onChange }: { details: any; onChange: (data: any) => void }) => {
  return (
    <Form layout="vertical" onValuesChange={(onChange)} initialValues={details}>
      <Form.Item label="Status" name="status">
        <Select>
          <Option value="new">New</Option>
          <Option value="in-progress">In Progress</Option>
          <Option value="done">Done</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Priority" name="priority">
        <Select>
          <Option value="low">Low</Option>
          <Option value="medium">Medium</Option>
          <Option value="high">High</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Assignee" name="assignee">
        <Input placeholder="Enter assignee name" />
      </Form.Item>
      <Form.Item label="Labels" name="labels">
        <Select mode="tags" placeholder="Add labels">
          <Option value="urgent">Urgent</Option>
          <Option value="feature">Feature</Option>
          <Option value="bugfix">Bugfix</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Start Date" name="startDate">
        <DatePicker />
      </Form.Item>
      <Form.Item label="End Date" name="endDate">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Estimated Time (hours)" name="estimatedTime">
        <InputNumber min={0} />
      </Form.Item>
    </Form>
  );
};

export default TaskDetails;