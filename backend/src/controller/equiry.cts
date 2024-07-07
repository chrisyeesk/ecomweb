const enquiryRouter = require('express').Router();
const prisma = require('../prisma.cjs');

enquiryRouter.post('/', async (req, res) => {
  try {
    const { name, email, orderId, message } = req.body;

    // input validation
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: 'Name, email, and message are required' });
    }

    // insert into database
    const savedEnquiry = await prisma.enquiry.create({
      data: {
        name,
        email,
        orderId: orderId || '',
        message,
      },
    });

    res.status(201).json(savedEnquiry);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occured' });
  }
});

module.exports = enquiryRouter;
