const suspectsArray = [
  {
      firstName: 'Jacob',
      lastName: 'Green',
      occupation: 'Entrepreneur',
      age: 45,
      description: "He has a lot of connections",
      image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
      color: "green"
  },
  {
      firstName: "Doctor",
      lastName: "Orchid",
      occupation: "Scientist",
      age: 26,
      description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
      image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
      color: "white"
  },
  {
      firstName: "Victor",
      lastName: "Plum",
      occupation: "Designer",
      age: 22,
      description: "Billionaire video game designe",
      image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
      color: "purple"
  },
  {
      firstName: "Kasandra",
      lastName: "Scarlet",
      occupation: "Actor",
      age: 31,
      description: "She is an A-list movie star with a dark past",
      image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
      color: "red"
  },
  {
      firstName: "Eleanor",
      lastName: "Peacock",
      occupation: "Socialité",
      age: 36,
      description: "She is from a wealthy family and uses her status and money to earn popularity",
      image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified.jpg",
      color: "blue"
  },
  {
      firstName: "Jack",
      lastName: "Mustard",
      occupation: "Retired Football player",
      age: 62,
      description: "He is a former football player who tries to get by on his former glory",
      image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
      color: "yellow"
  }
];

const weaponsArray = [
  {
      name: "rope",
      weight: 10,
  },
  {
      name: "knife",
      weight: 8,
  },
  {
      name: "candlestick",
      weight: 2,
  },
  {
      name: "dumbbell",
      weight: 30,
  },
  {
      name: "poison",
      weight: 2
  },
  {
      name: "axe",
      weight: 15
  },
  {
      name: "bat",
      weight: 13,
  },
  {
      name: "trophy",
      weight: 25,
  },
  {
      name: "pistol",
      weight: 20,
  }
]

const roomsArray = [
  { name: "Dining Room" },
  { name: "Conservatory" },
  { name: "Kitchen" },
  { name: "Study" },
  { name: "Library" },
  { name: "Billiard Room" },
  { name: "Lounge" },
  { name: "Ballroom" },
  { name: "Hall" },
  { name: "Spa" },
  { name: "Living Room" },
  { name: "Observatory" },
  { name: "Theater" },
  { name: "Guest House" },
  { name: "Patio" },
]

function selectRandom(arr) {
  //console.log(Math.floor(Math.random() * arr.length)) //index
  return arr[Math.floor(Math.random() * arr.length)] //arr[index]
}
//let arr = ["a", "b", "c", "d", "e"]
//console.log(selectRandom(arr))

function pickMistery() {
  let mistery = {};
  // suspect + weapons + rooms
  mistery.suspect = selectRandom(suspectsArray);
  mistery.weapons = selectRandom(weaponsArray)
  mistery.rooms = selectRandom(roomsArray)
  return mistery
}
//console.log(pickMistery())
function revealMistery() {
    let revealedMistery = pickMistery()
    console.log(revealedMistery)
    document.getElementById("result").innerHTML = `
    <figure>
    <img src=${revealedMistery.suspect.image} alt="" style="width:200px">
    <figcaption>
        <h2>name: ${revealedMistery.suspect.firstName} ${revealedMistery.suspect.lastName}</h2>
        <h3>rooms: ${revealedMistery.rooms.name}</h3>
        <h3>weapons: ${revealedMistery.weapons.name}</h3>
    </figcaption>
    </figure>
    `
}