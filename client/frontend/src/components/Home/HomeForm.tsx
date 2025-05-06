

// export default HomeForm;
// import React from 'react';
// import { Button, Col, FloatButton, Row } from 'antd';
// import TaskTable from '@/components/TaskTable/TaskTable';
// import '@/pages/Home/Home.css';
// import { PlusOutlined } from '@ant-design/icons';

// interface HomeFormProps {
//   tasks: any[]; // Danh sách task được truyền từ HomePage
//   onLogout: () => void; // Hàm xử lý đăng xuất
//   onAddTask: () => void; // Hàm xử lý thêm task
//   onRowClick: (id: number) => void; // Hàm xử lý khi click vào một task
// }

// const HomeForm: React.FC<HomeFormProps> = ({ tasks, onLogout, onAddTask, onRowClick }) => {
//   return (
//     <div className="home-container">
//       <Row justify="center" align="middle" gutter={[16, 16]} className="home-card">
//         {/* Header */}
//         <Col span={24}>
//           <div className="home-header">
//             <h2 className="home-title">Task List</h2>
//             <Col span={24} className="log-buttons">
//               <Button type="default" onClick={onLogout} className="home-button">
//                 Đăng xuất
//               </Button>
//             </Col>
//           </div>
//         </Col>

//         {/* Task Table */}
//         <Col span={24}>
//           <TaskTable tasks={tasks} onRowClick={onRowClick} />
//         </Col>

//         {/* Add Task Button */}
//         <Col span={24} className="add-buttons">
//           <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
//             <FloatButton
//               icon={<PlusOutlined />}
//               style={{
//                 backgroundColor: '#bed6c4', // Màu nền
//                 color: 'white', // Màu icon "+"
//                 border: 'none', // Xóa viền nếu có
//               }}
//               onClick={onAddTask}
//               className="home-button"
//             />
//             <FloatButton.BackTop visibilityHeight={0} />
//           </FloatButton.Group>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default HomeForm;
import React from 'react';
import { Button, Col, FloatButton, Row } from 'antd';
import TaskTable from '@/components/TaskTable/TaskTable';
import '@/pages/Home/Home.css';
import { PlusOutlined } from '@ant-design/icons';

interface HomeFormProps {
  tasks: any[]; // Danh sách task được truyền từ HomePage
  onLogout: () => void; // Hàm xử lý đăng xuất
  onAddTask: () => void; // Hàm xử lý thêm task
  onRowClick: (id: number) => void; // Hàm xử lý khi click vào một task
}

const HomeForm: React.FC<HomeFormProps> = ({ tasks, onLogout, onAddTask, onRowClick }) => {
  return (
    <div className="home-container">
      <Row justify="center" align="middle" gutter={[16, 16]} className="home-card">
        {/* Header */}
        <Col span={24}>
          <div className="home-header">
            <h2 className="home-title">Task List</h2>
            <Col span={24} className="log-buttons">
              <Button type="default" onClick={onLogout} className="home-button">
                Đăng xuất
              </Button>
            </Col>
          </div>
        </Col>

        {/* Task Table */}
        <Col span={24}>
          <TaskTable tasks={tasks} onRowClick={onRowClick} />
        </Col>

        {/* Add Task Button */}
        <Col span={24} className="add-buttons">
          <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24, bottom: 24 }}>
            <FloatButton
              icon={<PlusOutlined />}
              style={{
                backgroundColor: '#52c41a', // Màu nền xanh lá
                color: 'white', // Màu icon "+"
                border: 'none', // Xóa viền
              }}
              onClick={onAddTask}
              className="home-button"
            />
            <FloatButton.BackTop visibilityHeight={0} />
          </FloatButton.Group>
        </Col>
      </Row>
    </div>
  );
};

export default HomeForm;