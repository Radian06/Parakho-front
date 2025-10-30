import React from "react";
import "./SidePanel.css";

const SidePanel = ({ marker, onClose }) => {
  if (!marker) return null; // 선택된 마커 없으면 아무것도 안 보여줌

  return (
    <div className={`side-panel open`}>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <h2>{marker.title}</h2>
      <p>{marker.desc}</p>
    </div>
  );
};

export default SidePanel;
