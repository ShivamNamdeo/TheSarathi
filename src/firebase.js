import firebase from 'firebase'
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCIaHXVxDlmoPbX6_VJ4r3AvImS9nVduao",
  authDomain: "sarathiadmin.firebaseapp.com",
  databaseURL: "https://sarathiadmin.firebaseio.com",
  projectId: "sarathiadmin",
  storageBucket: "sarathiadmin.appspot.com",
  messagingSenderId: "730406314376",
  appId: "1:730406314376:web:6b709efe0e3c5aff93da3d",
  measurementId: "G-7QC1TG2R9S"
};


firebase.initializeApp(firebaseConfig);

export default firebase;