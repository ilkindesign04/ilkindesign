import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmLPZ6I5r3SsgWqREe8Pay7PjJGcDjO5A",
  authDomain: "football-vip-predictions.firebaseapp.com",
  projectId: "football-vip-predictions",
  storageBucket: "football-vip-predictions.firebasestorage.app",
  messagingSenderId: "744176038829",
  appId: "1:744176038829:web:e88224a52db38084eda724"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("registerBtn").addEventListener("click", async () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {

    await createUserWithEmailAndPassword(auth, email, password);

    alert("Qeydiyyat uğurla tamamlandı.");

  } catch (error) {

    alert(error.message);

  }

});

document.getElementById("loginBtn").addEventListener("click", async () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {

    await signInWithEmailAndPassword(auth, email, password);

    window.location.href = "admin.html";

  } catch (error) {

    alert("Email və ya şifrə yanlışdır.");

  }

});
