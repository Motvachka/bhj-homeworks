const cookieImage = document.getElementById('cookie');
cookieImage.onclick = function() {
    const clicker = document.getElementById('clicker__counter');
    clicker.textContent = Number(clicker.textContent) + 1;
}
