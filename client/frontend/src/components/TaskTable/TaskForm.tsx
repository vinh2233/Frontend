
// import React, { useEffect, useState } from 'react';
// import { Form, Input, Select } from 'antd';
// import { fetchDropdownData } from '@/services/task/taskService'; // Import API
// const { Option } = Select;

// const TaskForm = ({
//   onChange,
//   initialValues,
// }: {
//   onChange: (data: any) => void;
//   initialValues: any;
// }) => {
//   const [form] = Form.useForm();
//   const [taskTypes, setTaskTypes] = useState<{ value: string; label: string }[]>([]);

//   // Gọi API để lấy taskTypes
//   useEffect(() => {
//     const loadTaskTypes = async () => {
//       try {
//         const dropdownData = await fetchDropdownData();
//         setTaskTypes(dropdownData.taskTypes); // Lưu taskTypes vào state
//       } catch (error) {
//         if (error instanceof Error) {
//           console.error('Error fetching task types:', error.message);
//         } else {
//           console.error('Error fetching task types:', error);
//         }
//       }
//     };

//     loadTaskTypes();
//   }, []);

//   useEffect(() => {
//     form.setFieldsValue(initialValues);
//   }, [initialValues]);

//   const handleFormChange = () => {
//     const values = form.getFieldsValue();
//     onChange(values);
//   };

//   return (
//     <Form
//       form={form}
//       layout="vertical"
//       onValuesChange={handleFormChange}
//       initialValues={initialValues}
//     >
//       <Form.Item
//         label="Task Type"
//         name="type_id"
//         rules={[{ required: true, message: 'Please select a task type' }]}
//       >
//         <Select placeholder="Select task type">
//           {taskTypes.map((taskType) => (
//             <Option key={taskType.value} value={taskType.value}>
//               {taskType.label}
//             </Option>
//           ))}
//         </Select>
//       </Form.Item>
//       <Form.Item
//         label="Task Name"
//         name="name"
//         rules={[{ required: true, message: 'Task Name is required' }]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         label="Description"
//         name="description"
//         rules={[{ required: true, message: 'Description is required' }]}
//       >
//         <Input.TextArea rows={4} />
//       </Form.Item>
//     </Form>
//   );
// };

// export default TaskForm;

///////////////////////////////////////
import React, { useEffect, useState } from 'react';
import { Form, Input, Select } from 'antd';
import { fetchDropdownData } from '@/services/task/taskService'; // Import API
const { Option } = Select;

const TaskForm = ({
  onChange,
  initialValues,
}: {
  onChange: (data: any) => void;
  initialValues: any;
}) => {
  const [form] = Form.useForm();
  const [taskTypes, setTaskTypes] = useState<{ value: number; label: string }[]>([]);

  // Gọi API để lấy taskTypes
  useEffect(() => {
    const loadTaskTypes = async () => {
      try {
        const dropdownData = await fetchDropdownData();
        setTaskTypes(dropdownData.taskTypes); // Lưu taskTypes vào state
      } catch (error) {
        console.error('Error fetching task types:', error);
      }
    };

    loadTaskTypes();
  }, []);

  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [initialValues]);

  const handleFormChange = () => {
    const values = form.getFieldsValue();
    onChange(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={handleFormChange}
      initialValues={initialValues}
    >
      <Form.Item
        label="Task Type"
        name="type_id"
        rules={[{ required: true, message: 'Please select a task type' }]}
      >
        <Select placeholder="Select task type">
          {taskTypes.map((taskType) => (
            <Option key={taskType.value} value={taskType.value}>
              {taskType.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Task Name"
        name="name"
        rules={[{ required: true, message: 'Task Name is required' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Description is required' }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
    </Form>
  );
};

export default TaskForm;