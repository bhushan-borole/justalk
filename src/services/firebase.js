import firebase from 'firebase';

const config = {
  apiKey: "YOUR API KEY",
  authDomain: "justalk-43797.firebaseapp.com",
  projectId: "justalk-43797",
  storageBucket: "justalk-43797.appspot.com",
  messagingSenderId: "986737659328",
  appId: "1:986737659328:web:ca92b26f3916cf82d84c25",
  databaseURL: "https://justalk-43797-default-rtdb.firebaseio.com/"
}

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
