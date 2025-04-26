import React from 'react';
import { Table } from 'antd';

const TaskTable = ({ tasks, onRowClick }: { tasks: any[]; onRowClick: (id: number) => void }) => {
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      render: (text: any) => (<strong>{text}</strong>),
    },
    {
      title: 'Task Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Task name',
      dataIndex: 'name',
      key: 'name',
      render: (text: any, record: any) => (
        <span
          style={{ color: '#25700e', cursor: 'pointer' ,textDecoration: 'underline' }}
          onClick={() => onRowClick(record.id)}
        >
          {text}
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <span
          style={{
            color: status === 'DONE' ? 'green' : status === 'in-progress' ? 'orange' : 'red',
            textTransform: 'capitalize'
          }}
        >
          {status}
        </span>
      ),
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => (
        <span
          style={{
            color: priority === 'High' ? 'red' : priority === 'Medium' ? 'blue' : 'gray',textTransform: 'capitalize'
          }}
        >
          {priority}
        </span>
      ),
    },
    {
      title: 'Assignee',
      dataIndex: 'assignee',
      key: 'assignee',
    },
    {
      title: 'Estimated time',
      dataIndex: 'estimatedTime',
      key: 'estimatedTime',
      render: (time: number) => `${time} giờ`,
    },
    {
      title: 'Estimated date',
      dataIndex: 'startDate',
      key: 'estimatedDate',
    },
  ];

  return <Table columns={columns} dataSource={tasks} rowKey="id" bordered />;
};

export default TaskTable;