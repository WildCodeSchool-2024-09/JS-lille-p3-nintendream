import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HotelDetails from "./pages/hotels/hotelDetails";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <HotelDetails />
    </>
  );
}

export default App;
