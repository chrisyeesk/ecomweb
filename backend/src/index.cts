const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();
const app = express();
const SECRET_KEY = 'roro12138';  // 更换为你的实际密钥

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Admin signup
app.post('/admin/signup', async (req, res) => {
  console.log("Route /admin/signup called");
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await prisma.admin.create({
      data: { username, password: hashedPassword }
    });
    res.status(201).json(admin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Admin signin
app.post('/admin/signin', async (req, res) => {
  console.log("Route /admin/signin called");
  const { username, password } = req.body;
  try {
    const admin = await prisma.admin.findUnique({ where: { username } });
    if (!admin) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const isValid = await bcrypt.compare(password, admin.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ adminId: admin.id }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// Middleware to protect routes
const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.adminId = decoded.adminId;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

// Protected route example
app.get('/admin/me', authenticate, (req, res) => {
  console.log("Route /admin/me called");
  res.status(200).json({ message: 'You are authenticated', adminId: req.adminId });
});


app.get('/test', async (req, res) => {
  console.log("Route /test called");
  try {
    res.status(200).json({ message: 'API working!' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get all users
app.get('/users', async (req, res) => {
  console.log("Route /users called");
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get user by id
app.get('/users/:id', async (req, res) => {
  console.log("Route /users/:id called");
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
    res.status(200).json({ message: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
