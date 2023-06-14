import styled from "styled-components";
import TopBar from "./TopBar";

const StyledDiv = styled.div`
  padding: 1px;
`

const HomeHeader = () => {
  return (
    <StyledDiv>
      <TopBar />
      {/* <PetTypes /> */}
    </StyledDiv>
  );
};

export default HomeHeader;
