//Set array of Id cards
const sun1 = document.getElementById("sun1");
const sun2 = document.getElementById("sun2");
const rose1 = document.getElementById("rose1");
const rose2 = document.getElementById("rose2");
const cards = [sun1.id, rose1.id, rose2.id, sun2.id];
let cardsMatch = [];
let flips = 0;

//Get clicked card by id as Parameter
const card = (cardId) => {
  let card = document.getElementById(cardId);

  card.addEventListener("click", () => {
    showCard(card.children[0]);
    card.classList.add("cant-flip");
    console.log(card.classList[1]);
    cardsMatch.push(card.classList[1]);
    console.log(cardsMatch);
    if (flips == 2) {
      checkCards(cardsMatch);
      console.log("flips - >", flips);
      flips = 0;
      cardsMatch = [];
    }
  });
};

//Get the Argument id by Iteration and call the function
for (let i = 0; i < cards.length; i++) {
  card(cards[i]);
}

// Show card function
function showCard(child) {
  if (flips < 2) {
    flips++;
    child.classList.add("flipped-card");
    console.log(flips);
    return;
  }
}

function checkCards(arr) {
  if (arr[0] === arr[1]) {
    for (let i = cards.length; i > 0; i--) {
      if (document.getElementById(cards[i]).classList[1] === arr[0]) {
        /* cards.splice(i, 1); */
        console.log("YEY");
      }
    }
  } else {
    console.log("BOOOOO");
    //card.classList.remove("cant-flip");
    //card.classList.remove("flipped-card");
  }
}

//Problems - >
// 1) we need to make only 2 cards open each iteration - DONE!!
// 2) create the option to flip back
// 3) checkCards() needs to run in the second click and not the second
// 4) make start over active

/*  array.splice
  תוריד מהמארך CARDS במקום I משתנה אחד
        */
