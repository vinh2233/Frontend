const users = [
    {
      id: '1',
      username: 'admin',
      password: '123456',
    },
  ];
  
  export default {
    // API đăng nhập
    'POST /api/login': (req: any, res: any) => {
      const { username, password } = req.body;
      const user = users.find((u) => u.username === username && u.password === password);
  
      if (user) {
        res.json({
          success: true,
          message: 'Login successful',
          data: {
            id: user.id,
            username: user.username,
            token: 'mock-token-123456', // Token giả lập
          },
        });
      } else {
        res.status(401).json({
          success: false,
          message: 'Invalid username or password',
        });
      }
    },
  
    // API đăng ký
    'POST /api/register': (req: any, res: any) => {
      const { username, password } = req.body;
      const existingUser = users.find((u) => u.username === username);
  
      if (existingUser) {
        res.status(400).json({
          success: false,
          message: 'Username already exists',
        });
      } else {
        const newUser = {
          id: (users.length + 1).toString(),
          username,
          password,
        };
        users.push(newUser);
  
        res.json({
          success: true,
          message: 'Registration successful',
          data: {
            id: newUser.id,
            username: newUser.username,
          },
        });
      }
    },
    //đăng xuất 
    'POST /api/logout': (req: any, res: any) => {
    res.json({
      success: true,
      message: 'Logout successful',
    });
  },

  };