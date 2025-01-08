import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
// import Restaurant from "./pages/pageRestaurant/Restaurant";

function App() {
  return (
    <>
      <NavBar />
      {/* <Restaurant /> */}
      <Outlet />
    </>
  );
}

export default App;
