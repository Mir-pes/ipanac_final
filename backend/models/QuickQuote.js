import mongoose from 'mongoose';

const QuickQuoteSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  contact: { type: String, required: true, trim: true },
  items: { type: [String], required: true },
  locationType: { type: String, required: true, enum: ['local', 'international'], default: 'local' },
  baseLocation: { type: String, required: true },
  destination: { type: String, required: true },
  movingDate: { type: Date, required: true },
  description: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now }
});

const QuickQuote = mongoose.model('QuickQuote', QuickQuoteSchema);
export default QuickQuote;