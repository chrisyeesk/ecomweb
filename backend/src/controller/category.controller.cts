const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// 创建类别
router.post('/', async (req, res) => {
  try {
    const { name, description } = req.body;

    // 输入验证
    if (!name || !description) {
      return res.status(400).json({ error: 'Name and description are required' });
    }

    // 插入数据库
    const category = await prisma.category.create({
      data: {
        name,
        description,
      },
    });

    res.status(201).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// 获取所有类别
router.get('/', async (req, res) => {
  try {
    const categories = await prisma.category.findMany();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
