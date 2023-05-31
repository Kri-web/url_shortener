import { nanoid } from 'nanoid';
import Url from '../model/Urls.js';

// Function to create a short URL
const createShortUrl = async (originalUrl) => {
    // Check if the URL already exists in the database
    const existingUrl = await Url.findOne({ originalUrl });

    if (existingUrl) {
        // If the URL already exists, return the corresponding short URL
        return existingUrl.shortUrl;
    }

    // Generate a unique short ID using nanoid
    const shortUrl = nanoid(8);

    // Create a new Url document with the original and short URL
    const newUrl = new Url({ originalUrl, shortUrl });

    // Save the newUrl document to the database
    await newUrl.save();

    // Return the short URL
    return shortUrl;
};

// Function to get the original URL based on the short URL
const getOriginalUrl = async (shortUrl) => {
    // Find the Url document with the given short URL
    const url = await Url.findOne({ shortUrl });

    // If the Url document exists, return the original URL
    // Otherwise, return null
    return url ? url.originalUrl : null;
};

export { createShortUrl, getOriginalUrl };
