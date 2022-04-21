import React from "react";
import moment from "moment";

function ListHalfMonth({ item, setActive, index, active, setIndex, i }) {
  return (
    <>
      <button
        className={`btn_day ${active === index && "active"}`}
        onClick={() => {
          setActive(index);
          setIndex(i);
        }}
      >
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
