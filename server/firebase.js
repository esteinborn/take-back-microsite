const firebase = require('firebase');

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || 'AIzaSyAGqSVpUm81B-KYs-cyKYq8XnLTbZ8HHJw',
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN || 'takebackmap.firebaseapp.com',
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL || 'https://takebackmap.firebaseio.com',
  projectId: process.env.REACT_APP_FIREBASE_ID || 'takebackmap',
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET || 'takebackmap.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID || '257650412128',
};

firebase.initializeApp(config);

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
