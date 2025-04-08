import mongoose from 'mongoose';

const EnquirySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  locationType: { type: String, required: true, enum: ['local', 'international'], default: 'local' },
  baseLocation: { type: String, required: true },
  destination: { type: String, required: true },
  movingDate: { type: Date, required: true },
  description: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now }
});

const Enquiry = mongoose.model('Enquiry', EnquirySchema);
export default Enquiry;