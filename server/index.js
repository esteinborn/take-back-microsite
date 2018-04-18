const express = require('express');
const basicAuth = require('express-basic-auth');
const path = require('path');
const bodyParser = require('body-parser')
const firebaseApi = require('./firebase');

const app = express();
const port = process.env.PORT || 5000;
const HOST = '0.0.0.0';

app.use(basicAuth({
  users: { 'oag-admin': 'work42matters' },
  challenge: true,
}));

// Middleware
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// API routes go here
app.post('/api/add_reminder', (req, res) => {
  try {
    firebaseApi.handleAddReminder(req.body);
    res.status(200).send('ok');
  } catch (e) {
    res.status(500).send('Error adding reminder');
  }
});

// Default sends index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, HOST);
console.log(`Listening on http://${HOST}:${port}`);
