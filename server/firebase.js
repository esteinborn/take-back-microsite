const firebase = require('firebase-admin');

const DatabaseURL = process.env.FIREBASE_DB_URL;

var serviceAccount = require("./serviceAccountKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: DatabaseURL
});

const emailDatabase = firebase.database().ref('emailReminders');
const textDatabase = firebase.database().ref('phoneReminders');

const handleAddReminder = ({ reminder, type }) => {
  if (type === 'email') {
    emailDatabase.push(reminder);
  } else {
    textDatabase.push(reminder);
  }
};

module.exports = { handleAddReminder };
