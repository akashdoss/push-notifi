import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
    apiKey: "AIzaSyBTl530cu5l1llwHwcZx_4OskfJhydWESw",
    authDomain: "push-notification-51dbb.firebaseapp.com",
    projectId: "push-notification-51dbb",
    storageBucket: "push-notification-51dbb.firebasestorage.app",
    messagingSenderId: "456492318409",
    appId: "1:456492318409:web:c9859842b4e8237cc45718",
    measurementId: "G-7WRHBCZRGJ"
  };
  


export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
