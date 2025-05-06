import React, { useState } from 'react';
import { Tabs, Input, Button, List } from 'antd';

const { TabPane } = Tabs;
const { TextArea } = Input;

interface TaskActivityProps {
  taskId: number; // taskId vẫn được truyền từ index.tsx
  onCommentsChange: (data: string[]) => void;
}

interface TaskActivityProps {
  taskId: number;
  comments: string[];          // <-- thêm dòng này
  onCommentsChange: (data: string[]) => void;
}

const TaskActivity: React.FC<TaskActivityProps> = ({ comments, onCommentsChange }) => {
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    const updatedComments = [...comments, newComment];
    onCommentsChange(updatedComments);
    setNewComment('');
  };

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Comment" key="1">
        <List
          dataSource={comments}
          renderItem={(item) => <List.Item>{item}</List.Item>}
          style={{ marginBottom: 16 }}
        />
        <TextArea
          rows={2}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <Button type="primary" onClick={handleAddComment} style={{ marginTop: 8 }}>
          Add Comment
        </Button>
      </TabPane>
    </Tabs>
  );
};


export default TaskActivity;
