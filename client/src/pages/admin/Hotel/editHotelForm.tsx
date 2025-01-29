import "./hotelForm.css";
import { useNavigate, useParams } from "react-router-dom";

type hotelData = {
	id: number;
	img: string;
	name: string;
	distance: string;
	hotel_price: string;
	description: string;
	secondary_description: string;
	tertiary_description: string;
};

interface hotelFormProps {
	defaultValue: hotelData;
	onSubmit: (hotel: hotelData) => void;
}

function EditHotelForm({ defaultValue }: hotelFormProps) {
	const navigate = useNavigate();
	const { id } = useParams();

	const handleSubmitEdithotel = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const edithotel = Object.fromEntries(formData.entries());

		fetch(`${import.meta.env.VITE_API_URL}/api/hotel/${id}`, {
			method: "put",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(edithotel),
		}).then((response) => {
			if (response.status === 204) {
				navigate("/admin");
			}
		});
	};

	return (
		<form onSubmit={handleSubmitEdithotel} className="form-admin-container">
			<input
				type="text"
				name="name"
				defaultValue={defaultValue.name}
				placeholder="nom de l'hotel"
				className="form-admin"
			/>
			<input
				type="text"
				name="img"
				defaultValue={defaultValue.img}
				placeholder="image de l'hotel"
				className="form-admin"
			/>
			<input
				type="text"
				name="distance"
				defaultValue={defaultValue.distance}
				placeholder="distance jusqu'a l'hotel"
				className="form-admin"
			/>

			<input
				type="text"
				name="hotel_price"
				defaultValue={defaultValue.hotel_price}
				placeholder="prix de hotel"
				className="form-admin"
			/>
			<input
				type="text"
				name="description"
				defaultValue={defaultValue.description}
				placeholder="description de l'hotel"
				className="form-admin"
			/>
			<input
				type="text"
				name="secondary_description"
				defaultValue={defaultValue.secondary_description}
				placeholder="deuxième description de l'hôtel"
				className="form-admin"
			/>
			<input
				type="text"
				name="tertiary_description"
				defaultValue={defaultValue.tertiary_description}
				placeholder="troisième description de l'hotel"
				className="form-admin"
			/>
			<button type="submit" className="admin-form-button">
				Modifier
			</button>
		</form>
	);
}

export default EditHotelForm;
