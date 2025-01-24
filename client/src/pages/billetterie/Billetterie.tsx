import { Link } from "react-router-dom";
import "./Billetterie.css";

interface PricesProps {
  img: string;
  title: string;
  linkTitle: string;
  availability?: string;
  cancel: string;
  other: string;
  price: string;
  company?: string;
}

const prices: PricesProps[] = [
  {
    img: "./public/image/imageHomepage/img-billetterie1.jpg",
    title: "Tarif individuel",
    linkTitle: "individuel",
    availability:
      "Valable 1 an à partir de la date d'achat (hors 14 Juillet,31 Octobre et 31 Décembre)",
    cancel: "Non remboursable, non annulable",
    other: "Idéal pour un cadeau",
    price: "35€ ",
  },
  {
    img: "./public/image/img-billetterie2.png",
    title: "Tarif groupe/famille",
    linkTitle: "famille",
    availability:
      "Valable 1 an à partir de la date d'achat (hors 14 Juillet,31 Octobre et 31 Décembre)",
    cancel: "Annulez jusqu'à trois jours avant l'arrivée",
    other: "De 2 à 8 personnes",
    price: "30€",
  },
  {
    img: "./public/image/img-billetterie3.png",
    title: "CSE",
    company:
      "Pour plus d'informations, contactez le service CSE de votre entreprise",
    linkTitle: "CSE",
    cancel: "Annulez jusqu' trois jours avant l'arrivée",
    other: "Pour entreprises uniquement",
    price: "25€",
  },
];

function Billetterie() {
  return (
    <main className="billetterie-container">
      <section className="billetterie-title-container">
        <h1 className="title-billetterie"> Nos différents tarifs</h1>
        <h2 className="subtitle-billetterie">
          {" "}
          Choisissez le billet qui vous convient le plus, que ce soit seul... ou
          à plusieurs !
        </h2>
      </section>

      <div className="card-billetterie-container">
        {prices.map((price) => (
          <div key={price.title} className="billetterie-card">
            <img src={price.img} alt="img" className="billetterie-card-img" />
            <h2 className="billetterie-card-title">{price.title}</h2>
            <p className="billetterie-availability">{price.availability}</p>
            <p className="billetterie-cancel">{price.cancel}</p>
            <p className="billetterie-other">{price.other}</p>
            <p className="billetterie-company">{price.company}</p>
            <article className="white-box-billetterie">
              <p className="billetterie-price">{price.price}</p>
            </article>
            <Link to={`/reservation/${price.linkTitle}`}>
              <button type="button" className="billetterie-btn">
                {" "}
                ACHETER
              </button>
            </Link>
          </div>
        ))}
      </div>
      <h1 className="title-billetterie"> Les avantages des billets</h1>
      <section className="billetterie-avantages-container">
        <div className="billetterie-container">
          <img
            src="./public/image/img-billetterie4.png"
            alt="img"
            className="billetterie-avantages-img"
          />
          <h3 className="billetterie-avantages-subtitle">
            Accès à tout le parc
          </h3>
          <p className="billetterie-avanatages-more">
            Profitez de toutes nos attractions, spectacles et bien plus encore !
          </p>
        </div>
        <div className="billetterie-container">
          <img
            src="./public/image/img-billetterie5.png"
            alt="img"
            className="billetterie-avantages-img"
          />
          <h3 className="billetterie-avantages-subtitle">
            Des conditions flexibles
          </h3>
          <p className="billetterie-avanatages-more">
            Des billets datés annulables jusqu'à 3 jours avant l'arrivée, ou des
            billets Liberté valables durant 1 an !
          </p>
        </div>
        <div className="billetterie-container">
          <img
            src="./public/image/img-billetterie6.png"
            alt="img"
            className="billetterie-avantages-img billetterie-enfants-img"
          />
          <h3 className="billetterie-avantages-subtitle">
            {" "}
            Des tarifs spéciaux pour les enfants
          </h3>
          <p className="billetterie-avantages-more">
            Pour les enfants de 5 à 11 ans. 
          </p>
        </div>
      </section>
    </main>
  );
}

export default Billetterie;
