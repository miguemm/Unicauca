let hamburgerBtn = document.getElementById("hamburgerBtn")
let crossBtn = document.getElementById("crossBtn")

hamburgerBtn.addEventListener("click", abrirMenuHamburguesa);
crossBtn.addEventListener("click", cerrarMenuHamburguesa);

function abrirMenuHamburguesa() {
    var hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.style.display = "block";

    document.body.style.overflow = 'hidden';

    window.setTimeout(function () {
        hamburgerMenu.style.opacity = 1;
        hamburgerMenu.style.transform = 'scale(1)';
    }, 0);

    hamburgerBtn.style.display = "none"
    crossBtn.style.display = "block"
}

function cerrarMenuHamburguesa() {
    var hamburgerMenu = document.getElementById("hamburger-menu");
    
    

    hamburgerMenu.style.opacity = 0;
    hamburgerMenu.style.transform = 'scale(0)';
    window.setTimeout(function () {
        hamburgerMenu.style.display = 'none';
    }, 700);

    document.body.style.overflow = 'visible';
    hamburgerBtn.style.display = "block"
    crossBtn.style.display = "none"
}

