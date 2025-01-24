import "./RestaurantForm.css";
import { useNavigate } from "react-router-dom";

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

function RestaurantFrom({ defaultValue }: RestaurantFormProps) {
  const navigate = useNavigate();

  const handleSubmitNewRestaurant = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newRestaurant = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_URL}/api/restaurant`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate(`/admin/restaurant/${data.insertId}`);
      });
  };

  return (
    <form onSubmit={handleSubmitNewRestaurant} className="form-admin-container">
      <input
        type="text"
        name="name"
        defaultValue={defaultValue.name}
        placeholder="nom du restaurant"
        className="form-admin"
      />
      <input
        type="text"
        name="img"
        defaultValue={defaultValue.img}
        placeholder="image"
        className="form-admin"
      />
      <input
        type="text"
        name="intro"
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
        name="adult_price"
        defaultValue={defaultValue.adult_price}
        placeholder="prix adulte"
        className="form-admin"
      />
      <input
        type="text"
        name="kids_price"
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

export default RestaurantFrom;
