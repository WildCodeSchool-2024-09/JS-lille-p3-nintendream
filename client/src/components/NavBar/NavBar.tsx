import { Link } from "react-router-dom";
import "./NavBar.css";
import { useContext, useState } from "react";
import { UseTheme } from "../../services/ThemeContext";
import { UserContext } from "../../services/UserContext";

function NavBar() {
  const [menuBurgerToggle, setMenuBurgerToggle] = useState(false);

  function handleClick() {
    setMenuBurgerToggle(!menuBurgerToggle);
  }
  function handleClose() {
    setMenuBurgerToggle(false);
  }
  const userContext = useContext(UserContext);
  const userAndToken = userContext?.userAndToken;
  const user = userAndToken?.user;

  const themeContext = UseTheme();
  if (!themeContext) {
    return null;
  }

  const { theme, setTheme } = themeContext;

  const handleDarkTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <header className={`whole-nav ${theme}`} onTouchMove={handleClose}>
      <div className="logo-and-login">
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
        <div className={`dark-mode-logo ${theme}`}>
          {theme === "light" ? (
            <img
              src="/imgNav/sun-nav.png"
              alt="sun"
              onClick={handleDarkTheme}
              onKeyUp={handleDarkTheme}
              className="sun-nav"
            />
          ) : (
            <img
              src="/imgNav/moon-nav.png"
              alt="moon"
              onClick={handleDarkTheme}
              onKeyUp={handleDarkTheme}
              className="moon-nav"
            />
          )}
        </div>
        <Link to="/">
          <img
            src="/Logos/NintenDreamlogo.png"
            alt="Nintendream"
            className="nintendreamlogo"
          />
        </Link>
        {user ? (
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
            ? `nav-ul navbar-burger-open ${theme}`
            : `nav-ul navbar-burger-close ${theme}`
        }
        onClick={handleClose}
        onKeyDown={handleClose}
      >
        <Link to="/">
          <li className="nav-li">Accueil</li>
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
