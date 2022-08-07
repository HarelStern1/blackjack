import { cardToSvgMap } from "../../utils/settings";
import background from "../../assets/img/2B.svg";
import { Img, Wrapper } from "./Card.styled";

const Card = ({ card, amount, isDouble }) => {
  const cardStr = (card.number + card.suit).toString();
  return (
    <Wrapper amount={amount} isDouble={isDouble}>
      <Img
        height="140px"
        width="120px"
        src={cardToSvgMap[cardStr] || background}
      />
    </Wrapper>
  );
};

export default Card;
