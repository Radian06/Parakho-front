import "../styles/Main.css";
import Map from "../components/Map/Map";

const Main = () => {
  return (
    <div className="main_page">
      <h1>지도 페이지 (Leaflet + OSM)</h1>
      <Map />
    </div>
  );
};

export default Main;
