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
        <p className="login-p-right">Se connecter/S'inscrire</p>
      </div>
      <ul className="nav-ul">
        <li className="nav-li">Attractions</li>
        <li className="nav-li">Évènements</li>
        <li className="nav-li">Hébergement</li>
        <li className="nav-li">Restauration</li>
        <li className="nav-li">Billetterie</li>
      </ul>
    </header>
  );
}

export default NavBar;
