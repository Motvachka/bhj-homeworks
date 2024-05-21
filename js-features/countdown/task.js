const timerDecrease = function() {
    const timerCount = document.getElementById('timer');
    if (timerCount.textContent > 0) {
        timerCount.textContent -= 1;
    } else {
        clearInterval(intervalID);
        window.alert('Вы победили в конкурсе!');
    }
}

const intervalID = setInterval(timerDecrease, 1000);

