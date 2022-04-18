import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import moment from "moment";
import "../../styles/ViewWeatherRight.scss";
import LineChart from "./LineChart";

function ViewWeather({ weathers, active, setActive, toggle }) {
  return (
    <div className="views-right">
      <CloseOutlined style={{ color: "#1890ff" }} />
      <div className="views-right-top">
        <h3>&nbsp;</h3>
        <LineChart weathers={weathers} active={active} toggle={toggle} />
      </div>
      <div className="views-right-bottom">
        {weathers &&
          weathers.map((item, index) => {
            return (
              <div
                key={index}
                className={`views-details ${active === index && "active"}`}
                onClick={() => {
                  setActive(index);
                }}
              >
                <h3>{moment(item.dt_txt).format("lll")}</h3>
                <img
                  src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
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

export default ViewWeather;
