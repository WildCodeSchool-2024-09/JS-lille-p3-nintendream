import type { ReactNode } from "react";

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
      <input
        type="text"
        name="name"
        defaultValue={defaultValue.name}
        placeholder="Nom"
      />
      <input
        type="text"
        name="short_description"
        defaultValue={defaultValue.short_description}
        placeholder="Courte description"
      />
      <input
        type="text"
        name="description"
        defaultValue={defaultValue.description}
        placeholder="Description"
      />
      <input
        type="text"
        name="schedule"
        defaultValue={defaultValue.schedule}
        placeholder="Horaire"
      />
      <input
        type="text"
        name="img_src"
        defaultValue={defaultValue.img_src}
        placeholder="Source de l'image"
      />
      <input
        type="number"
        name="zone_id"
        defaultValue={defaultValue.zone_id}
        placeholder="Zone"
      />
      <button type="submit">{children}</button>
    </form>
  );
}

export default EventForm;
