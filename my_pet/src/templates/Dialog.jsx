import styled from "styled-components";
import Intro from "../components/Intro";

const StyledDiv = styled.div`
  margin: 0 1.5rem;
`;
const StyledBut = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  margin: 106px auto 46px auto;
  width: 100%;
  height: 44px;
  border-radius: 100px;
  background-color: #57419d;
  color: white;
  /* font-weight: 700; */
`;
const PageDots = styled.div`
  margin: 0 auto;
  width: fit-content;
  display: flex;
  gap: 3px;
`;
const InactDot = styled.div`
  width: 3px;
  height: 3px;
  background-color: gray;
`;

const Dialog = () => {
  return (
    <StyledDiv>
      <Intro />
      <PageDots>
        <InactDot></InactDot>
        <InactDot></InactDot>
      </PageDots>
      <StyledBut>Skip</StyledBut>
    </StyledDiv>
  );
};

export default Dialog;
