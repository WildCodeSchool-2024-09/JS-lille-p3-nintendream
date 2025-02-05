import "./Homepage.css";
import { Link } from "react-router-dom";
import { UseTheme } from "../../services/ThemeContext";

interface Article {
  image: string;
  title: string;
  description: string;
  URL: string;
}

interface Information {
  img: string;
  title: string;
  description: string;
}

const articles = [
  {
    title: "Hâte de venir ?",
    description:
      "Information importante avant votre visite. En raison d’une forte demande, vous devez impérativement être déjà muni d’un billet daté ou avoir déjà enregistré votre date de visite si vous êtes en possession d’un billet non daté.",
    image: "../image/imageHomepage/Ticket-Nintendream.jpg",
    URL: "/attractions",
  },
  {
    title: "Plongez dans un univers où vos rêves de gamer prennent vie !",
    description:
      "Chez Nintendream, nous vous offrons bien plus qu’un simple repas : une expérience inoubliable. Découvrez des plats thématiques inspirés de vos jeux préférés, des salles immersives aux décors époustouflants, et une ambiance ludique parfaite pour toute la famille. Que vous soyez fan de légendaires aventures ou adepte de courses effrénées, chaque plat et chaque détail de notre restaurant vous promet des surprises à la hauteur de votre passion pour le jeu.",
    image: "../image/Restaurant-Nintendream.webp",
    URL: "/restaurants",
  },
  {
    title: "Plongez dans un univers où vos rêves de gamer prennent vie !",
    description:
      "Chez Nintendream, nous vous offrons bien plus qu’un simple séjour : une expérience inoubliable. Découvrez des chambres thématiques inspirées de vos jeux préférés. Que vous soyez fan de légendaires aventures ou adepte de courses effrénées, chaque recoin de notre hôtel vous promet des surprises à la hauteur de votre passion pour le jeu.",
    image: "../image/imageHomepage/dunkey-kong-hotel.webp",
    URL: "/hotels",
  },
  {
    title: "Un Parc Accessible à Tous chez Nintendream 🎮",
    description:
      "Le parc Nintendream est conçu pour accueillir tous les visiteurs, avec des installations adaptées aux personnes à mobilité réduite et des services pour répondre à divers besoins. Des rampes, ascenseurs, et files prioritaires facilitent l’accès aux attractions, tandis que des casques antibruit et des panneaux tactiles améliorent l’expérience sensorielle. Notre personnel formé est à disposition pour accompagner chaque visiteur. Profitez d’une aventure inclusive et magique, sans limites ! 🌟",
    image: "/image/imageHomepage/Mario-fauteuil.jpg",
    URL: "/",
  },
];

const informations = [
  {
    img: "./image/imageHomepage/mario-clock.jpeg",
    title: "Horaires d'ouverture",
    description:
      "Vacances scolaires : 9h - 20h Hors période de vacances : 10h - 19h00",
  },
  {
    img: "./image/imageHomepage/zelda-homepage.jpeg",
    title: "Comment nous retrouver ?",
    description:
      "165 Avenue de Bretagne, Place Pierre de Saintignon, 59000 Lille",
  },
];

function Homepage() {
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";

  return (
    <main className={`homepage-main ${theme}`}>
      <div className="image-with-title">
        {theme === "light" ? (
          <img
            className="image-homepage"
            src="../image/imageHomepage/Image-Mario-day.webp"
            alt="Nintendream factice"
          />
        ) : (
          <img
            className="image-homepage"
            src="../image/imageHomepage/Image-Mario-night.webp"
            alt="Nintendream factice"
          />
        )}
        <section className={`card-container-homepage-reservation ${theme}`}>
          <div className="card-homepage-reservation">
            <p>Réservez à partir de 35€</p>
          </div>
          <div className="button-reservation-homepage">
            <Link to="/billetterie" className="link-homepage-to-billeterie">
              <button type="button" className="button-homepage-reservation">
                Je réserve !
              </button>
            </Link>
          </div>
        </section>
      </div>
      <section className="container-homepage">
        <section className={`card-container-new-attraction ${theme}`}>
          <div className="card-new-attraction">
            <p>Découvrez la dernière attraction du parc</p>
          </div>
          <div className="button-reservation-homepage">
            <Link to="attractions" className="link-homepage-to-attractions">
              <button type="button" className="button-homepage-reservation">
                Attractions
              </button>
            </Link>
          </div>
        </section>
        <section className={`card-container-events ${theme}`}>
          <div className="card-events">
            <p>
              Soyez enchantés par la magie <br />
              de nos spectacles
            </p>
          </div>
          <div className="button-events">
            <Link to="/evenements" className="link-homepage-to-events">
              <button type="submit" className="button-new-events">
                Évènements
              </button>
            </Link>
          </div>
        </section>
        <section className={`card-container-offers ${theme}`}>
          <div className="card-offers">
            <p>Profitez de nos dernières offres</p>
          </div>
          <div className="button-offers">
            <Link to="/billetterie" className="link-homepage-to-offers">
              <button type="submit" className="button-new-offers">
                Offres
              </button>
            </Link>
          </div>
        </section>
      </section>
      <section>
        {articles.map((article: Article) => (
          <div key={article.title} className={`card-homepage ${theme}`}>
            <div className="card-article">
              <Link to={article.URL} className={`link-article ${theme}`}>
                <img
                  className="image-card-article"
                  src={article.image}
                  alt="image-article"
                />
                <p className="card-description">{article.description}</p>
                <h1 className="card-title"> {article.title}</h1>
              </Link>
            </div>
          </div>
        ))}
      </section>
      <section className="informations-container">
        {informations.map((information: Information) => (
          <article
            key={information.title}
            className={`informations-card ${theme}`}
          >
            <img
              src={information.img}
              alt="image-informations"
              className="informations-img"
            />
            <h2 className="informations-title">{information.title}</h2>
            <p className="informations-description">
              {information.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Homepage;
