import "./Register.css";
import type { FormEventHandler } from "react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UseTheme } from "../../services/ThemeContext";

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const themeContext = UseTheme();
  const theme = themeContext ? themeContext.theme : "light";
  const navigate = useNavigate();

  const mailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const confirmMailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const userRef = useRef<HTMLInputElement>(null);

  const handleSubmitRegister: FormEventHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/register`,
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user: (userRef.current as HTMLInputElement).value,
            firstName: (firstNameRef.current as HTMLInputElement).value,
            age: (ageRef.current as HTMLInputElement).value,
            mail: (mailRef.current as HTMLInputElement).value,
            confirmMail: (confirmMailRef.current as HTMLInputElement).value,
            password: (passwordRef.current as HTMLInputElement).value,
            name: (nameRef.current as HTMLInputElement).value,
            confirmPassword: (confirmPasswordRef.current as HTMLInputElement)
              .value,
          }),
        },
      );

      if (response.status === 201) {
        navigate("/login");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main className={`register-page ${theme}`}>
      <form className="register-form" onSubmit={handleSubmitRegister}>
        <h2 className={`register-h2 ${theme}`}> S'inscrire</h2>
        <input
          className={`register-input ${theme}`}
          type="text"
          name="connection-username"
          id="connection-username"
          placeholder="Nom d'utilisateur"
          required
          ref={userRef}
        />
        <input
          className={`register-input ${theme}`}
          type="text"
          name="connection-first-name"
          id="connection-first-name"
          placeholder="Prénom"
          required
          ref={firstNameRef}
        />
        <input
          className={`register-input ${theme}`}
          type="text"
          name="connection-name"
          id="connection-name"
          placeholder="Nom de famille"
          required
          ref={nameRef}
        />
        <input
          className={`register-input ${theme}`}
          type="number"
          name="connection-age"
          id="connection-age"
          placeholder="Âge"
          required
          ref={ageRef}
        />
        <input
          className={`register-input ${theme}`}
          type="email"
          name="adresse-mail"
          id="adresse-mail"
          placeholder="Adresse email"
          required
          ref={mailRef}
        />
        <input
          className={`register-input ${theme}`}
          type="email"
          name="confirm-adresse-mail"
          id="confirm-adresse-mail"
          placeholder="Confirmation de l'adresse email"
          required
          ref={confirmMailRef}
        />
        <input
          className={`register-input ${theme}`}
          type="password"
          name="inscription-password"
          id="inscription-password"
          placeholder="Mot de passe"
          required
          ref={passwordRef}
        />
        <input
          className={`register-input ${theme}`}
          type="password"
          name="inscription-confirm-password"
          id="inscription-confirm-password"
          placeholder="Confirmation du mot de passe"
          required
          ref={confirmPasswordRef}
        />
        <input
          type="submit"
          value="Valider"
          className={`register-submit ${theme}`}
        />
      </form>
    </main>
  );
}

export default Register;
