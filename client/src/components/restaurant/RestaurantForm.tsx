import type { ReactNode } from "react";
import "./RestaurantForm.css";
import { UseTheme } from "../../services/ThemeContext";

type RestaurantData = {
  name: string;
  img: string;
  intro: string;
  text: string;
  adult_price: number;
  kids_price: number;
};

interface RestaurantFormProps {
  children: ReactNode;
  defaultValue: RestaurantData;
  onSubmit: (restaurant: RestaurantData) => void;
}

function RestaurantForm({
  children,
  defaultValue,
  onSubmit,
}: RestaurantFormProps) {
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";

  return (
    <main className={`form-restaurant-main-container ${theme}`}>
      <form
        className="form-restaurant"
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          const name = formData.get("name") as string;
          const img = formData.get("img") as string;
          const intro = formData.get("intro") as string;
          const text = formData.get("text") as string;
          const adult_price_string = formData.get("adult_price") as string;
          const adult_price = Number.parseInt(adult_price_string);
          const kids_price_string = formData.get("kids_price") as string;
          const kids_price = Number.parseInt(kids_price_string);
          onSubmit({
            name,
            img,
            intro,
            text,
            adult_price,
            kids_price,
          });
        }}
      >
        <section className="form-restaurant-section">
          <label htmlFor="name">Nom du restaurant : </label>
          <textarea
            className={`form-restaurant-textarea ${theme}`}
            name="name"
            id="name"
            defaultValue={defaultValue.name}
            placeholder="Nom"
          />
        </section>
        <section className="form-restaurant-section">
          <label htmlFor="img">Source de l'image :</label>
          <textarea
            className={`form-restaurant-textarea ${theme}`}
            name="img"
            id="img"
            defaultValue={defaultValue.img}
            placeholder="Courte intro"
          />
        </section>
        <section className="form-restaurant-section">
          <label htmlFor="intro">Intro :</label>
          <textarea
            className={`form-restaurant-textarea ${theme}`}
            name="intro"
            id="intro"
            defaultValue={defaultValue.intro}
            placeholder="intro"
          />
        </section>
        <section className="form-restaurant-section">
          <label htmlFor="text">Text :</label>
          <textarea
            className={`form-restaurant-textarea ${theme}`}
            id="text"
            name="text"
            defaultValue={defaultValue.text}
            placeholder="Horaire"
          />
        </section>
        <section className="form-restaurant-section">
          <label htmlFor="adult_price">Prix adulte :</label>
          <textarea
            className={`form-restaurant-textarea ${theme}`}
            name="adult_price"
            id="adult_price"
            defaultValue={defaultValue.adult_price}
            placeholder="Source de l'image"
          />
        </section>
        <section className="form-restaurant-section">
          <label htmlFor="kids_price"> Prix enfant :</label>
          <input
            className={`form-restaurant-textarea ${theme}`}
            type="number"
            name="kids_price"
            id="kids_price"
            defaultValue={defaultValue.kids_price}
            placeholder="Zone"
          />
        </section>
        <button type="submit" className="admin-form-restaurant-button">
          {children}
        </button>
      </form>
    </main>
  );
}

export default RestaurantForm;
