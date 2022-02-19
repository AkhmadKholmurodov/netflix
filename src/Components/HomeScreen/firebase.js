// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
// import 'firebase/compat/auth';
// import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABz5htlRi8wm4716ZPb9kPRYc3MN8yUdc",
  authDomain: "netflixapp-3eef6.firebaseapp.com",
  projectId: "netflixapp-3eef6",
  storageBucket: "netflixapp-3eef6.appspot.com",
  messagingSenderId: "758926431514",
  appId: "1:758926431514:web:5b7af3f65b2e7e739648a3"
};


// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;

 
