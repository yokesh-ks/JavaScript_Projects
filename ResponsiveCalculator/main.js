const web = document.getElementById("webSize");
const mobile = document.getElementById("mobileSize");

const output = document.getElementById("display");

function myFunction() {
  // calc(a*rem + b*vw)

  let b = ((web.value - mobile.value) / 15.45).toFixed(3);
  let a = ((web.value - 19.2 * b) / 16).toFixed(3);
  output.value = `calc(${a}rem + ${b}vw)`;
}

function copyText() {
  /* Get the text field */
  var copyText = document.getElementById("display");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}
