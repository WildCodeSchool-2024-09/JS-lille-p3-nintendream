import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

type EventDeleteFormProps = {
  id: number;
  children: ReactNode;
};

function EventDeleteForm({ id, children }: EventDeleteFormProps) {
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        fetch(`${import.meta.env.VITE_API_URL}/api/events/${id}`, {
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

export default EventDeleteForm;
