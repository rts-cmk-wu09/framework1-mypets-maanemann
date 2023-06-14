import useAxios from "../useAxios";
import styled from "styled-components";
import HomeHeader from "../components/HomeHeader";
import PetList from "../components/PetList";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    color: lightcoral;
`

const ListView = (props) => {
  const [data, error, loading] = useAxios();
  return (
    <>
        <HomeHeader />
        <PetList />

        {/* Troels' mystiske kode : */}
        {error && <p>Der opstod en fejl...</p>}
        {loading && <p>loading...</p>}
        {data && (
        <ul style={{ listStyleType: "none" }}>
            {data.animals.map((animal) => (
            <li key={animal.id}>{animal.name} {animal.type}</li>
            ))}
        </ul>
        )}
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