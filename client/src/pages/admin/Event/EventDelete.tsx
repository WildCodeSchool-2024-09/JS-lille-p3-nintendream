import { useParams } from "react-router-dom";
import EventDeleteForm from "../../../components/Event/EventDeleteForm";

function EventDelete() {
  const { id } = useParams();
  const numberId = Number(id);
  return (
    <>
      <h1>
        {" "}
        ❌ Êtes-vous sûr de vouloir supprimer l'évènement ? Attention ! Cette
        action est irréversible ❌
      </h1>
      <EventDeleteForm id={numberId}>Supprimer</EventDeleteForm>
    </>
  );
}
export default EventDelete;
