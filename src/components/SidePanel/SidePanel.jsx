import React from "react";
import "./SidePanel.css";

const SidePanel = ({ marker, onClose }) => {
  if (!marker) return null; // 선택된 마커 없으면 아무것도 안 보여줌

  return (
    <div className={`side-panel open`}>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <h1>{marker.title}</h1>
      <div className="sidePanel_descBox">{marker.desc}</div>
    </div>
  );
};

export default SidePanel;
