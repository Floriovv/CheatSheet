let numbers = [0, 1, 2, 3, 4, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 95, 96, 97, 98, 99]
let cars = ["volvo", "audi", "bmw", "fiat"]
let arrayNum = [1, 4, 5]
cars.sort().reverse()
console.log(cars)

arrayNum.sort(function (a, b) {
  return b - a;
})

console.log(arrayNum)

function multi10(a){
  console.log(a * 10)
}

//forEach

// let x = ["Youtube", "Facebook", "Twitter", "Instagram"];
// x.sort().forEach((ichNutze) => {
//   document.write(ichNutze + "</br>")
// })

// let sum = 0;
// let y = [1, 3, 5, 2];
// y.forEach(elt => document.write(sum += elt)) //elt steht für Element
//arrowfunction!

// let sayHi = () => {if (new Date().getHours() < 12) {
//   console.log("good Morning")
// } else {
//   console.log("good afternoon")
// }
// }

// sayHi()

let one = ["Super", "Spider", "Bat", "Iron", "Ant"]

let x = one.map(elt => elt + "man")
console.log(x)

let Getränk = ["Eistee", "Limmo", "Kaffee", "Energy"]

for (let i = 0; i  < Getränk.length; i++) {
  document.write(`<h1>${Getränk[i]}</h1>`)
}

let linkPicture = ["https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/12/photo-1452723312111-3a7d0db0e024.jpg",
    "https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/macbook-preview-flexible.png",
    "https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/12/photo-1440557653082-e8e186733eeb-1.jpg",
    "https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/12/photo-1443890484047-5eaa67d1d630-1.jpg",
    "https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1422568374078-27d3842ba676-1.jpg",
    "https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1447834353189-91c48abf20e1-1-1.jpg",
    "https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/12/photo-1447877085163-3cce903855cd-1.jpg",
    "https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1447958374760-1ce70cf11ee3-1-1.jpg",
    "https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1430329429612-babb42f88673-1-1.jpg",
    "https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1447958374760-1ce70cf11ee3-1-1.jpg",
    "https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1449057528837-7ca097b3520c-1-1.jpg",
    "https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1448518184296-a22facb4446f-1-1.jpg",
    "https://cdn.colorlib.com/shapely/wp-content/uploads/sites/12/2016/03/photo-1451186859696-371d9477be93-1-1.jpg"
]

for (let i = 0; i  < linkPicture.length; i++) {
  document.getElementById("hi").innerHTML += `<img src="${linkPicture[i]}">`
}