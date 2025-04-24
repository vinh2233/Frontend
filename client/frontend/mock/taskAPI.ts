const tasks = [
    {
      id: 1,
      name: 'Task 1',
      type: 'Task',
      description: 'This is task 1',
      status: 'New',
      priority: 'High',
      assignee: 'Quang Vinh',
      startDate: '2023-04-01',
      endDate: '2023-04-05',
      labels: ['Dev', 'Bug'],
    },
    {
      id: 2,
      name: 'Task 2',
      type: 'Task',
      description: 'This is task 2',
      status: 'InProgress',
      priority: 'Normal',
      assignee: 'Chinh Tran',
      startDate: '2023-04-06',
      endDate: '2023-04-10',
      labels: ['Feature'],
    },
  ];
  
  export default {
    // Lấy danh sách task
    'GET /api/tasks': (req: any, res: any) => {
      res.json({
        success: true,
        data: tasks,
      });
    },
  
    'GET /api/tasks/:id': (req: any, res: any) => {
      const { id } = req.params;
      const task = tasks.find((task) => task.id === parseInt(id, 10));
      if (task) {
        res.json({
          success: true,
          data: task,
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Task not found',
        });
      }
    },
    'PUT /api/tasks/:id': (req: any, res: any) => {
      const { id } = req.params;
      const index = tasks.findIndex((task) => task.id === parseInt(id, 10));
      if (index !== -1) {
        tasks[index] = { ...tasks[index], ...req.body };
        res.json({
          success: true,
          data: tasks[index],
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Task not found',
        });
      }
    },
  
    // Tạo task mới
    'POST /api/tasks': (req: any, res: any) => {
      const { name, description,type, status, priority, assignee, startDate, endDate,estimatedTime, labels } = req.body;

      console.log('Received Data:', req.body); // Log dữ liệu nhận được

      // Kiểm tra tính hợp lệ của dữ liệu
      if (!name || !description) {
        res.status(400).json({
          success: false,
          message: 'Task name and description are required',
        });
        return;
      }
      if (!type||!status || !priority || !assignee || !startDate || !endDate) {
        res.status(400).json({
          success: false,
          message: 'All fields are required',
        });
        return;
      }
      if (!Array.isArray(labels)) {
        res.status(400).json({
          success: false,
          message: 'Labels must be an array',
        });
        return;
      }

      // Tạo task mới
      const newTask = { id: tasks.length + 1, name, description,type, status, priority, assignee, startDate, endDate,estimatedTime, labels };
      tasks.push(newTask);
      res.json({
        success: true,
        data: newTask,
      });
    },
  
    // Xóa task
    'DELETE /api/tasks/:id': (req: any, res: any) => {
      const { id } = req.params;
      const index = tasks.findIndex((task) => task.id === parseInt(id, 10));
      if (index !== -1) {
        tasks.splice(index, 1);
        res.json({ success: true });
      } else {
        res.status(404).json({ success: false, message: 'Task not found' });
      }
    },
  };