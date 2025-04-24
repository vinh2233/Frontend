// import React from 'react';
// import { Form, Select, DatePicker, InputNumber, Input } from 'antd';

// const { Option } = Select;

// const TaskDetails = ({ details, onChange }: { details: any; onChange: (data: any) => void }) => {
//   return (
//     <Form layout="vertical" onValuesChange={(onChange)} initialValues={details}>
//       <Form.Item label="Status" name="status">
//         <Select>
//           <Option value="new">New</Option>
//           <Option value="in-progress">In Progress</Option>
//           <Option value="done">Done</Option>
//         </Select>
//       </Form.Item>
//       <Form.Item label="Priority" name="priority">
//         <Select>
//           <Option value="low">Low</Option>
//           <Option value="medium">Medium</Option>
//           <Option value="high">High</Option>
//         </Select>
//       </Form.Item>
//       <Form.Item label="Assignee" name="assignee">
//         <Input placeholder="Enter assignee name" />
//       </Form.Item>
//       <Form.Item label="Labels" name="labels">
//         <Select mode="tags" placeholder="Add labels">
//           <Option value="urgent">Urgent</Option>
//           <Option value="feature">Feature</Option>
//           <Option value="bugfix">Bugfix</Option>
//         </Select>
//       </Form.Item>
//       <Form.Item label="Start Date" name="startDate">
//         <DatePicker />
//       </Form.Item>
//       <Form.Item label="End Date" name="endDate">
//         <DatePicker />
//       </Form.Item>
//       <Form.Item label="Estimated Time (hours)" name="estimatedTime">
//         <InputNumber min={0} />
//       </Form.Item>
//     </Form>
//   );
// };

// export default TaskDetails;


import React, { useEffect } from 'react';
import { Form, Select, DatePicker, Input, InputNumber } from 'antd';
import dayjs from 'dayjs';

const TaskDetails = ({
  taskId,
  onDetailsChange,
  initialValues,
}: {
  taskId: number; // taskId được giữ lại để index.tsx sử dụng
  onDetailsChange: (data: any) => void;
  initialValues: any;
}) => {
  const [form] = Form.useForm();

  // Đồng bộ giá trị form khi `initialValues` thay đổi
  useEffect(() => {
    form.setFieldsValue({
      ...initialValues,
      startDate: initialValues.startDate ? dayjs(initialValues.startDate) : null,
      endDate: initialValues.endDate ? dayjs(initialValues.endDate) : null,
    });
  }, [initialValues]);

  const handleFormChange = () => {
    const values = form.getFieldsValue();
    onDetailsChange({
      ...values,
      startDate: values.startDate ? values.startDate.toISOString() : null,
      endDate: values.endDate ? values.endDate.toISOString() : null,
    }); // Gửi dữ liệu form lên `index.tsx`
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={handleFormChange}
      initialValues={{
        ...initialValues,
        startDate: initialValues.startDate ? dayjs(initialValues.startDate) : null,
        endDate: initialValues.endDate ? dayjs(initialValues.endDate) : null,
      }} // Đặt giá trị mặc định
    >
      <p>Task ID: {taskId}</p> {/* Hiển thị taskId nếu cần */}
      <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Status is required' }]}>
        <Select>
          <Select.Option value="New">New</Select.Option>
          <Select.Option value="InProgress">In Progress</Select.Option>
          <Select.Option value="Done">Done</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Priority" name="priority" rules={[{ required: true, message: 'Priority is required' }]}>
        <Select>
          <Select.Option value="Low">Low</Select.Option>
          <Select.Option value="Medium">Normal</Select.Option>
          <Select.Option value="High">High</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Assignee" name="assignee">
        <Input />
      </Form.Item>
      <Form.Item label="Start Date" name="startDate">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="End Date" name="endDate">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Estimated Time"
        name="estimatedTime"
        // rules={[{ required: true, message: 'Please enter the estimated time' }]}
      >
        <InputNumber min={0} addonAfter="Hours" style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item label="Labels" name="labels">
        <Select mode="tags" placeholder="Add labels">
          <Select.Option value="Bug">Bug</Select.Option>
          <Select.Option value="Feature">Feature</Select.Option>
          <Select.Option value="Research">Research</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};

export default TaskDetails;
