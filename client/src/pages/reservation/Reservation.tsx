import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_red.css";
import "./Reservation.css";
function Reservation() {
  return (
    <>
      <Flatpickr
        options={{
          inline: true,
          dateFormat: "Y-m-d H:i",
          minDate: "today",
          mode: "range",
        }}
      />
    </>
  );
}

export default Reservation;
