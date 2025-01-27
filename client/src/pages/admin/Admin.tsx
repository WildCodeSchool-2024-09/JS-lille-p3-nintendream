import "./Admin.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  const [showAttractions, setshowAttractions] = useState(false);
  const [showHotels, setShowHotels] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [newAttraction, setNewAttraction] = useState([] as Attraction[]);
  const [newHotel, setNewHotel] = useState([] as Hotel[]);

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
      });
  }, []);

  const handleAttractionClick = () => {
    setshowAttractions(!showAttractions);
    setShowHotels(false);
    setShowRestaurants(false);
    setShowEvents(false);
  };

  const handleHotelClick = () => {
    setShowHotels(!showHotels);
    setshowAttractions(false);
    setShowRestaurants(false);
    setShowEvents(false);
  };

  const handleRestaurantClick = () => {
    setShowRestaurants(!showRestaurants);
    setshowAttractions(false);
    setShowHotels(false);
    setShowEvents(false);
  };

  const handleEventClick = () => {
    setShowEvents(!showEvents);
    setshowAttractions(false);
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
        <p className="add-attraction-admin">
          <Link to="/admin/newattraction"> ✅ </Link> Ajouter une attraction{" "}
        </p>
        {showAttractions && (
          <section className="admin-attraction-list">
            {newAttraction.map((attraction) => (
              <article key={attraction.id} className="admin-attraction-title">
                {attraction.name}{" "}
                <Link to={`/admin/${attraction.id}/edit`}> 📝</Link>
                <Link to={`/admin/${attraction.id}/delete`}> 🗑️</Link>
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
            <article className="admin-attraction-title">
              Le Champignon Gourmet 📝 🗑️
            </article>
            <article className="admin-attraction-title">
              Donkey Kong Grill 📝 🗑️
            </article>
            <article className="admin-attraction-title">
              Zelda's Feast 📝 🗑️
            </article>
            <article className="admin-attraction-title">
              Kirby's Snack World 📝 🗑️
            </article>
            <article className="admin-attraction-title">
              Pokemon Café 📝 🗑️
            </article>
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
