import firebase from 'firebase';

// firebase auth
const config = {
    apiKey: "AIzaSyDBZ4zrtteconnOF7wOh9ESDmCrvgwTQfk",
    authDomain: "classmates-forum.firebaseapp.com",
    databaseURL: "https://classmates-forum.firebaseio.com",
    projectId: "classmates-forum",
    storageBucket: "classmates-forum.appspot.com",
    messagingSenderId: "424840360342"
};

export default function initialize() {
    return firebase.initializeApp(config)
}