const menuIcon = document.querySelector('.menu-icon');
const navBar = document.querySelector('nav');
const Menu = document.querySelector('.menu')

menuIcon.onclick = () => {
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}




const textTyper = document.querySelector('#typeText')
const texts = ["FrontEnd Dev", "UI/UX Designer", "Embedded Sys", "Iot Engineer", "Programmer"]
const typeWriter = () => {
    const speed = 100; // typing speed in ms

    let index = 0;
    const target = '';

    function type() {
    if (index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
        console.log(target)
    }
    }

    type();
}

