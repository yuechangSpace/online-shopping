import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDcpU3R1TTsjsDFiABokFu59J_t2CURbZ0",
    authDomain: "online-shopping-reactjs.firebaseapp.com",
    databaseURL: "https://online-shopping-reactjs.firebaseio.com",
    projectId: "online-shopping-reactjs",
    storageBucket: "online-shopping-reactjs.appspot.com",
    messagingSenderId: "536955974301",
    appId: "1:536955974301:web:86b4c66e190f94b8385a74"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const store = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

