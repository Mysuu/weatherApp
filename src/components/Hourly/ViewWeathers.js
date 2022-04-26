import React, { useState } from "react";
import moment from "moment";
import { AiOutlineDown } from "react-icons/ai";
import ViewWeathersDetails from "./ViewWeathersDetails";

function ViewWeathers({ item, index }) {
  const [isDetail, setIsDetail] = useState(true);
  return (
    <>
      {isDetail ? (
        <div
          className="views-temp"
          key={index}
          onClick={() => setIsDetail(false)}
        >
          <div className="clock">
            {moment(item.dt_txt).format("MMM Do, HH:mm")}
          </div>
          <div className="temp">{Math.round(item.main.temp)}°C</div>
          <div className="status-temp">
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
          <div className="description">{item.weather[0].description}</div>
          <div className="humidity">Humidity: {item.main.humidity}%</div>
          <div className="wind-speed">Wind speed: {item.wind.speed}km/h</div>
          <AiOutlineDown color="dodgerblue" />
        </div>
      ) : (
        <ViewWeathersDetails
          item={item}
          index={index}
          setIsDetail={setIsDetail}
        />
      )}
      <div className="hr"></div>
    </>
  );
}

export default ViewWeathers;
