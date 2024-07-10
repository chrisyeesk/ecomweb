require('dotenv').config();

const express = require('express');
const { PrismaClient } = require('@prisma/client');
const enquiryRouter = require('./controller/equiry.cjs');
const axios = require('axios');
const prisma = new PrismaClient();
const app = express();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Middleware to validate the Auth0 opaque token
const validateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }
  const token = authHeader.split(' ')[1];

  try {
    // Call the Auth0 /userinfo endpoint to validate the token
    const response = await axios.get(`https://dev-3rngwkcjaq0qv0m6.us.auth0.com/userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    // Attach the user profile to the request object
    req.user = response.data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// This route needs authentication
app.get('/private', validateToken, function(req, res) {
  console.log(req)
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});

app.get('/products', async (req, res) => {
  try {
    const products = await stripe.products.list({
      limit: 100,
    });
    res.status(200).json({ message: products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.use('/enquiry', enquiryRouter);

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
