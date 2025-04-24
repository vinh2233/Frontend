// import React from 'react';
// import { Tabs, List, Input, Button } from 'antd';

// const { TabPane } = Tabs;
// const { TextArea } = Input;

// const TaskActivity = ({
//   comments,
//   newComment,
//   onAddComment,
//   onCommentChange,
// }: {
//   comments: string[];
//   newComment: string;
//   onAddComment: () => void;
//   onCommentChange: (value: string) => void;
// }) => {
//   return (
//     <Tabs defaultActiveKey="1">
//       <TabPane tab="Comments" key="1">
//         <List
//           dataSource={comments}
//           renderItem={(item) => <List.Item>{item}</List.Item>}
//           style={{ marginBottom: 16 }}
//         />
//         <TextArea
//           rows={2}
//           value={newComment}
//           onChange={(e) => onCommentChange(e.target.value)}
//           placeholder="Add a comment..."
//         />
//         <Button type="primary" onClick={onAddComment} style={{ marginTop: 8 }}>
//           Add Comment
//         </Button>
//       </TabPane>
//     </Tabs>
//   );
// };

// export default TaskActivity;


import React, { useState } from 'react';
import { Tabs, Input, Button, List } from 'antd';

const { TabPane } = Tabs;
const { TextArea } = Input;

interface TaskActivityProps {
  taskId: number; // taskId vẫn được truyền từ index.tsx
  onCommentsChange: (data: string[]) => void;
}

const TaskActivity: React.FC<TaskActivityProps> = ({ onCommentsChange }) => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const handleAddComment = () => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    onCommentsChange(updatedComments); // Gửi danh sách comment lên `index.tsx`
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
