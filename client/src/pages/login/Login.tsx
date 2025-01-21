import "./Login.css";
import type { FormEventHandler } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const mailRef = useRef<HTMLInputElement>(null);
  const confirmMailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [, setUser] = useState();
  // const [mail, setMail] = useState("");
  // const [confirmMail, setConfirmMail] = useState("");

  const navigate = useNavigate();

  // const handlePassword: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setPassword(event.target.value);
  // };

  // const handleConfirmPassword: ChangeEventHandler<HTMLInputElement> = (
  //   event,
  // ) => {
  //   setConfirmPassword(event.target.value);
  // };

  // const handleUser: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setUser(event.target.value);
  // };

  // const handleMail: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setMail(event.target.value);
  // };

  // const handleConfirmMail: ChangeEventHandler<HTMLInputElement> = (event) => {
  //   setConfirmMail(event.target.value);
  // };

  const handleSubmitLogin: FormEventHandler = async (event) => {
    event.preventDefault();
    // if (password !=== confirmPassword) {
    //   alert("Les mots de passe ne correspondent pas");
    //   return;
    // } else if (mail !=== confirmMail) {
    //   alert("Les adresses mail ne correspondent pas");
    //   return;
    // }

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

  const handleSubmitRegister: FormEventHandler = async (event) => {
    event.preventDefault();
    // ici vous allez réaliser le front de la création d'un compte;
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmitLogin}>
        <h2 className="login-h2">Se connecter</h2>
        <input
          className="login-input"
          type="text"
          name="connection-username"
          id="connection-username"
          placeholder="Nom d'utilisateur"
          required
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
        <p className="login-p">Mot de passe oublié ?</p>
        <input
          type="submit"
          value="Valider"
          className="login-submit login-submit-left"
        />
      </form>
      <form className="login-form" onSubmit={handleSubmitRegister}>
        <h2 className="login-h2">S'inscrire</h2>
        <input
          className="login-input"
          type="text"
          name="inscription-username"
          id="inscription-username"
          placeholder="Nom d'utilisateur"
          required
        />
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
          type="email"
          name="confirm-adresse-mail"
          id="confirm-adresse-mail"
          placeholder="Confirmation adresse email"
          required
          ref={confirmMailRef}
        />
        <input
          className="login-input"
          type="password"
          name="inscription-password"
          id="inscription-password"
          placeholder="Mot de passe"
          required
          ref={confirmPasswordRef}
        />
        <input
          className="login-input"
          type="password"
          name="inscription-confirm-password"
          id="inscription-confirm-password"
          placeholder="Confirmation mot de passe"
          required
          ref={confirmPasswordRef}
        />
        <input type="submit" value="Valider" className="login-submit " />
      </form>
    </div>
  );
}

export default Login;
