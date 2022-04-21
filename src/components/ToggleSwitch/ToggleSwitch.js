import React from "react";
import "../../styles/ToggleSwitch.scss";

function ToggleSwitch({ changeBarChart, setChangeBarChart }) {
  const onToggle = () => setChangeBarChart(!changeBarChart);
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={!changeBarChart} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}

export default ToggleSwitch;
