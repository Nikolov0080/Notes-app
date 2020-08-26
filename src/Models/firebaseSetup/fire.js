import firebase from 'firebase'

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyBdwNBNN6o55vOg3KZHl3Fi4ha9mT08fSI',
    authDomain: "database-33c8a.firebaseapp.com",
    projectId: "database-33c8a"
  });
  
  export default firebase.firestore();