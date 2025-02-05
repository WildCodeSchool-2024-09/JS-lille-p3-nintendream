import { useContext } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
import { UseTheme } from "../../services/ThemeContext";
import { UserContext } from "../../services/UserContext";

function Profile() {
  const userContext = useContext(UserContext);
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";

  if (!userContext) {
    throw new Error("UserContext is null");
  }
  const { setUser } = userContext;

  function handleProfileClick() {
    setUser(null);
    navigate("/");
  }

  const navigate = useNavigate();

  return (
    <>
      <body className="body-profile">
        {theme === "light" ? (
          <img
            src="./imageProfil/herbe.webp"
            alt="pré le jour"
            className="background-profile-light"
          />
        ) : (
          <img
            src="./imageProfil/herbe-nuit.webp"
            alt="pré la nuit"
            className="background-profile-dark"
          />
        )}
        <section className={`box-container-profile ${theme}`}>
          <div>
            <h1 className="title-profile">Vos informations</h1>
          </div>
          <div className="text-profile">
            Voici les informations que vous avez enregistrées depuis la création
            de votre compte Nintendream :
          </div>
          <div className="email-profile">E-mail :</div>
          <div className="firstname-profile">Prénom :</div>
          <div className="name-profile">Nom :</div>
          <div className="age-profile">Age :</div>
          <div className="ending-profile">
            A très vite dans notre super parc Nintendream !
          </div>
          <button
            type="button"
            className="button-profile"
            onClick={handleProfileClick}
            onKeyUp={handleProfileClick}
          >
            Se déconnecter
          </button>
        </section>
      </body>
    </>
  );
}

export default Profile;
