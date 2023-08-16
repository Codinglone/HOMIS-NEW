import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBhDWkuwU-QqzPZ7Lnr9Xcaa0qJmosBwFE",
  authDomain: "homis-2a06a.firebaseapp.com",
  projectId: "homis-2a06a",
  storageBucket: "homis-2a06a.appspot.com",
  messagingSenderId: "196038999754",
  appId: "1:196038999754:web:939399010305f7eabc3e33",
  measurementId: "G-C7ZQ7R7S5Z",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export async function getOrders() {
  const ordersCollection = collection(db, "orders");
  const ordersSnapshot = await getDocs(ordersCollection);
  const ordersList = ordersSnapshot.docs.map((doc) => doc.data());
  return ordersList;
}
