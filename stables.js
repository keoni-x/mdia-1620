
// Variables
let stableName = "Keoni's Stable"
let totalStalls = 6

let lebron = {
    name: "LeBron",
    nickname: "Bron",
    favoriteTreat: "Tacos",
    age: 3,
    monthlyRent: 30,
    isInside: true,
    favoriteColor: "Red",
    favoriteSport: "Basketball",
}

let drake = {
    name: "Drake",
    nickname: "Drizzy",
    favoriteTreat: "Champagne",
    age: 4,
    monthlyRent: 40,
    isInside: true,
    favoriteColor: "White",
    favoriteSport: "Football",

}

let tung = {
    name: "Tung",
    nickname: "Triple T",
    favoriteTreat: "Chipotle",
    age: 1,
    monthlyRent: 50,
    isInside: true,
    favoriteColor: "Brown",
    favoriteSport: "Soccer",
}

// New Horse
let poophead = {
    name: "Poophead",
    nickname: "Shidhead",
    favoriteTreat: "Toilet Water",
    age: 6,
    monthlyRent: 20,
    isInside: true,
    favoriteColor: "Brown",
    favoriteSport: "Sumo Wrestling",
}

let horses = [lebron, drake, tung, poophead]

// Dot notation
horses[0].isHungry = true
horses[1].isHungry = true
horses[2].isHungry = false
horses[3].isHungry = false

// Functions
function availableStalls(){
    let available = totalStalls - horses.length
    let availableMessage = "There are " + available + " stables available."
    console.log(availableMessage)
}

function latePayFunc(horse){
    let totalOwed = horse.monthlyRent * 1.2
    console.log(horse.name + " owes $" + totalOwed + " in late rent.")
}

function horseNickname(horse){
    return horse.nickname
}

// Function invokes
latePayFunc(horses[0])
console.log(horseNickname(horses[3]))


// Messages
let welcomeMessage = ("Welcome to " + stableName)
