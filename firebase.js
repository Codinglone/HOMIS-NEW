import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhDWkuwU-QqzPZ7Lnr9Xcaa0qJmosBwFE",
  authDomain: "homis-2a06a.firebaseapp.com",
  projectId: "homis-2a06a",
  storageBucket: "homis-2a06a.appspot.com",
  messagingSenderId: "196038999754",
  appId: "1:196038999754:web:939399010305f7eabc3e33",
  measurementId: "G-C7ZQ7R7S5Z"
};

export const app = initializeApp(firebaseConfig);