import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { ThemeProvider } from "./services/ThemeContext";
import { UserProvider } from "./services/UserContext";

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
