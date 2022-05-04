import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import moment from "moment";
import "../../styles/ViewWeatherRight.scss";
import LineChart from "./LineChart";

function ViewWeatherRight({ weathers, active, setActive, toggle }) {
  const [showTemp, setShowTemp] = useState([]);
  console.log(weathers);
  return (
    <div className="views-right">
      <CloseOutlined style={{ color: "#1890ff" }} />
      <div className="views-right-top">
        <h3>&nbsp;</h3>
        <LineChart
          weathers={weathers}
          active={active}
          toggle={toggle}
          showTemp={showTemp}
          setShowTemp={setShowTemp}
        />
      </div>
      <div className="views-right-bottom">
        {weathers &&
          weathers.map((item, index) => {
            const icon = item.weather[0]?.icon;
            return (
              <div
                key={index}
                className={`views-details ${active === index && "active"}`}
                onClick={() => {
                  setActive(index);
                }}
              >
                <h3>{moment(item.dt_txt).format("MMM Do YYYY, HH:mm")}</h3>
                <img
                  src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt=""
                />
                <div className="humidity2">
                  <h3>Humidity</h3>
                  <div>{item.main.humidity}%</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ViewWeatherRight;
