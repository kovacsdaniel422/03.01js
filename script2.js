/**Tömb */

var gyumolcs = ["alma", "körte", "szilva", "citrom"];
var gyumolcsSzin = [["piros", "zöld", "lila", "sárga"]];
var gyumolcsAr = [200, 140, 230, 920];

for (let index = 0; index < gyumolcs.length; index++) {
  console.log(gyumolcs[index]);
}

/**Van e sárga gyümölcs */
var index = 0;
while (index < gyumolcsSzin.length && !(gyumolcsSzin[index] === "sárga")) {
  index++;
}

var vane = index < gyumolcsSzin.length;
console.log(vane);

/**Hány sárga gyümölcs van? */
var hanyvan = 0;
for (let index = 0; index < gyumolcsSzin.length; index++) {
  if (gyumolcsSzin == "sárga") {
    hanyvan++;
  }
  console.log("Sárgák száma:" + hanyvan);
}

/**Mennyi a gyümölcsök összértéke? */
var osszes = 0;
for (let index = 0; index < gyumolcsAr.length; index++) {
  osszes = osszes + gyumolcsAr[index];
}
console.log("Összesen:" + osszes);

/**Piros vagy sárga több? */
var sarga = 0;
var piros = 0;
for (let index = 0; index < gyumolcsSzin.length; index++) {
  if (gyumolcsSzin[index] === "piros") {
    piros++;
  } else if (gyumolcsSzin[index] === "sárga") {
    sarga++;
  }
}
console.log("Pirosok:" + piros);
console.log("Sárgák:" + sarga);

/**Van e 100ft alatt? */
