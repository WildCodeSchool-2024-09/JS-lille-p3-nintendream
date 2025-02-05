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
type Events = {
  id: number;
  name: string;
  short_description: string;
  description: string;
  schedule: string;
  img_src: string;
  zone_id: number;
};

function Admin() {
  const [showAttractions, setShowAttractions] = useState(false);
  const [showHotels, setShowHotels] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  const [eventList, setEventList] = useState([] as Events[]);
  const [attractionsList, setAttractionsList] = useState([] as Attraction[]);
  const [hotelsList, setHotelsList] = useState([] as Hotel[]);
  const [restaurantsList, setRestaurantsList] = useState([] as Restaurant[]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/attractions`)
      .then((response) => response.json())
      .then((data: Attraction[]) => {
        setAttractionsList(data);
      });
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/hotels`)
      .then((response) => response.json())
      .then((data: Hotel[]) => {
        setHotelsList(data);
        fetch(`${import.meta.env.VITE_API_URL}/api/restaurant`)
          .then((response) => response.json())
          .then((data: Restaurant[]) => {
            setRestaurantsList(data);
          });
      });
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/events`)
      .then((response) => response.json())
      .then((data: Events[]) => {
        setEventList(data);
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
            <Link to="/admin/attractions/new">
              <p className="add-attraction-admin">
                <img
                  src="/imageAdmin/plus.png"
                  alt="logo du signe plus"
                  className="logo-plus-admin"
                />{" "}
                Ajouter une attraction
              </p>
            </Link>
            {attractionsList.map((attraction) => (
              <article key={attraction.id} className="admin-attraction-title">
                {attraction.name}{" "}
                <Link to={`/admin/attractions/${attraction.id}/edit`}> 📝</Link>
                <Link to={`/admin/attractions/${attraction.id}/delete`}>
                  {" "}
                  🗑️
                </Link>
              </article>
            ))}
          </section>
        )}

        {showHotels && (
          <section className="admin-hotel-list">
            <Link to="/admin/hotels/new">
              <p className="add-hotel-admin">
                <img
                  src="/imageAdmin/plus.png"
                  alt="logo du signe plus"
                  className="logo-plus-admin"
                />{" "}
                Ajouter un hotel
              </p>
            </Link>

            {hotelsList.map((hotel) => (
              <article key={hotel.id} className="admin-attraction-title">
                {hotel.name}
                {""}
                <Link to={`/admin/hotels/${hotel.id}/edit`}> 📝</Link>
                <Link to={`/admin/hotels/${hotel.id}/delete`}> 🗑️</Link>
              </article>
            ))}
          </section>
        )}

        {showRestaurants && (
          <section className="admin-restaurants-list">
            <Link to="/admin/restaurants/new">
              <p className="add-restaurants-admin">
                <img
                  src="/imageAdmin/plus.png"
                  alt="logo du signe plus"
                  className="logo-plus-admin"
                />{" "}
                Ajouter un restaurant
              </p>
            </Link>
            {restaurantsList.map((restaurant) => (
              <article key={restaurant.id} className="admin-restaurants-title">
                {restaurant.name}{" "}
                <Link to={`/admin/restaurants/${restaurant.id}/edit`}> 📝</Link>
                <Link to={`/admin/restaurants/${restaurant.id}/delete`}>🗑️</Link>
              </article>
            ))}
          </section>
        )}

        {showEvents && (
          <section>
            <Link to="/admin/events/new">
              <p className="add-events-admin">
                <img
                  src="/imageAdmin/plus.png"
                  alt="logo du signe plus"
                  className="logo-plus-admin"
                />{" "}
                Ajouter un évènement{" "}
              </p>
            </Link>
            {eventList.map((event) => (
              <article className="admin-attraction-title" key={event.id}>
                {event.name}
                <Link to={`/admin/events/${event.id}/edit`}>📝 </Link>
                <Link to={`/admin/events/${event.id}/delete`}>🗑️ </Link>
              </article>
            ))}
          </section>
        )}
      </section>
    </main>
  );
}

export default Admin;
