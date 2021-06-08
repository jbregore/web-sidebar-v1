import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZG6k974DcwJ3T9iyDVREKwC806T79J7o",
  authDomain: "r4-react-js.firebaseapp.com",
  projectId: "r4-react-js",
  storageBucket: "r4-react-js.appspot.com",
  messagingSenderId: "525488915289",
  appId: "1:525488915289:web:8ad36d1cb6ce22af784248",
  measurementId: "G-W8PPMLWLLH",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;