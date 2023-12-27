import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfgWpHlpYdf3ASYrjNE8x6cnfe0QpS6VY",
  authDomain: "rn-auth-f5d77.firebaseapp.com",
  projectId: "rn-auth-f5d77",
  storageBucket: "rn-auth-f5d77.appspot.com",
  messagingSenderId: "845562578473",
  appId: "1:845562578473:web:1477fdbe4e345d54bbbe38",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export { auth };
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCfgWpHlpYdf3ASYrjNE8x6cnfe0QpS6VY",
//   authDomain: "rn-auth-f5d77.firebaseapp.com",
//   projectId: "rn-auth-f5d77",
//   storageBucket: "rn-auth-f5d77.appspot.com",
//   messagingSenderId: "845562578473",
//   appId: "1:845562578473:web:1477fdbe4e345d54bbbe38",
// };

// // Initialize Firebase
// export const FIREBASE_APP = initializeApp(firebaseConfig);

// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
