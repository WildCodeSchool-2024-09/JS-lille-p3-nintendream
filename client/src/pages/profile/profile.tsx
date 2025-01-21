import "./profile.css";

import { useRef } from "react";
import type { FormEventHandler } from "react";

import {
  // useLoaderData,
  useOutletContext,
  useRevalidator,
} from "react-router-dom";

// type Account = {
//   id: number;
//   role: string;
//   username: string;
//   password: string;
//   mail: string;
//   user_id: number;
//   hashedPassword: string;
// };

type User = {
  id: number;
  first_name: string;
  name: string;
  age: number;
};

function Profile() {
  // const accounts = useLoaderData() as Account[];

  const { user } = useOutletContext() as { user: User | null };

  const revalidator = useRevalidator();

  const firstnameRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/profile`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: (firstnameRef.current as HTMLInputElement).value,
            name: (nameRef.current as HTMLInputElement).value,
            age: (ageRef.current as HTMLInputElement).value,
          }),
        },
      );

      if (response.status === 201) {
        revalidator.revalidate();
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect (() => {
  //   fetch (`${import.meta.env.VITE_API_URL}/api/users`)
  //   .then ((response) => response.json())
  //   .then ((data: User[]) => {
  //     setUser(data);
  //   } )
  //})

  return (
    <>
      {user != null && (
        <div className="body-profile">
          <section className="box-container-profile">
            <div>
              <h1 className="title-profile">Vos informations</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="text-profile">
                Voici les informations que vous avez enregistrées depuis la
                création de votre compte Nintendream :
              </div>
              <div className="email-profile">E-mail :</div>
              <div className="firstname-profile">
                Prénom : <input type="text" ref={firstnameRef} />
              </div>
              <div className="name-profile">
                Nom : <input type="text" ref={nameRef} />
              </div>
              <div className="age-profile">
                Age : <input type="number" ref={ageRef} />
              </div>
              <div className="ending-profile">
                A très vite dans notre super parc Nintendream !
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
}

export default Profile;
