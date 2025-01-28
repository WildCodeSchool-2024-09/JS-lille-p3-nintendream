// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import Admin from "./pages/admin/Admin.tsx";
import DeleteAttractionForm from "./pages/admin/Attraction/DeleteAttractionForm.tsx";
import AttractionForm from "./pages/admin/Attraction/NewAttractionForm.tsx";
import EditAttractionForm from "./pages/admin//Attraction/EditAttractionForm.tsx";
import DeleteRestaurantForm from "./pages/admin/restaurant_admin/DeleteRestaurantForm.tsx";
import EditRestaurantForm from "./pages/admin/restaurant_admin/EditRestaurantForm.tsx";
import RestaurantForm from "./pages/admin/restaurant_admin/NewRestaurantForm.tsx";
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
import Reservation from "./pages/reservation/Reservation.tsx";

/* ************************************************************************* */

// Create router configuration with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/login", element: <Login /> },
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
        path: "/admin/:id/delete/attractions",
        element: <DeleteAttractionForm />,
      },

      // Admin - Restaurants
      {
        path: "/admin/new/restaurant",
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
        path: "/admin/:id/edit/restaurant",
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

/**
 * Helpful Notes:
 *
 * - Add more routes dynamically by defining new components and registering them in the router configuration.
 * - Utilize nested routes for organizing sections of your app efficiently.
 */
