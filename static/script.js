
var modal = document.getElementById('login','register');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}