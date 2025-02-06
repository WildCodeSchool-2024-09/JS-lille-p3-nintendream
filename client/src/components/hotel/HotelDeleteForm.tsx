import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type HotelDeleteFormProps = {
  id: number;
  children: ReactNode;
};

function HotelDeleteForm({ id, children }: HotelDeleteFormProps) {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(hotel) => {
        hotel.preventDefault();
        fetch(`${import.meta.env.VITE_API_URL}/api/hotel/${id}`, {
          method: "delete",
        }).then((response) => {
          if (response.status === 204) {
            navigate("/admin");
          }
        });
      }}
    >
      <button type="submit">{children}</button>
    </form>
  );
}

export default HotelDeleteForm;
