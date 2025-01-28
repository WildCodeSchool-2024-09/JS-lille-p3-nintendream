import { useNavigate } from "react-router-dom";
import EventForm from "../../../components/Event/EventFom";

function NewEvent() {
  const navigate = useNavigate();
  const newEvent = {
    name: "",
    short_description: "",
    description: "",
    schedule: "",
    img_src: "",
    zone_id: 0,
  };
  return (
    <>
      <EventForm
        defaultValue={newEvent}
        onSubmit={(eventData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/events`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(eventData),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.insertId) {
                navigate(`/evenements/${data.insertId}`);
              }
            });
        }}
      >
        Ajouter
      </EventForm>
    </>
  );
}
export default NewEvent;
