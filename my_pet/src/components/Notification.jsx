import styled from "styled-components";
import "../css/popBut.css";
import "../css/popBut__sq-la.css";

const StyledDiv = styled.div`
    justify-self: end;
`

const Notification = () => {
    return ( <StyledDiv className="popBut popBut__sq-la"></StyledDiv> );
}

export default Notification;