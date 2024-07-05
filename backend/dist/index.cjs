"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.get('/testsd', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ message: 'API working!' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
app.get('/bigbig', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ message: 'API working!' });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
//get all users
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
//get user by id
app.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.user.findUnique({
            where: {
                id: parseInt(req.params.id),
            },
        });
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
//create user
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.user.create({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            address: req.body.address,
        });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
//update user
app.put('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield prisma.user.update({
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
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
//get all products
app.get('/products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield prisma.Product.findMany();
        res.status(200).json({ message: products });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}));
//start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
