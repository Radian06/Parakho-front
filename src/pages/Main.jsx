import "../styles/Main.css";
import Map from "../components/Map/Map";

const Main = () => {
  return (
    <div className="main_page">
      <div className="main_title">독립운동가 관련 위치</div>
      <Map />
    </div>
  );
};

export default Main;
