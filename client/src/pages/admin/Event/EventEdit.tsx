import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventForm from "../../../components/Event/EventForm";
interface Event {
  id: number;
  name: string;
  short_description: string;
  description: string;
  schedule: string;
  img_src: string;
  zone_id: number;
}
const storedData = localStorage.getItem("userAndToken");
if (!storedData) {
  throw new Error("storedData is null");
}
const userAndToken = JSON.parse(storedData);

function EventEdit() {
  const { id } = useParams();
  const [event, setEvent] = useState(null as null | Event);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/events/${id}`)
      .then((response) => response.json())
      .then((data: Event) => setEvent(data));
  }, [id]);

  return (
    event && (
      <EventForm
        defaultValue={event}
        onSubmit={(eventData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/events/${id}`, {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userAndToken.token}`,
            },
            body: JSON.stringify(eventData),
          }).then((response) => {
            if (response.status === 204) {
              navigate(`/evenements/${event.id}`);
            }
          });
        }}
      >
        Modifier
      </EventForm>
    )
  );
}

export default EventEdit;
