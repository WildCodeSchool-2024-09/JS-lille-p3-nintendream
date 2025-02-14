import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HotelForm from "../../../components/hotel/HotelForm";

type hotel = {
  id: number;
  img: string;
  name: string;
  distance: number;
  hotel_price: string;
  description: string;
  secondary_description: string;
  tertiary_description: string;
};

function EditHotel() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null as null | hotel);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/hotel/${id}`)
      .then((response) => response.json())
      .then((data: hotel) => setHotel(data));
  }, [id]);

  return (
    hotel && (
      <HotelForm
        defaultValue={hotel}
        onSubmit={(hotelData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/hotel/${id}`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(hotelData),
          }).then((response) => {
            if (response.status === 204) {
              navigate("/hotels");
            }
          });
        }}
      >
        Modifier
      </HotelForm>
    )
  );
}

export default EditHotel;
