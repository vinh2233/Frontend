import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'Task Manager',
  },
  routes: [
    {
      path: '/',
      redirect: '/home', // Chuyển hướng từ "/" đến "/home"
    },
    {
      // name: 'Home',
      path: '/home',
      component: './Home',
    },
    {
      path: '/login',
      component: './Login',
    },
    {
      path: '/registry',
      component: './Registry',
    },
    {
      // name: 'Task',
      path: '/tasks/:id',
      component: './Task',
    },
    {
      path: '/task',
      component: './Task',
    }
  ],
  npmClient: 'npm',
});
