import React from "react";
import { WiCloud, WiHumidity, WiRaindrop, WiHot } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import moment from "moment";
import "./DetailHalfMonth.scss";

function DetailHalfMonth({ item, active, setIndexDay }) {
  const now = moment(new Date()).format("MMM D");
  const today = moment(item[active] && item[active].datetime).format("MMM D");
  return (
    <div className="view-details-month">
      <div className="month">
        <div className="month-left">
          <div className="month-timer">
            {today === now ? "Today" : today} | Day
          </div>
          <div className="month-img">
            <div className="month-temp-witdh">
              {item[active] && Math.round(item[active].temp)}°C
            </div>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${
                item[active] && item[active].weather.icon
              }.png`}
              alt=""
            />
          </div>
          <div className="month-description">
            <h3>{item[active] && item[active].weather.description}</h3>
          </div>
          <div className="month-bot">
            <div className="month-item-bot">
              <div className="month-item-bot-small">
                <WiHot color="dodgerblue" fontSize="30px" />
                <h3>&nbsp; UV Index</h3>
              </div>
              <b>{item[active] && item[active].uv}</b>
            </div>
            <div className="month-item-bot">
              <div className="month-item-bot-small">
                <WiHumidity color="dodgerblue" fontSize="30px" />
                <h3>&nbsp;Humidity</h3>
              </div>
              <b>{item[active] && item[active].rh}%</b>
            </div>
            <div className="month-item-bot">
              <div className="month-item-bot-small">
                <WiCloud color="dodgerblue" fontSize="30px" />
                <h3>&nbsp;Cloud Cover</h3>
              </div>
              <b>{item[active] && item[active].clouds}%</b>
            </div>
          </div>
        </div>
        <div className="month-right">
          <div className="month-humidity">
            <WiRaindrop color="dodgerblue" fontSize="30px" />
            <div>&nbsp;{item[active] && item[active].pop}%</div>
          </div>
          <div className="month-wind-speed">
            <FaWind color="dodgerblue" fontSize="20px" />
            <div>&nbsp;{item[active] && item[active].wind_spd}km/h</div>
          </div>
        </div>
        <div className="close">
          <AiOutlineClose
            color="dodgerblue"
            style={{ cursor: "pointer", fontSize: "20px" }}
            onClick={() => setIndexDay(null)}
          />
        </div>
      </div>
    </div>
  );
}

export default DetailHalfMonth;
