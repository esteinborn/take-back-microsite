const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const HOST = '0.0.0.0';
const firebaseApi = require('./firebase');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// API routes go here
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/add_reminder', (req, res) => {
  try {
    firebaseApi.handleAddReminder(req.body);
    res.status(200).send('ok');
  } catch (e) {
    res.status(500).send('Error adding reminder');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, HOST);
console.log(`Listening on http://${HOST}:${port}`);
