import express from 'express';
import dotenv from 'dotenv';
import connect from './config/db.js';

import taskRoutes from './routes/taskRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

connect();

//Route
app.use('/api', taskRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });