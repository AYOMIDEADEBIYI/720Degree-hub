// contenstant one button
let voteCount = document.getElementById("increase-vote");
let countEl = document.getElementById("count-score");
let decreaseCount = document.getElementById("decrease-vote");
let count2El = document.getElementById("num-count")


let count = 0
let numCount = 0

voteCount.addEventListener("click", function () {
    count += 100
    numCount++;
    count2El.textContent = numCount
    countEl.textContent = count
})

decreaseCount.addEventListener("click", function () {
    if (count > 100) {
        count -= 100;
        countEl.innerHTML = count
    }else {
        count = 0
    }
    if (numCount > 1) {
        numCount--
        count2El.innerHTML  = numCount
    }
})
// ends here


// contenstant two button
let voteCountTwo = document.getElementById("increase-vote-two");
let countEl2 = document.getElementById("count-score-two");
let decreaseCountTwo = document.getElementById("decrease-vote-two");
let count22El = document.getElementById("num-count-two")

let count2 = 0
let numCount2 = 0

voteCountTwo.addEventListener("click", function () {
    count2 += 100
    numCount2++;
    countEl2.innerHTML = count2
    count22El.textContent = numCount2

})

decreaseCountTwo.addEventListener("click", function () {
    if (count2 > 100) {
        count2 -= 100;
        countEl2.innerHTML = count2
    }
    else {
        count = 0
    }
    if (numCount2 > 1) {
        numCount2--
        count22El.innerHTML  = numCount2
    }
})
// ends here


// contenstant three button
let voteCountThree = document.getElementById("increase-vote-three");
let countEl3 = document.getElementById("count-score-three");
let decreaseCountThree = document.getElementById("decrease-vote-three");
let count23El = document.getElementById("num-count-three")

let count3 = 0
let numCount3 = 0

voteCountThree.addEventListener("click", function () {
    count3 += 100
    numCount3++
    countEl3.textContent = count3
    count23El.innerHTML  = numCount3

})

decreaseCountThree.addEventListener("click", function () {
    if (count3 > 100) {
        count3 -= 100;
        countEl3.innerHTML = count3
    }
    else {
        count3 = 0
    }
    if (numCount3 > 1) {
        numCount3--
        count23El.innerHTML  = numCount3
    }
})
// ends here

// contenstant four button
let voteCountFour = document.getElementById("increase-vote-four");
let countEl4 = document.getElementById("count-score-four");
let decreaseCountFour = document.getElementById("decrease-vote-four");
let count24El = document.getElementById("num-count-four")

let count4 = 0
let numCount4 = 0


voteCountFour.addEventListener("click", function () {
    count4 += 100
    numCount4++
    countEl4.textContent = count4
    count24El.innerHTML  = numCount4
})


decreaseCountFour.addEventListener("click", function () {
    if (count4 > 100) {
        count4 -= 100;
        countEl4.innerHTML = count4
    }
    else {
        count4 = 0
    }
    if (numCount4 > 1) {
        numCount4--
        count24El.innerHTML  = numCount4
    }
})
// ends here
