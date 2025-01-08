import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
// import HotelDetails from "./pages/hotels/HotelDetails";
import HotelsPage from "./pages/hotels/hotels";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      {/* <HotelDetails /> */}
      <HotelsPage />
    </>
  );
}

export default App;
