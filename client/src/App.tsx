import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import { ThemeProvider } from "./services/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
