import { Link } from "react-router-dom";
import "./Error.css";
import { UseTheme } from "../../services/ThemeContext";

function ErrorPage() {
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";
  return (
    <main className={`error-main ${theme}`}>
      <h1 className="error-title">ERROR 404</h1>
      <section className="error-container">
        <img
          src="/imageError/mario-error.png"
          alt="Mario"
          className="error-img"
        />
        <p className="error-text">
          Il semblerait que la page que tu cherches n’existe pas 😫 Mais pas de
          panique, Mario t’apporte son aide pour retrouver ton chemin :
          <ul className="error-list">
            <li className="error-list-item">
              Achète tes billets{" "}
              <Link to="/billetterie" className="link-error">
                {" "}
                ici
              </Link>{" "}
            </li>
            <li className="error-list-item">
              Découvre les attractions{" "}
              <Link to="/attractions" className="link-error">
                {" "}
                ici
              </Link>{" "}
            </li>
            <li className="error-list-item">
              Réserve ton hôtel{" "}
              <Link to="/hotel" className="link-error">
                {" "}
                ici
              </Link>{" "}
            </li>
          </ul>
        </p>
      </section>
    </main>
  );
}

export default ErrorPage;
