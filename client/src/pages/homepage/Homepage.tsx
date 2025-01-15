import "./Homepage.css";
import { Link } from "react-router-dom";

interface Article {
	image: string;
	title: string;
	description: string;
	URL: string;
}

const articles = [
	{
		title: "Hâte de venir ?",
		description:
			"Information importante avant votre visite. En raison d’une forte demande, vous devez impérativement être déjà muni d’un billet daté ou avoir déjà enregistré votre date de visite si vous êtes en possession d’un billet non daté.",
		image: "../image/imageHomepage/Ticket-Nintendream.jpg",
		URL: "/billetterie",
	},
	{
		title: "Plongez dans un univers où vos rêves de gamer prennent vie !",
		description:
			"Chez Nintendream, nous vous offrons bien plus qu’un simple repas : une expérience inoubliable. Découvrez des plats thématiques inspirés de vos jeux préférés, des salles immersives aux décors époustouflants, et une ambiance ludique parfaite pour toute la famille. Que vous soyez fan de légendaires aventures ou adepte de courses effrénées, chaque plat et chaque détail de notre restaurant vous promet des surprises à la hauteur de votre passion pour le jeu.",
		image: "../image/Restaurant-Nintendream.webp",
		URL: "/restaurants",
	},
	{
		title: "Plongez dans un univers où vos rêves de gamer prennent vie !",
		description:
			"Chez Nintendream, nous vous offrons bien plus qu’un simple séjour : une expérience inoubliable. Découvrez des chambres thématiques inspirées de vos jeux préférés. Que vous soyez fan de légendaires aventures ou adepte de courses effrénées, chaque recoin de notre hôtel vous promet des surprises à la hauteur de votre passion pour le jeu.",
		image: "../image/imageHomepage/dunkey-kong-hotel.webp",
		URL: "/hébergement",
	},
	{
		title: "Un Parc Accessible à Tous chez Nintendream 🎮",
		description:
			"Le parc Nintendream est conçu pour accueillir tous les visiteurs, avec des installations adaptées aux personnes à mobilité réduite et des services pour répondre à divers besoins. Des rampes, ascenseurs, et files prioritaires facilitent l’accès aux attractions, tandis que des casques antibruit et des panneaux tactiles améliorent l’expérience sensorielle. Notre personnel formé est à disposition pour accompagner chaque visiteur. Profitez d’une aventure inclusive et magique, sans limites ! 🌟",
		image: "../image/imageHomepage/Accessibilite-handicape.jpg",
		URL: "/parc",
	},
];

function Homepage() {
	return (
		<div>
			<div className="image-with-title">
				<img
					className="image-homepage"
					src="../image/imageHomepage/Image-Mario.jpg"
					alt="Nintendream factice"
				/>

				<section className="card-container-homepage-reservation">
					<div className="card-homepage-reservation">
						<p>Réservez à partir de 35€</p>
					</div>

					<div className="button-reservation-homepage">
						<Link to="billeterie" className="link-homepage-to-billeterie">
							<button
								type="button"
								className="button-homepage-reservation"
							>
								Je réserve !
							</button>
						</Link>
					</div>
				</section>
			</div>
			<section className="container-homepage">
				<section className="card-container-new-attraction">
					<div className="card-new-attraction">
						<p>Découvrez la dernière attraction du parc</p>
					</div>

					<div className="button-new-attraction">
						<Link to="attractions" className="link-homepage-to-attractions">
							<button
								type="button"
								className="button-reservation-new-attraction"
							>
								En savoir plus...
							</button>
						</Link>
					</div>
				</section>
				<section className="card-container-events">
					<div className="card-events">
						<p>
							Soyez enchantés par la magie <br />
							de nos spectacles
						</p>
					</div>

					<div className="button-events">
						<Link to="/évènements" className="link-homepage-to-events">
							<button type="submit" className="button-new-events">
								Evènements
							</button>
						</Link>
					</div>
				</section>
				<section className="card-container-offers">
					<div className="card-offers">
						<p>Profitez de nos dernières offres</p>
					</div>

					<div className="button-offers">
						<Link to="/billetterie" className="link-homepage-to-offers">
							<button type="submit" className="button-new-offers">
								Offres
							</button>
						</Link>
					</div>
				</section>
			</section>

			<section>
				{articles.map((article: Article) => (
					<div key={article.title} className="card-homepage">
						<div className="card-article">
							<Link to={article.URL} className="link-article">
								<img
									className="image-card-article"
									src={article.image}
									alt="image-article"
								/>
								<p className="card-description">{article.description}</p>
								<h1 className="card-title"> {article.title}</h1>
							</Link>
						</div>
					</div>
				))}
			</section>
		</div>
	);
}

export default Homepage;
