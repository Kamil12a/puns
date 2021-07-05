import firebase from "firebase";
import "@firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCfKzokaFAu35HXA1e6oyzrb7ziUOe4tC4",
  authDomain: "puns-8a3f2.firebaseapp.com",
  projectId: "puns-8a3f2",
  storageBucket: "puns-8a3f2.appspot.com",
  messagingSenderId: "786588377359",
  appId: "1:786588377359:web:559b892976864b00419e7a",
};

const fire = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default fire;
