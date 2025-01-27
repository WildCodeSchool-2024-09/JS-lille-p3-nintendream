import "./Admin.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Restaurant = {
	id: number;
	name: string;
	img: string;
	intro: string;
	text: string;
	adult_price: number;
	kids_price: number;
};

type Attraction = {
	id: number;
	img: string;
	name: string;
	description: string;
	location: string;
};

type Hotel = {
	id: number;
	img: string;
	name: string;
	distance: number;
	hotel_price: number;
	description: string;
	secondary_description: string;
	tertiary_description: string;
};
function Admin() {
	const [showAttractions, setShowAttractions] = useState(false);
	const [showHotels, setShowHotels] = useState(false);
	const [showRestaurants, setShowRestaurants] = useState(false);
	const [showEvents, setShowEvents] = useState(false);
	const [newAttraction, setNewAttraction] = useState([] as Attraction[]);
	const [newHotel, setNewHotel] = useState([] as Hotel[]);
	const [newRestaurant, setNewRestaurant] = useState([] as Restaurant[]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/attractions`)
			.then((response) => response.json())
			.then((data: Attraction[]) => {
				setNewAttraction(data);
			});
	}, []);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_API_URL}/api/hotels`)
			.then((response) => response.json())
			.then((data: Hotel[]) => {
				setNewHotel(data);
				fetch(`${import.meta.env.VITE_API_URL}/api/restaurant`)
					.then((response) => response.json())
					.then((data: Restaurant[]) => {
						setNewRestaurant(data);
					});
			});
	}, []);

	const handleAttractionClick = () => {
		setShowAttractions(!showAttractions);
		setShowHotels(false);
		setShowRestaurants(false);
		setShowEvents(false);
	};

	const handleHotelClick = () => {
		setShowHotels(!showHotels);
		setShowAttractions(false);
		setShowRestaurants(false);
		setShowEvents(false);
	};

	const handleRestaurantClick = () => {
		setShowRestaurants(!showRestaurants);
		setShowAttractions(false);
		setShowHotels(false);
		setShowEvents(false);
	};

	const handleEventClick = () => {
		setShowEvents(!showEvents);
		setShowAttractions(false);
		setShowHotels(false);
		setShowRestaurants(false);
	};

	return (
		<main className="main-admin">
			<section className="admin-row1">
				<article
					className="admin-attraction"
					onClick={handleAttractionClick}
					onKeyUp={handleAttractionClick}
				>
					Attractions
				</article>
				<article
					className="admin-hotels"
					onClick={handleHotelClick}
					onKeyUp={handleHotelClick}
				>
					Hôtels
				</article>
				<article
					className="admin-restaurants"
					onClick={handleRestaurantClick}
					onKeyUp={handleRestaurantClick}
				>
					Restaurants
				</article>
				<article
					className="admin-events"
					onClick={handleEventClick}
					onKeyUp={handleEventClick}
				>
					Events
				</article>
			</section>

			<section className="admin-row2">
				{showAttractions && (
					<section className="admin-attraction-list">
						<p className="add-attraction-admin">
							<Link to="/admin/new/attractions"> ✅ </Link> Ajouter une
							attraction{" "}
						</p>
						{newAttraction.map((attraction) => (
							<article key={attraction.id} className="admin-attraction-title">
								{attraction.name}{" "}
								<Link to={`/admin/${attraction.id}/edit/attractions`}> 📝</Link>
								<Link to={`/admin/${attraction.id}/delete/attractions`}>
									{" "}
									🗑️
								</Link>
							</article>
						))}
					</section>
				)}

				<p className="add-attraction-admin">
					<Link to="/admin/newhotel"> ➕ </Link> Ajouter un hotel{" "}
				</p>
				{showHotels && (
					<section className="admin-attraction-list">
						{newHotel.map((hotel) => (
							<article key={hotel.id} className="admin-attraction-title">
								{hotel.name}
								{""}
								<Link to={`/admin/${hotel.id}/hotel/edit`}> 📝</Link>
								<Link to={`/admin/${hotel.id}/hotel/delete`}> 🗑️</Link>
							</article>
						))}
					</section>
				)}

				{showRestaurants && (
					<>
						<p className="add-restaurants-admin">
							<Link to="/admin/new/restaurant"> ✅ </Link> Ajouter un restaurant{" "}
						</p>
						<section className="admin-restaurants-list">
							{newRestaurant.map((restaurant) => (
								<article
									key={restaurant.id}
									className="admin-restaurants-title"
								>
									{restaurant.name}{" "}
									<Link to={`/admin/${restaurant.id}/edit/restaurant`}>
										{" "}
										📝
									</Link>
									<Link to={`/admin/${restaurant.id}/delete/restaurant`}>
										{" "}
										🗑️
									</Link>
								</article>
							))}
						</section>
					</>
				)}

				{showEvents && (
					<>
						<article className="admin-attraction-title">
							Mario kart live show : la course arc en ciel 📝 🗑️
						</article>
						<article className="admin-attraction-title">
							Zelda: L'éveil du Héros 📝 🗑️
						</article>
						<article className="admin-attraction-title">
							Donkey Kong Jungle Groove 📝 🗑️
						</article>
					</>
				)}
			</section>
		</main>
	);
}

export default Admin;
