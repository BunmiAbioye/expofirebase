import firebase from 'firebase'
import '@firebase/auth';
import '@firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBVFMNl-tbQabyrZ-YmFGhevgOz_2peaW8",
    authDomain: "prog8110-d1639.firebaseapp.com",
    databaseURL: "https://prog8110-d1639-default-rtdb.firebaseio.com",
    projectId: "prog8110-d1639",
    storageBucket: "prog8110-d1639.appspot.com",
    messagingSenderId: "1006270361789",
    appId: "1:1006270361789:web:37b1f2eed6f818e1d0c7d4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} 
export { firebase };