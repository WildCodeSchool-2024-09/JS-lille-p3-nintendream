import "./HotelDetails.css";
import { useLocation, useParams } from "react-router-dom";

interface RoomsProps {
  id: number;
  img: string;
  title: string;
  description: string;
}

const rooms: RoomsProps[] = [
  {
    id: 1,
    img: "/imagesHotel/pixel-chambre1.webp",
    title: "Chambre 2 personnes, 25m²",
    description: "1 lit double ou 2 lits simples, pour 1 à 2 personnes",
  },
  {
    id: 2,
    img: "/imagesHotel/pixel-chambre2.webp",
    title: "Chambre 4 personnes 30m²",
    description:
      "2 lits doubles, ou 1 lit double et deux lits simples, pour 3 à 4 personnes",
  },
  {
    id: 3,
    img: "/imagesHotel/pixel-chambre3.webp",
    title: "Chambre duplex 6 personnes, 40m²",
    description: "2 lits doubles et un lit superposé, pour 5 à 6 personnes",
  },
];

function HotelDetails() {
  const location = useLocation();

  //store the state in a variable if you want
  //location.state then the property or object you want

  const hotel = location.state;

  const { id } = useParams();

  return (
    <main className="hotel-details-container">
      <section className="hotel-main-photo">
        <img
          src="/imagesHotel/pixel-paradise.webp"
          alt="pixel paradise hotel"
          className="paradise-hotel-img"
        />
        <h1 className="hotel-name">{hotel.title}</h1>
        <p className="hotel-description-img">
          Bienvenue au Pixel Hotel Paradise, un lieu magique où l'univers des
          jeux vidéo prend vie. Niché dans un décor moderne et vibrant, cet
          hôtel unique allie confort, créativité et une immersion totale dans la
          culture gaming
        </p>
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
          Bienvenue au Pixel Hotel Paradise, là où confort, modernité et
          convivialité se rencontrent pour créer le séjour parfait ! Nos 150
          chambres élégantes et lumineuses, conçues pour accueillir de 1 à 5
          personnes, s’adaptent à toutes vos envies, que vous voyagiez en solo,
          en couple ou en famille. Profitez d’un cadre contemporain où chaque
          détail a été pensé pour votre bien-être : Wi-Fi gratuit pour rester
          connecté, room service pour un confort absolu, et un accès direct à
          notre restaurant gourmet. Laissez-vous séduire par une cuisine
          savoureuse, variée et créative, qui ravira petits et grands. Après une
          journée bien remplie, détendez-vous dans un cocon où modernité et
          confort se conjuguent à la perfection. Que vous planifiez une escapade
          en famille, un week-end romantique ou un séjour prolongé, le Pixel
          Hotel Paradise promet de transformer chaque instant en un moment
          inoubliable. N’attendez plus pour vivre l’expérience Pixel Hotel
          Paradise – votre oasis de bonheur vous attend !
        </p>
      </section>
      <section className="hotel-rooms-container">
        <h2 className="hotel-rooms-title">Nos chambres</h2>

        <section className="hotel-rooms">
          {rooms.map((room: RoomsProps) => (
            <section key={room.title} className="room-card">
              <img src={room.img} alt={room.title} className="room-card-img" />
              <h3 className="room-card-title">{room.title}</h3>
              <p className="room-card-description">{room.description}</p>
            </section>
          ))}
        </section>
      </section>
    </main>
  );
}

export default HotelDetails;
