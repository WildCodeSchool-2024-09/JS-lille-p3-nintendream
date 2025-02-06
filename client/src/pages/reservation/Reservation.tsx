import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_red.css";
import "./Reservation.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UseTheme } from "../../services/ThemeContext";

function Reservation() {
  const [priceMultiplier, setPriceMultiplier] = useState(0);
  const [personNumber, setPersonNumber] = useState(1);
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState<[string, string]>(["", ""]);
  const { name } = useParams();
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";
  const [clickedADate, setClickedADate] = useState(false);

  useEffect(() => {
    switch (name) {
      case "individuel":
        setPrice(35);
        break;
      case "famille":
        setPersonNumber(2);
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
      if (personNumber < 8) {
        setPersonNumber(personNumber + 1);
      }
    } else {
      setPersonNumber(personNumber + 1);
    }
  }

  function handleClickLess() {
    if (personNumber > 2) setPersonNumber(personNumber - 1);
  }

  function handleAlert() {
    alert("Veuillez sélectionner une date");
  }

  return (
    <main className={`main-reservation ${theme}`}>
      <h1 className={`h1-reservation ${theme}`}>Réservez vos billets</h1>
      {name === "CSE" || name === "famille" ? (
        <>
          <h2 className={`h2-reservation ${theme}`}>Combien êtes-vous ?</h2>
          <div className="reservation-more-less">
            <button
              type="button"
              className={`reservation-button-more-less ${theme}`}
              onClick={handleClickMore}
            >
              +
            </button>
            <p className={`reservation-person-count ${theme}`}>
              {personNumber}
            </p>
            <button
              type="button"
              className={`reservation-button-more-less ${theme}`}
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
            if (firstDate) {
              setClickedADate(true);
            }
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

      <h2 className={`h2-reservation ${theme}`}>
        Prix : {price * priceMultiplier * personNumber}€
      </h2>

      {clickedADate ? (
        <Link
          to="/confirmation"
          state={{
            price: price * priceMultiplier * personNumber,
            personNumber: personNumber,
            date: date,
          }}
        >
          <button type="button" className={`reservation-button ${theme}`}>
            Vers le paiement
          </button>
        </Link>
      ) : (
        <button
          type="button"
          className={`reservation-button .reservation-disabled-button ${theme}`}
          onClick={handleAlert}
        >
          Vers le paiement
        </button>
      )}
    </main>
  );
}

export default Reservation;
