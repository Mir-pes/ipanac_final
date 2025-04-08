import express from 'express';
import connectDB from './db.js';
import Contact from '../models/Contact.js';

const router = express.Router();

router.use(async (req, res, next) => {
  await connectDB();
  next();
});

router.post('/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json({ success: true, data: savedContact });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

router.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

export default router;