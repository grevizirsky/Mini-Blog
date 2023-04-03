import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD-fTDjzWL9GViAwVg3v3Y8pp1nZXVDEM",
  authDomain: "miniblog-9246c.firebaseapp.com",
  projectId: "miniblog-9246c",
  storageBucket: "miniblog-9246c.appspot.com",
  messagingSenderId: "64736135626",
  appId: "1:64736135626:web:a73500c57dbac57ca02733"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }