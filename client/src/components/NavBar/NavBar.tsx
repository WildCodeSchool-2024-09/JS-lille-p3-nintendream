import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <header className="whole-nav">
      <div className="logo-and-login">
        <p className="login-p-left">Se connecter/S'inscrire</p>
        <img
          src="/Logos/NintenDreamlogo.png"
          alt="Nintendream"
          className="nintendreamlogo"
        />
        <Link to="/login">
          <p className="login-p-right">Se connecter/S'inscrire</p>
        </Link>
      </div>
      <ul className="nav-ul">
        <li className="nav-li">Attractions</li>
        <li className="nav-li">Évènements</li>
        <li className="nav-li">Hébergement</li>
        <li className="nav-li">Restauration</li>
        <Link to="/billetterie">
          <li className="nav-li">Billetterie</li>
        </Link>
      </ul>
    </header>
  );
}

export default NavBar;
