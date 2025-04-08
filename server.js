import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './api/db.js';
import contactRoutes from './api/contact.js';
import enquiryRoutes from './api/enquiry.js';
import quickquoteRoutes from './api/quickquote.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api', contactRoutes);
app.use('/api', enquiryRoutes);
app.use('/api/quickquote', quickquoteRoutes);

app.get('/', (req, res) => res.send('IPANAC API running'));

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});