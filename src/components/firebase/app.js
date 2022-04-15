import firebase from "firebase/compat/app"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyD0FMPJPG3RdbrguFDh3AswgK4kFRLCO5o",
    authDomain: "contact-app-38b4d.firebaseapp.com",
    projectId: "contact-app-38b4d",
    storageBucket: "contact-app-38b4d.appspot.com",
    messagingSenderId: "386043280415",
    appId: "1:386043280415:web:9f531f71caf603be02292a",
    measurementId: "G-9S4M10D181"
  }; 

firebase.initializeApp(firebaseConfig) 

const storage = firebase.storage()

export { storage, firebase as default }