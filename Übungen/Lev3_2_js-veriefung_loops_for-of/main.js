let numArr = [5, 22, 15, 100, 55]
let num
function teiler(){
  for (num of numArr) {
    let teil = 2;
    if (num % teil == 0) {
      document.write(num + " ist teilbar")
    } else {
      for (let teil1 = 2; num % teil1 == 0; teil1++){
        document.write(num + " ist duch " + teil1 + " teilbar")
      }
    }
  }
}

teiler()