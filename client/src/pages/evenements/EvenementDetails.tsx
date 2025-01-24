import { Link, useParams } from "react-router-dom";
import "./EvenementDetails.css";
import { useEffect, useState } from "react";

type Events = {
  id: number;
  name: string;
  short_description: string;
  description: string;
  schedule: string;
  img_src: string;
  zone_id: number;
};

function EvenemementDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState({} as Events);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/events/${id}`)
      .then((response) => response.json())
      .then((data: Events) => {
        setEvent(data);
      });
  }, [id]);

  return (
    <>
      <main className="event-details-main">
        <h1 className="event-details-title">{event.name}</h1>
        <p className="event-details-description">{event.description}</p>
        <h2> Horaires :</h2>
        <p className="event-details-schedule"> {event.schedule}</p>
        <p className="event-details-accroche">
          Plongez dans l’univers magique de Nintendream et laissez-vous emporter
          par des événements spectaculaires où chaque instant devient une
          aventure inoubliable, pour petits et grands rêveurs !
        </p>
        <Link to="/billetterie">
          <button type="button" className="event-details-button">
            Vers nos offres
          </button>
        </Link>
      </main>
    </>
  );
}

export default EvenemementDetails;
