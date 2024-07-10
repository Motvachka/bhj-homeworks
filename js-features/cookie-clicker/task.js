const cookieImage = document.getElementById('cookie');
cookieImage.onclick = function() {
    const clicker = document.getElementById('clicker__counter');
    clicker.textContent = Number(clicker.textContent) + 1;
    
    if (cookie.width === 200) {
        cookie.style.width = "220px";
      } else {
        cookie.style.width = "200px";
      }
}
