let scoreHome = document.getElementById("score-home")
console.log(scoreHome)

let scoreGuest = document.getElementById("score-guest")
console.log(scoreGuest)

countH = 0
countG = 0

scoreHome.innerText = countH
scoreGuest.innerText = countG

function addOne() {
    countH += 1
    scoreHome.innerText = countH
    console.log(countH)
    
}

function addTwo() {
    countH += 2
    scoreHome.innerText = countH
    console.log(countH)
}

function addThree() {
    countH += 3
    scoreHome.innerText = countH
    console.log(countH)
}


function addOneG() {
    countG += 1
    scoreGuest.innerText = countG
    console.log(countG)
    
}

function addTwoG() {
    countG += 2
    scoreGuest.innerText = countG
    console.log(countG)
}

function addThreeG() {
    countG += 3
    scoreGuest.innerText = countG
    console.log(countG)
}

