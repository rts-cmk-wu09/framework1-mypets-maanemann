import styled from "styled-components";
import useAxios from "../useAxios";
import PetCard from "./PetCard";
// For later:
// import { Link } from "react-router-dom";

const StyledDiv = styled.div`
  margin: 0 1.5rem 2.75rem;
  display: grid;
  gap: 1.5rem;
`

const PetList = () => {
  return (
    <StyledDiv>
      <PetCard name={"Gordon Freeman"} />
      <PetCard name={"Alyx Vance"} />
      <PetCard name={"Barney Calhoun"} />
    </StyledDiv>
  );
};

{
  /* Her gik jeg i gang med at bygge et komponent med den data, Troels bruger nedenfor, men det resulterer i 404 og en masse fejl i konsollen : */
}
// const PetList = () => {
//   const [data] = useAxios();
//   return (
//     <ul style={{ listStyleType: "none" }}>
//       {data.animals.map((animal) => (
//         <li key={animal.id}>{animal.name}</li>
//       ))}
//     </ul>
//   );
// };

export default PetList;
