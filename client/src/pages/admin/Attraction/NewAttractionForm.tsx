import "./AttractionForm.css";
import { useNavigate } from "react-router-dom";

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
  img_src?: string;
};

interface AttractionFormProps {
  defaultValue: AttractionData;
  onSubmit: (attraction: AttractionData) => void;
}

function AttractionFrom({ defaultValue }: AttractionFormProps) {
  const navigate = useNavigate();

  const handleSubmitNewAttraction = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newAttraction = Object.fromEntries(formData.entries());

    fetch(`${import.meta.env.VITE_API_URL}/api/attractions`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAttraction),
    })
      .then((response) => response.json())
      .then((data) => {
        navigate(`/admin/attractions/${data.insertId}`);
      });
  };

  return (
    <form onSubmit={handleSubmitNewAttraction} className="form-admin-container">
      <input
        type="text"
        name="name"
        defaultValue={defaultValue.name}
        placeholder="nom de l'attraction"
        className="form-admin"
      />
      <input
        type="number"
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
        type="number"
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

export default AttractionFrom;
