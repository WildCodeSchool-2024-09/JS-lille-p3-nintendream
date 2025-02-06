import "./AttractionForm.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AttractionForm from "../../../components/Attraction/AttractionForm";

type AttractionData = {
  id: number;
  name: string;
  waiting_time: string;
  type: string;
  min_height: string;
  zone_id: number;
  schedule: string;
  description: string;
  state: string;
  img: string;
};

function EdiAttraction() {
  const { id } = useParams();
  const [attraction, setAttraction] = useState<AttractionData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/attractions/${id}`)
      .then((response) => response.json())
      .then((data: AttractionData) => setAttraction(data));
  }, [id]);

  return (
    attraction && (
      <AttractionForm
        defaultValue={attraction}
        onSubmit={(attractionData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/attractions/${id}`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(attractionData),
          }).then((response) => {
            if (response.status === 204) {
              navigate(`/attractions/${attraction.id}`);
            }
          });
        }}
      >
        Modifier
      </AttractionForm>
    )
  );
}

export default EdiAttraction;
