import "./AttractionDetails.css";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

interface AttractionDetails {
  id: number;
  name: string;
  img: string;
  waiting_time: number;
  type_attraction: string;
  min_height: number;
  zone_id: number;
  schedule: string;
  description_attraction: string;
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

  return (
    <>
      {attraction && (
        <div key={attraction.id} className="container-attraction-details">
          <img
            className="img-attraction-details"
            src={attraction.img}
            alt="attraction"
          />
          <div className="texte-card-attraction-details">
            <h1>{attraction.name}</h1>
            <p>{attraction.description_attraction}</p>
            <p>Type : {attraction.type_attraction}</p>
            <p>Temps d'attente : {attraction.waiting_time}</p>
            <p>Hauteur minimum : {attraction.min_height}</p>
            <p>Horaires : {attraction.schedule}</p>
            <p>État : {attraction.state}</p>
          </div>
        </div>
      )}

      <img
        className="map-nintendream"
        src="/image/attractions/MapNintendDream.jpeg"
        alt="Carte du parc"
      />
    </>
  );
}

export default AttractionDetails;
