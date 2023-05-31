import express from 'express';
import { shortenUrl, redirectUrl } from './controller.js';
import { urlValidation } from './validator.js';

// Create a new router instance
const router = express.Router();

// Route for creating a short URL
router.post('/shorten', urlValidation, shortenUrl);

// Route for redirecting the short URL to the original URL
router.get('/:shortUrl', redirectUrl);

export default router;
