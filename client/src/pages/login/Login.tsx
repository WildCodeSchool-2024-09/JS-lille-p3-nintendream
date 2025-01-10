import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <form className="login-form">
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
        />
        <p className="login-p">Mot de passe oublié ?</p>
        <input
          type="submit"
          value="Valider"
          className="login-submit login-submit-left"
        />
      </form>
      <form className="login-form">
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
        />
        <input
          className="login-input"
          type="email"
          name="confirm-adresse-mail"
          id="confirm-adresse-mail"
          placeholder="Confirmation adresse email"
          required
        />
        <input
          className="login-input"
          type="password"
          name="inscription-password"
          id="inscription-password"
          placeholder="Mot de passe"
          required
        />
        <input
          className="login-input"
          type="password"
          name="inscription-confirm-password"
          id="inscription-confirm-password"
          placeholder="Confirmation mot de passe"
          required
        />
        <input type="submit" value="Valider" className="login-submit " />
      </form>
    </div>
  );
}

export default Login;
