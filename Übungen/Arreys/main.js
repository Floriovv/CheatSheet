var Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

switch (new Date().getMonth()){
  case 0:
    console.log(Month[0]);
    break;
  case 1:
    console.log(Month[1]);
    break;
  case 2:
    console.log(Month[2]);
    break;
  case 3:
    console.log(Month[3]);
    break;
    case 4:
    console.log(Month[4]);
    break;
  case 5:
    console.log(Month[5]);
    break;
  case 6:
    console.log(Month[6]);
    break;
  case 7:
    console.log(Month[7]);
    break;
    case 8:
    console.log(Month[8]);
    break;
  case 9:
    console.log(Month[9]);
    break;
  case 10:
    console.log(Month[10]);
    break;
  case 11:
    console.log(Month[11]);
    break;
}

let Obst = [["Apfel", "rot", true, 1.00],["Apfel", "grün", false, 1.00], ["Birne", "grün", true, 1.20], ["Banane", "lang", true, 0.99], ["Banane", "kurz", true, 0.50], ["Paprika", "rot", false, 1.00], ["Paprika", "grün", true, 1.00], ["Paprika", "gelb", true, 1.00]];

Obst [0][0] = "Kein Apfel mehr"
console.log(Obst)

let handy = new Array("Samsung", "Nokia", "LG", "Apple", "Huawaii", "WindowsPhone", "Googlephone")
handy[7] = "NeueFirma";
console.log(handy);