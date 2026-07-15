import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const hero = document.querySelector(".hero");

hero.innerHTML = "<h2>⚽ Günün Oyunları</h2>";

async function loadGames() {

  const querySnapshot = await getDocs(collection(db, "games"));

  querySnapshot.forEach((doc) => {

    const game = doc.data();

    hero.innerHTML += `
      <div class="card">

        <h3>${game.match}</h3>

        <p><strong>Tarix:</strong> ${game.date}</p>

        <p><strong>Əmsal:</strong> ${game.odds}</p>

        <p><strong>Qiymət:</strong> ${game.price}</p>

        <p><strong>Təxmin:</strong> 🔒 Gizlidir</p>

        <button class="paypal">PayPal ilə al</button>

        <button class="stripe">Stripe ilə al</button>

      </div>
    `;

  });

}

loadGames();
