import styled from "styled-components";
import HomeHeader from "../components/HomeHeader";
import PetList from "../components/PetList";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    color: lightcoral;
`

const ListView = (props) => {
  return (
    <>
        <HomeHeader />
        <PetList />
        <StyledLink to="/#">Link</StyledLink>
    </>
  );
};

export default ListView;


// --- Min gamle kode: ---
// 
// import HomeHeader from "../components/HomeHeader";
// 
// const HomeList = () => {
//   return (
//     <>
//       <p>content</p>
//       <HomeHeader />
//     </>
//   );
// };
// 
// export default HomeList;