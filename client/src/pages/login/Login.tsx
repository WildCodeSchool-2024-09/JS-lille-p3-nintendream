import { Link } from "react-router-dom";
import "./Login.css";
import type { FormEventHandler } from "react";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UseTheme } from "../../services/ThemeContext";
import { UserContext } from "../../services/UserContext";

function Login() {
  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";
  const mailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext is null");
  }

  const { setUserAndToken } = userContext;

  const navigate = useNavigate();

  const handleSubmitLogin: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mail: (mailRef.current as HTMLInputElement).value,
            password: (passwordRef.current as HTMLInputElement).value,
          }),
        },
      );
      if (response.status === 200) {
        const userFromBack = await response.json();
        setUserAndToken(userFromBack);
        navigate("/");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className={`login-page ${theme}`}>
      <form className="login-form" onSubmit={handleSubmitLogin}>
        <h2 className={`login-h2 ${theme}`}>Se connecter</h2>

        <input
          className={`login-input ${theme}`}
          type="email"
          name="adresse-mail"
          id="adresse-mail"
          placeholder="Adresse email"
          required
          ref={mailRef}
        />
        <input
          className={`login-input ${theme}`}
          type="password"
          name="connection-password"
          id="connection-password"
          placeholder="Mot de passe"
          required
          ref={passwordRef}
        />
        <article className="login-article">
          <p className={`login-p ${theme}`}>
            Mot de passe oublié ? <br />
            <Link to="/register" className={`login-link-form ${theme}`}>
              Pas encore de compte ? Inscris-toi !
            </Link>
          </p>
        </article>

        <input
          type="submit"
          value="Valider"
          className={`login-submit login-submit-left ${theme}`}
        />
      </form>
    </main>
  );
}

export default Login;
