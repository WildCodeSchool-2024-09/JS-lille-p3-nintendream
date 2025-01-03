import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HotelsPage from "./pages/hotels/hotels";


function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <HotelsPage />
      
    </>
  );
}

export default App;
