//Set array of Id cards
/* const sun1 = document.getElementById("sun1");
const sun2 = document.getElementById("sun2");
const rose1 = document.getElementById("rose1");
const rose2 = document.getElementById("rose2");
const cards = [sun1, rose1, rose2, sun2]; */
const cards = [
  document.getElementById("sun1"),
  document.getElementById("sun2"),
  document.getElementById("rose1"),
  document.getElementById("rose2"),
];
const scores = document.getElementById("scores");
const timer = document.getElementById("timer");
let cardsMatch = []; // card1, card2
let flips = 0,
  userScore = 0,
  sec = 0;

//Get clicked card by id as Parameter
function card(card) {
  card.addEventListener("click", () => {
    showCard(card);
    cardsMatch.push(card.classList[1]);
    if (flips == 2) {
      checkCards(cardsMatch, cards);
      flips = 0;
      cardsMatch = [];
    }
  });
}

//Get the Argument id by Iteration and call the function
function start() {
  timer.innerHTML = 0;
  setTimeout(timerGo, 1000);
  for (let i = 0; i < cards.length; i++) {
    card(cards[i]);
  }
}

// Show card function
function showCard(child) {
  if (flips < 2) {
    flips++;
    child.children[0].classList.add("flipped-card");
    child.classList.add("cant-flip");
    return;
  }
}

function checkCards(arr, globalArr) {
  if (arr[0] === arr[1]) {
    userScore += 1;
    for (let i = globalArr.length - 1; i >= 0; i--) {
      if (globalArr[i].classList[1] === arr[0]) {
        globalArr.splice(i, 1);
      }
    }
  } else {
    setTimeout(() => {
      for (let x = 0; x < globalArr.length; x++) {
        globalArr[x].classList.remove("cant-flip");
        globalArr[x].children[0].classList.remove("flipped-card");
      }
    }, 1000);
  }
  scores.innerHTML = userScore;
}

function timerGo() {
  let c;
  timer.innerHTML = sec;
  if (cards == "") {
    clearTimeout(c);
    return;
  }
  c = setTimeout(timerGo, 1000);
  sec += 1;
}

start();
//Problems - >
// 1) we need to make only 2 cards open each iteration - DONE!!
// 2) create the option to flip back
// 3) checkCards() needs to run in the second click and not the second
// 4) make start over active
