import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RestaurantForm from "../../../components/restaurant/RestaurantForm";

interface Restaurant {
  id: number;
  name: string;
  img: string;
  intro: string;
  text: string;
  adult_price: number;
  kids_price: number;
}

function RestaurantEdit() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/restaurant/${id}`)
      .then((response) => response.json())
      .then((data: Restaurant) => {
        setRestaurant(data);
      });
  }, [id]);

  return (
    <>
      {restaurant && (
        <RestaurantForm
          defaultValue={restaurant}
          onSubmit={(restaurantData) => {
            fetch(`${import.meta.env.VITE_API_URL}/api/restaurant/${id}`, {
              method: "put",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(restaurantData),
            }).then((response) => {
              if (response.status === 204) {
                navigate("/admin");
              }
            });
          }}
        >
          Modifier
        </RestaurantForm>
      )}
    </>
  );
}

export default RestaurantEdit;
