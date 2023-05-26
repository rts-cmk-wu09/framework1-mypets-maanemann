import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-transform: capitalize;
`;
const StyledP = styled.p`
  text-align: center;
  font-size: 1rem;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  color: #828282;
`;

const Intro = () => {
  return (
    <>
      <StyledH1>My pets</StyledH1>
      <StyledP>
        Taking care of a pet is my favorite, it helps me to gaimr stress and
        fatigue.
      </StyledP>
    </>
  );
};

export default Intro;
