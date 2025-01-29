import { Link } from "react-router-dom";
import "./hotels.css";
import { useEffect, useState } from "react";

interface hotels {
  id: number;
  img: string;
  name: string;
  distance: string;
  hotel_price: string;
  description: string;
  secondary_description: string;
  tertiary_description: string;
}

function HotelsPage() {
  const [hotels, sethotelsProps] = useState([] as hotels[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/hotels`)
      .then((response) => response.json())
      .then((data: hotels[]) => {
        sethotelsProps(data);
      });
  }, []);

  return (
    <>
      <main className="hotels-container">
        <h1 className="main-title-hotel">Nos hôtels</h1>
        <p className="hotels-description">
          {" "}
          Découvez notre sélection d'hôtels ! Vous cherchez un hôtel familial
          pour faire rêver votre enfant ? Ou bien préférez-vous un hôtel plus
          luxueux pour vous détendre après une journée de visite ? Ou encore un
          hôtel économique pour profiter de votre séjour sans vous ruiner ? À
          Nintendream, nous avons tout ce qu'il vous faut !
        </p>

        <section className="hotel-card-container">
          {hotels.map((hotel: hotels) => (
            <article key={hotel.name} className="hotel-card">
              <img src={hotel.img} alt="hotel" className="hotel-card-img" />
              <h2 className="hotel-card-name">{hotel.name}</h2>
              <hr className="first-line" />
              <div className="hotel-card-rows">
                <div className="hotel-card-distance-first-row">
                  <p className="hotel-card-distance">{hotel.distance}</p>
                </div>
                <div className="hotel-card-distance-second-row">
                  <hr className="second-line" />{" "}
                  <p className="hotel-card-price">{hotel.hotel_price} </p>
                </div>
              </div>
              <p className="hotel-card-description">{hotel.description}</p>
              <Link to={`/hotel/${hotel.id}`} state={hotel}>
                <button type="button" className="hotel-card-button">
                  Voir l'hôtel
                </button>
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export default HotelsPage;
