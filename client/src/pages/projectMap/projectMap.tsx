import { useEffect } from "react";
import "./projectMap.css";

function ProjectMap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="container-page-map">
        <div className="img-bowser-map">
          <img src="/imageCarte/bowser.webp" alt="" />
        </div>
        <section className="container-page-map">
          <p className="text-error-map">
            🍄 Oups ! Une erreur est survenue. Ne t'inquiètes pas les
            développeurs sont en train de fixer le problème lié à la map de ton
            parc préféré. 🍄
          </p>
        </section>
      </section>
    </>
  );
}

export default ProjectMap;
