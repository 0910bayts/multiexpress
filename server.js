const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve CSS and other static files
app.use(express.static(__dirname));

// Home
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// About
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Contact
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Blog Page (HTML page)
app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog.html'));
});

// API Route for JSON data
app.get('/api/posts', (req, res) => {
  const filePath = path.join(__dirname, 'post.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: 'Failed to read posts' });
    }

    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
