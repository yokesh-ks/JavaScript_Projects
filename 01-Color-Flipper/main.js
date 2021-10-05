// rgba colors from (0 to 255) 
// rgba(106, 90, 205)

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){

    const color1 = getRandomNumber();
    const color2 = getRandomNumber();
    const color3 = getRandomNumber();

    var colors = "rgba("+color1+", "+color2+", "+color3+")";
    document.body.style.backgroundColor = colors;
    color.textContent = colors;
})

function getRandomNumber() {
    return Math.floor(Math.random()*255);
}