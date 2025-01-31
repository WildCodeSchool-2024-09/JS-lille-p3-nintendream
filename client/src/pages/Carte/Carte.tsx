import "./Carte.css";
function Carte() {
  return (
    <>
      <section className="container-page-carte">
        <div className="img-bowser-carte">
          <img src="/imageCarte/bowser.webp" alt="" />
        </div>
        <section className="container-page-carte">
          <p className="text-error-carte">
            🍄 Oups ! Une erreur est survenue. Ne tinquiète pas les développeurs
            sont en train de fixer le problème lié à la carte de ton parc
            préféré. 🍄
          </p>
        </section>
      </section>
    </>
  );
}

export default Carte;
