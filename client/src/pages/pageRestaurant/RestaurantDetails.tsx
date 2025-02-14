import "./RestaurantDetails.css";
import "./Restaurant.tsx";
import { useLocation } from "react-router-dom";
import { UseTheme } from "../../services/ThemeContext.tsx";

function RestaurantDetails() {
  const location = useLocation();
  const resto = location.state;
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";

  return (
    <>
      <body className={`body-restau ${theme}`}>
        <header className="header-restau-details">
          <h1 className="title-restau">"{resto.name}"</h1>
        </header>
        <div className="img-container-restau">
          <img className="img-restau-details" src={resto.img} alt="" />
        </div>
        <p className="text-accro-restau">{resto.intro}</p>
        <section className="card-container-restau">
          <div className={`card-restau ${theme}`}>
            <h1>{resto.name}</h1>
            <p className="font-restau">{resto.text}</p>
            <div className={`white-box-restau ${theme}`}>
              <div className={`price-container-restau ${theme}`}>
                <div className="price-box-restau">
                  <b>
                    <p className="price-restau">
                      {resto.adult_price}
                      <p className="pricetwo-restau">€99</p>
                    </p>
                  </b>
                  <p className="type-restau">
                    <b>Adulte</b>
                  </p>
                  <p className="age-restau">+ de 14 ans</p>
                </div>
                <div className="price-box-restau">
                  <b>
                    <p className="price-restau">
                      {resto.kids_price} <p className="pricetwo-restau">€99</p>
                    </p>
                  </b>
                  <p className="type-restau">
                    <b>Enfants</b>
                  </p>
                  <p className="age-restau">- de 14 ans</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
      <footer className={`footer-restaurant ${theme}`}>
        © Restaurants créer par les grands cuisiniers Alicia, Timothey, Antoine,
        Julien et Thomas.
      </footer>
    </>
  );
}

export default RestaurantDetails;
