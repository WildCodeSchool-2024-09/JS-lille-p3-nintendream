import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EditRestaurantForm from "./EditRestaurantForm";

describe("EditRestaurantForm", () => {
  const defaultValue = {
    id: 1,
    name: "Mario's Pizza",
    img: "mario-pizza.jpg",
    intro: "Best pizza in town",
    text: "Authentic Italian pizza since 1985.",
    adult_price: 15,
    kids_price: 8,
  };

  test("pré-remplit les champs avec defaultValue", () => {
    render(
      <MemoryRouter>
        <EditRestaurantForm defaultValue={defaultValue} />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText("name de restaurant")).toHaveValue("Mario's Pizza");
    expect(screen.getByPlaceholderText("image")).toHaveValue("mario-pizza.jpg");
    expect(screen.getByPlaceholderText("paragraphe d'introduction")).toHaveValue("Best pizza in town");
    expect(screen.getByPlaceholderText("text")).toHaveValue("Authentic Italian pizza since 1985.");
    expect(screen.getByPlaceholderText("prix adulte")).toHaveValue("15");
    expect(screen.getByPlaceholderText("prix enfant")).toHaveValue("8");
  });
});
