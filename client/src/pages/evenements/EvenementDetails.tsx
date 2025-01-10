import { Link, useParams } from "react-router-dom";
import "./EvenementDetails.css";
const events = [
  {
    id: 1,
    schedule: "10h, 14h, 18h",
    name: "Mario kart live show : la course arc en ciel",
    shortdesc:
      "Rejoignez Mario et ses amis pour une course folle sur la piste arc-en-ciel, où l'univers du jeu vidéo prend vie avec des karts en taille réelle et une expérience interactive inédite ! ",
    imgsrc: "/imageEvents/mario-kart-event.jpg",
    desc: "Un spectacle interactif où Mario, Luigi, Peach et Bowser s'affrontent sur une piste de course dynamique inspirée de la célèbre Rainbow Road. Grâce à des véhicules téléguidés géants et des projections LED, le public vivra une véritable course effrénée. Les spectateurs pourront même 'lancer' des bananes et des carapaces via des applications mobiles connectées pour influencer la course !",
  },
  {
    id: 2,
    name: "Zelda: L'éveil du Héros du temps",
    schedule: "10h, 14h, 18h",
    shortdesc:
      "Partez à l'aventure dans une chasse au trésor épique pour retrouver la légendaire Master Sword ! Explorez le parc, résolvez des énigmes et devenez le héros du royaume de Hyrule.",
    imgsrc: "/imageEvents/zelda-quest-event.jpg",
    desc: "Zelda : L'Éveil du Héros vous invite à plonger dans une quête palpitante pour retrouver l’emblématique Master Sword, cachée quelque part dans les terres enchantées de Nintendream. Cette chasse au trésor immersive vous fera traverser des paysages inspirés des lieux mythiques du royaume d’Hyrule. À chaque étape, des énigmes ingénieuses et des défis captivants mettront votre courage, votre sagacité et votre esprit d’équipe à l’épreuve. Vous croiserez peut-être la route de personnages emblématiques prêts à vous offrir leur aide – ou à compliquer votre mission ! De la Forêt Kokiri aux sommets du Mont du Péril, chaque exploration vous rapprochera de votre destinée : devenir le héros capable de protéger Hyrule des forces du mal. Préparez-vous à une aventure inoubliable où chaque instant est une célébration de l’univers magique de Zelda.",
  },
  {
    id: 3,
    name: "Donkey Kong Jungle Groove",
    schedule: "10h, 14h, 18h",
    shortdesc:
      "Un spectacle de percussions qui vous emmènera à travers la jungle de Donkey kong !",
    imgsrc: "/imageEvents/donkey-kong-event.jpg",
    desc: "Donkey Kong Jungle Groove est un spectacle vibrant et rythmé qui vous transporte au cœur de la jungle luxuriante de Donkey Kong. Laissez-vous emporter par une symphonie percussive envoûtante, où chaque battement raconte une histoire sauvage et palpitante. Les tambours résonnent comme les battements de la jungle, accompagnés de chorégraphies dynamiques et de projections immersives qui recréent l’univers tropical emblématique. Vous suivrez Donkey Kong et ses amis dans une aventure musicale riche en surprises, où les rythmes effrénés et les mélodies entraînantes captiveront petits et grands. Préparez-vous à une expérience multisensorielle qui fera vibrer toute la salle et réveillera l’explorateur qui sommeille en vous ! ",
  },
];
function EvenemementDetails() {
  const { id } = useParams();
  const realId = Number.parseInt(id as string) - 1;

  return (
    <>
      <main className="event-details-main">
        <h1 className="event-details-title">{events[realId].name}</h1>
        <p className="event-details-description">{events[realId].desc}</p>
        <h2> Horaires :</h2>
        <p className="event-details-schedule"> {events[realId].schedule}</p>
        <p className="event-details-accroche">
          Plongez dans l’univers magique de Nintendream et laissez-vous emporter
          par des événements spectaculaires où chaque instant devient une
          aventure inoubliable, pour petits et grands rêveurs !
        </p>
        <Link to="/billetterie">
          <button type="button" className="event-details-button">
            Vers nos offres
          </button>
        </Link>
      </main>
    </>
  );
}

export default EvenemementDetails;
