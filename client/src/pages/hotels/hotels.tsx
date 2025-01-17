import { Link } from "react-router-dom";
import "./hotels.css";

interface RoomsProps {
  id: number;
  img: string;
  title: string;
  description: string;
  price: string;
  linkTitle: string;
}

interface hotelsProps {
  id: number;
  img: string;
  name: string;
  distance: string;
  hotelPrice: string;
  description: string;
  secondaryDescription: string;
  tertiaryDescription: string;
  rooms: RoomsProps[];
}

const hotels: hotelsProps[] = [
  {
    id: 1,
    img: "/imagesHotel/pixel-paradise.webp",
    name: "Pixel Paradise Hotel",
    distance: "300 m du parc",
    hotelPrice: "Entre 90 et 200 €",
    description:
      "Niché dans un décor moderne et vibrant, le Pixel Paradise Hotel vous accueille pour un séjour inoubliable ! ",
    secondaryDescription:
      "Bienvenue au Pixel Hotel Paradise, un lieu magique où l'univers des jeux vidéo prend vie. Niché dans un décor moderne et vibrant, cet hôtel unique allie confort, créativité et une immersion totale dans la culture gaming",
    tertiaryDescription:
      "Bienvenue au Pixel Hotel Paradise, là où confort, modernité et convivialité se rencontrent pour créer le séjour parfait ! Nos 150 chambres élégantes et lumineuses, conçues pour accueillir de 1 à 5 personnes, s’adaptent à toutes vos envies, que vous voyagiez en solo, en couple ou en famille. Profitez d’un cadre contemporain où chaque détail a été pensé pour votre bien-être : Wi-Fi gratuit pour rester connecté, room service pour un confort absolu, et un accès direct à notre restaurant gourmet. Laissez-vous séduire par une cuisine savoureuse, variée et créative, qui ravira petits et grands. Après une journée bien remplie, détendez-vous dans un cocon où modernité et confort se conjuguent à la perfection. Que vous planifiez une escapade en famille, un week-end romantique ou un séjour prolongé, le Pixel Hotel Paradise promet de transformer chaque instant en un moment inoubliable. N’attendez plus pour vivre l’expérience Pixel Hotel Paradise – votre oasis de bonheur vous attend !",
    rooms: [
      {
        id: 1,
        img: "/imagesHotel/pixel-chambre1.webp",
        title: "Chambre 2 personnes, 25m²",
        description: "1 lit double ou 2 lits simples, pour 1 à 2 personnes",
        price: "90 €",
        linkTitle: "pixel-paradise-small-room",
      },
      {
        id: 2,
        img: "/imagesHotel/pixel-chambre2.webp",
        title: "Chambre 4 personnes 30m²",
        description:
          "2 lits doubles, ou 1 lit double et deux lits simples, pour 3 à 4 personnes",
        price: "130 €",
        linkTitle: "pixel-paradise-medium-room",
      },
      {
        id: 3,
        img: "/imagesHotel/pixel-chambre3.webp",
        title: "Chambre duplex 6 personnes, 40m²",
        description: "2 lits doubles et un lit superposé, pour 5 à 6 personnes",
        price: "200 €",
        linkTitle: "pixel-paradise-big-room",
      },
    ],
  },
  {
    id: 2,
    img: "/imagesHotel/dunkey-kong-hotel.webp",
    name: "Donkey Kong Jungle Resort",
    distance: "900 m du parc",
    hotelPrice: "Entre 120 et 299 €",
    description:
      "Plongez en immersion dans la jungle avec Donkey Kong et ses amis !",
    secondaryDescription:
      "Le Donkey Kong Jungle Resort vous invite à un séjour luxueux au cœur d'une jungle immersive, aux côtés de Donkey Kong et ses amis",
    tertiaryDescription:
      "Bienvenue au Donkey Kong Jungle Resort, un havre de luxe et d'aventure niché au cœur d'une jungle verdoyante et immersive ! Nos 120 chambres et suites spacieuses, pouvant accueillir de 1 à 6 personnes, offrent un cadre unique où confort et exotisme se rencontrent. Que vous voyagiez en solo, en couple, en famille ou entre amis, laissez-vous transporter dans l'univers sauvage de Donkey Kong et ses amis. Profitez d’équipements haut de gamme : Wi-Fi gratuit, room service personnalisé, et accès direct à notre spa tropical et restaurant gastronomique. Découvrez une cuisine inventive et raffinée, inspirée des saveurs de la jungle et pensée pour plaire à tous les palais. Après une journée riche en aventures, détendez-vous dans un décor mêlant nature luxuriante et élégance moderne. Que ce soit pour une escapade romantique ou un séjour inoubliable en famille, le Donkey Kong Jungle Resort promet une immersion totale dans un monde d’évasion et de confort. Plongez dès maintenant dans l’expérience unique du Donkey Kong Jungle Resort – votre aventure de rêve commence ici !",
    rooms: [
      {
        id: 1,
        img: "/imagesHotel/donkey-chambre1.jpg",
        title: "Chambre 2 personnes, 25m²",
        description: "1 lit double ou 2 lits simples, pour 1 à 2 personnes",
        price: "120 €",
        linkTitle: "donkey-small-room",
      },
      {
        id: 2,
        img: "/imagesHotel/donkey-chambre2.jpg",
        title: "Chambre 4 personnes 30m²",
        description:
          "2 lits doubles, ou 1 lit double et deux lits simples, pour 3 à 4 personnes",
        price: "230 €",
        linkTitle: "donkey-medium-room",
      },
      {
        id: 3,
        img: "/imagesHotel/donkey-chambre3.jpg",
        title: "Chambre duplex 6 personnes, 40m²",
        description: "2 lits doubles et un lit superposé, pour 5 à 6 personnes",
        price: "299 €",
        linkTitle: "donkey-big-room",
      },
    ],
  },
  {
    id: 3,
    img: "/imagesHotel/mario-hotel.webp",
    name: "Mario & Friends Hotel",
    distance: "600 m du parc",
    hotelPrice: "Entre 60 et 170 €",
    description:
      "Venez rencontrer Mario et ses amis dans un hôtel coloré et chaleureux !",
    secondaryDescription:
      "Le Mario & Friends Hotel vous accueille dans un univers chaleureux et ludique, idéal pour des séjours en famille. Partagez des moments inoubliables dans un cadre convivial, entouré de Mario et de ses amis emblématiques !",
    tertiaryDescription:
      "Bienvenue au Mario & Friends Hotel, un havre de convivialité et de divertissement où toute la famille peut se retrouver et s’amuser ! Nos 130 chambres lumineuses et colorées, pouvant accueillir de 1 à 5 personnes, offrent un cadre chaleureux et joyeux, parfait pour petits et grands. Plongez dans l’univers emblématique de Mario et ses amis, avec des décorations ludiques et des espaces pensés pour les moments de partage. Profitez d’équipements adaptés à toute la famille : Wi-Fi gratuit, aires de jeux interactives, et un accès direct à notre restaurant thématique. Savourez une cuisine variée et gourmande, inspirée des saveurs du Royaume Champignon, pour régaler tous les palais. Après une journée riche en aventures, détendez-vous dans un décor où amusement et confort se conjuguent à merveille. Que ce soit pour un week-end en famille, une fête d’anniversaire ou des vacances prolongées, le Mario & Friends Hotel promet des souvenirs inoubliables. Rejoignez-nous pour une expérience unique, où rires et moments magiques vous attendent à chaque coin de couloir !",
    rooms: [
      {
        id: 1,
        img: "/imagesHotel/mario-chambre1.png",
        title: "Chambre 2 personnes, 25m²",
        description: "1 lit double ou 2 lits simples, pour 1 à 2 personnes",
        price: "60 €",
        linkTitle: "mario-small-room",
      },
      {
        id: 2,
        img: "/imagesHotel/mario-chambre2.png",
        title: "Chambre 4 personnes 30m²",
        description:
          "2 lits doubles, ou 1 lit double et deux lits simples, pour 3 à 4 personnes",
        price: "99 €",
        linkTitle: "mario-medium-room",
      },
      {
        id: 3,
        img: "/imagesHotel/mario-chambre3.jpeg",
        title: "Chambre duplex 6 personnes, 40m²",
        description: "2 lits doubles et un lit superposé, pour 5 à 6 personnes",
        price: "170 €",
        linkTitle: "mario-big-room",
      },
    ],
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

        <section className="hotel-card-container">
          {hotels.map((hotel: hotelsProps) => (
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
                  <p className="hotel-card-price">{hotel.hotelPrice} </p>
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
