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

function EditAttractionForm({ defaultValue }: AttractionFormProps) {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmitEditAttraction = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const editAttraction = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_URL}/api/attractions/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editAttraction),
    }).then((response) => {
      if (response.status === 204) {
        navigate("/admin/attractions/${id}");
      }
    });
  };

  return (
    <form
      onSubmit={handleSubmitEditAttraction}
      className="form-admin-container"
    >
      <input
        type="text"
        name="name"
        defaultValue={defaultValue.name}
        placeholder="nom de l'attraction"
        className="form-admin"
      />
      <input
        type="text"
        name="waiting_time"
        defaultValue={defaultValue.waiting_time}
        placeholder="waiting time"
        className="form-admin"
      />
      <input
        type="text"
        name="type"
        defaultValue={defaultValue.type}
        placeholder="type d'attraction"
        className="form-admin"
      />

      <input
        type="text"
        name="min_height"
        defaultValue={defaultValue.min_height}
        placeholder="min height"
        className="form-admin"
      />
      <input
        type="text"
        name="zone_id"
        defaultValue={defaultValue.zone_id}
        placeholder="zone de l'attraction"
        className="form-admin"
      />
      <input
        type="text"
        name="description"
        defaultValue={defaultValue.description}
        placeholder="description"
        className="form-admin"
      />
      <input
        type="text"
        name="state"
        defaultValue={defaultValue.state}
        placeholder="état de l'attraction"
        className="form-admin"
      />
      <input
        type="text"
        name="schedule"
        defaultValue={defaultValue.schedule}
        placeholder="schedule"
        className="form-admin"
      />
      <button type="submit" className="admin-form-button">
        Submit
      </button>
    </form>
  );
}

export default EditAttractionForm;
