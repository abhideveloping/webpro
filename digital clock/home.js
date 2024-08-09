const box = document.querySelector('.box');
console.log(box);
let date = new Date();
// console.log(date.toLocaleTimeString());
box.innerHTML = date.toLocaleTimeString()

