import "./App.css";
import Billetterie from "./pages/billetterie/Billetterie";
import NavBar from "./components/NavBar/NavBar";
import Hotels from "./pages/hotels/hotels";

function App() {
  return (
    <>
      <NavBar />;
      <Billetterie />
      <Hotels />
    </>
  );
}

export default App;

