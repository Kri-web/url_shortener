import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

import { fileURLToPath } from 'url';
import connectDB from './config/db.config.js';
import urlRoutes from './api/index.js';

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});
app.use('/', urlRoutes);
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
