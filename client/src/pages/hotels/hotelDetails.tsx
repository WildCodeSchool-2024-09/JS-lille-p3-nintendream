import "./HotelDetails.css";
import { useLocation } from "react-router-dom";

interface RoomsProps {
  id: number;
  img: string;
  title: string;
  description: string;
  price: string;
}

function HotelDetails() {
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
        <p className="hotel-description-img">{hotels.secondaryDescription}</p>
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
          {hotels.tertiaryDescription}
        </p>
      </section>
      <section className="hotel-rooms-container">
        <h2 className="hotel-rooms-title">Nos chambres</h2>

        <section className="hotel-rooms">
          {hotels.rooms.map((room: RoomsProps) => (
            <section key={room.title} className="room-card">
              <img src={room.img} alt={room.title} className="room-card-img" />
              <h2 className="room-card-title">{room.title}</h2>
              <p className="room-card-description">{room.description}</p>
              <article className="white-box-room">
                <p className="room-card-price">{room.price}</p>
              </article>
            </section>
          ))}
        </section>
      </section>
    </main>
  );
}

export default HotelDetails;
