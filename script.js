fetch("games/today.json")
  .then(response => response.json())
  .then(data => {

    const hero = document.querySelector(".hero");

    hero.innerHTML = "<h2>⚽ Günün Oyunları</h2>";

    data.games.forEach(game => {

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

  });
