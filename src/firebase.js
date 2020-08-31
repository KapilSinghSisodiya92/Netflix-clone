import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCVdcH-gF3nHE0Nm7uLaCgUDyQY7cm1O4U",
  authDomain: "netflix-clone-kapil.firebaseapp.com",
  databaseURL: "https://netflix-clone-kapil.firebaseio.com",
  projectId: "netflix-clone-kapil",
  storageBucket: "netflix-clone-kapil.appspot.com",
  messagingSenderId: "1067274451983",
  appId: "1:1067274451983:web:f95b390201e0493d19f77a",
  measurementId: "G-1Z5YBBY25W"
};
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth= firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;