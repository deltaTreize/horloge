const heure = document.querySelector(".hour");
const minutes = document.querySelector(".minut");
const secondes = document.querySelector(".second");
const datej = document.querySelector(".date");


function havetime() {
  let date = new Date();
  let heureT = date.getHours();
  let minutesT = date.getMinutes();
  let secondesT = date.getSeconds();

  heure.style.rotate =
    heureT * (360 / 12) + minutesT * (360 / 60 / 12) - 180 + "deg";
  minutes.style.rotate = minutesT * (360 / 60) - 180 + "deg";
  secondes.style.rotate = secondesT * (360 / 60) - 180 + "deg";
}

var interval = setInterval(havetime, 1000);

function haveDay() {
  let date = new Date();
  let dateT = date.getDate();
  datej.innerHTML = dateT;
  
}
var interval2 = setInterval(haveDay, 1000);
