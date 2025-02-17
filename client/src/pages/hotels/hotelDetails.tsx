import "./HotelDetails.css";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { UseTheme } from "../../services/ThemeContext";

interface room {
  title: string;
  img: string;
  description: string;
  price: number;
  link_title: string;
}

function HotelDetails() {
  const { id } = useParams();
  const [rooms, setrooms] = useState([] as room[]);
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/hotel/${id}/rooms`)
      .then((response) => response.json())
      .then((data: room[]) => {
        setrooms(data);
      });
  }, [id]);

  const location = useLocation();
  const hotels = location.state;

  return (
    <main className={`hotel-details-container ${theme}`}>
      <section className="hotel-main-photo">
        <img
          src={hotels.img}
          alt="pixel paradise hotel"
          className="paradise-hotel-img"
        />
        <h1 className="hotel-name">{hotels.name}</h1>
        <p className="hotel-description-img">{hotels.secondary_description}</p>
      </section>
      <section className={`hotel-details ${theme}`}>
        <ul className="hotel-details-list">
          <li className="hotel-detail-point">Accès au parc à pieds</li>
          <li className="hotel-detail-point">Parking gratuit</li>
          <li className="hotel-detail-point">Rencontre avec les personnages</li>
          <li className="hotel-detail-point">
            Accès au parc 30 minutes plus tôt
          </li>
        </ul>
      </section>
      <section className={`hotel-description-title ${theme}`}>
        <h2 className="hotel-description-title">Notre hôtel</h2>
        <p className="hotel-description-details">
          {hotels.tertiary_description}
        </p>
      </section>
      <section className="hotel-rooms-container">
        <h2 className={`hotel-description-title ${theme}`}>Nos chambres</h2>

        <section className="hotel-rooms">
          {rooms.map((room: room) => (
            <section key={room.title} className={`room-card ${theme}`}>
              <img src={room.img} alt={room.title} className="room-card-img" />
              <h2 className="room-card-title">{room.title}</h2>
              <p className="room-card-description">{room.description}</p>
              <article className="white-box-room">
                <p className="room-card-price">{room.price}</p>
              </article>
              <Link to={`/reservation/${room.link_title}`}>
                <button type="button"> Réserver</button>
              </Link>
            </section>
          ))}
        </section>
      </section>
    </main>
  );
}

export default HotelDetails;
