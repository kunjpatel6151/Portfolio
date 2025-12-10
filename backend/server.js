import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import adminRoutes from './routes/adminRoutes.js';
import { createDefaultAdmin } from './utils/createDefaultAdmin.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const startServer = async () => {
  try {
    // 1) CONNECT TO DB FIRST
    await connectDB();
    console.log('✓ DB READY');

    // 2) THEN create default admin
    await createDefaultAdmin();
    console.log('✓ Admin READY');

    // 3) START SERVER
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`✓ Server running on port ${PORT}`));
  } catch (err) {
    console.error('Startup Error:', err.message);
    process.exit(1);
  }
};

startServer();

// 4) ROUTES REGISTERED AFTER SERVER STARTS
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'Backend Running' });
});
