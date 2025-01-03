import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HotelDetails from "/src/pages/hotels/hotelDetails.tsx";

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
