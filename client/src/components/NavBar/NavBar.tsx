import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <header className="whole-nav">
      <div className="logo-and-login">
        <p className="login-p-left">Se connecter/S'inscrire</p>
        <Link to="/">
          <img
            src="/Logos/NintenDreamlogo.png"
            alt="Nintendream"
            className="nintendreamlogo"
          />
        </Link>
        <Link to="/login" className="nav-link">
          <p className="login-p-right">Se connecter/S'inscrire</p>
        </Link>
      </div>
      <ul className="nav-ul">
        <Link to="attractions">
          <li className="nav-li">Attractions</li>
        </Link>
        <Link to="/évènements">
          <li className="nav-li">Évènements</li>
        </Link>
        <Link to="/hébergement">
          <li className="nav-li">Hébergement</li>
        </Link>
        <Link to="/restaurants">
          <li className="nav-li">Restauration</li>
        </Link>
        <Link to="/billetterie">
          <li className="nav-li">Billetterie</li>
        </Link>
      </ul>
    </header>
  );
}

export default NavBar;
