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
const center = [37.5665, 126.9780]; // 서울

// 예시 마커 데이터
const markersData = [
    { id: 1, position: [37.5665, 126.9780], title: "서울 시청" },
    { id: 2, position: [37.5796, 126.9770], title: "경복궁" },
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
