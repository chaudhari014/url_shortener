# URL Shortener Project

This project is a simple URL shortener service built with Node.js, Express.js, and MongoDB. Users can submit lengthy URLs to be transformed into shorter versions. The service provides user registration, login, and secure access using JSON Web Tokens (JWT).

## Installation

Before running the project, make sure to install the required dependencies:

1. Clone the repository:

   ```bash
   git clone https://github.com/chaudhari014/url_shortener.git
   ```


2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run server
   ```

4. Access Code Converter in your browser at `http://localhost:8060`.

# Registration

To register, provide an email and password.

# Login

After registration, use your email and password to log in. The server will respond with a JWT (JSON Web Token). Include this token in the headers of your requests for secure access.

# URL Shortening

#Shorten a URL

Send a `POST` request to `/shorten` with the original URL in the request body. The server will generate a short URL for you.

# Retrieve Original URL

To retrieve the original URL, send a `GET` request to `/:shortUrl`. Replace :shortUrl with the short URL you received when shortening.


