import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTkNB4WYOUqCfHkT2FY4AOatv-x3mkE58",
    authDomain: "url-shortener-b400c.firebaseapp.com",
    projectId: "url-shortener-b400c",
    storageBucket: "url-shortener-b400c.appspot.com",
    messagingSenderId: "983507394894",
    appId: "1:983507394894:web:cc34214ff324e38995fe1f",
    measurementId: "G-DXENRR6KYC"
  };

  const app = firebase.initializeApp(firebaseConfig);
  export const db = app.firestore();