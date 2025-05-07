// import React from 'react';
// import { Table } from 'antd';

// const TaskTable = ({ tasks, onRowClick }: { tasks: any[]; onRowClick: (id: number) => void }) => {
//   const columns = [
//     {
//       title: '#',
//       dataIndex: 'id',
//       key: 'id',
//       render: (text: any) => (<strong>{text}</strong>),
//     },
//     {
//       title: 'Task Type',
//       dataIndex: 'type',
//       key: 'type',
//     },
//     {
//       title: 'Task name',
//       dataIndex: 'name',
//       key: 'name',
//       render: (text: any, record: any) => (
//         <span
//           style={{ color: '#25700e', cursor: 'pointer' ,textDecoration: 'underline' }}
//           onClick={() => onRowClick(record.id)}
//         >
//           {text}
//         </span>
//       ),
//     },
//     {
//       title: 'Status',
//       dataIndex: 'status',
//       key: 'status',
//       render: (status: string) => (
//         <span
//           style={{
//             color: status === 'DONE' ? 'green' : status === 'in-progress' ? 'orange' : 'red',
//             textTransform: 'capitalize'
//           }}
//         >
//           {status}
//         </span>
//       ),
//     },
//     {
//       title: 'Priority',
//       dataIndex: 'priority',
//       key: 'priority',
//       render: (priority: string) => (
//         <span
//           style={{
//             color: priority === 'High' ? 'red' : priority === 'Medium' ? 'blue' : 'gray',textTransform: 'capitalize'
//           }}
//         >
//           {priority}
//         </span>
//       ),
//     },
//     {
//       title: 'Assignee',
//       dataIndex: 'assignee',
//       key: 'assignee',
//     },
//     {
//       title: 'Estimated time',
//       dataIndex: 'estimatedTime',
//       key: 'estimatedTime',
//       render: (time: number) => `${time} giờ`,
//     },
//     {
//       title: 'Estimated date',
//       dataIndex: 'startDate',
//       key: 'estimatedDate',
//     },
//   ];

//   return <Table columns={columns} dataSource={tasks} rowKey="id" bordered />;
// };

// export default TaskTable;
import React from 'react';
import { Table } from 'antd';

const TaskTable = ({
  tasks,
  onRowClick,
}: {
  tasks: any[];
  onRowClick: (id: number) => void;
}) => {
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      render: (text: any) => <strong>{text}</strong>,
    },
    {
      title: 'Task Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any, record: any) => (
        <span
          style={{
            color: '#25700e',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
          onClick={() => onRowClick(record.id)}
        >
          {text}
        </span>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Task Type',
      dataIndex: ['type', 'type'], // Lấy trường `type` từ object `type`
      key: 'type',
    },
    {
      title: 'Status',
      dataIndex: ['status', 'status'], // Lấy trường `status` từ object `status`
      key: 'status',
      render: (status: string) => (
        <span
          style={{
            color: status === 'To Do' ? 'red' : status === 'In Progress' ? 'orange' : 'green',
            textTransform: 'capitalize',
          }}
        >
          {status}
        </span>
      ),
    },
    {
      title: 'Priority',
      dataIndex: ['priority', 'priority'], // Lấy trường `priority` từ object `priority`
      key: 'priority',
      render: (priority: string) => (
        <span
          style={{
            color: priority === 'High' ? 'red' : priority === 'Medium' ? 'blue' : 'gray',
            textTransform: 'capitalize',
          }}
        >
          {priority}
        </span>
      ),
    },
    {
      title: 'Start Date',
      dataIndex: 'date_start',
      key: 'date_start',
      render: (date: string) => new Date(date).toLocaleDateString(), // Hiển thị ngày bắt đầu
    },
    {
      title: 'End Date',
      dataIndex: 'date_stop',
      key: 'date_stop',
      render: (date: string) => new Date(date).toLocaleDateString(), // Hiển thị ngày kết thúc
    },
  ];

  return <Table columns={columns} dataSource={tasks} rowKey="id" bordered 
  pagination={{
    pageSize: 10, 
    showSizeChanger: true, 
    pageSizeOptions: ['5', '10', '20', '50'],}}/>;
};

export default TaskTable;