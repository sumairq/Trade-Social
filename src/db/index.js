// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDtfodkEzZRdXzrXoDnqRbJCS-OefyS9C0",
	authDomain: "trade-social-9f9b3.firebaseapp.com",
	projectId: "trade-social-9f9b3",
	storageBucket: "trade-social-9f9b3.appspot.com",
	messagingSenderId: "177202875788",
	appId: "1:177202875788:web:c71defa2ab36636da0daa9",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
