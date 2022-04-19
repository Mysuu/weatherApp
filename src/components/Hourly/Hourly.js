/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Clock from "react-live-clock";
import getWeatherFetch from "../../redux/actions";
import "../../styles/Hourly.scss";
import Nav from "../Today/Nav";
import SearchCity from "../Today/SearchCity";
import ViewWeathers from "./ViewWeathers";
import VerticalBarChart from "./VerticalBarChart";

function Hourly() {
  const [nameCity, setNameCity] = useState("ha noi");
  const [updateCity, setUpdateCity] = useState("Hà Nội");
  const [changeChart, setChangeChart] = useState(false);
  const num = 8;

  const dispatch = useDispatch();
  const weathers = useSelector(
    (state) => state.myFirstReducer.weathers.weekWeather
  );

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
              <Switch onClick={() => setChangeChart(!changeChart)} />
            </div>
          </div>
          <div className="timer">
            As of <Clock format={"h:mm A"} ticking={true} />
          </div>
          <div className="hr"></div>
          {changeChart ? (
            <VerticalBarChart weathers={weathers} />
          ) : (
            <ViewWeathers weathers={weathers} />
          )}
        </div>
      </div>
    </>
  );
}

export default Hourly;
