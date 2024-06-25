import "./App.css";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Slider } from "./components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Slider />
    </>
  );
}

export default App;
