// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

/* ************************************************************************* */

// Import the main app component
import App from "./App";
import Admin from "./pages/admin/Admin.tsx";
import DeleteAttractionForm from "./pages/admin/DeleteAttractionForm.tsx";
import EditAttractionForm from "./pages/admin/EditAttractionForm.tsx";
import AttractionForm from "./pages/admin/NewAttractionForm.tsx";
import Billetterie from "./pages/billetterie/Billetterie";
import Confirmation from "./pages/confirmation/Confirmation.tsx";
import ErrorPage from "./pages/error/ErrorPage.tsx";
import EvenemementDetails from "./pages/evenements/EvenementDetails";
import Evenements from "./pages/evenements/Evenements";
import Homepage from "./pages/homepage/Homepage";
import HotelDetails from "./pages/hotels/hotelDetails.tsx";
import HotelsPage from "./pages/hotels/hotels";
import Login from "./pages/login/Login";
import Restaurant from "./pages/pageRestaurant/Restaurant";
import RestaurantDetails from "./pages/pageRestaurant/RestaurantDetails";

import Profile from "./pages/profile/profile.tsx";

import Reservation from "./pages/reservation/Reservation.tsx";


// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
  {
    path: "/", // The root path
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/billetterie",
        element: <Billetterie />,
      },
      {
        path: "/hotels",
        element: <HotelsPage />,
      },
      {
        path: "/hotel/:id",
        element: <HotelDetails />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
        path: "/admin/new",
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
        path: "/admin/:id/delete",
        element: <DeleteAttractionForm />,
      },
      {
        path: "/*",
        element: <ErrorPage />,
      },
      {
        path: "/restaurants",
        element: <Restaurant />,
      },
      {
        path: "/evenements",
        element: <Evenements />,
      },
      {
        path: "/evenements/:id",
        element: <EvenemementDetails />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/reservation/:name",
        element: <Reservation />,
      },
      {
        path: "/confirmation",
        element: <Confirmation />,
      },
    ], // Renders the App component for the home page
  },
  // Try adding a new route! For example, "/about" with an About component
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
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */
