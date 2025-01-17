import "./Restaurant.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

interface Restaurant {
  id: number;
  nom: string;
  img: string;
  intro: string;
  texte: string;
  prix_adulte: number;
  prix_enfants: number;
}
const resto: Restaurant[] = [
  {
    id: 1,
    nom: "Champignon Gourmet",
    img: "/imgRestaurant/image1.webp",
    intro:
      "Plongez dans l’univers magique de Mario avec Le Champignon Gourmet, un restaurant où la gastronomie rencontre l’aventure ! Savourez des plats créatifs inspirés du Royaume Champignon : des pizzas en forme de Super Étoiles, des burgers aux pains colorés comme les blocs  et des desserts rappelant les célèbres champignons rouges et verts. Dans un décor immersif mêlant tuyaux géants, briques suspendues et musique entraînante, vivez une expérience culinaire unique qui ravira petits et grands aventuriers.",
    texte:
      "Un restaurant inspiré de l’univers de Mario, avec des plats en forme de champignons, d’étoiles ou de carapaces.",
    prix_adulte: 29,
    prix_enfants: 16,
  },
  {
    id: 2,
    nom: "Zelda's Feast",
    img: "/imgRestaurant/image3.jpg",
    intro:
      "Zelda's Feast vous invite à une expérience culinaire inspirée de l'univers magique de The Legend of Zelda. Plongez dans une ambiance médiévale avec des plats raffinés et traditionnels dignes des festins d'Hyrule. Savourez des mets savoureux tels que des viandes rôties, des soupes artisanales, et des desserts faits maison, préparés avec soin pour vous offrir une expérience gastronomique inoubliable. L'atmosphère chaleureuse et conviviale du restaurant vous transporte dans un cadre féerique, idéal pour les fans de la saga. Que vous soyez un adulte ou un enfant, Zelda's Feast propose une expérience culinaire pour tous les âges.",
    texte:
      "Une ambiance médiévale avec des plats dignes des banquets d’Hyrule. Parfait pour les fans de la série The Legend of Zelda.",
    prix_adulte: 19,
    prix_enfants: 12,
  },
  {
    id: 3,
    nom: "Donkey Kong Grill",
    img: "/imgRestaurant/image2.webp",
    intro:
      "Donkey Kong Grill vous emmène au cœur d'une jungle tropicale où les saveurs exotiques prennent vie. Inspiré par l'univers de Donkey Kong, ce restaurant offre une expérience unique avec des plats savoureux à base de viandes grillées, de fruits frais et de légumes croquants. Dans une ambiance chaleureuse et décontractée, vous pourrez déguster des mets tels que des brochettes juteuses, des hamburgers aux saveurs authentiques et des spécialités aux accents tropicaux. Un véritable festin pour les amateurs de cuisine grillée, tout en étant plongé dans un cadre immersif à la manière de la célèbre jungle. Donkey Kong Grill est le lieu parfait pour un repas en famille ou entre amis, à tout moment de la journée.",
    texte:
      "Un barbecue tropical où les bananes et les saveurs exotiques sont à l’honneur, dans une ambiance de jungle.",
    prix_adulte: 21,
    prix_enfants: 18,
  },
  {
    id: 4,
    nom: "Kirby Snack's World",
    img: "/imgRestaurant/image4.jpg",
    intro:
      "Kirby’s Snack’s World est un lieu magique et coloré inspiré par l’univers de Kirby, où les saveurs et les formes se rencontrent dans une explosion de gourmandise. Ce restaurant offre une variété de snacks et de desserts adorables qui rappellent les aventures du petit héros rose. Chaque plat est soigneusement conçu pour émerveiller vos papilles et votre imagination, avec des douceurs sucrées et salées aux couleurs vibrantes et aux formes amusantes. Que vous soyez fan de douceurs légères ou de petites bouchées ludiques, Kirby's Snack's World promet de satisfaire toutes vos envies de goûters délicieux et créatifs, le tout dans un cadre joyeux et dynamique.",
    texte:
      "Un lieu fun et coloré, proposant des desserts et en-cas aux formes adorables, inspirés de Kirby et de ses aventures.",
    prix_adulte: 12,
    prix_enfants: 9,
  },
  {
    id: 5,
    nom: "Pokemon Café",
    img: "/imgRestaurant/image5.jpg",
    intro:
      "Pokémon Café est un lieu unique où les saveurs et les personnages emblématiques de l'univers Pokémon se rencontrent dans un cadre ludique et chaleureux. Plongez dans une ambiance accueillante et découvrez une carte de plats et boissons inspirés par vos Pokémon préférés. Des cafés mignons aux plats délicieux, chaque élément du menu est pensé pour offrir une expérience gastronomique originale, avec des présentations soignées et des touches de fantaisie. Que vous soyez un dresseur chevronné ou un fan de longue date, Pokémon Café vous invite à savourer un moment magique tout en dégustant des créations gourmandes, originales et amusantes.",
    texte:
      "Des plats et boissons inspirés de vos Pokémon préférés, avec des présentations ludiques et originales.",
    prix_adulte: 13,
    prix_enfants: 11,
  },
];

function Restaurant() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // Smooth transition: only one item slides at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <header className="header-restau">
        <h1 className="title-resto">
          <b>
            Des saveurs à la <br />
            hauteur de vos <br /> aventures Nintendo . . .
          </b>
        </h1>

        <h2 className="subtitle-resto">
          Offrez-vous une pause gourmande au cœur <br />
          de l'aventure !
        </h2>
      </header>
      <main>
        <section className="section-carroussel">
          <Carousel
            swipeable={true} // Activer le swipe
            draggable={true} // Activer le drag
            showDots={true}
            responsive={responsive}
            ssr={true} // Rendre le carousel côté serveur.
            infinite={true} // Boucle infinie
            keyBoardControl={true} // Contrôle au clavier
            customTransition="all 0.5s ease" // Transition fluide
            transitionDuration={500} // Durée de transition (ms)
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            centerMode={true}
          >
            <div className="img-restau">
              <img
                className="carroussel-resto"
                src="/imgRestaurant/image1.webp"
                alt=""
              />
              <p>Le Champignon Gourmet</p>
            </div>
            <div className="img-restau">
              <img
                className="carroussel-resto"
                src="/imgRestaurant/image2.webp"
                alt=""
              />
              <p>Donkey Kong Grill</p>
            </div>
            <div className="img-restau">
              <img
                className="carroussel-resto"
                src="/imgRestaurant/image3.jpg"
                alt=""
              />
              <p>Zelda's Feast</p>
            </div>
            <div className="img-restau">
              <img
                className="carroussel-resto"
                src="/imgRestaurant/image4.jpg"
                alt=""
              />
              <p>Kirby's Snack World</p>
            </div>
            <div className="img-restau">
              <img
                className="carroussel-resto"
                src="/imgRestaurant/image5.jpg"
                alt=""
              />
              <p>Pokemon Café</p>
            </div>
          </Carousel>
        </section>
        <section className="allcard-container-restaurant">
          {resto.map((restaurant) => (
            <section key={restaurant.id} className="card-container-restaurant">
              <div className="card-resto">
                <h1>{restaurant.nom}</h1>
                <p className="font-resto">{restaurant.texte}</p>
                <div className="white-box-resto">
                  <div className="price-container-resto">
                    <div className="price-box-resto">
                      <b>
                        <p className="price-resto">
                          {restaurant.prix_adulte}
                          <p className="pricetwo-resto">€99</p>
                        </p>
                      </b>
                      <p className="type-resto">
                        <b>Adulte</b>
                      </p>
                      <p className="age-resto">+ de 14 ans</p>
                    </div>
                    <div className="price-box-resto">
                      <b>
                        <p className="price-resto">
                          {restaurant.prix_enfants}{" "}
                          <p className="pricetwo-resto">€99</p>
                        </p>
                      </b>
                      <p className="type-resto">
                        <b>Enfants</b>
                      </p>
                      <p className="age-resto">- de 14 ans</p>
                    </div>
                  </div>

                  <Link to={`/restaurant/${restaurant.id}`} state={restaurant}>
                    <div className="button-restaurants">
                      <button
                        type="submit"
                        className="button-reservation-resto"
                      >
                        Réserver
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </section>
          ))}
        </section>
      </main>
      ;
    </>
  );
}

export default Restaurant;
