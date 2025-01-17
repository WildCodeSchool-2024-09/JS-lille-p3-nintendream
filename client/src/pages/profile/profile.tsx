import "./profile.css";

function Profile() {
  return (
    <>
      <body className="body-profile">
        <section className="box-container-profile">
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
        </section>
      </body>
    </>
  );
}

export default Profile;
