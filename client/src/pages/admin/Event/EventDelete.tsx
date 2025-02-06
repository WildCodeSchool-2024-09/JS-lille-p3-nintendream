import { useParams } from "react-router-dom";
import EventDeleteForm from "../../../components/Event/EventDeleteForm";
import { UseTheme } from "../../../services/ThemeContext";

function EventDelete() {
  const { id } = useParams();
  const numberId = Number(id);
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";

  return (
    <main className={`form-event-main-container ${theme}`}>
      <h1>
        {" "}
        ❌ Êtes-vous sûr de vouloir supprimer l'évènement ? Attention ! Cette
        action est irréversible ❌
      </h1>
      <EventDeleteForm id={numberId}>Supprimer</EventDeleteForm>
    </main>
  );
}
export default EventDelete;
