

let desk = document.querySelector('.player');
let title = document.querySelector('.dbody');



title.addEventListener('mousemove', output2 );
function output2(e) {
    title.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 0)`;
}
