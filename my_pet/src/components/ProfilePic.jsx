import styled from "styled-components";
import "../css/popBut.css";
import profPic from "../assets/profile_pic.png";

const StyledDiv = styled.div`
  width: 40px;
  height: 40px;
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
    <StyledDiv className="popBut">
      <StyledImg src={profPic} alt="" />
    </StyledDiv>
  );
};

export default ProfilePic;
