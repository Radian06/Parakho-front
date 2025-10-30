import { Marker, Tooltip, DivIcon } from "react-leaflet";
import L from "leaflet";

// 색상만 바꾼 원형 마커 (이미지 없이)
const createColoredMarker = (color = "#e63946") =>
  new L.DivIcon({
    className: "custom-marker",
    html: `<div style="
      background-color: ${color};
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid white;
      box-shadow: 0 0 3px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });

const MarkerItem = ({ marker, onClick }) => {
  const icon = createColoredMarker("#ff4d6d"); // 원하는 색상 지정

  return (
    <Marker
      position={marker.position}
      icon={icon}
      eventHandlers={{ click: onClick }}
    >
      <Tooltip direction="top" offset={[0, -10]} opacity={1}>
        {marker.title}
      </Tooltip>
    </Marker>
  );
};

export default MarkerItem;
