import "./HotelForm.css";
import { useNavigate, useParams } from "react-router-dom";

function DeletehotelForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmitDeletehotel = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/api/hotels/${id}`, {
      method: "delete",
    }).then((response) => {
      if (response.status === 204) {
        navigate("/hotels");
      }
    });
  };

  return (
    <form onSubmit={handleSubmitDeletehotel} className="form-admin-container">
      <h1 className="delete-title-form">
        ❌ Êtes-vous sûr de vouloir supprimer l'hotel ? Attention ! Cette action
        est irréversible ❌
      </h1>
      <button type="submit" className="admin-form-button">
        Supprimer
      </button>
    </form>
  );
}

export default DeletehotelForm;
