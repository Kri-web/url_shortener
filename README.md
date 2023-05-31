# URL Shortener

This is a simple URL shortener application built with Node.js, Express, MongoDB,Joi, EJS, and the nanoid package.

## Features

- Shorten long URLs to shorter, more manageable URLs.
- Redirect shortened URLs to their original long URLs.
- Store URLs in a MongoDB database for persistence.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- EJS (Embedded JavaScript) for views/templates
- nanoid for generating unique short URL IDs
- joi


## Prerequisites

Before running this application, make sure you have the following installed:

Node.js: https://nodejs.org
MongoDB: https://www.mongodb.com

## Getting Started

1. Clone the repository:

    git clone https://github.com/Kri-web/url_shortener.git

2. Install the dependencies:
    npm install
    
3. Create a .env file in the project root directory and add the following:
    MONGODB_URI=<your-mongodb-connection-uri>
    PORT=8082

Replace <your-mongodb-connection-uri> with your MongoDB connection URI.

4. Start the application:
    npm start

5. Open your browser and visit http://localhost:8082 to access the URL Shortener application.

## How it Works

The URL Shortener application consists of the following components:

1. server.js: The main entry point of the application. It sets up the Express server, connects to       MongoDB, and configures the routes.
2. config/db.config.js: Connect to the MongoDB database using the provided MONGODB_URI from the environment variables
3. api/controller.js: Contains the controller functions for handling URL shortening and redirection.
4. api/service.js: Implements the  logic for creating short URLs and retrieving the original URLs.
5. api/index.js: Defines the application routes.
6. views/index.ejs: The EJS template for the homepage.
7. middlewares/validation.js: Contains the validation middleware using Joi.