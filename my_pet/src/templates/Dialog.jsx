import styled from "styled-components";
import Intro from "../components/Intro";

const StyledDiv = styled.div`
  margin: 0 1.5rem;
`;
const PageDots = styled.div`
  margin: 2rem auto 0 auto;
  width: fit-content;
  display: flex;
  gap: 3px;
`;
const InactDot = styled.div`
  width: 3px;
  height: 3px;
  background-color: rgba(85, 51, 234, 0.21);
  border-radius: 100px;
`;
const ActDot = styled.div`
  width: 18px;
  height: 3px;
  background-color: rgb(85, 51, 234);
  border-radius: 100px;
`;
const StyledBut = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin: 106px auto 46px auto;
  width: 100%;
  height: 44px;
  border-radius: 10rem;
  background-color: #57419d;
  color: white;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3), -10px -10px 30px #ffffff;
  /* font-weight: 700; */
`;

const Dialog = () => {
  return (
    <StyledDiv>
      <Intro />
      <PageDots>
        <InactDot></InactDot>
        <InactDot></InactDot>
        <ActDot></ActDot>
      </PageDots>
      <StyledBut>Skip</StyledBut>
    </StyledDiv>
  );
};

export default Dialog;
