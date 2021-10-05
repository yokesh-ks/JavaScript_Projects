const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// #f12505 #3e3670 #a3b37f

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let colors = '#';
    for(let i=0; i<6; i++){
        var num = getRandomNumber()
        colors = colors + hex[num];
    }

    document.body.style.backgroundColor = colors;
    color.textContent = colors;
})

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}