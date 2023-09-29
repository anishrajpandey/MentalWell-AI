const { initializeApp } = require('firebase/app');
const { getFirestore, collection } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyD8NMZ0-8AuuhsSCA7Hb_3WEMagUrLcEwo",
  authDomain: "mentalwellai.firebaseapp.com",
  projectId: "mentalwellai",
  storageBucket: "mentalwellai.appspot.com",
  messagingSenderId: "937546937064",
  appId: "1:937546937064:web:9e0414812f6bc858944f5d",
  measurementId: "G-4XSCX60RHE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const User = collection(db, 'Users');
module.exports = User;
