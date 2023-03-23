// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {initializeApp} from 'firebaseapp'
import{
    getFirestore, collection, getDocs
} from 'firebase/firestore'

import {
    getAuth
} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCKMet07c1tR_6UPh7VvMatTAdYVO_927Y",
    authDomain: "fireship-demos-b4b3c.firebaseapp.com",
    projectId: "fireship-demos-b4b3c",
    storageBucket: "fireship-demos-b4b3c.appspot.com",
    messagingSenderId: "872006790868",
    appId: "1:872006790868:web:288c739d3f106d3f0f1541",
    measurementId: "G-F2T8KTJ3PX"
  }

//   //initialise firebae app
//   initializeApp(firebaseConfig)

//   //init services
//   const db =getFirestore()

//   //collection ref
//   const colRef = collection(db, 'books')

//   //collection data
//   getDocs(colRef)
//   .then( (snapshot) =>{
//     console.log(snapshot.docs)
//   }

//   )

// const auth= firebase.auth();

// const whenSignedIn= document.getElementById('whenSignedIn');
// const whenSignedOut= document.getElementById('whenSignedOut');

// const signInBtn= document.getElementById('signInBtn');
// const signOutBtn= document.getElementById('signOutBtn');

// const provider = new firebase.auth.GoogleAuthProvider();

// signInBtn.onclick= () => auth.signInWithPopup(provider);

// signOutBtn.onclick= () => auth.signOut();

const auth = getAuth();