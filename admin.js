import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", async () => {

  const match = document.getElementById("match").value;
  const date = document.getElementById("date").value;
  const odds = document.getElementById("odds").value;
  const price = document.getElementById("price").value;

  try {
    await addDoc(collection(db, "games"), {
      match,
      date,
      odds,
      price
    });

    alert("Oyun uğurla əlavə edildi!");

  } catch (error) {
    alert("Xəta baş verdi!");
    console.log(error);
  }

});
