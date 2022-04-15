
const toggleMenu = document.querySelector('.toggle-menu');

const hiddenMenu = document.querySelector('.main-menu');

/*let menuOpen = false;

toggleMenu.addEventListener('click',  () => {
    if(!menuOpen) {
        toggleMenu.classList.add('open');
        menuOpen=true;
    } else {
        toggleMenu.classList.remove('open');
        menuOpen=false;
    }

})*/

$(toggleMenu).click(function(){
    $(hiddenMenu).toggleClass("hidden");
})