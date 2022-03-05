import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBXjs9lFPfaTP1OBIZQnNvskitxm-qWFt0",
    authDomain: "twitter-clone-ca1e6.firebaseapp.com",
    projectId: "twitter-clone-ca1e6",
    storageBucket: "twitter-clone-ca1e6.appspot.com",
    messagingSenderId: "619604615857",
    appId: "1:619604615857:web:9124949c70d59f6f547890",
    measurementId: "G-TE2HZNTXWV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;