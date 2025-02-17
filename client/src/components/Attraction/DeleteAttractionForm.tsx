import "./AttractionForm.css";
import { useNavigate, useParams } from "react-router-dom";
import { UseTheme } from "../../services/ThemeContext";

function DeleteAttractionForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmitDeleteAttraction = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/api/attractions/${id}`, {
      method: "delete",
    }).then((response) => {
      if (response.status === 204) {
        navigate("/admin");
      }
    });
  };

  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";

  return (
    <main className={`form-attraction-main-container ${theme}`}>
      <form
        onSubmit={handleSubmitDeleteAttraction}
        className="form-admin-container"
      >
        <h1 className={`delete-title-form ${theme}`}>
          ❌ Êtes-vous sûr de vouloir supprimer l'attraction ? Attention ! Cette
          action est irréversible ❌
        </h1>
        <button type="submit" className="admin-form-button">
          Supprimer
        </button>
      </form>
    </main>
  );
}

export default DeleteAttractionForm;
