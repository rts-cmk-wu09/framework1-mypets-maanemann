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
        {/* Her gik jeg i gang med at bygge et komponent med den data, Troels bruger nedenfor, men det resulterer i 404 og en masse fejl i konsollen: */}
        {/* <PetList /> */}

        {/* Troels' mystiske kode : */}
        {error && <p>Der opstod en fejl...</p>}
        {loading && <p>loading...</p>}
        {data && (
        <ul style={{ listStyleType: "none" }}>
            {data.animals.map((animal) => (
            <li key={animal.id}>{animal.name}</li>
            ))}
        </ul>
        )}
        <StyledLink to="/detailsview">Link</StyledLink>
    </>
  );
};

export default ListView;


// --- WIREFRAME : ---
// 
    // HomeHeader
        // ProfilePeak
            // ProfilePic
                // PopBut (props)
            // CurrLocation
            // Bell
                // PopBut (props)
        // PetTypes
            // CatsBut etc..
                // PopBut (props)
    // PetList
        // GreyhCard
            // PetImg (props)
            // PetTitle (props)
            // PetLoca (props)
            // PetDescr (props)
            // HeartBut
                // PopBut (props)
        // DoberCard
            // Etc...
        // Etc..
    // HomeFooter
        // HomeBut
            // PopBut (props)
        // MessBut
            // PopBut (props)
        // FaveBut
            // PopBut (props)
        // ProfBut
            // PopBut (props)


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