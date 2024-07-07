const express = require('express');
const { PrismaClient } = require('@prisma/client');
const Decimal = require('decimal.js');  // 引入 Decimal.js

const prisma = new PrismaClient();
const router = express.Router();

// 创建产品
router.post('/', async (req, res) => {
  try {
    const { categoryId, name, price, description, stockQuantity, imageUrl, brand, color } = req.body;

    // 输入验证
    if (!name || !price || !stockQuantity) {
      return res.status(400).json({ error: 'Name, price, and stock quantity are required' });
    }

    // 插入数据库
    const product = await prisma.product.create({
      data: {
        categoryId,
        name,
        price: new Decimal(price),  // 确保正确处理 Decimal 类型
        description,
        stockQuantity,
        imageUrl,
        brand,
        color,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// 获取所有产品
router.get('/', async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// 获取单个产品
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// 更新产品
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryId, name, price, description, stockQuantity, imageUrl, brand, color } = req.body;

    // 输入验证
    if (!name || !price || !stockQuantity) {
      return res.status(400).json({ error: 'Name, price, and stock quantity are required' });
    }

    const product = await prisma.product.update({
      where: { id: parseInt(id) },
      data: {
        categoryId,
        name,
        price: new Decimal(price),  // 确保正确处理 Decimal 类型
        description,
        stockQuantity,
        imageUrl,
        brand,
        color,
      },
    });

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// 删除产品
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({
      where: { id: parseInt(id) },
    });

    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
