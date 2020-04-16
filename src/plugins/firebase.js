import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCrIycgBjpR7UyWZWBVoOEj92T4cZDeHwo",
    authDomain: "apple-shogi.firebaseapp.com",
    databaseURL: "https://apple-shogi.firebaseio.com",
    projectId: "apple-shogi",
    storageBucket: "apple-shogi.appspot.com",
    messagingSenderId: "719057803574",
    appId: "1:719057803574:web:70da2f5a371259933bfb97",
    measurementId: "G-RT84RE70CQ"
};

export default {
  init() {
    firebase.initializeApp(config);
    firebase.analytics();
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  },
  signInAnonymously () {
    return firebase.auth().signInAnonymously()
  },
  logout() {
    firebase.auth().signOut();
  }
};