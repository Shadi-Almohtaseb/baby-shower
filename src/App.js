import "./App.css";
import FixedImage from "./components/FixedImage";
import Header from "./components/Header";
import JoinUs from "./components/JoinUs";
import Questions from "./components/Questions";

function App() {
  return (
    <div className="bg-[#99cdd8]">
      <Header />
      <JoinUs />
      <FixedImage />
      <Questions />
    </div>
  );
}

export default App;
