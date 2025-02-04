import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { UserProvider } from "./services/userContext";
import { ThemeProvider } from "./services/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
      <UserProvider>
        <NavBar />
        <Outlet />
      </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
