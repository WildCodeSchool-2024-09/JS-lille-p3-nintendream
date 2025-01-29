import "./RestaurantForm.css";
import { useNavigate, useParams } from "react-router-dom";

type Restaurant = {
  id: number;
  name: string;
  img: string;
  intro: string;
  text: string;
  adult_price: number;
  kids_price: number;
};

interface RestaurantFormProps {
  defaultValue: Restaurant;
  onSubmit: (restaurant: Restaurant) => void;
}

function EditRestaurantForm({ defaultValue }: RestaurantFormProps) {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmitEditRestaurant = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const editRestaurant = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_URL}/api/restaurant/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editRestaurant),
    }).then((response) => {
      if (response.status === 204) {
        navigate("/admin/restaurant/${id}");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmitEditRestaurant}
      className="form-admin-container"
    >
      <input
        type="text"
        name="name"
        defaultValue={defaultValue.name}
        placeholder="name de restaurant"
        className="form-admin"
      />
      <input
        type="text"
        name="image"
        defaultValue={defaultValue.img}
        placeholder="image"
        className="form-admin"
      />
      <input
        type="text"
        name="paragraphe intro"
        defaultValue={defaultValue.intro}
        placeholder="paragraphe d'introduction"
        className="form-admin"
      />

      <input
        type="text"
        name="text"
        defaultValue={defaultValue.text}
        placeholder="text"
        className="form-admin"
      />
      <input
        type="text"
        name="prix adulte"
        defaultValue={defaultValue.adult_price}
        placeholder="prix adulte"
        className="form-admin"
      />
      <input
        type="text"
        name="prix enfant"
        defaultValue={defaultValue.kids_price}
        placeholder="prix enfant"
        className="form-admin"
      />

      <button type="submit" className="admin-form-button">
        Submit
      </button>
    </form>
  );
}

export default EditRestaurantForm;
