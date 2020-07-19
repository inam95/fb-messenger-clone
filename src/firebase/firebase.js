import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyC2zJa98GPK-Uk4QlsxL4yMDZs8TvBW9GQ',
  authDomain: 'fb-messenger-clone-inam.firebaseapp.com',
  databaseURL: 'https://fb-messenger-clone-inam.firebaseio.com',
  projectId: 'fb-messenger-clone-inam',
  storageBucket: 'fb-messenger-clone-inam.appspot.com',
  messagingSenderId: '632618887927',
  appId: '1:632618887927:web:5221d74a0bd00b311501f2',
  measurementId: 'G-VGZ5MZCZ27'
});

const db = firebaseApp.firestore();

export default db;
