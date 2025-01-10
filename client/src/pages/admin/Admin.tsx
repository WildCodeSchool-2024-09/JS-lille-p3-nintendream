import "./Admin.css";
import { useState } from "react";

function Admin() {
  const [showAttractions, setshowAttractions] = useState(false);
  const [showHotels, setShowHotels] = useState(false);
  const [showRestaurants, setShowRestaurants] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

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
        {showAttractions && (
          <>
            <article className="admin-attraction-title">
              Mario kart racing ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Bowser’s Castle Escape ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Pikachu Thunder Roller ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Yoshi’s Egg Hunt ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Zelda: Master Sword Quest ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Hyrule Sky Glider ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Peach’s Garden Adventure ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Waddle Dee’s Playground ✅ ❌ 🗑️
            </article>
          </>
        )}
        {showHotels && (
          <>
            <article className="admin-attraction-title">
              Pixel Paradise Hotel ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Donkey Kong Jungle Resort ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Mario & Friends Hotel ✅ ❌ 🗑️
            </article>
          </>
        )}
        {showRestaurants && (
          <>
            <article className="admin-attraction-title">
              Le Champignon Gourmet ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Donkey Kong Grill ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Zelda's Feast ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Kirby's Snack World ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Pokemon Café ✅ ❌ 🗑️
            </article>
          </>
        )}
        {showEvents && (
          <>
            <article className="admin-attraction-title">
              Mario kart live show : la course arc en ciel ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Zelda: L'éveil du Héros ✅ ❌ 🗑️
            </article>
            <article className="admin-attraction-title">
              Donkey Kong Jungle Groove ✅ ❌ 🗑️
            </article>
          </>
        )}
      </section>
    </main>
  );
}

export default Admin;
