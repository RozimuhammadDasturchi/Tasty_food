const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function() {
    links.classList.toggle("show-links");
})
const modeNow = document.querySelector('.modeNow')
function mode(){
    document.querySelector('body').classList.toggle('night')
    modeNow.classList.toggle('bxs-sun');
    modeNow.classList.remove('bxs-moon');
    modeNow.classList.toggle('bxs-moon');

}