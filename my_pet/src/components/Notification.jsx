import styled from "styled-components";
import "../css/popBut.css";
import "../css/popBut__sq-la.css";

const StyledDiv = styled.div`
  justify-self: end;
  display: grid;
  & > i {
    display: block;
    margin: auto;
    color: var(--bright-accent);
  }
`;

const Notification = () => {
  return (
    <StyledDiv className="popBut popBut__sq-la">
      <i className={"fa-regular fa-bell"}></i>
    </StyledDiv>
  );
};

export default Notification;
