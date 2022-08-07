import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import {
  initialDeal,
  dealCard,
  isPlayerCanHit,
  isDealerCanHit,
  isHandIncludesAce,
  isInitialHandIncludesAce,
  isHandIncludesTen,
  isLastCardIsAce,
} from "./utils/settings";
import { Button, Wrapper } from "./components/App/App.styled";
import stayIcon from "../src/assets/img/no-stopping.png";
import hitIcon from "../src/assets/img/select.png";
import doubleIcon from "../src/assets/img/double-tap.png";
import restartIcon from "../src/assets/img/restart.png";

const App = () => {
  const [player, setPlayer] = useState({ cards: [] });
  const [dealer, setDealer] = useState({ cards: [] });
  const [message, setMessage] = useState("");
  const [showDealersCard, setShowDealersCard] = useState(false);
  const [winnerMessage, setWinnerMessage] = useState("Good Luck!");
  const [gameEnded, setGameEnded] = useState(false);
  const [isDouble, setIsDouble] = useState(false);

  useEffect(() => {
    const { player, dealer } = initialDeal();
    if (isHandIncludesAce(player) && player.total === 11) {
      player.total += 10;
      setWinnerMessage("Blackjack! Player Wins");
      setShowDealersCard(true);
      setGameEnded(true);
    } else if (isHandIncludesAce(dealer) && dealer.total === 11) {
      dealer.total += 10;
    } else if (isHandIncludesAce(dealer) && dealer.total >= 7) {
      dealer.total += 10;
    }
    setPlayer(player);
    setDealer(dealer);
  }, []);

  useEffect(() => {
    if (player.total > 21) {
      setWinnerMessage("Player bust! Dealer Wins");
      setGameEnded(true);
    }
  }, [player]);

  useEffect(() => {
    if (dealer.total > 21 && player.total <= 21) {
      setWinnerMessage("Dealer bust! Player wins");
    } else if (dealer.total > 16 && dealer.total <= 21) {
      if (player.total > dealer.total && player.total <= 21) {
        setWinnerMessage("Player wins!");
      } else if (player.total < dealer.total && dealer.total <= 21) {
        setWinnerMessage("Dealer wins!");
      } else if (
        player.total === dealer.total &&
        player.total <= 21 &&
        dealer.total <= 21
      ) {
        setWinnerMessage("Push!");
      }
    }
  }, [gameEnded]);

  useEffect(() => {
    if (player.total > 21) {
      setShowDealersCard(true);
    } else if (player.total === 21 && winnerMessage === "") {
      handleStay();
    }
  }, [player.total]);

  const addCard = (entity) => {
    const newCard = dealCard();
    const newEntity = { ...entity };
    newEntity.cards.push(newCard);
    newEntity.total += newCard.card.value;
    return newEntity;
  };

  const handleHit = () => {
    if (isPlayerCanHit(player)) {
      const newPlayer = addCard(player);
      setPlayer(newPlayer);
    }
  };

  const dealersTurn = () => {
    setShowDealersCard(true);
    let newDealer = { ...dealer };
    while (newDealer.total < 17) {
      if (
        isInitialHandIncludesAce(newDealer) &&
        newDealer.total >= 7 &&
        newDealer.total < 12 &&
        !isHandIncludesTen(newDealer)
      ) {
        newDealer.total += 10;
        break;
      }
      // if last card is ace and also total >= 7 and total < 12 break
      if (
        isLastCardIsAce(newDealer) &&
        newDealer.total >= 7 &&
        newDealer.total < 12
      ) {
        newDealer.total += 10;
        break;
      }
      newDealer = addCard(newDealer);
    }
    setGameEnded(true);
    return newDealer;
  };

  const handleStay = () => {
    if (player.total < 12 && isHandIncludesAce(player)) {
      const newPlayer = { ...player };
      newPlayer.total += 10;
      setPlayer(newPlayer);
    }
    const newDealer = dealersTurn();
    setDealer(newDealer);
  };

  const handleDouble = () => {
    handleHit();
    const newDealer = dealersTurn();
    setDealer(newDealer);
    setIsDouble(true);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginRight: "40px" }}>
        {winnerMessage}
      </h2>
      <Wrapper>
        {dealer.cards.map(({ card }, idx) => {
          const cardObj = { number: card.number, suit: card.suit };
          return showDealersCard || idx !== 0 ? (
            <Card key={idx} card={cardObj} amount={dealer.cards.length} />
          ) : (
            <Card key={idx} card="none" />
          );
        })}
      </Wrapper>
      <Wrapper>
        {player.cards.map(({ card }, idx) => {
          const cardObj = { number: card.number, suit: card.suit };
          return (
            <Card
              key={idx}
              card={cardObj}
              amount={player.cards.length}
              isDouble={isDouble}
            />
          );
        })}
      </Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex" }}>
          <Button disabled={gameEnded} color={"lightgreen"} onClick={handleHit}>
            <img height="40px" width="40px" src={hitIcon} />
          </Button>
          <Button disabled={gameEnded} color={"#F75D59"} onClick={handleStay}>
            <img height="50px" width="50px" src={stayIcon} />
          </Button>
          <Button disabled={gameEnded} color={"#B19CD9"} onClick={handleDouble}>
            <img height="40px" width="40px" src={doubleIcon} />
          </Button>
        </div>
        {gameEnded && (
          <Button style={{}} color={"orange"} onClick={refreshPage}>
            <img height="40px" width="40px" src={restartIcon} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default App;
