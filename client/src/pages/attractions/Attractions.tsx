import { useEffect } from "react";
import "./Attractions.css";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Attractions {
	id: number;
	name: string;
	img: string;
	waiting_time: number;
	type_attraction: string;
	min_height: number;
	zone_id: number;
	schedule: string;
	description_attraction: string;
	state: string;
}

function Attractions() {
	const [attractions, setAttractions] = useState([] as Attractions[]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/attractions`)
			.then((response) => response.json())
			.then((data: Attractions[]) => {
				setAttractions(data);
			});
	});

	return (
		<>
			<div className="image-background-attraction">
				<img
					className="background-attraction"
					src="/image/attractions/Background-Attraction.jpeg"
					alt="attraction"
				/>
			</div>
			<section className="container-card-attractions">
				{attractions.map((attraction) => (
					<div key={attraction.id} className="card-link-attraction">
						<Link to={`/attraction/${attraction.id}`}>
							<img
								className="img-attraction"
								src={attraction.img}
								alt="attraction"
							/>
							<div className="texte-card-attraction">
								<h1>{attraction.name}</h1>
								<p>{attraction.description_attraction}</p>
								<p>Type : {attraction.type_attraction}</p>
								<p>Hauteur minimum : {attraction.min_height}</p>
							</div>
						</Link>
					</div>
				))}
			</section>

			<img
				className="map-nintendream"
				src="JS-lille-p3-nintendream/client/public/image/attractions/MapNintendDream.jpeg"
				alt="Map"
			/>
		</>
	);
}

export default Attractions;
