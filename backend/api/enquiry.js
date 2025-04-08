import express from 'express';
import connectDB from './db.js';
import Enquiry from '../models/Enquiry.js';

const router = express.Router();

router.use(async (req, res, next) => {
  await connectDB();
  next();
});

router.post('/enquiry', async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    const savedEnquiry = await newEnquiry.save();
    res.status(201).json({ success: true, data: savedEnquiry });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

router.get('/enquiries', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

export default router;