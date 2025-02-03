// Impo// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import EditAttractionForm from "./pages/admin//Attraction/EditAttractionForm.tsx";
import Admin from "./pages/admin/Admin.tsx";
import DeleteAttractionForm from "./pages/admin/Attraction/DeleteAttractionForm.tsx";
import AttractionForm from "./pages/admin/Attraction/NewAttractionForm.tsx";
import DeletehotelForm from "./pages/admin/Hotel/deleteHotelForm.tsx";
import EditHotelForm from "./pages/admin/Hotel/editHotelForm.tsx";
import NewHotelForm from "./pages/admin/Hotel/newHotelForm.tsx";
import DeleteRestaurantForm from "./pages/admin/restaurant/DeleteRestaurantForm.tsx";
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
      {
        path: "/register",
        element: <Register />,
      },

      // Admin - Attractions

      {
        path: "/admin/new/attractions",
        element: (
          <AttractionForm
            defaultValue={{
              id: 0,
              name: "",
              waiting_time: "0",
              type: "",
              description: "",
              min_height: "",
              zone_id: 0,
              schedule: "",
              state: "",
              img_src: "",
            }}
            onSubmit={() => {}}
          />
        ),
      },
      {
        path: "/admin/:id/edit",
        element: (
          <EditAttractionForm
            defaultValue={{
              id: 0,
              name: "",
              waiting_time: "0",
              type: "",
              description: "",
              min_height: "",
              zone_id: 0,
              schedule: "",
              state: "",
              img_src: "",
            }}
            onSubmit={() => {}}
          />
        ),
      },
      {
        path: "/admin/:id/delete",
        element: <DeleteAttractionForm />,
      },

      {
        path: "/admin/:id/hotel/edit",
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
        path: "/admin/newhotel",
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
        path: "/admin/:id/hotel/delete",
        element: <DeletehotelForm />,
      },
      {
        path: "/admin/newattraction",
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
        path: "/admin/:id/delete/restaurant",
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
