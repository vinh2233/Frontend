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
      
          if (taskData) {
            const task = taskData; // Directly use taskData as the task object
            setFormData({
              name: task.name || '',
              description: task.description || '',
              type: task.type_id || '',
            });
            setDetails({
              status: task.status_id || 'New',
              priority: task.priority_id || 'Normal',
              // assignee: task.assignee || '', // Replace with the correct property if available
              startDate: task.time_start ? dayjs(task.time_start) : null,
              endDate: task.time_stop ? dayjs(task.time_stop) : null,
              labels: task.label_id || [],
              // estimatedTime: task.estimatedTime || null, // Replace with the correct property if available
            });
            // setComments(task.comments || []); // Replace with the correct property if available
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
      navigate('/home');
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
