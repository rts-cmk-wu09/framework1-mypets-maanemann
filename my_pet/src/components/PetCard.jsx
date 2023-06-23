import styled from "styled-components";
import "../css/popBut.css";
import dog from "../assets/dog_PNG50363.png";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const StyledArticle = styled.article`
  height: 8.125rem;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  color: #333333;
  & > img {
    height: 100%;
    width: auto;
  }
  & > div {
    max-height: 7rem;
    overflow: hidden;
    margin-right: 2rem;
  }
  & > div:nth-child(3) {
    max-height: 1rem;
    overflow: hidden;
  }
`;

const StyledCiLoca = styled(CiLocationOn)`
  color: var(--bright-accent);
`;

const PetCard = ({ name, location, description, id }) => {
  return (
    <Link to={`/details/${id}`}>
      <StyledArticle className="popBut__card">
        <img src={dog} alt="A pet" />
        <div>
          <h2>{name}</h2>
          <p className="location">
            <StyledCiLoca></StyledCiLoca>
            {location}
          </p>
          <p>{description}</p>
        </div>
      </StyledArticle>
    </Link>
  );
};

export default PetCard;
