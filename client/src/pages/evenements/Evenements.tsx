import { Link } from "react-router-dom";
import "./Evenements.css";
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
function Evenements() {
  const [events, setEvents] = useState([] as Events[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/events`)
      .then((response) => response.json())
      .then((data: Events[]) => {
        setEvents(data);
      });
  }, []);

  return (
    <main className="events-main">
      <h1 className="events-title">Évènements et spectacles</h1>
      <h2 className="events-global-desc">
        Lors de votre visite, vous pourrez assister sans frais supplémentaires à
        différents évènements et spectacles touts plus enchanteurs les uns que
        les autres ! <br />
        Nous organisons régulièrement de nouveaux évènements pour faire de
        chacune de vos visite une expérience unique !
      </h2>
      <div className="events-all-cards">
        {events?.map((event) => (
          <div key={event.id} className="events-card">
            <h3 className="events-card-title"> {event.name}</h3>
            <img src={event.img_src} className="events-picture" alt="" />
            <p className="events-shortdesc">{event.short_description}</p>
            <Link to={`/evenements/${event.id}`}>
              <button type="button" className="events-details-button">
                Détails
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Evenements;
