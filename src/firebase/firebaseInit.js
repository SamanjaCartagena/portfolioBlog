// Your web app's Firebase configuration
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAnA4qovaXckbkOKBkEtlTwhvO9Beh2maw",
  authDomain: "blog-665df.firebaseapp.com",
  projectId: "blog-665df",
  storageBucket: "blog-665df.appspot.com",
  messagingSenderId: "623867521421",
  appId: "1:623867521421:web:fa3a33e8a0523b6f84f5c4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};

export default firebaseApp.firestore();