import React from 'react';
import { Table } from 'antd';

const TaskTable = ({ tasks, onRowClick }: { tasks: any[]; onRowClick: (id: number) => void }) => {
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      render: (text: any) => <strong>{text}</strong>,
    },
    {
      title: 'Loại',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
      render: (text: any, record: any) => (
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => onRowClick(record.id)}
        >
          {text}
        </span>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <span
          style={{
            color: status === 'DONE' ? 'green' : status === 'IN PROGRESS' ? 'orange' : 'red',
          }}
        >
          {status}
        </span>
      ),
    },
    {
      title: 'Độ ưu tiên',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority: string) => (
        <span
          style={{
            color: priority === 'High' ? 'red' : priority === 'Medium' ? 'blue' : 'gray',
          }}
        >
          {priority}
        </span>
      ),
    },
    {
      title: 'Giao cho',
      dataIndex: 'assignee',
      key: 'assignee',
    },
    {
      title: 'Thời gian ước tính',
      dataIndex: 'estimatedTime',
      key: 'estimatedTime',
      render: (time: number) => `${time} giờ`,
    },
    {
      title: 'Ngày ước tính',
      dataIndex: 'startDate',
      key: 'estimatedDate',
    },
  ];

  return <Table columns={columns} dataSource={tasks} rowKey="id" bordered />;
};

export default TaskTable;