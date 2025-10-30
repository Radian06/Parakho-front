import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MapCheck from "./pages/MapCheck";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/map-check" element={<MapCheck />} />
      </Routes>
    </Router>
  );
}

export default App;
