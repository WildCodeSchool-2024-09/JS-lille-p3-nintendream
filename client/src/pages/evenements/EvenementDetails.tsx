import { Link, useParams } from "react-router-dom";
import "./EvenementDetails.css";
import { useEffect, useState } from "react";
import { UseTheme } from "../../services/ThemeContext";

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
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/events/${id}`)
      .then((response) => response.json())
      .then((data: Events) => {
        setEvent(data);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className={`event-details-main ${theme}`}>
        <h1 className={`event-details-title ${theme}`}>{event.name}</h1>
        <p className={`event-details-description ${theme}`}>
          {event.description}
        </p>
        <h2 className={`event-details-h2 ${theme}`}> Horaires :</h2>
        <p className={`event-details-schedule ${theme}`}> {event.schedule}</p>
        <p className={`event-details-accroche ${theme}`}>
          Plongez dans l’univers magique de Nintendream et laissez-vous emporter
          par des événements spectaculaires où chaque instant devient une
          aventure inoubliable, pour petits et grands rêveurs !
        </p>
        <Link to="/billetterie">
          <button type="button" className={`event-details-button ${theme}`}>
            Vers nos offres
          </button>
        </Link>
      </main>
    </>
  );
}

export default EvenemementDetails;
