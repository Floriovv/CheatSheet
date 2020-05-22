// document.getElementById("HierHello").innerHTML = '<img src="https://static.cardmarket.com/img/8b0890d844b07b4507e857274650c5e0/logos/3.png" alt="Bild">';

// let a = 7;
// let b = 2;

// function testfunction (a, b) {
//     return a*b
// }

// document.getElementById("ergebnis").innerHTML = testfunction(a, b)     //Paragraph wird mit dem Ergebis gefüllt

// let vorname = "Florian ";
// let nachname = "Bollmann";

// function begrüßung (text) {
//     let x = vorname + nachname + text
//     return x
// }

// document.write("Hey ")
// document.write(begrüßung(" willkommen auf meiner Seite "))

// function umrechnen(){
//     let x = prompt();
//     let y = x*1.8+32;
//     return window.alert(y)
// }

// umrechnen()

// let age = prompt("Wie alt bist du?")

// confirm("bist du wirklich " + age + " Jahre alt?")

// function alter(){
//     return console.log(age)
// }

// alter()


// let txt = "Hello my name is Florian Bollmann"
// let txt2 = "Hallo ich habe keinen Namen"

// let vari = txt.lastIndexOf("n") //sucht nach Buchstaben
// let pos = txt.indexOf("H")  //sucht von hinten
// let many = txt.length   //zählt Zeichen
// let suche = txt.search("H") //fast wie indexOf
// let slice = txt.slice(0,5) // 0 = Startposition 5 = Endposition klappt auch nur mit einer Zahl und schneidet dann bis zum ende alles aus, negative Zahlen lassen ihn von hinten anfangen zu schneiden.
// let sub = txt.substring(0,5) //das gleiche wie slice aber kann keine negativen Zahlen
// let substr = txt.substr(6,2) //Zähle ab der fünften Stelle und zähle dich dann 4 Zahlen nach vorne
// let repl = txt.replace("Hello", "LOL") //tauscht z.B. Strings aus
// let concat = txt.concat(" ", txt2) //Strings zusammensetzen

// console.log(vari, pos, many, suche, slice, sub, substr, repl, concat)

// let x = 5

// if (x > 15) {
//   document.write ("guten Abend")
// } else if (x < 16, x > 10) {
//   document.write ("guten Nachmittag")
// } else if (x < 11) {
//   document.write ("guten Morgen")
// }

// let cars = ["car1", "car2", "car3", "car4"];
// let car
// for (car of cars) {
//   document.write(cars)
// }

// let numbers = [5, 18, 197, 215, 1073];
// let number
// for (number of numbers){
//   if(number & 1)
//     {
//       console.log(number + " odd")
//     }
//     else
//     {
//       console.log(number + " even")
//     }
// }

// let parameter = 6;

// function fruitloops(){
//   for (num = 0; num<parameter; num++){
//     console.log(num)
//   }
// }

// fruitloops()

// document.getElementById("colorchange").addEventListener("mouseover", () =>{
//   document.getElementById("colorchange").style.background = "green"
// });

// document.addEventListener("mousemove", (e) => {
//   console.log(e.clientX)
//   console.log(e.clientY)
//   document.body.style.background = `rgb(200,200,200)`
// })

// const log = document.getElementById('log');

// document.addEventListener('keypress', logKey);

// function logKey(e) {
//   log.style.background += ` ${e.code}`;
// }

// document.addEventListener("keydown", (e) => {
//   console.log(e.key)
//   if (e.key == "g") {
//       document.body.style.background = "green"
//   } else if (e.key == "r") {
//       document.body.style.background = "red"
//   } else if (e.key == "b") {
//       document.body.style.background = "blue"
//   } else if (e.key == "y") {
//       document.body.style.background = "yellow"
//   } else if (e.key == "p") {
//       document.body.style.background = "pink"
//   }
// })

// let user = {
//     email: "spider@super.de",
//     userName: "Spiderman",
//     gender: "male",
//     age: 54,
//     isSuperHero: true,
//     films: ["Spider-Man", "Spider-Man 2"],
    // logIn: function () {
    //     console.log(`${user.userName} is log in`)
    // },
    // logOut: function () {
    //     console.log(`${user.userName} is log out`)
    // },
    // beschreibe: function () {
    //     console.log(`${user.userName} is ${user.age} old.`)
    // },
//     telefon: function () {
//         console.log(`${user.userName}` + " Telefonnummer lautet " + `${user.tel}`)
//     },
    
// }

// user.films.push("Hallo")
// console.log(user)
// //adding new key and value to the objekt
// user.tel = "01344219684"
// console.log(user)

// user.telefon()

// let writer = {
//     Author: "Florian Bollmann",
//     Emails: "keinPlan@gmx.de",
//     Blogs: [{title: "Blog1", likes: 100}, {title: "Blog2", likes: 200}]
// }

// console.log(writer.Author)
// console.log(writer.Blogs[0])
// console.log(writer.Blogs[1].likes)

// function hello(){
//     console.log("Hello World")
// }

// hello()

// function helloName (name){
//     name = "Florian"
//     console.log(name)
// }

// helloName()

// let arrorHello = () => {
//     console.log("Hello World Arrow")
// }

// arrorHello()

// let arrowHalloName = (name2) => {
//     name2  = "Florian"
//     console.log(name2)
// } 

// arrowHalloName()

// document.getElementById("cercle").addEventListener("click", () => {
//     document.getElementById("cercle").style.background = "green"
// })

// document.getElementById("rectangle").addEventListener("click", () => {
//     document.getElementById("rectangle").style.background = "red"
// })

// document.getElementById("square").addEventListener("click", () => {
//     document.getElementById("square").style.background = "blue"
// })

// function font(){
//     document.getElementById("cercle").addEventListener("click", () => changeFonts("100px"))
// }
// font()
// function changeFonts(big){
//     document.getElementById("cercle").style.fontSize = big
// }

// let navigation=["home", "about", "contact", "services"]

// let map1 = navigation.map(elt => {
//     console.log(elt)
//     return elt[0].toUpperCase() + elt.slice(1)
//     return elt
// })

// console.log(map1)

let person = {
    firstName: "Florian",
    lastName: "Bollmann",
    age: "21",
    country: "Germany",
    describe(){
        console.log(`im ${this.lastName}${this.firstName}, Im ${this.age}`)
    }
}

person.describe()

let i;
for (i in person) {
    console.log(i)
    console.log(person[i])
}

//Object.keys creates an array that contains the properties of an object.

let keysPerson = Object.keys(person)
console.log(keysPerson)

//Object.values creates an array that contains the values of every property in an object.

let valuesPerson = Object.values(person)
console.log(valuesPerson)

//Object.entries creates an array of arrays. Each inner array has two item. The first item is the property; the second item is the value.

let entriesPerson = Object.entries(person)
console.log(entriesPerson)

//constructor function
function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.describe = function () {
        console.log(`I am ${this.firstName}${this.lastName}, I am ${this.age}`)
    }
}
let spiderMan = new Person("Spider", "Man", 50)
console.log(spiderMan.describe())

let writer = {
    name: "victor",
    email: "victor@super.de",
    male: true,
    birthdayYear: 1843,
    books: ["books1", "books2"],
    isAlive() {
        if (this.birthdayYear > 1930) {
            console.log(this.name + "is alive")
        } else {
            console.log("Leider nein")
        }
    }

}

function greener(){
    let i
    for (i = 0; i < document.getElementsByClassName("hello").length; i++)
    document.getElementsByClassName("hello")[i].style.color = "green"
}

greener()

function titleColorer(){
    let i
    for (i = 0; i < document.getElementsByClassName("title").length; i++)
    document.getElementsByClassName("title")[i].style.color = "red"
}
titleColorer()

// function blue(){
//     let y;
//     for (y = 0; y < document.getElementsByTagName("p").length; y++)
//     document.getElementsByTagName("p")[y].sytle.color = "blue"
// }

// blue()

function blue(){
    let y;
    for (y = 0; y < document.getElementsByTagName("p").length; y++){
    document.getElementsByTagName("p")[y].style.color = "blue"}
}
blue()

function para(){
    document.querySelector("section p").style.background = "green"
}

para()




//createElement
let div = document.createElement("div")
let div1 = document.createElement("div")
let div2 = document.createElement("div")
//add text
// innerHTML
div.innerHTML = "<p>adding text with innerHTML</p>"
// innerText
div1.innerText = "adding text with innerText"
// document.createTextNode
let text = document.createTextNode("adding text with document.createTextNode")
div2.appendChild(text)
//div2.appendChild(document.createTextNode("some text"))

//Insertion methods
//document.appendChild("newElt") : append nodes or strings at the end of node
document.body.appendChild(div)
document.body.appendChild(div1)
document.body.appendChild(div2)
// <section>
//Welcome to my Website :h1
//Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, rem. :p
// </section>

let section = document.createElement("section")
let h1 = document.createElement("h1")
let p = document.createElement("p")

h1.innerText = "Welcome to my Website"
p.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, rem."

section.appendChild(h1)
section.appendChild(p)

document.body.appendChild(section)

let navigation = ["home", "about", "services", "contact"]

//nav> ul >li with  length array nav
let nav = document.createElement("nav")
let ul = document.createElement("ul")

navigation.forEach(elt => {
    let li = document.createElement("li")
    li.innerHTML = elt
    ul.appendChild(li)
})
nav.appendChild(ul)
document.body.appendChild(nav)

//prepend: insert nodes or strings at the beginning of node

let newList = document.createElement("li")
newList.innerText = "prepend"
ul.prepend(newList)

let h2 = document.createElement("h2")
h2.innerText = "h2 prepend"
section.prepend(h2)

//before
let newP = document.createElement("p")
newP.innerText = "insert Before"
ul.before(newP)

//after
let newP1 = document.createElement("p")
newP1.innerText = "insert After"
ul.after(newP1)

//Attributes class, id , src, href

let article = document.createElement("article")
let pArticle = document.createElement("p")
pArticle.innerText = "some text"
//id
pArticle.setAttribute("id", "text")
//className
pArticle.setAttribute("class", "class-text")

article.appendChild(pArticle)
document.body.appendChild(article)

document.getElementById("text").style.color = "blue"
document.getElementsByClassName("class-text")[0].style.fontSize = "50px"

//https://source.unsplash.com/random/300x300
//https://www.google.de target _blank

//================================

// setTimeout(sayHi, 2000)

// function sayHi() {
//     document.write("Guten morgen")
// }
// function sayHello(name, age, job) {
//     document.write("Guten morgen " + name)
// }

// setTimeout(sayHello("anass"), 3000)/// false
// setTimeout(sayHello, 3000, "anass")

// function describe(name, age, address) {
//     document.write(`Hallo! Ich bin ${name}! Ich bin ${age} Jahre alt und wohne in ${address}!`)
// }

// setTimeout(describe, 2000, "Florian", 21, "Stralsund")

