import "./Restaurant.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      <header>
        <h1 className="title">
          <b>
            {" "}
            Des saveurs à la <br />
            hauteur de vos <br /> aventures Nintendo . . .
          </b>
        </h1>

        <h2 className="subtitle">
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
                className="carroussel"
                src="/imgRestaurant/image1.webp"
                alt=""
              />
              <p>Le Champignon Gourmet</p>
            </div>
            <div className="img-restau">
              <img
                className="carroussel"
                src="/imgRestaurant/image2.webp"
                alt=""
              />
              <p>Donkey Kong Grill</p>
            </div>
            <div className="img-restau">
              <img
                className="carroussel"
                src="/imgRestaurant/image3.jpg"
                alt=""
              />
              <p>Zelda's Feast</p>
            </div>
            <div className="img-restau">
              <img
                className="carroussel"
                src="/imgRestaurant/image4.jpg"
                alt=""
              />
              <p>Kirby's Snack World</p>
            </div>
            <div className="img-restau">
              <img
                className="carroussel"
                src="/imgRestaurant/image5.jpg"
                alt=""
              />
              <p>Pokemon Café</p>
            </div>
          </Carousel>
        </section>
        <section className="container-restaurant">
          <section className="card-container-restaurant">
            <div className="card">
              <h1>Le Champignon Gourmet</h1>
              <p className="font">
                -Un restaurant inspiré de l’univers de Mario, avec des plats en
                forme de champignons, d’étoiles ou de carapaces.
              </p>
              <div className="white-box">
                <div className="price-container">
                  <div className="price-box">
                    <b>
                      <p className="price">
                        29 <p className="pricetwo">€99</p>
                      </p>
                    </b>
                    <p className="type">
                      <b>Adulte</b>
                    </p>
                    <p className="age">+ de 14 ans</p>
                  </div>
                  <div className="price-box">
                    <b>
                      <p className="price">
                        16 <p className="pricetwo">€99</p>
                      </p>
                    </b>
                    <p className="type">
                      <b>Enfants</b>
                    </p>
                    <p className="age">- de 14 ans</p>
                  </div>
                </div>
                <div className="button">
                  <button type="submit" className="button-reservation">
                    Reserver
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="card-container-restaurant">
            <div className="card">
              <h1>Zelda's Feast</h1>
              <p className="font">
                -Une ambiance médiévale avec des plats dignes des banquets
                d’Hyrule. Parfait pour les fans de la série The Legend of Zelda.
              </p>
              <div className="white-box">
                <div className="price-container">
                  <div className="price-box">
                    <b>
                      <p className="price">
                        19 <p className="pricetwo">€99</p>
                      </p>
                    </b>
                    <p className="type">
                      <b>Adulte</b>
                    </p>
                    <p className="age">+ de 14 ans</p>
                  </div>
                  <div className="price-box">
                    <b>
                      <p className="price">
                        12 <p className="pricetwo">€99</p>
                      </p>
                    </b>
                    <p className="type">
                      <b>Enfants</b>
                    </p>
                    <p className="age">- de 14 ans</p>
                  </div>
                </div>
                <div className="button">
                  <button type="submit" className="button-reservation">
                    Reserver
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="card-container-restaurant">
            <div className="card">
              <h1>Donkey Kong Grill</h1>
              <p className="font">
                -Un barbecue tropical où les bananes et les saveurs exotiques
                sont à l’honneur, dans une ambiance de jungle.
              </p>
              <div className="white-box">
                <div className="price-container">
                  <div className="price-box">
                    <b>
                      <p className="price">
                        21 <p className="pricetwo">€99</p>
                      </p>
                    </b>
                    <p className="type">
                      <b>Adulte</b>
                    </p>
                    <p className="age">+ de 14 ans</p>
                  </div>
                  <div className="price-box">
                    <b>
                      <p className="price">
                        18 <p className="pricetwo">€99</p>
                      </p>
                    </b>
                    <p className="type">
                      <b>Enfants</b>
                    </p>
                    <p className="age">- de 14 ans</p>
                  </div>
                </div>
                <div className="button">
                  <button type="submit" className="button-reservation">
                    Reserver
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="card-container-restaurant">
            <div className="card">
              <h1>Kirby Snack's World</h1>
              <p className="font">
                -Un lieu fun et coloré, proposant des desserts et en-cas aux
                formes adorables, inspirés de Kirby et de ses aventures.
              </p>
              <div className="white-box">
                <div className="price-container">
                  <div className="price-box">
                    <b>
                      <p className="price">
                        12 <p className="pricetwo">€99</p>
                      </p>
                    </b>
                    <p className="type">
                      <b>Adulte</b>
                    </p>
                    <p className="age">+ de 14 ans</p>
                  </div>
                  <div className="price-box">
                    <b>
                      <p className="price">
                        9 <p className="pricetwo">€99</p>
                      </p>
                    </b>
                    <p className="type">
                      <b>Enfants</b>
                    </p>
                    <p className="age">- de 14 ans</p>
                  </div>
                </div>
                <div className="button">
                  <button type="submit" className="button-reservation">
                    Reserver
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="card-container-restaurant">
            <div className="card">
              <h1>Pokemon Café</h1>
              <p className="font">
                -Des plats et boissons inspirés de vos Pokémon préférés, avec
                des présentations ludiques et originales.
              </p>
              <div className="white-box">
                <div className="price-container">
                  <div className="price-box">
                    <b>
                      <p className="price">
                        13 <p className="pricetwo">€99</p>
                      </p>
                    </b>
                    <p className="type">
                      <b>Adulte</b>
                    </p>
                    <p className="age">+ de 14 ans</p>
                  </div>
                  <div className="price-box">
                    <b>
                      <p className="price">
                        11 <p className="pricetwo">€99</p>
                      </p>
                    </b>
                    <p className="type">
                      <b>Enfants</b>
                    </p>
                    <p className="age">- de 14 ans</p>
                  </div>
                </div>
                <div className="button">
                  <button type="submit" className="button-reservation">
                    Reserver
                  </button>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Restaurant;
