import { Link } from "react-router-dom";
import "./NavBar.css";
import { useContext, useState } from "react";
import { UserContext } from "../../services/userContext";

function NavBar() {
  const [menuBurgerToggle, setMenuBurgerToggle] = useState(false);

  function handleClick() {
    setMenuBurgerToggle(!menuBurgerToggle);
  }
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext is null");
  }
  return (
    <header className="whole-nav">
      <div className="logo-and-login">
        <p className="login-p-left">Se connecter/S'inscrire</p>
        <button className="navbar-burger" onClick={handleClick} type="button">
          <span
            className={
              menuBurgerToggle
                ? "navbar-burger-line navbar-burger-open navbar-burger-line1-open"
                : "navbar-burger-line navbar-burger-close navbar-burger-line1-close"
            }
          >
            {""}
          </span>
          <span
            className={
              menuBurgerToggle
                ? "navbar-burger-line navbar-burger-open navbar-burger-line2-open"
                : "navbar-burger-line navbar-burger-close navbar-burger-line2-close"
            }
          >
            {""}
          </span>
          <span
            className={
              menuBurgerToggle
                ? "navbar-burger-line navbar-burger-open navbar-burger-line3-open"
                : "navbar-burger-line navbar-burger-close navbar-burger-line3-close"
            }
          >
            {""}
          </span>
        </button>
        <Link to="/">
          <img
            src="/Logos/NintenDreamlogo.png"
            alt="Nintendream"
            className="nintendreamlogo"
          />
        </Link>
        {userContext.user ? (
          <Link to="/profile">
            <img
              src="/imgNav/profile.png"
              alt="profile logo"
              className="profile-image"
            />
          </Link>
        ) : (
          <Link to="/login" className="nav-link">
            <p className="login-p-right">Se connecter/S'inscrire</p>
            <img
              src="/Logos/connexion.png"
              alt="mon compte"
              className="login-favicon"
            />
          </Link>
        )}
      </div>
      <ul
        className={
          menuBurgerToggle
            ? "nav-ul navbar-burger-open"
            : "nav-ul navbar-burger-close"
        }
      >
        <Link to="/parc">
          <li className="nav-li">Parc</li>
        </Link>
        <Link to="attractions">
          <li className="nav-li">Attractions</li>
        </Link>
        <Link to="/evenements">
          <li className="nav-li">Évènements</li>
        </Link>
        <Link to="/hotels">
          <li className="nav-li">Hôtels</li>
        </Link>
        <Link to="/restaurants">
          <li className="nav-li">Restaurants</li>
        </Link>
        <Link to="/billetterie">
          <li className="nav-li nav-li-billetterie">Billetterie</li>
        </Link>
      </ul>
    </header>
  );
}

export default NavBar;
