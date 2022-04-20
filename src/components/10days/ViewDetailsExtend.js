import React from "react";
import { WiCloud, WiHumidity, WiRaindrop, WiHot } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { AiOutlineUp } from "react-icons/ai";
import "./ViewDetailsExtend.scss";

function ViewDetailsExtend({ item, setIsDetail, now, today }) {
  return (
    <div className="view-details-2" onClick={() => setIsDetail(false)}>
      <div className="days-2">
        <div className="days-2-left">
          <div className="timer-2">{today === now ? "Today" : today} | Day</div>
          <div className="img-temp-2">
            <div className="temp-witdh">{Math.round(item.temp)}°C</div>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
              alt=""
            />
          </div>
          <div className="description">
            <h3>{item.weather.description}</h3>
          </div>
          <div className="days-2-bot">
            <div className="item-bot">
              <div className="item-bot-small">
                <WiHot color="dodgerblue" fontSize="30px" />
                <h3>&nbsp; UV Index</h3>
              </div>
              <b>{item.uv}</b>
            </div>
            <div className="item-bot">
              <div className="item-bot-small">
                <WiHumidity color="dodgerblue" fontSize="30px" />
                <h3>&nbsp;Humidity</h3>
              </div>
              <b>{item.rh}%</b>
            </div>
            <div className="item-bot">
              <div className="item-bot-small">
                <WiCloud color="dodgerblue" fontSize="30px" />
                <h3>&nbsp;Cloud Cover</h3>
              </div>
              <b>{item.clouds}%</b>
            </div>
          </div>
        </div>
        <div className="days-2-right">
          <div className="humidity-2">
            <WiRaindrop color="dodgerblue" fontSize="30px" />
            <div>&nbsp;{item.pop}%</div>
          </div>
          <div className="wind-speed-2">
            <FaWind color="dodgerblue" fontSize="20px" />
            <div>&nbsp;{item.wind_spd}km/h</div>
          </div>
        </div>
      </div>
      <AiOutlineUp color="dodgerblue" />
    </div>
  );
}

export default ViewDetailsExtend;
