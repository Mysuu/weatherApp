import React, { useState } from "react";
import moment from "moment";
import { AiOutlineDown } from "react-icons/ai";
import "./ViewDetails.scss";
import ViewDetailsExtend from "./ViewDetailsExtend";

function ViewDetails({ item, index }) {
  const [isDetail, setIsDetail] = useState(true);
  const now = moment(new Date()).format("MMM D");
  const today = moment(item.datetime).format("MMM D");
  return (
    <>
      {isDetail ? (
        <div
          key={index}
          className="view-details"
          onClick={() => setIsDetail(false)}
        >
          <div className="days">
            <h3>{today === now ? "Today" : today}</h3>
          </div>
          <div className="temp">{Math.round(item.temp)}°C</div>
          <div className="img-temp">
            <img
              src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
              alt=""
            />
          </div>
          <div className="description">{item.weather.description}</div>
          <div className="humidity">Humidity: {item.rh}%</div>
          <div className="wind-speed">Wind speed: {item.wind_spd}km/h</div>
          <AiOutlineDown color="dodgerblue" />
        </div>
      ) : (
        <ViewDetailsExtend
          item={item}
          setIsDetail={setIsDetail}
          today={today}
          now={now}
        />
      )}
      <div className="hr"></div>
    </>
  );
}

export default ViewDetails;
