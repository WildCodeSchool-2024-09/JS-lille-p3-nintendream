import { useParams } from "react-router-dom";
import HotelDeleteForm from "../../../components/hotel/HotelDeleteForm";
import "./HotelDelete.css";

function HotelDelete() {
  const { id } = useParams();
  const numberId = Number(id);
  return (
    <>
      <h1 className="hotel-text-delete">
        {" "}
        ❌ Êtes-vous sûr de vouloir supprimer l'hôtel ? Attention ! Cette
        action est irréversible ❌
      </h1>
      <section className="hotel-button-delete">
        <HotelDeleteForm id={numberId}>Supprimer</HotelDeleteForm>
      </section>
    </>
  );
}
export default HotelDelete;
