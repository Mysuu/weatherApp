/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherTenDays } from "../../redux/actions";
import Clock from "react-live-clock";
import SearchCity from "../Today/SearchCity";
import Nav from "../Nav/Nav";
import "../../styles/Tendays.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import ViewDetails from "./ViewDetails";

function Tendays() {
  const [nameCity, setNameCity] = useState("ha noi");
  const [updateCity, setUpdateCity] = useState("Hà Nội");

  const dispatch = useDispatch();
  const weathers = useSelector(
    (state) => state.mySecondReducer.weathers.tendays
  );

  useEffect(() => {
    dispatch(getWeatherTenDays(nameCity));
  }, [nameCity]);

  return (
    <>
      <SearchCity setNameCity={setNameCity} setUpdateCity={setUpdateCity} />
      <div className="container3">
        <Nav />
        <div className="views-city">
          <div className="views-city-top">
            <div>
              <div className="title-city">
                <h3>
                  <b>10 Day Weather - </b>
                </h3>
                <h4>{updateCity}</h4>
              </div>
            </div>
            <ToggleSwitch />
          </div>
          <div className="timer">
            As of <Clock format={"h:mm A"} ticking={true} />
          </div>
          {weathers &&
            weathers.map((item) => (
              <>
                <ViewDetails item={item} />
              </>
            ))}
        </div>
      </div>
    </>
  );
}

export default Tendays;
