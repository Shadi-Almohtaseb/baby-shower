import "./App.css";
import FixedImage from "./components/FixedImage";
import Header from "./components/Header";
import Home from "./components/Home";
import JoinUs from "./components/JoinUs";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="bg-[#daebe3]">
      <Header />
      <Home />
      <JoinUs />
      <FixedImage />
      <Questions />
    </div>
  );
}

export default App;
