import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Map.css";

// Leaflet 기본 아이콘 경로 설정
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// 지도 초기 위치
const center = [36.5683543, 128.729357];

// 예시 마커 데이터
const markersData = [
    { id: 1, position: [36.5652131, 128.7448513], title: "임청각" },
    { id: 2, position: [36.6222, 128.8565], title: "향산고택" },
];

const Map = () => {
    return (
        <MapContainer center={center} zoom={13} className="map-container">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            {markersData.map(marker => (
                <Marker key={marker.id} position={marker.position}>
                    <Popup>{marker.title}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
