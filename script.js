function goToDificultad() {
    window.location.href = "dificultad.html";
}

function startGame(clicks, time) {
    localStorage.setItem("dificultad", JSON.stringify({ clicks, time }));
    window.location.href = "juego.html";
}

function incrementScore() {
    var score = parseInt(localStorage.getItem("score")) || 0;
    score++;
    localStorage.setItem("score", score);
    document.getElementById("score").innerText = score + " clics";
}
