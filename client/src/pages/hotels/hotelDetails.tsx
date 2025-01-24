import "./HotelDetails.css";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

interface Rooms {
  title: string;
  img: string;
  description: string;
  price: string;
  link_title: string;
}

function HotelDetails() {
  const { id } = useParams();
  const [rooms, setrooms] = useState([] as Rooms[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/hotel/${id}`)
      .then((response) => response.json())
      .then((data: Rooms[]) => {
        setrooms(data);
      });
  }, [id]);

  const location = useLocation();
  const hotels = location.state;

  return (
    <main className="hotel-details-container">
      <section className="hotel-main-photo">
        <img
          src={hotels.img}
          alt="pixel paradise hotel"
          className="paradise-hotel-img"
        />
        <h1 className="hotel-name">{hotels.name}</h1>
        <p className="hotel-description-img">{hotels.secondary_description}</p>
      </section>
      <section className="hotel-details">
        <ul className="hotel-details-list">
          <li className="hotel-detail-point">Accès au parc à pieds</li>
          <li className="hotel-detail-point">Parking gratuit</li>
          <li className="hotel-detail-point">Rencontre avec les personnages</li>
          <li className="hotel-detail-point">
            Accès au parc 30 minutes plus tôt
          </li>
        </ul>
      </section>
      <section className="hotel-description">
        <h2 className="hotel-description-title">Notre hôtel</h2>
        <p className="hotel-description-details">
          {hotels.tertiary_description}
        </p>
      </section>
      <section className="hotel-rooms-container">
        <h2 className="hotel-rooms-title">Nos chambres</h2>

        <section className="hotel-rooms">
          {rooms.map((room: Rooms) => (
            <section key={room.title} className="room-card">
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
