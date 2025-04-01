console.log(Math.random())

console.log(Math.random()*10)

console.log(math.floor(Math.random()*10))

console.log(Math.floor(7.8))

console.log(Math.ceil(2.1))

console.log(Math.floor(Math.random()*6))

console.log(Math.ceil(Math.random()*5))

let rand =Math.random()*5

console.log("Random", rand)

console.log("Floor", Math.floor(rand))

console.log("Ceiling", Math.ceil(rand))

console.log(Math.floor(Math.random()*6)+1)

function showRand(){
    document.querySelector("#output").innerText = Math.random()
}

function showFloor(){
    document.querySelector("#output").innerText = Math.floor(7.9)
}

function showCeil(){
    document.querySelector("#output").innerText = Math.ceil(2.3)
}

function rollDice(){
    let roll = Math.floor(Math.random()*6)+1
    document.querySelector("#output").innerText = "Dice Roll" + roll
}

function pickRand(){
    let names = ["john", "tim", "bill", "toji"]
    let index = Math.floor(Math.random()* names.length)
    document.querySelector("#output").innerText = names[index]
}