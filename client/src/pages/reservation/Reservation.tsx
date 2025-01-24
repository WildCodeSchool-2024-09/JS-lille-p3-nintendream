import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_red.css";
import "./Reservation.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Reservation() {
  const [priceMultiplier, setPriceMultiplier] = useState(0);
  const [personNumber, setPersonNumber] = useState(1);
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState<[string, string]>(["", ""]);
  const [count, setCount] = useState(2);
  const { name } = useParams();

  useEffect(() => {
    switch (name) {
      case "individuel":
        setPrice(35);
        break;
      case "famille":
        setPrice(30);
        break;
      case "CSE":
        setPrice(25);
        break;
      case "pixel-paradise-small-room":
        setPrice(90);
        break;
      case "pixel-paradise-medium-room":
        setPrice(130);
        break;
      case "pixel-paradise-big-room":
        setPrice(200);
        break;
      case "mario-small-room":
        setPrice(60);
        break;
      case "mario-medium-room":
        setPrice(99);
        break;
      case "mario-big-room":
        setPrice(170);
        break;
      case "donkey-small-room":
        setPrice(120);
        break;
      case "donkey-medium-room":
        setPrice(230);
        break;
      case "donkey-big-room":
        setPrice(299);
        break;
      default:
        break;
    }
  }, [name]);

  function handleClickMore() {
    if (name === "famille") {
      if (count < 8) {
        setCount(count + 1);
      }
    } else {
      setCount(count + 1);
    }
    setPersonNumber(count);
  }

  function handleClickLess() {
    if (count > 2) setCount(count - 1);
    setPersonNumber(count);
  }

  return (
    <main className="main-reservation">
      <h1 className="h1-reservation">Réservez vos billets</h1>
      {name === "CSE" || name === "famille" ? (
        <>
          <h2>Combien êtes-vous ?</h2>{" "}
          <div className="reservation-more-less">
            <button
              type="button"
              className="reservation-button-more-less"
              onClick={handleClickMore}
            >
              +
            </button>
            <p className="reservation-person-count">{count}</p>
            <button
              type="button"
              className="reservation-button-more-less"
              onClick={handleClickLess}
            >
              -
            </button>
          </div>
        </>
      ) : (
        ""
      )}
      <Flatpickr
        options={{
          inline: true,
          dateFormat: "Y-m-d H:i",
          minDate: "today",
          mode: "range",
          onValueUpdate: (selectedDates: [string, string]) => {
            const firstDate = new Date(selectedDates[0]).getTime();
            const secondDate = new Date(selectedDates[1]).getTime();
            setDate(selectedDates);

            if (secondDate) {
              const dateGap = (secondDate - firstDate) / 86400000 + 1;
              setPriceMultiplier(dateGap);
            } else {
              setPriceMultiplier(1);
            }
          },
        }}
      />

      <h2>Prix : {price * priceMultiplier * personNumber}€</h2>
      <Link
        to="/confirmation"
        state={{
          price: price * priceMultiplier * personNumber,
          personNumber: personNumber,
          date: date,
        }}
      >
        <button type="button" className="reservation-button">
          Vers le paiement
        </button>
      </Link>
    </main>
  );
}

export default Reservation;
