import React from "react";
import { WiCloud, WiHumidity, WiThermometer } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import moment from "moment";
import { Collapse } from "antd";

const { Panel } = Collapse;

function ViewWeathers({ weathers }) {
  return (
    <div>
      {weathers &&
        weathers.map((item, index) => {
          return (
            <>
              <div className="views-temp" key={index}>
                <div className="clock">{moment(item.dt_txt).format("LT")}</div>
                <div className="temp">{Math.round(item.main.temp)}°C</div>
                <div className="status-temp">
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                    alt=""
                  />
                </div>
                <div className="description">{item.weather[0].description}</div>
                <div className="humidity">Humidity: {item.main.humidity}%</div>
                <div className="wind-speed">
                  Wind speed: {item.wind.speed}km/h
                </div>
              </div>
              <Collapse defaultActiveKey={["1"]} ghost>
                <Panel>
                  <div className="full-temp">
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
                  </div>
                </Panel>
              </Collapse>
              <div className="hr"></div>
            </>
          );
        })}
    </div>
  );
}

export default ViewWeathers;
