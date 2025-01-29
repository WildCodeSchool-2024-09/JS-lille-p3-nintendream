import "./HotelForm.css";
import { useNavigate, useParams } from "react-router-dom";

function DeleteHotelForm() {
	const navigate = useNavigate();
	const { id } = useParams();

	const handleSubmitDeletehotel = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		fetch(`${import.meta.env.VITE_API_URL}/api/hotel/${id}`, {
			method: "delete",
		}).then((response) => {
			if (response.status === 204) {
				navigate("/admin");
			} else {
				alert("Erreur lors de la suppression de l'hotel");
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

export default DeleteHotelForm;
