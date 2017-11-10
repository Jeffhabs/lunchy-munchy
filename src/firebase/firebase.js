// connect to firebase database here
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDtoOuB9Sy2kHjmEkIOOEZ1AMpCpw7z0Zg",
    authDomain: "lunchy-munchy.firebaseapp.com",
    databaseURL: "https://lunchy-munchy.firebaseio.com",
    projectId: "lunchy-munchy",
    storageBucket: "lunchy-munchy.appspot.com",
    messagingSenderId: "531626289628"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };