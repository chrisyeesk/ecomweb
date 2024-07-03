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
const enquiryRouter = require('express').Router();
const prisma = require('../prisma.cjs');
enquiryRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).json({ message: "working" });
}));
enquiryRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, orderId, message } = req.body;
        // input validation
        if (!name || !email || !message) {
            return res
                .status(400)
                .json({ error: 'Name, email, and message are required' });
        }
        // insert into database
        const savedEnquiry = yield prisma.enquiry.create({
            data: {
                name,
                email,
                orderId: orderId || '',
                message,
            },
        });
        res.status(201).json(savedEnquiry);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occured' });
    }
}));
module.exports = enquiryRouter;
