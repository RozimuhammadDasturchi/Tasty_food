const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu'); 

// function Clic(){
//     document.body.style.background('black')
// }
function Clic(){
    const li = document.querySelector('.onclick')
    document.body.style.backgroundColor = ('black');
    document.body.style.color = ('white');
    document.getElementById('header').style.color = ('white');
    li.innerHTML = ('<i class="bx bx-sun chang-theme" id="theme-button" onclick="Click()"></i>');
};

// let content = document.getElementsByTagName('body')[0];
// let darkMode = document.getElementById('dark-change');

// darkMode.addEventListener('click', function() {
//     darkMode.classList.toggle('active');
//     content.classList.toggle('night');
// })
function Click(){
    const li = document.querySelector('.onclick')
    document.body.style.backgroundColor = ('white');
    document.body.style.color = ('black');
    document.getElementById('header').style.color = ('black');
    li.innerHTML = ('<i class="bx bx-moon chang-theme" id="theme-button" onclick="Clic()"></i>');
} 

let output = document.getElementById('output');
let button = document.getElementById('button');
let box = document.getElementById('box');

box.addEventListener('mousemove', runEvenet);

function runEvenet(e) {
    output.innerHTML = '<h3> MouseX: ' + e.offsetX + '</h3>' + '<h3> MouseY: ' + e.offsetY + '</h3>'

    document.body.style.background = 'rgb(' + e.offsetX + ',' + e.offsetY + ',140'
}