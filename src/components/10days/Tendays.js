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
import BarChart from "./BarChart";

function Tendays() {
  const [nameCity, setNameCity] = useState("ha noi");
  const [updateCity, setUpdateCity] = useState("Hà Nội");
  const [changeBarChart, setChangeBarChart] = useState(true);

  const dispatch = useDispatch();
  const weathers = useSelector(
    (state) => state.myFirstReducer.weathers.tendays
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
            <ToggleSwitch
              onClick={() => setChangeBarChart(!changeBarChart)}
              changeBarChart={changeBarChart}
              setChangeBarChart={setChangeBarChart}
            />
          </div>
          <div className="timer">
            As of <Clock format={"h:mm A"} ticking={true} />
          </div>
          {changeBarChart ? (
            weathers &&
            weathers.map((item, index) => (
              <ViewDetails key={index} item={item} />
            ))
          ) : (
            <BarChart weathers={weathers} />
          )}
        </div>
      </div>
    </>
  );
}

export default Tendays;
