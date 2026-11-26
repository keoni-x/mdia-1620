
//   Yb,     ________
//    Y8baad8888888888ba,_
// aaad88888888888888888888b,
// `Y8888888888888888888888888b,
//   `"8888888888888888888888888ba,
//     Y888( )888888888888888888888ba, 
//     `Y888888888888888888888888888888ba,________,,aaddddbbbaa,,____,aaa,
//      `Y88888888888888888888888888888888888888888888888888888888888888888b,
//        Y88888888'888888888888888888888888888888888888888888888888888=88888b
//        `88888888 88888888888888888888888888888888888888888888888888888=8888I
//         Y8"88888 888888888888888888888888888888888888888888888888888888=888b
//          Y88888P 888888888888888888888888888888888888888888888888888888=8888
//           `""""  Y88888888888888888888888888888888888888888888888888888=8888
//                  (88888888888888888888888888888888888888888888888888888=8888
//                  `88888888888888888888888888888888888888888888888888888=888(
//                   `888888888888888888888888888888888888888888888888888=8888I
//                    d88888888888888888888888888888888888888888888888888=8888I
//                  ,d888888PY88888888888P"Y888888P"88888888888888888888=88888(
//                 d888888P'  Y8888888888'           888888888888888888=8888888
//                d88888P"    `Y888888888            I8888888"Y88888888=8888888
//               d88888(,      `Y8888888P            `888888P  `Y888888 Y88888P
//               `Y88888b,      `Y888888I             888888'   `888888  `""""
//                 `Y88888b,  __ `888888'            ,88888P     888888
//                   `Y88888bd88b `88888             I88888'     Y88888
//                     `Y88888888b 88888             88888P      `88888
//                       `Y888888888888P            d8888P'       88888,
//                          `"""",d8888I        ,ad888888'        Y8888I
//                            ,a8888888'       d888888P'         ,d88888
//                           d8888888'         88888888       ,d8888888P
//                           88888888                         88888888'
//

// Add loop that checks to find out if a certain horse likes a particular treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

// Create a function references one of your unique horse properties. It should
// contain a conditional or a loop. Invoke it for each horse.

// Morning! Create and invoke a function that moves any number horses of your choice outside. It should
// log out statement indicating the horses have been moved to spend time in the sun. 
// (The function should be able to move a single horse, or multiple horses, depending on the parameters specified)

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

// Variables
let stableName = "Keoni's Stable"
let totalStalls = 6

let lebron = {
    name: "LeBron",
    nickname: "Bron",
    favoriteTreat: "Tacos",
    age: 3,
    monthlyRent: 30,
    isInside: false,
    favoriteColor: "Red",
    favoriteSport: "Basketball",
}

let drake = {
    name: "Drake",
    nickname: "Drizzy",
    favoriteTreat: "Champagne",
    age: 4,
    monthlyRent: 40,
    isInside: false,
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

let myHorses = [lebron, drake, tung, poophead]

// Dot notation
myHorses[0].isHungry = true
myHorses[1].isHungry = true
myHorses[2].isHungry = false
myHorses[3].isHungry = false

// Functions
function availableStalls(stalls, occupiedStalls){
    let available = stalls - occupiedStalls
    let availableMessage = "There are " + available + " stables available."
    console.log(availableMessage)
}

function getLatePayment(horse){
    let totalOwed = horse.monthlyRent * 1.2
    console.log(horse.name + " owes $" + totalOwed + " in late rent.")
}

function horseNickname(horse){
    return horse.nickname
}

// Function invokes
getLatePayment(myHorses[0])
console.log(horseNickname(myHorses[3]))


// Loops
let treat = "Toilet Water"

for (const horse of myHorses){
    if(horse.favoriteTreat == treat){
        console.log(horse.name + " loves " + treat)
        break
    } 
    else {
        console.log(horse.name + " does not like " + treat)
    }
}

function horseSport(horses) {
    for (const horse of horses){
        console.log(horse.name + " loves " + horse.favoriteSport + "!")
    }
}

horseSport(myHorses)

function moveOutside(horses, isDark) {
    for (const horse of horses) {
        if (isDark == true && horse.isInside == false) {
            horse.isInside = true
            console.log(horse.name + " has been called inside because it is getting dark.")
        }
        else if (isDark == false && horse.isInside == true) {
            horse.isInside = false
            console.log(horse.name + " has been moved outside to spend time in the sun!")
        }
    }
}

moveOutside(myHorses, true)

function feedHorses(horses) {
    for (const horse of horses) {
        if (horse.isInside == false) {
            horse.isInside = true
            console.log(horse.name + " has been called inside.")
        }

        console.log(horse.name + " has been fed " + horse.favoriteTreat + "!")
    }
}

feedHorses(myHorses)

function moveHorseMethod(horse) {
    if (horse.isInside == true) {
        horse.isInside = false
        console.log(horse.name + " moved outside!")
    }
    else {
        horse.isInside = true
        console.log(horse.name + " moved inside!")
    }
}

for (const horse of myHorses) {
    horse.moveHorse = moveHorseMethod
}

// Messages
let welcomeMessage = ("Welcome to " + stableName)
