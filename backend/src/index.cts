const express = require('express');
const { PrismaClient } = require('@prisma/client');
const enquiryRouter = require('./controller/equiry.cts');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const prisma = new PrismaClient();
const app = express();

app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;  // 使用环境变量或默认密钥

// 中间件：验证JWT
const authenticateJWT = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use('/enquiry', enquiryRouter);

app.get('/testsw', async (req, res) => {
  try {
    res.status(200).json({ message: 'API working!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/bigbig', async (req, res) => {
  try {
    res.status(200).json({ message: 'API working!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 管理员注册
app.post('/admin/signup', async (req, res) => {
  const { email, password } = req.body;

  // Hash密码
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const admin = await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    res.json(admin);
  } catch (error) {
    res.status(400).json({ message: 'Error creating admin', error });
  }
});

// 管理员登录
app.post('/admin/signin', async (req, res) => {
  const { email, password } = req.body;

  const admin = await prisma.admin.findUnique({ where: { email } });
  if (!admin) return res.status(400).json({ message: 'Email not found' });

  const validPassword = await bcrypt.compare(password, admin.password);
  if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

  const token = jwt.sign({ id: admin.id }, JWT_SECRET, {
    expiresIn: '1h',
  });

  res.header('Authorization', `Bearer ${token}`).json({ message: 'Logged in successfully', token });
});

// 管理员登出
app.post('/admin/signout', authenticateJWT, (req, res) => {
  res.header('Authorization', '').json({ message: 'Logged out successfully' });
});


//get all users
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get user by id
app.get('/users/:id', async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//create user
app.post('/users', async (req, res) => {
  try {
    const user = await prisma.user.create({
      name: req.body.name,
      email: req.body.email,
      mobile: req.body.mobile,
      address: req.body.address,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update user
app.put('/users/:id', async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        address: req.body.address,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get all products
app.get('/products', async (req, res) => {
  try {
    const products = await prisma.Product.findMany();
    console.log('productsss', products);
    res.status(200).json({ message: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
