import styled from "styled-components";
import "../css/popBut.css";

const StyledUl = styled.ul`
  margin: 0 1.5rem 2.75rem;
  display: flex;
  gap: 1.25rem;
  /* --- Jeg har fjernet scroll-funktionen, da det 'klipper' box-shadow af, så det ser grimt ud --- */
  /* overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  } */

  & > li {
    min-width: 4.75rem;
    max-width: 9rem;
    height: 2rem;
    list-style: none;
    text-align: center;
    line-height: 2rem;
    font-size: 0.875;
    /* Skriften ser federe ud end i figma, men det er samme værdi.. */
    font-weight: 700;
    color: var(--color-text);
  }
`;

const PetTypes = () => {
  return (
    <StyledUl>
      <li className="popBut">Cats</li>
      <li className="popBut">Dogs</li>
      <li className="popBut">Birds</li>
      <li className="popBut">Other</li>
    </StyledUl>
  );
};

export default PetTypes;
