import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3luysLX-Y_ZIGB5OibF_Z6rS-2d3iZNE",

  authDomain: "fakestore-67680.firebaseapp.com",

  projectId: "fakestore-67680",

  storageBucket: "fakestore-67680.firebasestorage.app",

  messagingSenderId: "513554559501",

  appId: "1:513554559501:web:0f71465a8d60264adc9b44",
};

//initialisation de l'application firebase
const app = initializeApp(firebaseConfig);
// ici on va chercher le service d'authentification
const auth = getAuth(app);
export { auth };
