import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { UserProvider } from "./services/userContext";

function App() {
  return (
    <>
      <UserProvider>
        <NavBar />
        <Outlet />
      </UserProvider>
    </>
  );
}

export default App;
