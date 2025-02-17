import "./AttractionDetails.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { UseTheme } from "../../services/ThemeContext";

interface AttractionDetails {
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

function AttractionDetails() {
  const [attraction, setAttraction] = useState<AttractionDetails | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/attractions/${id}`)
      .then((response) => response.json())
      .then((data: AttractionDetails) => {
        setAttraction(data);
      });
  }, [id]);

  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";

  return (
    <>
      <main className={`attraction-details-main ${theme}`}>
        {attraction && (
          <div
            key={attraction.id}
            className={`container-attraction-details ${theme}`}
          >
            <img
              className="img-attraction-details"
              src={attraction.img}
              alt="attraction"
            />
            <div className="texte-card-attraction-details">
              <h1>{attraction.name}</h1>
              <p>{attraction.description}</p>
              <p>Type : {attraction.type}</p>
              <p>Temps d'attente : {attraction.waiting_time}</p>
              <p>Hauteur minimum : {attraction.min_height}</p>
              <p>Horaires : {attraction.schedule}</p>
              <p>État : {attraction.state}</p>
            </div>
          </div>
        )}
        <section className="container-map">
          <img
            className="map-nintendream"
            src="/image/attractions/MapNintendDream.jpeg"
            alt="Carte du parc"
          />
        </section>
      </main>
    </>
  );
}

export default AttractionDetails;
