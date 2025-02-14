import { useNavigate } from "react-router-dom";
import EventForm from "../../../components/Event/EventForm";

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
  
  const storedData = localStorage.getItem("userAndToken");
let userAndToken = { user: "", token: "" };
if (storedData) {
  userAndToken = JSON.parse(storedData);
}

  return (
    <>
      <EventForm
        defaultValue={newEvent}
        onSubmit={(eventData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/events`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${userAndToken.token}`,
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
