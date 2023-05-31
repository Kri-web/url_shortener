import { createShortUrl, getOriginalUrl } from './service.js';
import { failedResponse, goodResponse } from '../helper/response.js';

// Controller function for shortening the URL
const shortenUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;

        // Call the createShortUrl function from the service
        const shortUrl = await createShortUrl(originalUrl);

        // Return the short URL as JSON response
        res.json(goodResponse({ shortUrl }, 'Successfull'));
    } catch (error) {
        console.error('Error creating short URL:', error);

        // Return the error message as JSON response
        res.json(failedResponse({ error: 'Error creating short URL' }));
    }
};

// Controller function for redirecting the short URL
const redirectUrl = async (req, res) => {
    try {
        const { shortUrl } = req.params;

        // Call the getOriginalUrl function from the service
        const originalUrl = await getOriginalUrl(shortUrl);

        if (originalUrl) {
            // Redirect to the original URL
            res.redirect(originalUrl);
        } else {
            // Render the index view with the "URL not found" error message
            res.render('index', { error: 'URL not found', shortUrl: null });
        }
    } catch (error) {
        // Render the index view with the error message and no short URL
        res.render('index', { error: 'Error redirecting URL', shortUrl: null });
    }
};

export { shortenUrl, redirectUrl };
