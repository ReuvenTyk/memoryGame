//Set array of Id cards
const sun1 = document.getElementById("sun1");
const sun2 = document.getElementById("sun2");
const rose1 = document.getElementById("rose1");
const rose2 = document.getElementById("rose2");
const cards = [sun1, rose1, rose2, sun2];
let cardsMatch = []; // card1, card2
let flips = 0;

//Get clicked card by id as Parameter
function card(card) {
  card.addEventListener("click", () => {
    showCard(card.children[0]);
    console.log(card.classList[1]);
    cardsMatch.push(card.classList[1]);
    console.log(cardsMatch);
    if (flips == 2) {
      checkCards(cardsMatch, cards);
      console.log("flips - >", flips);
      flips = 0;
      cardsMatch = [];
    }
  });
}

//Get the Argument id by Iteration and call the function
for (let i = 0; i < cards.length; i++) {
  card(cards[i]);
}

// Show card function
function showCard(child) {
  if (flips < 2) {
    flips++;
    child.classList.add("flipped-card");
    child.classList.add("cant-flip");
    console.log(flips);
    return;
  }
}

function checkCards(arr, globalArr) {
  if (arr[0] === arr[1]) {
    for (let i = globalArr.length - 1; i >= 0; i--) {
      if (globalArr[i].classList[1] === arr[0]) {
        console.log("YEY");
        globalArr.splice(i, 1);
        console.log(globalArr);
      }
    }
  } else {
    console.log("BOOOOO");
    setTimeout(() => {
      for (let x = 0; x < globalArr.length; x++) {
        globalArr[x].children[0].classList.remove("cant-flip");
        globalArr[x].children[0].classList.remove("flipped-card");
      }
    }, 1000);
  }
}

//Problems - >
// 1) we need to make only 2 cards open each iteration - DONE!!
// 2) create the option to flip back
// 3) checkCards() needs to run in the second click and not the second
// 4) make start over active
