import { useParams } from "react-router-dom";

function EvenemementDetails() {
  const { id } = useParams();
  return <h1>coucou {id}</h1>;
}

export default EvenemementDetails;
