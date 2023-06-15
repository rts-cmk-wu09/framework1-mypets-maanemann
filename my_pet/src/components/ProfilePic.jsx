import styled from "styled-components";
import "../css/popBut.css";
import "../css/popBut__sq-la.css";
import profPic from "../assets/profile_pic.png";

const StyledDiv = styled.div`
  padding: 1.5px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10rem;
`;

const ProfilePic = () => {
  // return <PopBut />;
  return (
    <StyledDiv className="popBut popBut__sq-la">
      <StyledImg src={profPic} alt="" />
    </StyledDiv>
  );
};

export default ProfilePic;
