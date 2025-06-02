const text = "Hello, I'm a JavaScript typewriter!";
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