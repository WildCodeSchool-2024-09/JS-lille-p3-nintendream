import { useEffect, useState } from "react";
import "./Restaurant.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

interface Restaurant {
  id: number;
  name: string;
  img: string;
  intro: string;
  text: string;
  adult_price: number;
  kids_price: number;
}

function Restaurant() {
  const [restaurants, setRestaurants] = useState([] as Restaurant[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/restaurant`)
      .then((response) => response.json())
      .then((data: Restaurant[]) => {
        setRestaurants(data);
      })
      .catch((error) => console.error("Erreur lors du fetch :", error));
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
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
          {restaurants.map((restaurant: Restaurant) => (
            <section key={restaurant.id} className="card-container-restaurant">
              <div className="card-resto">
                <h1>{restaurant.name}</h1>
                <p className="font-resto">{restaurant.text}</p>
                <div className="white-box-resto">
                  <div className="price-container-resto">
                    <div className="price-box-resto">
                      <b>
                        <p className="price-resto">
                          {restaurant.adult_price}{" "}
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
                          {restaurant.kids_price}{" "}
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
