import "./RestaurantForm.css";
import { useNavigate, useParams } from "react-router-dom";
import { UseTheme } from "../../../services/ThemeContext";

function DeleteRestaurantForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmitDeleteRestaurant = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/api/restaurant/${id}`, {
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
    <main className={`form-restaurant-main-container ${theme}`}>
      <form
        onSubmit={handleSubmitDeleteRestaurant}
        className="form-admin-container"
      >
        <h1 className="delete-title-form">
          ❌ Êtes-vous sûr de vouloir supprimer le restaurant ? Attention !
          Cette action est irréversible ❌
        </h1>
        <button type="submit" className="admin-form-button">
          Delete
        </button>
      </form>
    </main>
  );
}

export default DeleteRestaurantForm;
