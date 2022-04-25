import React from "react";
import moment from "moment";

function ListHalfMonth({ item, i, index, setIndexDay, setActive }) {
  const handleClick = () => {
    if (item.temp) {
      setActive(index);
      setIndexDay(i);
    } else {
      setIndexDay(null);
    }
  };

  return (
    <>
      <button className="btn_day" onClick={handleClick}>
        <span>{item.datetime ? moment(item.datetime).format("D") : ""}</span>
        {item.weather.icon ? (
          <img
            src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`}
            alt=""
          />
        ) : (
          ""
        )}
        <p>{item.temp ? <span>{Math.round(item.temp)}°C</span> : ""}</p>
      </button>
    </>
  );
}

export default ListHalfMonth;
