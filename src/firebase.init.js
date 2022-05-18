// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOP9mSwtMV_3-9advczSu3hx8uvZxT0q0",
    authDomain: "assignment10-2b76d.firebaseapp.com",
    projectId: "assignment10-2b76d",
    storageBucket: "assignment10-2b76d.appspot.com",
    messagingSenderId: "368514744164",
    appId: "1:368514744164:web:40fb9ea4f88d51c991c471"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;