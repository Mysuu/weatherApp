import React from "react";
import { AiOutlineUp } from "react-icons/ai";
import { WiCloud, WiHumidity, WiThermometer } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import "./ViewWeathersDetails.scss";

function ViewWeathersDetails({ item, index, setIsDetail }) {
  return (
    <>
      <div className="full-temp" key={index} onClick={() => setIsDetail(true)}>
        <div className="temp-top">
          <div className="temp-items">
            <div className="temp-views">
              <WiThermometer color="dodgerblue" fontSize="30px" />
              <h3>Feels Like</h3>
            </div>
            <div>{Math.round(item.main.feels_like)}</div>
          </div>
          <div className="temp-items">
            <div className="temp-views">
              <FaWind color="dodgerblue" fontSize="20px" />
              <h3>&nbsp; Wind</h3>
            </div>
            {item.wind.speed}km/h
          </div>
          <div className="temp-items">
            <div className="temp-views">
              <WiHumidity color="dodgerblue" fontSize="30px" />
              <h3>&nbsp;Humidity</h3>
            </div>
            {item.main.humidity}%
          </div>
          <div className="temp-items">
            <div className="temp-views">
              <WiCloud color="dodgerblue" fontSize="30px" />
              <h3>&nbsp;Cloud Cover</h3>
            </div>
            {item.clouds.all}%
          </div>
        </div>
        <AiOutlineUp color="dodgerblue" />
      </div>
    </>
  );
}

export default ViewWeathersDetails;
