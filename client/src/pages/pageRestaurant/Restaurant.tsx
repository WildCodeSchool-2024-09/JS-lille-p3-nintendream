import { useEffect, useState } from "react";
import "./Restaurant.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { UseTheme } from "../../services/ThemeContext";

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
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";

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
      <main className={`restau-main ${theme}`}>
        <header className="header-restau">
          <h1 className="title-allresto">
            <b>
              Des saveurs à la <br />
              hauteur de vos <br /> aventures Nintendo . . .
            </b>
          </h1>

          <h2 className="subtitle-allresto">
            Offrez-vous une pause gourmande au cœur <br />
            de l'aventure !
          </h2>
        </header>
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
                className="carroussel-allresto"
                src="/imgRestaurant/image1.webp"
                alt=""
              />
              <p>Le Champignon Gourmet</p>
            </div>
            <div className="img-restau">
              <img
                className="carroussel-allresto"
                src="/imgRestaurant/image2.webp"
                alt=""
              />
              <p>Donkey Kong Grill</p>
            </div>
            <div className="img-restau">
              <img
                className="carroussel-allresto"
                src="/imgRestaurant/image3.jpg"
                alt=""
              />
              <p>Zelda's Feast</p>
            </div>
            <div className="img-restau">
              <img
                className="carroussel-allresto"
                src="/imgRestaurant/image4.jpg"
                alt=""
              />
              <p>Kirby's Snack World</p>
            </div>
            <div className="img-restau">
              <img
                className="carroussel-allresto"
                src="/imgRestaurant/image5.jpg"
                alt=""
              />
              <p>Pokemon Café</p>
            </div>
          </Carousel>
        </section>
        <section className="allcard-container-restaurant">
          {restaurants.map((restaurant: Restaurant) => (
            <section key={restaurant.id} className="card-container-restaurant-">
              <div className={`card-allresto ${theme}`}>
                <h1>{restaurant.name}</h1>
                <p className="font-allresto">{restaurant.text}</p>
                <div className={`white-box-allresto ${theme}`}>
                  <div className={`price-container-allresto ${theme}`}>
                    <div className={`price-box-allresto ${theme}`}>
                      <b>
                        <p className={`price-allresto ${theme}`}>
                          {restaurant.adult_price}{" "}
                          <p className={`pricetwo-allresto ${theme}`}>€99</p>
                        </p>
                      </b>
                      <p className={`type-allresto ${theme}`}>
                        <b>Adulte</b>
                      </p>
                      <p className="age-allresto">+ de 14 ans</p>
                    </div>
                    <div className={`price-box-allresto ${theme}`}>
                      <b>
                        <p className={`price-allresto ${theme}`}>
                          {restaurant.kids_price}{" "}
                          <p className={`pricetwo-allresto ${theme}`}>€99</p>
                        </p>
                      </b>
                      <p className={`type-allresto ${theme}`}>
                        <b>Enfants</b>
                      </p>
                      <p className="age-allresto">- de 14 ans</p>
                    </div>
                  </div>

                  <Link to={`/restaurant/${restaurant.id}`} state={restaurant}>
                    <div className="button-restaurants">
                      <button
                        type="submit"
                        className={`button-reservation-allresto ${theme}`}
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
    </>
  );
}

export default Restaurant;
