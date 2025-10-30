import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import MarkerItem from "./MarkerIcon";
import { markersData } from "../../data/markersData";

const center = [36.5683543, 128.729357];

const Map = () => {
  return (
    <MapContainer center={center} zoom={13} className="map-container">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      {markersData.map((marker) => (
        <MarkerItem key={marker.id} marker={marker} />
      ))}
    </MapContainer>
  );
};

export default Map;
