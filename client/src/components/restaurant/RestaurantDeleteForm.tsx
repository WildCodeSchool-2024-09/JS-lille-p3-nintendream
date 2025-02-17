import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import "./RestaurantForm.  css";

type RestaurantDeleteFormProps = {
  id: number;
  children: ReactNode;
};

function RestaurantDeleteForm({ id, children }: RestaurantDeleteFormProps) {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(restaurant) => {
        restaurant.preventDefault();
        fetch(`${import.meta.env.VITE_API_URL}/api/restaurant/${id}`, {
          method: "delete",
        }).then((response) => {
          if (response.status === 204) {
            navigate("/admin");
          }
        });
      }}
    >
      <button type="submit" className="admin-form-restaurant-button">
        {children}
      </button>
    </form>
  );
}

export default RestaurantDeleteForm;
