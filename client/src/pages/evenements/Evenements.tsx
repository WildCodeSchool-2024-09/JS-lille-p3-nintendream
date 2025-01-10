import { Link } from "react-router-dom";
import "./Evenements.css";

function Evenements() {
  const events = [
    {
      id: 1,
      name: "Mario kart live show : la course arc en ciel",
      shortdesc:
        "Rejoignez Mario et ses amis pour une course folle sur la piste arc-en-ciel, où l'univers du jeu vidéo prend vie avec des karts en taille réelle et une expérience interactive inédite ! ",
      imgsrc: "/imageEvents/mario-kart-event.jpg",
    },
    {
      id: 2,
      name: "Zelda: L'éveil du Héros du temps",
      shortdesc:
        "Partez à l'aventure dans une chasse au trésor épique pour retrouver la légendaire Master Sword ! Explorez le parc, résolvez des énigmes et devenez le héros du royaume de Hyrule.",
      imgsrc: "/imageEvents/zelda-quest-event.jpg",
    },
    {
      id: 3,
      name: "Donkey Kong Jungle Groove",
      shortdesc:
        "Un spectacle de percussions qui vous emmènera à travers la jungle de Donkey kong !",
      imgsrc: "/imageEvents/donkey-kong-event.jpg",
    },
  ];
  return (
    <main className="events-main">
      <h1 className="events-title">Évènements et spectacles</h1>
      <h2>
        Lors de votre visite, vous pourrez assister sans frais supplémentaires à
        différents évènements et spectacles touts plus enchanteurs les uns que
        les autres ! <br />
        Nous organisons régulièrement de nouveaux évènements pour faire de
        chacune de vos visite une expérience unique !
      </h2>
      <div className="events-all-cards">
        {events.map((event) => (
          <div key={event.id} className="events-card">
            <h3 className="events-card-title"> {event.name}</h3>
            <img src={event.imgsrc} className="events-picture" alt="" />
            <p className="events-shortdesc">{event.shortdesc}</p>
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
