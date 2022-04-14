import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import moment from "moment";

function ViewWeatherLeft({ updateCity, weathers, active }) {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <div className="views-left">
      <MenuOutlined style={{ color: "#1890ff" }} />
      <div className="views-left-top">
        <div>
          <h1>{updateCity}</h1>
        </div>
        <div>
          <Switch defaultChecked onChange={onChange} />
          <span>°C</span>
        </div>
      </div>
      <div>
        <span>
          {weathers && moment(weathers[active].dt_txt).format("llll")}
        </span>
      </div>
      <br />
      <div className="views-left-weather">
        <img
          src={`http://openweathermap.org/img/wn/${
            weathers && weathers[active].weather[0].icon
          }@2x.png`}
          alt=""
        />
        <h2>
          <b>{weathers && Math.round(weathers[active].main.temp)}</b>
          <span>°C</span>
        </h2>
      </div>
      <br />
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
