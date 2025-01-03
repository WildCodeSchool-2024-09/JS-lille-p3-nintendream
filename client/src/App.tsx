import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Login from "./pages/login/Login";
import Restaurant from "./pages/pageRestaurant/Restaurant";

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
