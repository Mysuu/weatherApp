/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Collapse, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Clock from "react-live-clock";
import getWeatherFetch from "../../redux/actions";
import "../../styles/Hourly.scss";
import Nav from "../Today/Nav";
import SearchCity from "../Today/SearchCity";

const { Panel } = Collapse;

function Hourly() {
  const [nameCity, setNameCity] = useState("ha noi");
  const [updateCity, setUpdateCity] = useState("Hà Nội");
  const num = 8;

  const dispatch = useDispatch();
  const weathers = useSelector(
    (state) => state.myFirstReducer.weathers.weekWeather
  );
  console.log("check data", weathers);

  useEffect(() => {
    dispatch(getWeatherFetch([nameCity, num])); //data api, bắt đầu dispatch tìm cái hàm getWeatherFetch tromg actions
  }, [nameCity, num]);

  return (
    <>
      <SearchCity setNameCity={setNameCity} setUpdateCity={setUpdateCity} />
      <div className="container2">
        <Nav />
        <div className="views-city">
          <div className="views-city-top">
            <div className="title-city">
              <h3>
                <b>Hourly Weather - </b>
              </h3>
            </div>
            <div className="name-city">
              <h4>{updateCity}</h4>
            </div>
            <div className="switch" style={{ float: "right" }}>
              <Switch onClick />
            </div>
          </div>
          <div className="timer">
            As of <Clock format={"h:mm A"} ticking={true} />
          </div>
          <div className="hr"></div>
          {weathers &&
            weathers.map((item, index) => {
              return (
                <>
                  <div className="views-temp" key={index}>
                    <div className="clock">
                      {moment(item.dt_txt).format("LT")}
                    </div>
                    <div className="temp">{Math.round(item.main.temp)}°C</div>
                    <div className="status-temp">
                      <img
                        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        alt=""
                      />
                    </div>
                    <div className="description">
                      {item.weather[0].description}
                    </div>
                    <div className="humidity">
                      Humidity: {item.main.humidity}%
                    </div>
                    <div className="wind-speed">
                      Wind speed: {item.wind.speed}km/h
                    </div>
                  </div>
                  <div className="hr"></div>
                  {/* <Collapse defaultActiveKey={["1"]} ghost>
                    <Panel>
                      <div className="full-temp">
                        <div className="temp-top">
                          <div style={{ width: "33%" }}>
                            <h3>Feels Like</h3>
                            <h3>18</h3>
                          </div>
                          <div style={{ width: "33%" }}>
                            <h3>Wind</h3>
                            <h3>29km/h</h3>
                          </div>
                          <div style={{ width: "33%" }}>
                            <h3>Humidity</h3>
                            <h3>31%</h3>
                          </div>
                        </div>
                        <div className="hr"></div>
                        <div className="temp-bot">
                          <div style={{ width: "33%" }}>
                            <h3>UV index</h3>
                            <h3>10 of 10</h3>
                          </div>
                          <div style={{ width: "33%" }}>
                            <h3>Cloud Cover</h3>
                            <h3>83%</h3>
                          </div>
                          <div style={{ width: "33%" }}>
                            <h3>Rain Amount</h3>
                            <h3>0 in</h3>
                          </div>
                        </div>
                      </div>
                    </Panel>
                  </Collapse> */}
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Hourly;
