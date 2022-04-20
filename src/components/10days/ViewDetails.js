import React, { useState } from "react";
import moment from "moment";
import { AiOutlineDown } from "react-icons/ai";
import "./ViewDetails.scss";
import ViewDetailsExtend from "./ViewDetailsExtend";

function ViewDetails({ item }) {
  const [isDetail, setIsDetail] = useState(false);
  return (
    <>
      {!isDetail ? (
        <div className="view-details" onClick={() => setIsDetail(true)}>
          <div className="days">
            <h3>{moment(item.datetime).format("MMM D")}</h3>
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
        <ViewDetailsExtend item={item} setIsDetail={setIsDetail} />
      )}
      <div className="hr"></div>
    </>
  );
}

export default ViewDetails;
