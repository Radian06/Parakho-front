import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MapCheck from "./pages/MapCheck";
import LocationList from "./pages/LocationList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/map-check" element={<MapCheck />} />
        <Route path="/location-list" element={<LocationList />} />
      </Routes>
    </Router>
  );
}

export default App;
