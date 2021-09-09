import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCDA7y6MRoxy2pGBu0CF3bLbOZym4rWrns",
    authDomain: "fotobook-fan.firebaseapp.com",
    projectId: "fotobook-fan",
    storageBucket: "fotobook-fan.appspot.com",
    messagingSenderId: "59567416196",
    appId: "1:59567416196:web:1d218dc04683a19b19b3d1"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const firebaseFirestore = firebase.apps.length ? firebase.firestore() : null;
const firebaseAuth = firebase.apps.length ? firebase.auth() : null;
const firebaseStorage = firebase.apps.length ? firebase.storage() : null;




export {
    firebaseFirestore,
    firebaseAuth,
    firebaseStorage
}