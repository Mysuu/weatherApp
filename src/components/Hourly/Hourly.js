import React from "react";
import { Collapse } from "antd";
import "../../styles/Hourly.scss";

const { Panel } = Collapse;

function Hourly() {
  return (
    <div className="container">
      <div className="views-city">
        <div>
          <h3>
            <b>Hourly Weather -&nbsp;</b>
          </h3>
        </div>
        <div>
          <h4>Hà Nội</h4>
        </div>
      </div>
      <div className="timer">As of 3:15 PM</div>
      <div className="hr"></div>
      <div className="views-details">
        <div className="clock">3pm</div>
        <div className="temp">18°C</div>
        <div className="status-temp">Trạng thái thời tiết</div>
        <div className="humidity">Humidity: 31%</div>
        <div className="wind-speed">Wind speed: 29km/h</div>
      </div>
      <Collapse defaultActiveKey={["1"]} ghost>
        <Panel>
          <div className="full-temp">
            <div className="temp-top">
              <div style={{ width: "33%" }}>
                <h3>Feels Like</h3>
                <h3>18</h3>
              </div>
              <div style={{ width: "33%" }}>
                <h3>Wind</h3>
                <h3>29km/h</h3>
              </div>
              <div style={{ width: "33%" }}>
                <h3>Humidity</h3>
                <h3>31%</h3>
              </div>
            </div>
            <div className="hr"></div>
            <div className="temp-bot">
              <div style={{ width: "33%" }}>
                <h3>UV index</h3>
                <h3>10 of 10</h3>
              </div>
              <div style={{ width: "33%" }}>
                <h3>Cloud Cover</h3>
                <h3>83%</h3>
              </div>
              <div style={{ width: "33%" }}>
                <h3>Rain Amount</h3>
                <h3>0 in</h3>
              </div>
            </div>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}

export default Hourly;
