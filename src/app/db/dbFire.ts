import firebase from 'firebase'
import 'firebase/firebase-firestore'

let firebaseConfig = {
    apiKey: "AIzaSyA0h3rdhNDIyKM1VRCt8t2pb7u3IVdienc",
    authDomain: "sitecv-f68e8.firebaseapp.com",
    databaseURL: "https://sitecv-f68e8.firebaseio.com",
    projectId: "sitecv-f68e8",
    storageBucket: "sitecv-f68e8.appspot.com",
    messagingSenderId: "788638931243",
    appId: "1:788638931243:web:6fd1daec8d240cf2ae0d6e"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = fire.firestore()

export { db, fire }