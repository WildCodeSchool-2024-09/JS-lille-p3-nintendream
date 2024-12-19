import "./Billetterie.css";

interface PricesProps {
  img: string;
  title: string;
  availability?: string;
  cancel: string;
  other: string;
}

const prices: PricesProps[] = [
  {
    img: "./public/image/img-billetterie1.jpg",
    title: "Tarif individuel",
    availability:
      "Valable 1 an à partir de la date d'achat (hors 14 Juillet,31 Octobre et 31 Décembre)",
    cancel: "Non remboursable, non annulable",
    other: "Idéal pour un cadeau",
  },
  {
    img: "./public/image/img-billetterie2.png",
    title: "Tarif groupe/famille",
    availability:
      "Valable 1 an à partir de la date d'achat (hors 14 Juillet,31 Octobre et 31 Décembre)",
    cancel: "Annulez jusqu'à trois jours avant l'arrivée",
    other: "De 2 à 8 personnes",
  },
  {
    img: "./public/image/img-billetterie3.png",
    title: "CSE",
    cancel: "Annulez jusqu' trois jours avant l'arrivée",
    other: "Pour entreprises uniquement",
  },
];

function Billetterie() {
  return (
    <main className="billetterie-container">
      <h1 className="title-billetterie"> Nos différents tarifs</h1>
      <p className="subtitle-billetterie">
        {" "}
        Choisissez le billet qui vous convient le plus, que ce soit seul... ou à
        plusieurs !
      </p>

      <div className="card-billetterie-container">
        {prices.map((price) => (
          <div key={price.title} className="billetterie-card">
            <img src={price.img} alt="img" className="billetterie-card-img" />
            <h2 className="billetterie-card-title">{price.title}</h2>
            <p className="billetterie-availability">{price.availability}</p>
            <p className="billetterie-cancel">{price.cancel}</p>
            <p className="billetterie-other">{price.other}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Billetterie;
