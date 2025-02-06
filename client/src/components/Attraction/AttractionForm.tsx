import type { ReactNode } from "react";

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
  img?: string;
};

interface AttractionFormProps {
  children: ReactNode;
  defaultValue: AttractionData;
  onSubmit: (attraction: AttractionData) => void;
}

function AttractionForm({
  children,
  defaultValue,
  onSubmit,
}: AttractionFormProps) {
  return (
    <form
      className="form-attraction-container"
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const waiting_time = formData.get("waiting_time") as string;
        const type = formData.get("type") as string;
        const min_height = formData.get("min_height") as string;
        const zone_id_string = formData.get("zone_id") as string;
        const zone_id = Number.parseInt(zone_id_string);
        const schedule = formData.get("schedule") as string;
        const description = formData.get("description") as string;
        const state = formData.get("state") as string;
        const img = formData.get("img") as string;

        onSubmit({
          id: defaultValue.id,
          name,
          waiting_time,
          type,
          min_height,
          zone_id,
          schedule,
          description,
          state,
          img,
        });
      }}
    >
      <section className="form-attraction-section">
        <label htmlFor="name">Nom de l'attraction : </label>
        <input
          type="text"
          name="name"
          defaultValue={defaultValue.name}
          placeholder="nom de l'attraction"
          className="form-admin-attraction"
        />
      </section>
      <section className="form-attraction-section">
        <label htmlFor="name">Temps d'attente : </label>
        <input
          type="text"
          name="waiting_time"
          defaultValue={defaultValue.waiting_time}
          placeholder="waiting time"
          className="form-admin-attraction"
        />
      </section>
      <section className="form-attraction-section">
        <label htmlFor="name">Genre de l'attraction : </label>
        <input
          type="text"
          name="type"
          defaultValue={defaultValue.type}
          placeholder="type d'attraction"
          className="form-admin-attraction"
        />
      </section>
      <section className="form-attraction-section">
        <label htmlFor="name">Taille minimale obligatoire : </label>
        <input
          type="text"
          name="min_height"
          defaultValue={defaultValue.min_height}
          placeholder="min height"
          className="form-admin-attraction"
        />
      </section>
      <section className="form-attraction-section">
        <label htmlFor="name">Zone de l'attraction : </label>
        <input
          type="number"
          name="zone_id"
          defaultValue={defaultValue.zone_id}
          placeholder="zone de l'attraction"
          className="form-admin-attraction"
        />
      </section>
      <section className="form-attraction-section">
        <label htmlFor="name">Description de l'attraction : </label>
        <input
          type="text"
          name="description"
          defaultValue={defaultValue.description}
          placeholder="description"
          className="form-admin-attraction"
        />
      </section>
      <section className="form-attraction-section">
        <label htmlFor="name">État de l'attraction : </label>
        <input
          type="text"
          name="state"
          defaultValue={defaultValue.state}
          placeholder="état de l'attraction"
          className="form-admin-attraction"
        />
      </section>
      <section className="form-attraction-section">
        <label htmlFor="name">Horaires de l'attraction : </label>
        <input
          type="text"
          name="schedule"
          defaultValue={defaultValue.schedule}
          placeholder="schedule"
          className="form-admin-attraction"
        />
      </section>
      <button type="submit" className="admin-form-button">
        {children}
      </button>
    </form>
  );
}

export default AttractionForm;
