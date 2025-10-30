import "../styles/LocationList.css";
import { locationData } from "../data/locationData";

const LocationList = () => {
  return (
    <div className="LocationList_page">
      <div className="LocationList_title">독립 관련 장소 목록</div>
      <div className="LocationList_listBox">
        <table className="LocationList_table">
          <thead>
            <tr>
              <th>No.</th>
              <th>명칭</th>
              <th>관련 독립운동가</th>
              <th>주소</th>
              <th>시설</th>
            </tr>
          </thead>
          <tbody>
            {locationData.map((loc) => (
              <tr key={loc.id}>
                <td>{loc.id}</td>
                <td>{loc.name}</td>
                <td>{loc.relatedPerson}</td>
                <td>{loc.address}</td>
                <td>{loc.facility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LocationList;
