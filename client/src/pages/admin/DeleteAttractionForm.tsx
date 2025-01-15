import "./AttractionForm.css";
import { useNavigate, useParams } from "react-router-dom";

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
  img_src: string;
};

interface AttractionFormProps {
  defaultValue: AttractionData;
  onSubmit: (attraction: AttractionData) => void;
}

function DeleteAttractionForm({ defaultValue }: AttractionFormProps) {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmitDeleteAttraction = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    fetch(`${import.meta.env.VITE_API_URL}/api/attractions/${id}`, {
      method: "delete",
    }).then((response) => {
      if (response.status === 204) {
        navigate("/attractions");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmitDeleteAttraction}
      className="form-admin-container"
    >
      <h1 className="delete-title-form">
        ❌ Êtes-vous sûr de vouloir supprimer l'attraction ? Attention ! Cette
        action est irréversible ❌
      </h1>
      <button type="submit" className="admin-form-button">
        Delete
      </button>
    </form>
  );
}

export default DeleteAttractionForm;
