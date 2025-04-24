import { useState, useEffect } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { createTask, updateTask, fetchTaskDetails } from "@/services/task/taskService";  // Import the service methods
import dayjs from 'dayjs';
const useTask = (taskId?: string) => {
  const [formData, setFormData] = useState<any>({ name: '', description: '' });
  const [details, setDetails] = useState<any>({
    status: 'New',
    priority: 'Normal',
    assignee: '',
    startDate: null,
    endDate: null,
    labels: [],
  });
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  const isEditMode = !!taskId;
  const navigate = useNavigate();

  // Fetch task details for edit mode
  useEffect(() => {
    const fetchTask = async () => {
        if (!taskId) return; // Ensure taskId is defined
        try {
          const taskData = await fetchTaskDetails(Number(taskId)); // Make sure taskId is passed correctly
          console.log('Fetched task data:', taskData); // Debug log
      
          if (taskData.success) {
            const task = taskData.data;
            setFormData({
              name: task.name || '',
              description: task.description || '',
              type: task.type || '',
            });
            setDetails({
              status: task.status || 'New',
              priority: task.priority || 'Normal',
              assignee: task.assignee || '',
              startDate: task.startDate ? dayjs(task.startDate) : null,
              endDate: task.endDate ? dayjs(task.endDate) : null,
              labels: task.labels || [],
              estimatedTime: task.estimatedTime || null,
            });
            setComments(task.comments || []);
          } else {
            message.error('Không thể tải thông tin task');
          }
        } catch (error) {
          console.error('Error fetching task details:', error);
          message.error('Lỗi khi tải thông tin task');
        }
      };
      

    fetchTask();
  }, [taskId]);

  const handleSaveOrUpdate = async () => {
    try {
      let response;
      if (isEditMode) {
        response = await updateTask(Number(taskId), formData);
        if (response.success) {
          message.success('Cập nhật thông tin thành công!');
        } else {
          message.error('Cập nhật thất bại!');
        }
      } else {
        response = await createTask(formData);
        if (response.success) {
          message.success('Tạo task thành công!');
        } else {
          message.error('Tạo task thất bại!');
        }
      }
  
      // Redirect to home after success
      navigate('/');
    } catch (error) {
      console.error('Lỗi khi lưu thông tin:', error);
      message.error('Lưu thông tin thất bại!');
    }
  };
  

  const handleAddComment = () => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setNewComment('');
  };

  return {
    formData,
    setFormData,
    details,
    setDetails,
    comments,
    setComments,
    newComment,
    setNewComment,
    isEditMode,
    handleSaveOrUpdate,
    handleAddComment,
  };
};

export default useTask;
