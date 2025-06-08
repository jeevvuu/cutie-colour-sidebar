const body =document.querySelector('body');

// all buttons for changing background color
const pinkButton = document.getElementById('pink');
const mangoButton = document.getElementById('mango');
const yellowButton = document.getElementById('yellow');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const purpleButton = document.getElementById('purple');

pinkButton.addEventListener('click', () => {
    body.style.backgroundColor = 'rgb(252, 221, 226)';
})

mangoButton.addEventListener('click', () => {
    body.style.backgroundColor = 'rgb(255, 228, 181)';
})

yellowButton.addEventListener('click', () => {
    body.style.backgroundColor = 'rgb(255, 253, 223)';
})

greenButton.addEventListener('click', () => {
    body.style.backgroundColor = 'rgb(151, 201, 151)';
})

blueButton.addEventListener('click', () => {
    body.style.backgroundColor = 'rgb(173, 216, 230)';
})

purpleButton.addEventListener('click', () => {
    body.style.backgroundColor = 'rgb(216, 191, 216)';
})

// hamburger menu functionality
const hamburgerButton = document.getElementById('hamburger');
const sidebar = document.querySelector('.colours');

let isOpen = false;

hamburgerButton.addEventListener('click', () => {
   if (!isOpen) {
    sidebar.style.left = "0";
    isOpen = true;

   } else {
    sidebar.style.left = "-50%";

    setTimeout(() => {
        sidebar.style.left = "-80px";
   }, 300);

   isOpen = false;
    }
});
