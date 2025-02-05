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
    userContext.user && (
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
          <p className="text-profile">
            Voici les informations que vous avez enregistrées depuis la création
            de votre compte Nintendream :
          </p>
          <ul>
            <li className="email-profile">E-mail : {userContext.user.mail}</li>
            <li className="firstname-profile">
              Prénom : {userContext.user.first_name}
            </li>
            <li className="name-profile">Nom : {userContext.user.name}</li>
            <li className="age-profile">Age : {userContext.user.age}</li>
          </ul>
          <div className="ending-profile">
            A très vite dans notre super parc Nintendream !
          </div>
          <button
            type="button"
            className={`button-profile ${theme}`}
            onClick={handleProfileClick}
            onKeyUp={handleProfileClick}
          >
            Se déconnecter
          </button>
        </section>
      </body>
    )
  );
}

export default Profile;
