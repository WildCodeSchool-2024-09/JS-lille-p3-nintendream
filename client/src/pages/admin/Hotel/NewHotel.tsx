import { useNavigate } from "react-router-dom";
import HotelForm from "../../../components/hotel/HotelForm";

function NewHotel() {
  const navigate = useNavigate();
  const newHotel = {
    id: 0,
    img: "",
    name: "",
    distance: 0,
    hotel_price: "",
    description: "",
    secondary_description: "",
    tertiary_description: "",
  };
  return (
    <>
      <HotelForm
        defaultValue={newHotel}
        onSubmit={(eventData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/hotels`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(eventData),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.insertId) {
                navigate("/admin");
              }
            });
        }}
      >
        Ajouter
      </HotelForm>
    </>
  );
}
export default NewHotel;
