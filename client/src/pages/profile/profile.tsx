import "./profile.css";

function Profile() {
  return (
    <>
      <body className="body-profil">
        <section className="box-container-profil">
          <div>
            <h1 className="title-profile">Vos informations</h1>
          </div>
          <div className="texte-profile">
            Voici les informations que vous avez enregistrés depuis la création
            de votre compte Nintendream :
          </div>
          <div className="email-profile">E-mail :</div>
          <div className="prenom-profile">Prénom :</div>
          <div className="nom-profile">Nom :</div>
          <div className="age-profile">Age :</div>
          <div className="ending-profile">
            A très vite dans notre super parc Nitendream !
          </div>
        </section>
      </body>
    </>
  );
}

export default Profile;
