import "./AttractionDetails.css";

interface AttractionCategory {
  images: string[];
  title: string;
  texte: string;
  titles: string[];
  ages: string[];
  tailles: string[];
  id: number;
}

const attractionsdetails: AttractionCategory[] = [
  {
    id: 1,
    images: [
      "/imagePagesAttractions/MarioKartRacing.jpeg",
      "/imagePagesAttractions/Bowser’s Castle Escape.jpeg",
      "/imagePagesAttractions/PikachuThunderroller.jpg",
      "/imagePagesAttractions/LuigisHauntedMansion.jpeg",
      "/imagePagesAttractions/DungeonEscapeChallenge.jpeg",
      "/imagePagesAttractions/Gengar’sHauntedLabyrinth.jpeg",
      "/imagePagesAttractions/MetaKnightsFlightChallenge.jpeg",
      "/imagePagesAttractions/DonkeyKongJungleSwing.jpeg",
    ],
    title: "DES ATTRACTIONS À SENSATION SENSATIONNELLE",
    texte:
      "Pour les amateurs de sensations fortes, préparez-vous à vivre des émotions intenses ! Plongez dans des aventures palpitantes où adrénaline et frissons sont au rendez-vous. Affrontez les pièges du château de Bowser dans Bowser’s Castle Escape, ressentez la vitesse et l’électricité avec Pikachu Thunder Roller, ou perdez-vous dans le labyrinthe hanté de Gengar’s Haunted Labyrinth. Ces attractions spectaculaires sont conçues pour ceux qui cherchent à repousser leurs limites et vivre des moments inoubliables. Si vous êtes prêts à relever le défi, ces attractions à couper le souffle vous attendent !",
    titles: [
      "Mario Kart Racing",
      "Bowser’s Castle Escape",
      "Pikachu Thunder Roller",
      "Luigi’s Haunted Mansion",
      "Dungeon Escape Challenge",
      "Gengar’s Haunted Labyrinth",
      "Meta Knight’s Flight Challenge",
      "Donkey Kong Jungle Swing",
    ],
    ages: [
      "10 ans",
      "8 ans",
      "10 ans",
      "8 ans et plus",
      "12 ans et plus",
      "10 ans et plus",
      "10 ans et plus",
      "8 ans et plus",
    ],
    tailles: [
      "120cm",
      "100cm",
      "100cm",
      "110 cm",
      "140 cm",
      "120 cm",
      "120 cm",
      "110 cm",
    ],
  },
  {
    id: 2,
    images: [
      "/imagePagesAttractions/YoshiEggHunt.jpeg",
      "/imagePagesAttractions/ZeldaMasterSwordQuest.jpeg",
      "/imagePagesAttractions/HyruleSkyGlider.jpeg",
      "/imagePagesAttractions/PokémonTrainerArena.jpeg",
      "/imagePagesAttractions/Snorlax'sLazyRiver.jpeg",
      "/imagePagesAttractions/KirbysDreamlandRide.jpeg",
      "/imagePagesAttractions/MarioEtSonicOlympiqueFamilyDash.jpeg",
    ],
    title: "DES ATTRACTIONS POUR TOUTE LA FAMILLE",
    texte:
      "Venez vivre des moments inoubliables en famille avec nos attractions spécialement conçues pour petits et grands ! Découvrez des aventures interactives et des parcours fascinants où chacun, quel que soit son âge, trouvera son bonheur. Que diriez-vous d'aider Yoshi à retrouver ses œufs perdus dans Yoshi’s Egg Hunt, de devenir un héros dans la quête épique de l’épée de légende avec Zelda: Master Sword Quest, ou encore de survoler les paysages merveilleux d'Hyrule avec Hyrule Sky Glider ? Ces expériences et bien d'autres vous attendent pour des souvenirs magiques et des rires garantis pour toute la famille. Venez vivre la magie ensemble !",
    titles: [
      "Yoshi’s Egg Hunt",
      "Zelda: Master Sword Quest",
      "Hyrule Sky Glider",
      "Pokémon Trainer Arena",
      "Snorlax’s Lazy River",
      "Kirby’s Dreamland Ride",
      "Mario & Sonic Olympic Dash",
    ],
    ages: ["3 ans", "8 ans", "6 ans", "6 ans", "Tous âges", "5 ans", "12 ans"],
    tailles: [
      "100cm",
      "130cm",
      "120cm",
      "100 cm",
      "Aucune restriction",
      "85 cm",
      "130 cm",
    ],
  },
  {
    id: 3,
    images: [
      "/imagePagesAttractions/PeachGardenAdventure.jpg",
      "/imagePagesAttractions/WaddleDeePlayground.jpg",
      "/imagePagesAttractions/EeveeEvolutionCarousel.jpg",
      "/imagePagesAttractions/Goron’sRockClimb.jpeg",
      "/imagePagesAttractions/StarAlliesSpinningCupsattraction.jpeg",
    ],
    title: "DES ATTRACTIONS POUR LES PLUS PETITS",
    texte:
      "Les plus jeunes seront comblés par nos attractions spécialement créées pour eux ! Plongez dans un univers féérique et ludique où chaque aventure est un véritable enchantement. Laissez-vous emporter par Peach’s Garden Adventure, un manège magique au cœur d’un jardin de fleurs, ou faites une halte dans l’espace de jeu interactif de Waddle Dee’s Playground, idéal pour les tout-petits. Et pour un moment de pur plaisir, ne manquez pas Eevee Evolution Carousel, un tour de manège aux couleurs d'Eevee et de ses évolutions ! Ces attractions sont parfaites pour offrir à vos enfants des moments de joie et de rires, le tout dans un cadre sûr et enchanteur.",
    titles: [
      "Peach’s Garden Adventure",
      "Waddle Dee’s Playground",
      "Eevee Evolution Carousel",
      "Goron’s Rock Climb",
      "Star Allies Spinning Cups",
    ],
    ages: ["3 ans", "2 ans", "3 ans", "0 ans", "3 ans"],
    tailles: ["90cm", "60cm", "90cm", "0 cm", "90 cm"],
  },
];

function AttractionDetails() {
  return (
    <>
      <div>
        <img
          className="background-attraction"
          src="/public/imagePagesAttractions/Background-Attraction.jpeg"
          alt="attraction"
        />
      </div>
      <section className="section-attraction">
        {attractionsdetails.map((attraction) => (
          <div key={attraction.id} className="description-attraction-details">
            <section className="attraction-details-title-texte">
              <h1 className="h1-attraction-details">{attraction.title}</h1>
              <p className="attraction-details-texte">{attraction.texte}</p>
            </section>
            <div className="attractions-details-container">
              {attraction.images.map((img, imgIndex) => (
                <div className="attraction-details-card" key={img}>
                  <div className="img-container-attraction">
                    <img
                      className="img-attraction"
                      src={img}
                      alt={attraction.titles[imgIndex]}
                    />
                  </div>
                  <h2>{attraction.titles[imgIndex]}</h2>
                  <hr className="horizontal" />
                  <div className="conditions">
                    <h2>{attraction.ages[imgIndex]}</h2>
                    <hr className="verticale" />
                    <h2>{attraction.tailles[imgIndex]}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <img
        className="map-nintendream"
        src="/public/imagePagesAttractions/MapNintendDream.jpeg"
        alt="Map"
      />
    </>
  );
}

export default AttractionDetails;
