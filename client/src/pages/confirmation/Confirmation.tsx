import { useLocation } from "react-router-dom";
import "./Confirmation.css";
import cleanDate from "../../services/CleanDate";
function Confirmation() {
  const { state } = useLocation();
  const dateString = String(state.date);

  return (
    <main className="payment-main">
      <section>
        <h2 className="payment-h2">Paiement sécurisé</h2>
        <form className="payment-form">
          <div className="payment-selection">
            <p className="payment-label"> Payer avec :</p>
            <div className="payment-methods">
              <img
                src="/Logos/carte-bleue.png"
                alt="Carte bleue"
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
          <label className="payment-label">
            Titulaire de la carte :
            <input
              name="titulaire"
              type="text"
              className="payment-input"
              required
            />
          </label>
          <label className="payment-label">
            Numéro de la carte :
            <input
              name="card-number"
              type="text"
              className="payment-input"
              required
            />
          </label>
          <label className="payment-label">
            Date d'expiration :
            <input
              name="card-expiration"
              type="text"
              className="payment-input"
              required
            />
          </label>
          <label className="payment-label">
            CVC :
            <input name="cvc" type="text" className="payment-input" required />
          </label>
          <label className="payment-label">
            <input
              name="confirmation"
              type="submit"
              value="Valider"
              className="payment-validate-button"
            />
          </label>
        </form>
      </section>
      <section>
        <h2 className="payment-h2">Résumé de la commande :</h2>
        <div className="payment-summary">
          <p className="payment-label">
            Nombre de personnes : {state.personNumber}{" "}
          </p>
          <p className="payment-label"> Date : {cleanDate(dateString)}</p>
          <p className="payment-label"> Prix à payer : {state.price}€</p>
        </div>
      </section>
    </main>
  );
}

export default Confirmation;
