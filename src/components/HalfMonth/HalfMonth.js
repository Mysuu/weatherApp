/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherHalfMonth } from "../../redux/actions";
import Clock from "react-live-clock";
import { week, toDay, empty } from "../../utils/constant";
import SearchCity from "../Today/SearchCity";
import Nav from "../Nav/Nav";
import "./HalfMonth.scss";
import ListHalfMonth from "./ListHalfMonth";
import DetailHalfMonth from "./DetailHalfMonth";

function HalfMonth() {
  const [nameCity, setNameCity] = useState("ha noi");
  const [updateCity, setUpdateCity] = useState("Hà Nội");
  const [active, setActive] = useState([]);
  const [indexDay, setIndexDay] = useState([]);

  const dispatch = useDispatch();
  const weathers = useSelector(
    (state) => state.myFirstReducer.weathers.halfmonth
  );

  useEffect(() => {
    dispatch(getWeatherHalfMonth(nameCity));
  }, [nameCity]);

  const data = useMemo(() => {
    let newdata = [];

    if (weathers && weathers.length > 0) {
      if (toDay) {
        for (let i = 0; i < toDay; i++) {
          weathers.unshift(empty);
        }
      }

      if (weathers && weathers.length > 0) {
        for (let i = 1; i <= 3; i++) {
          const result = weathers.slice((i - 1) * 7 + toDay, i * 7 + toDay);
          newdata.push(result);
        }
      }
      return newdata;
    }
  }, [weathers]);

  return (
    <>
      <SearchCity setNameCity={setNameCity} setUpdateCity={setUpdateCity} />
      <div className="container4">
        <Nav />
        <div className="views-month">
          <div className="views-month-top">
            <div>
              <div className="title-month">
                <h3>
                  <b>Half Month Weather - </b>
                </h3>
                <h4>{updateCity}</h4>
              </div>
            </div>
          </div>
          <div className="timer-month">
            As of <Clock format={"h:mm A"} ticking={true} />
          </div>
          <div className="hr"></div>
          <div className="list-days">
            {week.map((day, i) => {
              return <span key={i}>{day}</span>;
            })}
          </div>
          <div className="hr"></div>
          <div className="day-month">
            {data &&
              data.map((a, i) => {
                return (
                  <React.Fragment key={i}>
                    {a.map((item, index) => {
                      return (
                        <ListHalfMonth
                          key={index}
                          index={index}
                          i={i}
                          item={item}
                          active={active}
                          indexDay={indexDay}
                          setActive={setActive}
                          setIndexDay={setIndexDay}
                        />
                      );
                    })}
                    {indexDay === i && (
                      <DetailHalfMonth
                        item={a}
                        active={active}
                        setIndexDay={setIndexDay}
                      />
                    )}
                  </React.Fragment>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HalfMonth;

// if (currentDay) {
//   const empty = {
//     datetime: "",
//     weather: {
//       icon: "",
//     },
//     temp: "",
//   };

//   for (let i = 0; i < currentDay; i++) {
//     newdata[0].unshift(empty);
//   }
// }
