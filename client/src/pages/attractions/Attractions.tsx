import { useEffect } from "react";
import "./Attractions.css";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Attractions {
  id: number;
  name: string;
  img: string;
  waiting_time: number;
  type: string;
  min_height: number;
  zone_id: number;
  schedule: string;
  description: string;
  state: string;
}

function Attractions() {
  const [attractions, setAttractions] = useState([] as Attractions[]);
  const [attractionsFilter, setAttractionsFilter] = useState("Tout");
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/attractions`)
      .then((response) => response.json())
      .then((data: Attractions[]) => {
        setAttractions(data);
      });
  });

  return (
    <main>
      <div className="image-background-attraction">
        <img
          className="background-attraction"
          src="/public/image/attractions/Background-Attraction.webp"
          alt="attraction"
        />
      </div>
      <div className="attraction-flex-button-p">
        <p>Filtres</p>
        <div className="attraction-flex-button">
          <button
            type="button"
            onClick={() => {
              setAttractionsFilter("Tout");
            }}
            className="filter-button-attraction"
          >
            Tout
          </button>
          <button
            type="button"
            onClick={() => {
              setAttractionsFilter("ENFANT");
            }}
            className="filter-button-attraction"
          >
            Enfant
          </button>
          <button
            type="button"
            onClick={() => setAttractionsFilter("FAMILLE")}
            className="filter-button-attraction"
          >
            Famille
          </button>
          <button
            type="button"
            onClick={() => setAttractionsFilter("SENSATION FORTE")}
            className="filter-button-attraction"
          >
            Sensation forte
          </button>
        </div>
      </div>
      <section className="container-card-attractions">
        {attractions.map((attraction) => (
          <>
            {attraction.type === attractionsFilter ||
            attractionsFilter === "Tout" ? (
              <div key={attraction.id} className="card-link-attraction">
                <Link to={`/attraction/${attraction.id}`}>
                  <img
                    className="img-attraction"
                    src={attraction.img}
                    alt="attraction"
                  />
                  <div className="texte-card-attraction">
                    <h1>{attraction.name}</h1>
                    <p>{attraction.description}</p>
                    <p>Type : {attraction.type}</p>
                    <p>Hauteur minimum : {attraction.min_height}</p>
                  </div>
                </Link>
              </div>
            ) : (
              ""
            )}
          </>
        ))}
      </section>

      <img
        className="map-nintendream"
        src="/public/image/attractions/MapNintendDream.jpeg"
        alt="Map"
      />
    </main>
  );
}

export default Attractions;
