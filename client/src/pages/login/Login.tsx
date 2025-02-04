import { Link } from "react-router-dom";
import "./Login.css";
import type { FormEventHandler } from "react";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../services/userContext";

function Login() {
  const mailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext is null");
  }

  const { setUser } = userContext;

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
        setUser(userFromBack);
        navigate("/");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmitLogin}>
        <h2 className="login-h2">Se connecter</h2>

        <input
          className="login-input"
          type="email"
          name="adresse-mail"
          id="adresse-mail"
          placeholder="Adresse email"
          required
          ref={mailRef}
        />
        <input
          className="login-input"
          type="password"
          name="connection-password"
          id="connection-password"
          placeholder="Mot de passe"
          required
          ref={passwordRef}
        />
        <article className="login-article">
          <p className="login-p">
            Mot de passe oublié ? <br />
            <Link to="/register" className="login-link-form">
              Pas encore de compte ? Inscris-toi !
            </Link>
          </p>
        </article>

        <input
          type="submit"
          value="Valider"
          className="login-submit login-submit-left"
        />
      </form>
    </div>
  );
}

export default Login;
