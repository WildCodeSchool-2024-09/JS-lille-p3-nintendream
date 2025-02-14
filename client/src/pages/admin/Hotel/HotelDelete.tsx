import { useParams } from "react-router-dom";
import HotelDeleteForm from "../../../components/hotel/HotelDeleteForm";
import "./HotelDelete.css";
import { UseTheme } from "../../../services/ThemeContext";

function HotelDelete() {
  const { id } = useParams();
  const numberId = Number(id);

  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";
  return (
    <main className={`form-hotel-main-container ${theme}`}>
      <h1 className="hotel-text-delete">
        {" "}
        ❌ Êtes-vous sûr de vouloir supprimer l'hôtel ? Attention ! Cette
        action est irréversible ❌
      </h1>
      <section className="hotel-button-delete">
        <HotelDeleteForm id={numberId}>Supprimer</HotelDeleteForm>
      </section>
    </main>
  );
}
export default HotelDelete;
