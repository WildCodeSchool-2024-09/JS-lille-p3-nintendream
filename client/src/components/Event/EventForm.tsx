import type { ReactNode } from "react";
import "./EventForm.css";
type EventData = {
  name: string;
  short_description: string;
  description: string;
  schedule: string;
  img_src: string;
  zone_id: number;
};

interface EventFormProps {
  children: ReactNode;
  defaultValue: EventData;
  onSubmit: (event: EventData) => void;
}

function EventForm({ children, defaultValue, onSubmit }: EventFormProps) {
  return (
    <form
      className="form-event"
      onSubmit={(event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const short_description = formData.get("short_description") as string;
        const description = formData.get("description") as string;
        const schedule = formData.get("schedule") as string;
        const img_src = formData.get("img_src") as string;
        const zone_id_string = formData.get("zone_id") as string;
        const zone_id = Number.parseInt(zone_id_string);
        onSubmit({
          name,
          short_description,
          description,
          schedule,
          img_src,
          zone_id,
        });
      }}
    >
      <section className="form-event-section">
        <label htmlFor="name">Nom de l'évènement : </label>
        <textarea
          className="form-event-textarea"
          name="name"
          id="name"
          defaultValue={defaultValue.name}
          placeholder="Nom"
        />
      </section>
      <section className="form-event-section">
        <label htmlFor="short_description">Description courte : </label>
        <textarea
          className="form-event-textarea"
          name="short_description"
          id="short_description"
          defaultValue={defaultValue.short_description}
          placeholder="Courte description"
        />
      </section>
      <section className="form-event-section">
        <label htmlFor="description">Description longue :</label>
        <textarea
          className="form-event-textarea"
          name="description"
          id="description"
          defaultValue={defaultValue.description}
          placeholder="Description"
        />
      </section>
      <section className="form-event-section">
        <label htmlFor="schedule">Horaires :</label>
        <textarea
          className="form-event-textarea"
          id="schedule"
          name="schedule"
          defaultValue={defaultValue.schedule}
          placeholder="Horaire"
        />
      </section>
      <section className="form-event-section">
        <label htmlFor="img_src">Source de l'image :</label>
        <textarea
          className="form-event-textarea"
          name="img_src"
          id="img_src"
          defaultValue={defaultValue.img_src}
          placeholder="Source de l'image"
        />
      </section>
      <section className="form-event-section">
        <label htmlFor="zone_id">ID de la zone (1-4) :</label>
        <input
          className="form-event-textarea"
          type="number"
          name="zone_id"
          id="zone_id"
          defaultValue={defaultValue.zone_id}
          placeholder="Zone"
        />
      </section>
      <button type="submit">{children}</button>
    </form>
  );
}

export default EventForm;
