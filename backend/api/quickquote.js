import express from 'express';
import connectDB from './db.js';
import QuickQuote from '../models/QuickQuote.js';

const router = express.Router();

router.use(async (req, res, next) => {
  await connectDB();
  next();
});

router.post('/', async (req, res) => {
  try {
    const newQuickQuote = new QuickQuote(req.body);
    const savedQuickQuote = await newQuickQuote.save();
    res.status(201).json({ success: true, data: savedQuickQuote });
  } catch (error) {
    console.error('Error saving quick quote:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const quickQuotes = await QuickQuote.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: quickQuotes.length, data: quickQuotes });
  } catch (error) {
    console.error('Error fetching quick quotes:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

export default router;