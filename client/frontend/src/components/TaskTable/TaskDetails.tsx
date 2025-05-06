
import React, { useEffect, useState } from 'react';
import { Form, Select, DatePicker, InputNumber } from 'antd';
import dayjs from 'dayjs';
import { fetchDropdownData } from '@/services/task/taskService'; // Import hàm từ taskService

const TaskDetails = ({
  taskId,
  onDetailsChange,
  initialValues,
}: {
  taskId: number;
  onDetailsChange: (data: any) => void;
  initialValues: any;
}) => {
  const [form] = Form.useForm();

  // State để lưu danh sách status, priority, và labels từ backend
  const [statuses, setStatuses] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [labels, setLabels] = useState([]);

  // Fetch dữ liệu từ backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { statuses, priorities, labels } = await fetchDropdownData(); // Gọi hàm từ taskService
        setStatuses(statuses);
        setPriorities(priorities);
        setLabels(labels);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      ...initialValues,
      time_start: initialValues.time_start ? dayjs(initialValues.time_start) : null,
      time_stop: initialValues.time_stop ? dayjs(initialValues.time_stop) : null,
    });
  }, [initialValues]);

  const handleFormChange = () => {
    const values = form.getFieldsValue();
    onDetailsChange({
      ...values,
      time_start: values.time_start ? values.time_start.toISOString() : null,
      time_stop: values.time_stop ? values.time_stop.toISOString() : null,
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={handleFormChange}
      initialValues={{
        ...initialValues,
        time_start: initialValues.time_start ? dayjs(initialValues.time_start) : null,
        time_stop: initialValues.time_stop ? dayjs(initialValues.time_stop) : null,
      }}
    >
      <p>Task ID: {taskId}</p>
      <Form.Item label="Status" name="status_id" rules={[{ required: true, message: 'Status is required' }]}>
        <Select placeholder="Select status">
          {statuses.map((status: any) => (
            <Select.Option key={status.label} value={status.label}>
              {status.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Priority" name="priority_id" rules={[{ required: true, message: 'Priority is required' }]}>
        <Select placeholder="Select priority">
          {priorities.map((priority: any) => (
            <Select.Option key={priority.label} value={priority.label}>
              {priority.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      {/* <Form.Item label="Assignee" name="assignee">
        <Input />
      </Form.Item> */}
      <Form.Item label="Estimated Start Date" name="time_start">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Estimated End Date" name="time_stop">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Estimated Time" name="estimatedTime">
        <InputNumber min={0} addonAfter="Hours" style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Labels" name="label_id">
        <Select mode="tags" placeholder="Add labels">
          {labels.map((label: any) => (
            <Select.Option key={label.label} value={label.label}>
              {label.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};

export default TaskDetails;