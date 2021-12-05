console.log("Hello")

const web = document.getElementById("webSize")
const mobile = document.getElementById("mobileSize")

const output = document.getElementById("display")

function myFunction() {
    // calc(a*rem + b*vw)

    let b = ((web.value - mobile.value)/15.45).toFixed(3)
    let a = ((web.value -19.2*b)/16).toFixed(3)
    output.textContent =   `calc(${a}rem + ${b}vw)`
  }