import express from 'express';
import connectDB from './db.js';
import Contact from '../models/Contact.js';
import Enquiry from '../models/Enquiry.js';
import QuickQuote from '../models/QuickQuote.js';

const app = express();

app.use(express.json());
app.use(async (req, res, next) => {
  await connectDB();
  next();
});

// Contact Routes
app.post('/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json({ success: true, data: savedContact });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

app.get('/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// Enquiry Routes
app.post('/enquiry', async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    const savedEnquiry = await newEnquiry.save();
    res.status(201).json({ success: true, data: savedEnquiry });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

app.get('/enquiries', async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// QuickQuote Routes
app.post('/quickquote', async (req, res) => {
  try {
    const newQuickQuote = new QuickQuote(req.body);
    const savedQuickQuote = await newQuickQuote.save();
    res.status(201).json({ success: true, data: savedQuickQuote });
  } catch (error) {
    console.error('Error saving quick quote:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

app.get('/quickquote', async (req, res) => {
  try {
    const quickQuotes = await QuickQuote.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: quickQuotes.length, data: quickQuotes });
  } catch (error) {
    console.error('Error fetching quick quotes:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

export default app;
