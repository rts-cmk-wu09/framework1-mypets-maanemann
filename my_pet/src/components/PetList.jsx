import useAxios from "../useAxios";
// For later:
// import { Link } from "react-router-dom";

const PetList = () => {
  const [data] = useAxios();
  return (
    <ul style={{ listStyleType: "none" }}>
      {data.animals.map((animal) => (
        <li key={animal.id}>{animal.name}</li>
      ))}
    </ul>
  );
};

export default PetList;
