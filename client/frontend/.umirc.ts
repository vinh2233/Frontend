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
      redirect: '/login', 
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
    },
    {
      path: '/forgot-password',
      component: '@/pages/ForgotPassword',
    },
    {
      path: '/reset-password',
      component: '@/pages/ResetPassword',
    },
  ],
  npmClient: 'npm',
});
