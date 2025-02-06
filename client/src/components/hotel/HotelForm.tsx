import type { ReactNode } from "react";
import "./HotelForm.css";

type hotelData = {
  id: number;
  img: string;
  name: string;
  distance: number;
  hotel_price: string;
  description: string;
  secondary_description: string;
  tertiary_description: string;
};

interface HotelFormProps {
  children: ReactNode;
  defaultValue: hotelData;
  onSubmit: (hotel: hotelData) => void;
}

function HotelForm({ children, defaultValue, onSubmit }: HotelFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const img = formData.get("img") as string;
    const name = formData.get("name") as string;
    const distance_string = formData.get("distance") as string;
    const distance = Number.parseInt(distance_string);
    const hotel_price = formData.get("hotel_price") as string;
    const description = formData.get("description") as string;
    const secondary_description = formData.get(
      "secondary_description",
    ) as string;
    const tertiary_description = formData.get("tertiary_description") as string;
    onSubmit({
      id: defaultValue.id,
      img,
      name,
      distance,
      hotel_price,
      description,
      secondary_description,
      tertiary_description,
    });
  };

  return (
    <form className="form-hotel" onSubmit={(event) => handleSubmit(event)}>
      <section className="form-hotel-section">
        <label htmlFor="name">Nom de l'hôtel : </label>
        <textarea
          className="form-hotel-textarea"
          name="name"
          id="name"
          defaultValue={defaultValue.name}
          placeholder="Nom"
        />
      </section>
      <section className="form-hotel-section">
        <label htmlFor="distance">Distance : </label>
        <textarea
          className="form-hotel-textarea"
          name="distance"
          id="distance"
          defaultValue={defaultValue.distance}
          placeholder="Distance"
        />
      </section>
      <section className="form-hotel-section">
        <label htmlFor="hotel_price">Prix de l'hôtel :</label>
        <textarea
          className="form-hotel-textarea"
          name="hotel_price"
          id="hotel_price"
          defaultValue={defaultValue.hotel_price}
          placeholder="Prix de l'hôtel"
        />
      </section>
      <section className="form-hotel-section">
        <label htmlFor="description">Description :</label>
        <textarea
          className="form-hotel-textarea"
          id="description"
          name="description"
          defaultValue={defaultValue.description}
          placeholder="Description"
        />
      </section>
      <section className="form-hotel-section">
        <label htmlFor="secondary_description">Deuxième description :</label>
        <textarea
          className="form-hotel-textarea"
          id="secondary_description"
          name="secondary_description"
          defaultValue={defaultValue.secondary_description}
          placeholder="Deuxième description"
        />
      </section>
      <section className="form-hotel-section">
        <label htmlFor="tertiary_description">Troisième description :</label>
        <textarea
          className="form-hotel-textarea"
          id="tertiary_description"
          name="tertiary_description"
          defaultValue={defaultValue.tertiary_description}
          placeholder="Troisième description"
        />
      </section>
      <section className="form-event-section">
        <label htmlFor="img">Source de l'image :</label>
        <textarea
          className="form-event-textarea"
          name="img"
          id="img"
          defaultValue={defaultValue.img}
          placeholder="Source de l'image"
        />
      </section>
      <button type="submit">{children}</button>
    </form>
  );
}

export default HotelForm;
