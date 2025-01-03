import "./hotels.css";

interface hotelsProps {
  img: string;
  name: string;
  distance: number;
  description: string;
}

const hotels: hotelsProps[] = [
  {
    img: "./image/pixel-paradise.webp",
    name: "Pixel Paradise Hotel",
    distance: 300,
    description:
      "Niché dans un décor moderne et vibrant, le Pixel Paradise Hotel vous accueille pour un séjour inoubliable !",
  },
  {
    img: "/image/dunkey-kong-hotel.webp",
    name: "Donkey Kong Jungle Resort",
    distance: 900,
    description:
      "Plongez en immersion dans la jungle avec Donkey Kong et ses amis !",
  },
  {
    img: "/image/mario-hotel.webp",
    name: "Mario & Friends Hotel",
    distance: 600,
    description:
      "Venez rencontrer Mario et ses amis dans un hôtel coloré et chaleureux !",
  },
];

function HotelsPage() {
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
          Nintendream, nous avon tout ce qu'il vous faut !
        </p>

        <div className="hotel-card-container">
          {hotels.map((hotel: hotelsProps) => (
            <section key={hotel.name} className="hotel-card">
              <img src={hotel.img} alt="hotel" className="hotel-card-img" />
              <h2 className="hotel-card-name">{hotel.name}</h2>
              <hr className="first-line" />
              <div className="hotel-card-rows">
                <div className="hotel-card-distance-first-row">
                  <p className="hotel-card-distance">{hotel.distance}</p>
                </div>
                <div className="hotel-card-distance-second-row">
                  <hr className="second-line" /> <p>m du parc</p>
                </div>
              </div>
              <p className="hotel-card-description">{hotel.description}</p>
              <button type="button" className="hotel-card-button">
                Voir l'hôtel
              </button>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}

export default HotelsPage;
