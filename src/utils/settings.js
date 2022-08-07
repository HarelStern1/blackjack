// Clubs
import twoOfClubs from "../assets/img/2C.svg";
import threeOfClubs from "../assets/img/3C.svg";
import fourOfClubs from "../assets/img/4C.svg";
import fiveOfClubs from "../assets/img/5C.svg";
import sixOfClubs from "../assets/img/6C.svg";
import sevenOfClubs from "../assets/img/7C.svg";
import eightOfClubs from "../assets/img/8C.svg";
import nineOfClubs from "../assets/img/9C.svg";
import tenOfClubs from "../assets/img/TC.svg";
import jackOfClubs from "../assets/img/JC.svg";
import queenOfClubs from "../assets/img/QC.svg";
import kingOfClubs from "../assets/img/KC.svg";
import aceOfClubs from "../assets/img/AC.svg";

// Spades
import twoOfSpades from "../assets/img/2S.svg";
import threeOfSpades from "../assets/img/3S.svg";
import fourOfSpades from "../assets/img/4S.svg";
import fiveOfSpades from "../assets/img/5S.svg";
import sixOfSpades from "../assets/img/6S.svg";
import sevenOfSpades from "../assets/img/7S.svg";
import eightOfSpades from "../assets/img/8S.svg";
import nineOfSpades from "../assets/img/9S.svg";
import tenOfSpades from "../assets/img/TS.svg";
import jackOfSpades from "../assets/img/JS.svg";
import queenOfSpades from "../assets/img/QS.svg";
import kingOfSpades from "../assets/img/KS.svg";
import aceOfSpades from "../assets/img/AS.svg";

// Hearts
import twoOfHearts from "../assets/img/2H.svg";
import threeOfHearts from "../assets/img/3H.svg";
import fourOfHearts from "../assets/img/4H.svg";
import fiveOfHearts from "../assets/img/5H.svg";
import sixOfHearts from "../assets/img/6H.svg";
import sevenOfHearts from "../assets/img/7H.svg";
import eightOfHearts from "../assets/img/8H.svg";
import nineOfHearts from "../assets/img/9H.svg";
import tenOfHearts from "../assets/img/TH.svg";
import jackOfHearts from "../assets/img/JH.svg";
import queenOfHearts from "../assets/img/QH.svg";
import kingOfHearts from "../assets/img/KH.svg";
import aceOfHearts from "../assets/img/AH.svg";

// Diamonds
import twoOfDiamonds from "../assets/img/2D.svg";
import threeOfDiamonds from "../assets/img/3D.svg";
import fourOfDiamonds from "../assets/img/4D.svg";
import fiveOfDiamonds from "../assets/img/5D.svg";
import sixOfDiamonds from "../assets/img/6D.svg";
import sevenOfDiamonds from "../assets/img/7D.svg";
import eightOfDiamonds from "../assets/img/8D.svg";
import nineOfDiamonds from "../assets/img/9D.svg";
import tenOfDiamonds from "../assets/img/TD.svg";
import jackOfDiamonds from "../assets/img/JD.svg";
import queenOfDiamonds from "../assets/img/QD.svg";
import kingOfDiamonds from "../assets/img/KD.svg";
import aceOfDiamonds from "../assets/img/AD.svg";

// Background
import background from "../assets/img/2B.svg";

export const cardToSvgMap = {
  "2♣️": twoOfClubs,
  "3♣️": threeOfClubs,
  "4♣️": fourOfClubs,
  "5♣️": fiveOfClubs,
  "6♣️": sixOfClubs,
  "7♣️": sevenOfClubs,
  "8♣️": eightOfClubs,
  "9♣️": nineOfClubs,
  "10♣️": tenOfClubs,
  "J♣️": jackOfClubs,
  "Q♣️": queenOfClubs,
  "K♣️": kingOfClubs,
  "A♣️": aceOfClubs,
  "2♠️": twoOfSpades,
  "3♠️": threeOfSpades,
  "4♠️": fourOfSpades,
  "5♠️": fiveOfSpades,
  "6♠️": sixOfSpades,
  "7♠️": sevenOfSpades,
  "8♠️": eightOfSpades,
  "9♠️": nineOfSpades,
  "10♠️": tenOfSpades,
  "J♠️": jackOfSpades,
  "Q♠️": queenOfSpades,
  "K♠️": kingOfSpades,
  "A♠️": aceOfSpades,
  "2♥️": twoOfHearts,
  "3♥️": threeOfHearts,
  "4♥️": fourOfHearts,
  "5♥️": fiveOfHearts,
  "6♥️": sixOfHearts,
  "7♥️": sevenOfHearts,
  "8♥️": eightOfHearts,
  "9♥️": nineOfHearts,
  "10♥️": tenOfHearts,
  "J♥️": jackOfHearts,
  "Q♥️": queenOfHearts,
  "K♥️": kingOfHearts,
  "A♥️": aceOfHearts,
  "2♦️": twoOfDiamonds,
  "3♦️": threeOfDiamonds,
  "4♦️": fourOfDiamonds,
  "5♦️": fiveOfDiamonds,
  "6♦️": sixOfDiamonds,
  "7♦️": sevenOfDiamonds,
  "8♦️": eightOfDiamonds,
  "9♦️": nineOfDiamonds,
  "10♦️": tenOfDiamonds,
  "J♦️": jackOfDiamonds,
  "Q♦️": queenOfDiamonds,
  "K♦️": kingOfDiamonds,
  "A♦️": aceOfDiamonds,
  none: background,
};

export const determineValue = (card) => {
  const value =
    typeof card !== "number" && card !== "A" ? 10 : card === "A" ? 1 : card;
  return value;
};

export const generateDeck = () => {
  let count = 0;
  const deck = [];
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const suits = ["♥️", "♠️", "♦️", "♣️"];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      const value = determineValue(numbers[j]);
      deck.push({ id: count, number: numbers[j], suit: suits[i], value });
      count++;
    }
  }
  return deck;
};

let deck = generateDeck();

export const getRandomNumber = () => {
  return Math.floor(Math.random() * deck.length);
};

export const updateDeck = (card) => {
  const updatedDeck = deck.filter((c) => c.id !== card.id);
  deck = [...updatedDeck];
  return deck;
};

export const dealCard = () => {
  const randomIndex = getRandomNumber();
  const card = deck[randomIndex];
  const updatedDeck = updateDeck(card);
  return { card, updatedDeck };
};

export const getTotal = (arr) => {
  const total = arr.reduce((acc, curr) => {
    acc += curr.card.value;
    return acc;
  }, 0);
  return total;
};

export const initialDeal = () => {
  const player = [];
  const dealer = [];
  const result = {
    player: { cards: [], total: 0 },
    dealer: { cards: [], total: 0 },
  };

  for (let i = 0; i < 2; i++) {
    const card = dealCard();
    player.push(card);
  }

  for (let i = 0; i < 2; i++) {
    const card = dealCard();
    dealer.push(card);
  }

  result.player.cards = player;
  result.dealer.cards = dealer;
  result.player.total = getTotal(result.player.cards);
  result.dealer.total = getTotal(result.dealer.cards);

  console.log(result);
  return result;
};

export const isPlayerCanHit = (player) => {
  if (player.total < 21) {
    return true;
  }
  return false;
};

export const isDealerCanHit = (dealer) => {
  if (dealer.total < 17) {
    return true;
  }
  return false;
};

export const isHandIncludesAce = (entity) => {
  for (let i = 0; i < entity.cards.length; i++) {
    if (entity.cards[i].card.number === "A") return true;
  }
  return false;
};

export const isHandIncludesTen = (entity) => {
  for (let i = 0; i < entity.cards.length; i++) {
    if (
      entity.cards[i].card.number === 10 ||
      entity.cards[i].card.number === "J" ||
      entity.cards[i].card.number === "Q" ||
      entity.cards[i].card.number === "K"
    )
      return true;
  }
  return false;
};

export const isInitialHandIncludesAce = (entity) => {
  const first = entity.cards[0];
  const second = entity.cards[1];
  const arr = [first, second];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].card.number === "A") return true;
  }
  return false;
};

export const isLastCardIsAce = (entity) => {
  return entity.cards[entity.cards.length - 1].card.number === "A";
};
