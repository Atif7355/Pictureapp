import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJhjmVtAyIlFUpg4neWTrjTPo8WK2Xufg",
  authDomain: "reactproject123-2d070.firebaseapp.com",
  databaseURL: "https://reactproject123-2d070-default-rtdb.firebaseio.com",
  projectId: "reactproject123-2d070",
  storageBucket: "reactproject123-2d070.appspot.com",
  messagingSenderId: "150188865889",
  appId: "1:150188865889:web:b23230d0cd8fe2902fad20",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
