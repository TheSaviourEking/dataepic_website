import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Tracks from "./pages/Tracks";
import HeroSection from "./pages/HeroSection";
import BeginnersTrack from "./pages/BeginnersTrack";
import IntermediateTrack from "./pages/IntermediateTrack";
import Footer from "./pages/Footer";
import FormInput from "./pages/FormInput";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <HeroSection/> */}
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="herosection" exact element={<HeroSection />} />
          <Route path="events" exact element={<Events />} />
          <Route path="tracks" exact element={<Tracks />} />
          <Route path="beginnerstrack" exact element={<BeginnersTrack />} />
          <Route path="/formInput" exact element={<FormInput />} />
          <Route path="/about" exact element={<About />} />

          <Route
            path="intermediatetrack"
            exact
            element={<IntermediateTrack />}
          />

          <Route path="forminput" exact element={<FormInput />} />
        </Routes>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
