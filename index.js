const express = require('express');
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Web App</title>
        <style>
          body { font-family: Arial; text-align: center; margin-top: 50px; }
          h1 { color: #333; }
        </style>
      </head>
      <body>
        <h1>Welcome to My Web App!</h1>
        <p>This is the homepage.</p>
      </body>
    </html>
  `);
});

// About route
app.get('/about', (req, res) => {
  res.send(`
    <html>
      <head><title>About</title></head>
      <body>
        <h1>About Page</h1>
        <p>This is the about page.</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});




