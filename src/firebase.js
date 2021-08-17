import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSTYzFFZTPe_eWrjprqukgJKBGYC8c7dQ",
  authDomain: "trelloclone01.firebaseapp.com",
  projectId: "trelloclone01",
  storageBucket: "trelloclone01.appspot.com",
  messagingSenderId: "358188859542",
  appId: "1:358188859542:web:cb7092a4a7a66c369c02b7",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export { db };
