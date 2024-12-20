import "./PagesAttraction.css";

function Attraction() {
	return (
		<>
			<div>
				<img
					className="background-attraction"
					src="/public/imagePagesAttractions/Background-Attraction.jpeg"
					alt="attraction"
				/>
			</div>
			<div className="description-attraction-sensation">
				<h1>DES ATTRACTIONS A SENSATION SENSATIONNELLE </h1>
				<p>
					Plus de 15 attractions attendent les amateurs de sensations. Dans le
					monde nintendo. On passe à la vitesse supérieure ? Allez faire un tour
					du côté du Kondaa, le mégacoaster le plus long, le plus haut et le
					plus sensationnel du Benelux ! Besoin de vous rafraîchir ? Nos
					attractions aquatiques vous surprendront.
				</p>
			</div>
			<div className="button-attraction">
				<button type="button">Voir plus d'attractions</button>
			</div>

			<div className="attraction-sensation">
                <div className="attraction-card">
                    <div className="img-container-attraction"><img className="img-attraction" src="/public/imagePagesAttractions/MarionKartRacing.jpg" alt="Attraction" /></div>
                    <h2>Mario Kart Racing</h2>
                </div>
                <div className="attraction-card">
                    <div className="img-container-attraction"><img className="img-attraction" src="/public/imagePagesAttractions/MarionKartRacing.jpg" alt="Attraction" /></div>
                    <h2>Mario Kart Racing</h2>
                </div>
                <div className="attraction-card">
                    <div className="img-container-attraction"><img className="img-attraction" src="/public/imagePagesAttractions/MarionKartRacing.jpg" alt="Attraction" /></div>
                    <h2>Mario Kart Racing</h2>
                </div>
            </div>
		</>
	);
}

export default Attraction;
