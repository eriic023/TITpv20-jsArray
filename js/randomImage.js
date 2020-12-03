const mainImage = document.querySelector("#img");
const button = document.querySelector(".btn");

const images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];

button.addEventListener('click', ()=>{
    console.log("hello from script file!");
    let rnd = Math.floor(Math.random() * images.length);
    mainImage.src= images[rnd];
    console.log("Random number:", rnd);
});