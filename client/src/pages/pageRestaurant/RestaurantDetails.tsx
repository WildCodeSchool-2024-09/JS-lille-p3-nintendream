import "./RestaurantDetails.css";
import "./Restaurant.tsx";
import { useLocation } from "react-router-dom";

function RestaurantDetails() {
  const location = useLocation();
  const resto = location.state;

  return (
    <>
      <header className="header-allrestau">
        <h1 className="title-allrestau">"{resto.nom}"</h1>
      </header>
      <body>
        <div className="img-container-allrestau">
          <img className="img-allrestau" src={resto.img} alt="" />
        </div>
        <p className="texte-accro-allrestau">{resto.intro}</p>
        <section className="card-container-allrestau">
          <div className="card-allrestau">
            <h1>{resto.nom}</h1>
            <p className="font-allrestau">{resto.texte}</p>
            <div className="white-box-allrestau">
              <div className="price-container-allrestau">
                <div className="price-box-allrestau">
                  <b>
                    <p className="price-allrestau">
                      {resto.prix_adulte}
                      <p className="pricetwo-allrestau">€99</p>
                    </p>
                  </b>
                  <p className="type-allrestau">
                    <b>Adulte</b>
                  </p>
                  <p className="age-allrestau">+ de 14 ans</p>
                </div>
                <div className="price-box-allrestau">
                  <b>
                    <p className="price-allrestau">
                      {resto.prix_enfants}{" "}
                      <p className="pricetwo-allrestau">€99</p>
                    </p>
                  </b>
                  <p className="type-allrestau">
                    <b>Enfants</b>
                  </p>
                  <p className="age-allrestau">- de 14 ans</p>
                </div>
              </div>
              <div className="button-allrestau">
                <button type="submit" className="button-reservation-allrestau">
                  Reserver
                </button>
              </div>
            </div>
          </div>
        </section>
      </body>
      <footer>
        ©Restaurants créer par les grands cuisiniers Alicia, Timothey, Antoine,
        Julien et Thomas.
      </footer>
    </>
  );
}

export default RestaurantDetails;
