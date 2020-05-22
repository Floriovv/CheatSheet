const personA = {
  start: 9,
  end: 13,
  terminStart1: 9,
  terminStart2: 10,
  terminEnde1: 9.5,
  terminEnde2: 12,
  hatDann15minZeit1: []
}

const personB = {
  start: 8,
  end: 13,
  terminStart1: 9.25,
  terminStart2: 10.5,
  terminEnde1: 9.75,
  terminEnde2: 12.5,
  hatDann15minZeit2: []
}

function timechecker(){
  for (let i = 9; i <= personA.end; i+=0.25){
  if (i < 9){
    console.log("Nicht in der Arbeitszeit")
  } else if (i >= personA.terminStart1 && i < personA.terminEnde1){
    console.log("Hier findet bereites Termin 1 von Person A statt")
  } else if (i >= personA.terminStart2 && i < personA.terminEnde2){
    console.log("Hier findet bereits Termin 2 von Person A statt")
  } else if (i >= personA.end){
    document.getElementById("test").innerHTML += " Keine Zeit! Hier ist schon Feierabend für Person A! " + "(" + i + " Uhr) / "
  } else {
    document.getElementById("test").innerHTML += " Person A hat ab " + i + " Uhr Zeit / ";
    personA.hatDann15minZeit1.push(i);
  }}
  for (let f = 9; f <= personB.end; f+=0.25){
  if (f < 9){
    console.log("Nicht in der Arbeitszeit")
  } else if (f > personB.terminStart1 && f < personB.terminEnde1){
    console.log("Hier findet bereites Termin 1 von Person B statt")
  } else if (f > personB.terminStart2 && f < personB.terminEnde2){
    console.log("Hier findet bereits Termin 2 von Person B statt")
  } else if (f >= personB.end){
    document.getElementById("test").innerHTML += " Keine Zeit! Hier ist schon Feierabend für Person B! " + "(" + f + " Uhr) / "
  } else {
    document.getElementById("test").innerHTML += " Person B hat ab " + f + " Uhr Zeit / ";
    personB.hatDann15minZeit2.push(f);
  }}
  
}
timechecker()

console.log("Ab disen Zeiten hat Person A 15min Zeit: " + personA.hatDann15minZeit1)
console.log("Ab disen Zeiten hat Person B 15min Zeit: " + personB.hatDann15minZeit2)

function vergleicher() { 
  for(let i = 0; i < personA.hatDann15minZeit1.length; i++) { 
      for(let j = 0; j < personB.hatDann15minZeit2.length; j++) { 
        if(personA.hatDann15minZeit1[i] === personB.hatDann15minZeit2[j]) { 
          console.log("Es gibt eine Übereinstimmung!" + personA.hatDann15minZeit1[i])
      } 
    } 
  } 
  console.log("Es gibt keine Übereinstimmung!");  
}

vergleicher()
