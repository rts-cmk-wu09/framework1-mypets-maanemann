import styled from "styled-components";
import ProfilePic from "./ProfilePic";
import Location from "./Location";
import Notification from "./Notification";

const StyledSection = styled.section`
  max-width: 375px;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 2.5rem 1fr 2.5rem;
  margin: 16px 24px 40px 24px;
`;

const TopBar = () => {
  return (
    <StyledSection>
      <ProfilePic />
      <Location />
      <Notification />
    </StyledSection>
  );
};

export default TopBar;
