function myFunction() {
    var menuDropdown = document.getElementById("main-menu-dropdown");
    menuDropdown.classList.toggle("show");
    
    var hamburgerMask = document.querySelector('.hamburger-menu-mask');
    hamburgerMask.classList.toggle("show");
}

window.addEventListener("click", function(event) {
    var hamburgerButton = document.querySelector('.hamburger-button');
    if (!event.target.matches('.hamburger-button') && !hamburgerButton.contains(event.target)) {
        var menuDropdown = document.getElementById("main-menu-dropdown");
        menuDropdown.classList.remove("show");
        
        var hamburgerMask = document.querySelector('.hamburger-menu-mask');
        hamburgerMask.classList.remove("show");
    }
});