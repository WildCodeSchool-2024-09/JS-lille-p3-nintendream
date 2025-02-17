import { useNavigate } from "react-router-dom";

import RestaurantForm from "../../../components/restaurant/RestaurantForm";

function NewRestaurant() {
  const navigate = useNavigate();
  const newRestaurant = {
    name: "",
    img: "",
    intro: "",
    text: "",
    adult_price: 0,
    kids_price: 0,
  };
  return (
    <>
      <RestaurantForm
        defaultValue={newRestaurant}
        onSubmit={(restaurantData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/restaurant`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(restaurantData),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.insertId) {
                navigate(`/restaurants/${data.insertId}`);
              }
            });
        }}
      >
        Ajouter
      </RestaurantForm>
    </>
  );
}
export default NewRestaurant;
