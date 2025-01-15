import "./PagesAttraction.css";

function Attraction() {
  return (
    <>
      <div>
        <img
          className="background-attraction"
          src="/public/imagePagesAttractions/Background-Attraction.jpeg"
          alt="attraction"
        />
      </div>
      <section>
        <div className="description">
          <h1 className="h1-attraction">
            DES ATTRACTIONS A SENSATION SENSATIONNELLE{" "}
          </h1>
          <p>
            Pour les amateurs de sensations fortes, préparez-vous à vivre des
            émotions intenses ! Plongez dans des aventures palpitantes où
            adrénaline et frissons sont au rendez-vous. Affrontez les pièges du
            château de Bowser dans Bowser’s Castle Escape, ressentez la vitesse
            et l’électricité avec Pikachu Thunder Roller, ou perdez-vous dans le
            labyrinthe hanté de Gengar’s Haunted Labyrinth. Ces attractions
            spectaculaires sont conçues pour ceux qui cherchent à repousser
            leurs limites et vivre des moments inoubliables. Si vous êtes prêts
            à relever le défi, ces attractions à couper le souffle vous
            attendent !
          </p>
        </div>
        <div className="button-attraction">
          <button type="button">Voir plus d'attractions</button>
        </div>
        <div className="attraction">
          <div className="attraction-card">
            <div className="img-container-attraction">
              <img
                className="img-attraction"
                src="/public/imagePagesAttractions/MarioKartRacing.jpeg"
                alt="Attraction"
              />
            </div>
            <h2>Mario Kart Racing</h2>
            <hr className="horizontal" />
            <div className="conditions">
              <h2>10 ans</h2>
              <hr className="verticale" />
              <h2>120cm</h2>
            </div>
          </div>
          <div className="attraction-card">
            <div className="img-container-attraction">
              <img
                className="img-attraction2"
                src="/public/imagePagesAttractions/Bowser’s Castle Escape.jpeg"
                alt="Attraction"
              />
            </div>
            <h2>Bowser’s Castle Escape</h2>
            <hr className="horizontal" />
            <div className="conditions">
              <h2>8 ans</h2>
              <hr className="verticale" />
              <h2>100cm</h2>
            </div>
          </div>
          <div className="attraction-card">
            <div className="img-container-attraction">
              <img
                className="img-attraction3"
                src="/public/imagePagesAttractions/PikachuThunderroller.jpg"
                alt="Attraction"
              />
            </div>
            <h2>Pikachu Thunder Roller</h2>
            <hr className="horizontal" />
            <div className="conditions">
              <h2>10 ans</h2>
              <hr className="verticale" />
              <h2>100cm</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="description">
          <h1 className="h1-attraction">
            DES ATTRACTIONS POUR TOUTE LA FAMILLE
          </h1>
          <p>
            Venez vivre des moments inoubliables en famille avec nos attractions
            spécialement conçues pour petits et grands ! Découvrez des aventures
            interactives et des parcours fascinants où chacun, quel que soit son
            âge, trouvera son bonheur. Que diriez-vous d'aider Yoshi à retrouver
            ses œufs perdus dans Yoshi’s Egg Hunt, de devenir un héros dans la
            quête épique de l’épée de légende avec Zelda: Master Sword Quest, ou
            encore de survoler les paysages merveilleux d'Hyrule avec Hyrule Sky
            Glider ? Ces expériences et bien d'autres vous attendent pour des
            souvenirs magiques et des rires garantis pour toute la famille.
            Venez vivre la magie ensemble !
          </p>
        </div>
        <div className="button-attraction">
          <button type="button">Voir plus d'attractions</button>
        </div>
        <div className="attraction">
          <div className="attraction-card">
            <div className="img-container-attraction">
              <img
                className="img-attraction"
                src="/public/imagePagesAttractions/YoshiEggHunt.jpeg"
                alt="Attraction"
              />
            </div>
            <h2>Yoshi’s Egg Hunt</h2>
            <hr className="horizontal" />
            <div className="conditions">
              <h2>3 ans</h2>
              <hr className="verticale" />
              <h2>100cm</h2>
            </div>
          </div>
          <div className="attraction-card">
            <div className="img-container-attraction">
              <img
                className="img-attraction2"
                src="/public/imagePagesAttractions/ZeldaMasterSwordQuest.jpeg"
                alt="Attraction"
              />
            </div>
            <h2>Zelda: Master Sword Quest</h2>
            <hr className="horizontal" />
            <div className="conditions">
              <h2>8 ans</h2>
              <hr className="verticale" />
              <h2>130cm</h2>
            </div>
          </div>
          <div className="attraction-card">
            <div className="img-container-attraction">
              <img
                className="img-attraction3"
                src="/public/imagePagesAttractions/HyruleSkyGlider.jpeg"
                alt="Attraction"
              />
            </div>
            <h2>Hyrule Sky Glider</h2>
            <hr className="horizontal" />
            <div className="conditions">
              <h2>6 ans</h2>
              <hr className="verticale" />
              <h2>120cm</h2>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="description">
          <h1 className="h1-attraction">DES ATTRACTIONS POUR LES PLUS PETIT</h1>
          <p>
            Les plus jeunes seront comblés par nos attractions spécialement
            créées pour eux ! Plongez dans un univers féérique et ludique où
            chaque aventure est un véritable enchantement. Laissez-vous emporter
            par Peach’s Garden Adventure, un manège magique au cœur d’un jardin
            de fleurs, ou faites une halte dans l’espace de jeu interactif de
            Waddle Dee’s Playground, idéal pour les tout-petits. Et pour un
            moment de pur plaisir, ne manquez pas Eevee Evolution Carousel, un
            tour de manège aux couleurs d'Eevee et de ses évolutions ! Ces
            attractions sont parfaites pour offrir à vos enfants des moments de
            joie et de rires, le tout dans un cadre sûr et enchanteur.
          </p>
        </div>
        <div className="button-attraction">
          <button type="button">Voir plus d'attractions</button>
        </div>
        <div className="attraction">
          <div className="attraction-card">
            <div className="img-container-attraction">
              <img
                className="img-attraction"
                src="/public/imagePagesAttractions/PeachGardenAdventure.jpg"
                alt="Attraction"
              />
            </div>
            <h2>Peach’s Garden Adventure</h2>
            <hr className="horizontal" />
            <div className="conditions">
              <h2>3-7 ans</h2>
              <hr className="verticale" />
              <h2>90cm</h2>
            </div>
          </div>
          <div className="attraction-card">
            <div className="img-container-attraction">
              <img
                className="img-attraction2"
                src="/public/imagePagesAttractions/WaddleDeePlayground.jpg"
                alt="Attraction"
              />
            </div>
            <h2>Waddle Dee’s Playground</h2>
            <hr className="horizontal" />
            <div className="conditions">
              <h2>2-5 ans</h2>
              <hr className="verticale" />
              <h2>60 cm</h2>
            </div>
          </div>
          <div className="attraction-card">
            <div className="img-container-attraction">
              <img
                className="img-attraction3"
                src="/public/imagePagesAttractions/EeveeEvolutionCarousel.jpg"
                alt="Attraction"
              />
            </div>
            <h2>Eevee Evolution Carousel</h2>
            <hr className="horizontal" />
            <div className="conditions">
              <h2>3-6 ans</h2>
              <hr className="verticale" />
              <h2>90cm</h2>
            </div>
          </div>
        </div>
      </section>
      <img
        className="map-nintendream"
        src="/public/imagePagesAttractions/MapNintendDream.jpeg"
        alt="Map"
      />
    </>
  );
}

export default Attraction;
