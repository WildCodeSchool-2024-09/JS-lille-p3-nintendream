import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type EventDeleteFormProps = {
  id: number;
  children: ReactNode;
};

function EventDeleteForm({ id, children }: EventDeleteFormProps) {
  const navigate = useNavigate();

  const storedData = localStorage.getItem("userAndToken");
  if (!storedData) {
    throw new Error("storedData is null");
  }
  const userAndToken = JSON.parse(storedData);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        fetch(`${import.meta.env.VITE_API_URL}/api/events/${id}`, {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userAndToken.token}`,
          },
        }).then((response) => {
          if (response.status === 204) {
            navigate("/admin");
          }
        });
      }}
    >
      <button type="submit" className="admin-form-event-button">
        {children}
      </button>
    </form>
  );
}

export default EventDeleteForm;
