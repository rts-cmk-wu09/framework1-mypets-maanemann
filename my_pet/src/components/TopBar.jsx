import styled from "styled-components";
import ProfilePic from "./ProfilePic";
import Location from "./Location";

const StyledSection = styled.section`
  display: flex;
  margin: 16px 24px 40px 24px;
`;

const TopBar = () => {
  return (
    <StyledSection>
      <ProfilePic />
      <Location />
    </StyledSection>
  );
};

export default TopBar;
