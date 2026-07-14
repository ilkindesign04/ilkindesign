fetch("games/today.json")
.then(response => response.json())
.then(data => {

document.getElementById("match").innerText = data.match;
document.getElementById("date").innerText = data.date;
document.getElementById("odds").innerText = data.odds;

});
