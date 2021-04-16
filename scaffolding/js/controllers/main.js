console.log('SD Frontend Test');

function openMenu() {
    var element = document.getElementById("iconClose");
    element.classList.toggle("openMenu");
    element.classList.toggle("closeMenu");

    var element = document.getElementById("slideMenu");
    element.classList.toggle("animateMenu");
    element.classList.toggle("closeAnimate");

    var element = document.getElementById("out");
    element.classList.toggle("active");
    element.classList.toggle("off");
 }