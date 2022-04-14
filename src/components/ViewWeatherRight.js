import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import moment from "moment";

function ViewWeather({
  setHumidity,
  setDescription,
  setImage,
  setWindspeed,
  setTime,
  weathers,
}) {
  const [active, setActive] = useState(0);
  const handleShow = (item) => {
    console.log(item);
    setHumidity(item.main.humidity);
    setWindspeed(item.wind.speed);
    setDescription(item.weather[0].description);
    setImage(item.weather[0].icon);
    setTime(moment(item.dt_txt).format("llll"));
  };

  return (
    <div className="views-right">
      <CloseOutlined style={{ color: "#1890ff" }} />
      <div className="views-right-top">
        <h3>Temperature</h3>
        <div>
          <h1>Chỗ này biểu đồ</h1>
        </div>
      </div>
      <div className="views-right-bottom">
        {weathers &&
          weathers.map((item, index) => {
            return (
              <div
                key={index}
                className={`views-details ${active === index && "active"}`}
                onClick={() => {
                  handleShow(item);
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
