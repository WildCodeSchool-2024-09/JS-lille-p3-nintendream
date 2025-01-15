import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AttractionForm from "./AttractionForm";

type Attraction = {
  id: number;
  name: string;
  waiting_time: string;
  type: string;
  min_height: string;
  zone_id: number;
  schedule: string;
  description: string;
  state: string;
  img_src: string;
};

function AttractionsEdit() {
  const { id } = useParams<{ id: string }>();
  const [attraction, setAttraction] = useState<Attraction | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/attractions/${id}`)
      .then((response) => response.json())
      .then((data) => setAttraction(data));
  }, [id]);

  return (
    attraction && (
      <AttractionForm
        defaultValue={attraction}
        onSubmit={(attractionData) => {
          fetch(
            `${import.meta.env.VITE_API_URL}/api/attractions/${attraction.id}`,
            {
              method: "put",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(attractionData),
            },
          ).then((response) => {
            if (response.status === 204) {
              navigate(`/attractions/${attraction.id}`);
            }
          });
        }}
      />
    )
  );
}

export default AttractionsEdit;
