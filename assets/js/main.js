var tutorial = document.querySelector("#tutorial");
var gift = document.querySelector("#gift");

var tutorialBox = document.querySelector("#tutorialBox");
var giftBox = document.querySelector("#giftBox");

var modal = document.querySelector("#myModal");
var modal1 = document.querySelector("#myModal1");
// When the user clicks the button, open the modal 

tutorial.onclick = function() {
    tutorialBox.style.opacity = "1";
    tutorialBox.style.transform = "translate(-50%,8%)";

    modal.style.display = "block";

}
gift.onclick = function() {
    giftBox.style.opacity = "1";
    giftBox.style.transform = "translate(-50%,8%)";

    modal.style.display = "block";

}


// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";

        // tutorialBox
        tutorialBox.style.opacity = "0";
        tutorialBox.style.transform = "translate(-50%,-100%)";

        //giftBox
        giftBox.style.opacity = "0";
        giftBox.style.transform = "translate(-50%,-100%)";


    } else if (event.target == modal1) {
        modal1.style.display = "none";

        // tab_menu
        tab_menu.style.transform = "translateX(-100%)";
        tab_menu.style.opacity = "0";
    }
}



//Menu on mobile
var menu = document.querySelector(".logo__menu");
var tab_menu = document.querySelector(".header__navbar-menu");
var btnclose = document.querySelector(".menu__close");

menu.onclick = function() {
    tab_menu.style.transform = "translateX(0)";
    tab_menu.style.opacity = "1";

    modal1.style.display = "block";

}
btnclose.onclick = function() {
    tab_menu.style.transform = "translateX(-100%)";
    tab_menu.style.opacity = "0";

    modal1.style.display = "none";
}