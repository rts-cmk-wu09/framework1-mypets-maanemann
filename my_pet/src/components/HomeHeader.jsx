import styled from "styled-components";
import TopBar from "./TopBar";
import PetTypes from "./PetTypes";

const StyledDiv = styled.div`
  width: 100%;
  padding: 1px;
`

const HomeHeader = () => {
  return (
    <StyledDiv>
      <TopBar />
      <PetTypes />
    </StyledDiv>
  );
};

export default HomeHeader;
