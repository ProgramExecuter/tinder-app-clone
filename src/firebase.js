import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyABaugpkMvnon2BNzPftZOqY8iLWAoxtL0",
    authDomain: "tider-clone-beb8a.firebaseapp.com",
    databaseURL: "https://tider-clone-beb8a.firebaseio.com",
    projectId: "tider-clone-beb8a",
    storageBucket: "tider-clone-beb8a.appspot.com",
    messagingSenderId: "880467269956",
    appId: "1:880467269956:web:281f44118693325d281f11",
    measurementId: "G-JJH1FDPP01"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;