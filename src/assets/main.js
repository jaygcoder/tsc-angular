var menuTog = document.getElementsByClassName("menu-toggle")[0];

menuTog.onclick = function() {
    document.getElementsByTagName('body')[0].classList.toggle('open');
}