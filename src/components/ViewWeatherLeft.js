import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import moment from "moment";
import Clock from "react-live-clock";
import "../styles/ViewWeatherLeft.scss";

function ViewWeatherLeft({ updateCity, weathers, active }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="views-left">
      <MenuOutlined style={{ color: "#1890ff" }} />
      <div className="views-left-top">
        <div>
          <h1>{updateCity}</h1>
        </div>
        <div>
          <Switch defaultChecked onClick={() => setToggle(!toggle)} />
          <span>{toggle ? "°F" : "°C"}</span>
        </div>
      </div>
      <div>
        <span>
          <Clock format={"h:mm A"} ticking={true} />, &nbsp;
          {weathers && moment(weathers[active].dt_txt).format("MMMM Do YYYY")}
        </span>
      </div>
      <div className="views-left-weather">
        <img
          src={`http://openweathermap.org/img/wn/${
            weathers && weathers[active].weather[0].icon
          }@2x.png`}
          alt=""
        />
        <h2>
          <b>
            {toggle
              ? weathers && Math.round(weathers[active].main.temp * 1.8) + 32
              : weathers && Math.round(weathers[active].main.temp)}
          </b>
          <span>{toggle ? "°F" : "°C"}</span>
        </h2>
      </div>
      <div>
        <h1>
          <b style={{ textTransform: "capitalize" }}>
            {weathers && weathers[active].weather[0].description}
          </b>
        </h1>
      </div>
      <div className="infoweather">
        <div className="humidity">
          <h3>Humidity</h3>
          <div>{weathers && weathers[active].main.humidity}%</div>
        </div>
        <div>
          <h3>Wind speed</h3>
          <div>
            {weathers && weathers[active].wind.speed}
            km/h
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewWeatherLeft;
