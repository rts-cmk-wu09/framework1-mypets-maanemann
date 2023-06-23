import { Routes, Route, useParams } from "react-router-dom";

const DetailsView = () => {
    let { id } = useParams();
    return ( <h1>
        {id}
    </h1> );
}
 
export default DetailsView;