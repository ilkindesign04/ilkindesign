// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmLPZ6I5r3SsgWqREe8Pay7PjJGcDjO5A",
  authDomain: "football-vip-predictions.firebaseapp.com",
  projectId: "football-vip-predictions",
  storageBucket: "football-vip-predictions.firebasestorage.app",
  messagingSenderId: "744176038829",
  appId: "1:744176038829:web:e88224a52db38084eda724"
};

const app = initializeApp(firebaseConfig);

export { app };
