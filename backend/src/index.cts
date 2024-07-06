const express = require('express');
const { PrismaClient } = require('@prisma/client');
const enquiryRouter = require('./controller/equiry.cts');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

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
