// Impo// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import Admin from "./pages/admin/Admin.tsx";
import DeleteAttractionForm from "./pages/admin/Attraction/DeleteAttractionForm.tsx";
import EditAttraction from "./pages/admin/Attraction/EditAttraction.tsx";
import NewAttraction from "./pages/admin/Attraction/NewAttraction.tsx";
import EventDelete from "./pages/admin/Event/EventDelete.tsx";
import EventEdit from "./pages/admin/Event/EventEdit.tsx";
import NewEvent from "./pages/admin/Event/NewEvent.tsx";
import DeletehotelForm from "./pages/admin/Hotel/deleteHotelForm.tsx";
import EditHotelForm from "./pages/admin/Hotel/editHotelForm.tsx";
import NewHotelForm from "./pages/admin/Hotel/newHotelForm.tsx";
import DeleteRestaurantForm from "./pages/admin/restaurant/DeleteRestaurantForm.tsx";
import EditRestaurantForm from "./pages/admin/restaurant/EditRestaurantForm.tsx";
import RestaurantForm from "./pages/admin/restaurant/NewRestaurantForm.tsx";
import AttractionDetails from "./pages/attractionDetails/AttractionDetails.tsx";
import Attractions from "./pages/attractions/Attractions.tsx";
import Billetterie from "./pages/billetterie/Billetterie";
import Confirmation from "./pages/confirmation/Confirmation.tsx";
import ErrorPage from "./pages/error/ErrorPage.tsx";
import EvenementDetails from "./pages/evenements/EvenementDetails";
import Evenements from "./pages/evenements/Evenements";
import Homepage from "./pages/homepage/Homepage";
import HotelDetails from "./pages/hotels/hotelDetails.tsx";
import HotelsPage from "./pages/hotels/hotels";
import Login from "./pages/login/Login";
import Restaurant from "./pages/pageRestaurant/Restaurant";
import RestaurantDetails from "./pages/pageRestaurant/RestaurantDetails";
import Profile from "./pages/profile/profile.tsx";
import ProjectMap from "./pages/projectMap/projectMap.tsx";
import Register from "./pages/register/Register.tsx";
import Reservation from "./pages/reservation/Reservation.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/login", element: <Login /> },
      { path: "/attractions", element: <Attractions /> },
      { path: "/attraction/:id", element: <AttractionDetails /> },
      { path: "/billetterie", element: <Billetterie /> },
      { path: "/hotels", element: <HotelsPage /> },
      { path: "/hotel/:id", element: <HotelDetails /> },
      { path: "/admin", element: <Admin /> },
      { path: "/profile", element: <Profile /> },
      { path: "/reservation/:name", element: <Reservation /> },
      { path: "/confirmation", element: <Confirmation /> },
      {
        path: "/restaurants",
        element: <Restaurant />,
      },
      { path: "/restaurant/:id", element: <RestaurantDetails /> },
      { path: "/evenements", element: <Evenements /> },
      { path: "/evenements/:id", element: <EvenementDetails /> },
      { path: "/*", element: <ErrorPage /> },
      { path: "/map", element: <ProjectMap /> },
      {
        path: "/register",
        element: <Register />,
      },

      // Admin - Attractions

      {
        path: "/admin/attractions/new",
        element: <NewAttraction />,
      },
      {
        path: "/admin/attractions/:id/edit",
        element: <EditAttraction />,
      },
      {
        path: "/admin/attractions/:id/delete",
        element: <DeleteAttractionForm />,
      },

      // Admin - Hotels
      {
        path: "/admin/hotels/:id/edit",
        element: (
          <EditHotelForm
            defaultValue={{
              id: 0,
              img: "",
              name: "",
              distance: "0",
              hotel_price: "0",
              description: "",
              secondary_description: "",
              tertiary_description: "",
            }}
            onSubmit={() => {}}
          />
        ),
      },

      {
        path: "/admin/hotels/new",
        element: (
          <NewHotelForm
            defaultValue={{
              id: 0,
              img: "",
              name: "",
              distance: "0",
              hotel_price: "0",
              description: "",
              secondary_description: "",
              tertiary_description: "",
            }}
            onSubmit={() => {}}
          />
        ),
      },
      {
        path: "/admin/hotels/:id/delete",
        element: <DeletehotelForm />,
      },

      // Admin - Events

      {
        path: "/admin/events/new",
        element: <NewEvent />,
      },
      {
        path: "/admin/events/:id/edit",
        element: <EventEdit />,
      },
      { path: "/admin/events/:id/delete", element: <EventDelete /> },

      // Admin - Restaurants
      {
        path: "/admin/restaurants/:id/edit",
        element: (
          <RestaurantForm
            defaultValue={{
              id: 0,
              name: "",
              img: "",
              intro: "",
              text: "",
              adult_price: 0,
              kids_price: 0,
            }}
            onSubmit={() => {}}
          />
        ),
      },
      {
        path: "/admin/restaurants/new",
        element: (
          <EditRestaurantForm
            defaultValue={{
              id: 0,
              name: "",
              img: "",
              intro: "",
              text: "",
              adult_price: 0,
              kids_price: 0,
            }}
            onSubmit={() => {}}
          />
        ),
      },
      {
        path: "/admin/restaurants/:id/delete",
        element: <DeleteRestaurantForm />,
      },
    ],
  },
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
