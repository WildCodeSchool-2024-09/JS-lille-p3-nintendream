import "./App.css";
import { Outlet } from "react-router-dom";
import Restaurant from "./pages/pageRestaurant/Restaurant";
import Login from "./pages/login/Login";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <NavBar />
      <Login />
      <Restaurant />
    </>
  );
}

export default App;
