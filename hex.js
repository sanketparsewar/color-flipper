const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
// hex color consist of #f12025
btn.addEventListener("click", function () {
  let hexColor = "#";
  let i = 1;
  while (i <= 6) {
    hexColor+=hex[getRandomValue()]
    i++;
  }
  document.body.style.backgroundColor=hexColor;
  color.textContent=hexColor;

});

function getRandomValue(){
    return Math.floor(Math.random()*hex.length)
}
