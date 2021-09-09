import Constants from "expo-constants";
import * as FirebaseCore from "expo-firebase-core";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = FirebaseCore.DEFAULT_WEB_APP_OPTIONS;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
    if (__DEV__) {
        console.log("Switching to local Firebase instance...");
        const origin =
            Constants.manifest.debuggerHost?.split(":").shift() || "localhost";

        firebase.firestore().useEmulator(origin, 8080);
        // firebase.storage().useEmulator(origin, 9199);
    }
}

const firebaseFirestore = firebase.apps.length ? firebase.firestore() : null;




export {
    firebaseFirestore
}