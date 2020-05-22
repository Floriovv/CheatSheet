function ausgabe(){
  if (document.getElementById("bundesland").value === "Baden-Württemberg"){
    document.getElementById("info").innerHTML = "hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt"
  } else if (document.getElementById("bundesland").value === "Bayern") {
    document.getElementById("info").innerHTML = "hat 12,844 Mio Einwohner und München ist die Hauptstadt"
  } else if (document.getElementById("bundesland").value === "Berlin") {
    document.getElementById("info").innerHTML = "hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt"
  } else if (document.getElementById("bundesland").value === "Brandenburg") {
    document.getElementById("info").innerHTML = "hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt"
  } else if (document.getElementById("bundesland").value === "Bremen") {
    document.getElementById("info").innerHTML = "hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt"
  } else if (document.getElementById("bundesland").value === "Hamburg") {
    document.getElementById("info").innerHTML = "hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt"
  } else if (document.getElementById("bundesland").value === "Hessen") {
    document.getElementById("info").innerHTML = "hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"
  } else if (document.getElementById("bundesland").value === "Mecklenburg-Vorpommern") {
    document.getElementById("info").innerHTML = "hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt"
  } else if (document.getElementById("bundesland").value === "Niedersachsen") {
    document.getElementById("info").innerHTML = "hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt"
  } else if (document.getElementById("bundesland").value === "Nordrhein-Westfalen") {
    document.getElementById("info").innerHTML = "hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt"
  } else (document.getElementById("info").innerHTML = "Bitte gib ein Bundesland ein!")
}

document.getElementsByClassName()