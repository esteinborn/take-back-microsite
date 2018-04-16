const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const HOST = '0.0.0.0';

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// API routes go here
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, HOST);
console.log(`Listening on http://${HOST}:${port}`);
