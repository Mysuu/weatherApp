import React from "react";
import moment from "moment";

function ListHalfMonth({ item, index }) {
  return (
    <>
      <button key={index} className="btn_day">
        <span>{moment(item.datetime).format("D")}</span>
        <img
          src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
          alt=""
        />
        <p>{Math.round(item.temp)}°C</p>
      </button>
    </>
  );
}

export default ListHalfMonth;
