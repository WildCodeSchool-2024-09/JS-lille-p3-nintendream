import { useLocation } from "react-router-dom";
import "./Confirmation.css";
import cleanDate from "../../services/CleanDate";
import { UseTheme } from "../../services/ThemeContext";

function Confirmation() {
  const { state } = useLocation();
  const dateString = String(state.date);
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";

  return (
    <main className={`payment-main ${theme}`}>
      <section>
        <h2 className={`payment-h2 ${theme}`}>Paiement sécurisé</h2>
        <form className={`payment-form ${theme}`}>
          <div className="payment-selection">
            <p className={`payment-label ${theme}`}> Payer avec :</p>
            <div className="payment-methods">
              <img
                src="/Logos/carte-bleue.png"
                alt="carte bleue"
                className="payment-img"
              />
              <img
                src="/Logos/mastercard.png"
                alt="Mastercard"
                className="payment-img"
              />
              <img src="/Logos/visa.png" alt="Visa" className="payment-img" />
            </div>
          </div>
          <label className={`payment-label ${theme}`}>
            Titulaire de la carte :
            <input
              name="titulaire"
              type="text"
              className={`payment-input ${theme}`}
              required
            />
          </label>
          <label className={`payment-label ${theme}`}>
            Numéro de la carte :
            <input
              name="card-number"
              type="text"
              className={`payment-input ${theme}`}
              required
            />
          </label>
          <label className={`payment-label ${theme}`}>
            Date d'expiration :
            <input
              name="card-expiration"
              type="text"
              className={`payment-input ${theme}`}
              required
            />
          </label>
          <label className={`payment-label ${theme}`}>
            CVC :
            <input
              name="cvc"
              type="text"
              className={`payment-input ${theme}`}
              required
            />
          </label>
          <label className={`payment-label ${theme}`}>
            <input
              name="confirmation"
              type="submit"
              value="Valider"
              className={`payment-validate-button ${theme}`}
            />
          </label>
        </form>
      </section>
      <section>
        <h2 className={`payment-h2 ${theme}`}>Résumé de la commande :</h2>
        <div className={`payment-summary ${theme}`}>
          <p className={`payment-label ${theme}`}>
            Nombre de personnes : {state.personNumber}{" "}
          </p>
          <p className={`payment-label ${theme}`}>
            {" "}
            Date : {cleanDate(dateString)}
          </p>
          <p className={`payment-label ${theme}`}>
            {" "}
            Prix à payer : {state.price}€
          </p>
        </div>
      </section>
    </main>
  );
}

export default Confirmation;
