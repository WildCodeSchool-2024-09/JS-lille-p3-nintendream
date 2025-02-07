import "../../../components/Attraction/AttractionForm.css";
import { useNavigate } from "react-router-dom";
import AttractionForm from "../../../components/Attraction/AttractionForm";

function NewAttraction() {
  const navigate = useNavigate();

  const newAttraction = {
    id: 0,
    name: "",
    waiting_time: "0",
    type: "",
    description: "",
    min_height: "",
    zone_id: 0,
    schedule: "",
    state: "",
    img: "",
  };

  return (
    <>
      <AttractionForm
        defaultValue={newAttraction}
        onSubmit={() => {
          fetch(`${import.meta.env.VITE_API_URL}/api/attractions`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newAttraction),
          })
            .then((response) => response.json())
            .then(() => {
              navigate("/admin");
            });
        }}
      >
        Ajouter
      </AttractionForm>
    </>
  );
}

export default NewAttraction;
