import styled from "styled-components";
import "../css/popBut.css";
import dog from "../assets/dog_PNG50363.png";
import { CiLocationOn } from "react-icons/ci";

const StyledArticle = styled.article`
  height: 8.125rem;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  & > img {
    height: 100%;
    width: auto;
  }
`;

const StyledCiLoca = styled(CiLocationOn)`
  color: var(--bright-accent);
`;

const PetCard = ({ name }) => {
  return (
    <StyledArticle className="popBut__card">
      <img src={dog} alt="A pet" />
      <div>
        <h2>{name}</h2>
        <p>
          <StyledCiLoca></StyledCiLoca>
          New York City
        </p>
        <p>This is a story about a dog. The dog is nice and brown.</p>
      </div>
    </StyledArticle>
  );
};

export default PetCard;
