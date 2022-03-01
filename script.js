console.log("szkriptben");

function init() {
  document.getElementById("uzenet").innerHTML = "Szia!";
  console.log("Initben vagyunk");
}

window.addEventListener("load", init, false);

var ertek;

ertek = "szoveg";

var a = 2;
var b = 3;
var osszeg = a + b;
console.log(osszeg);

switch (szin) {
  case "red":
    console.log("piros");
    break;
  case "blue":
    console.log("kék");
    break;

  case "orange":
    console.log("narancs");
    break;

  case "yellow":
    console.log("piros");
    break;

  case "green":
    console.log("piros");
    break;
default:
    console.log("Nem ismerem");
}

var szam=2;

if(szam==2){
    console.log("Ez egy 2-es szám");
    console.log(typeof szam);
}else{
    console.log("Ez nem szám")
    console.log(typeof szam);

}