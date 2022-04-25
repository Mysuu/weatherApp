/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherFetch } from "../../redux/actions";
import "../../styles/Home.scss";
import SearchCity from "./SearchCity";
import Nav from "../Nav/Nav";
import ViewWeatherRight from "./ViewWeatherRight";
import ViewWeatherLeft from "./ViewWeatherLeft";

function Home() {
  const [nameCity, setNameCity] = useState("ha noi");
  const [updateCity, setUpdateCity] = useState("Hà Nội");
  const [active, setActive] = useState(0);
  const [toggle, setToggle] = useState(false);
  const num = 5;
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
      {weathers && weathers.length > 0 ? (
        <div className="container">
          <Nav />
          <div className="views">
            <ViewWeatherLeft
              updateCity={updateCity}
              active={active}
              weathers={weathers}
              toggle={toggle}
              setToggle={setToggle}
            />
            <ViewWeatherRight
              active={active}
              setActive={setActive}
              weathers={weathers}
              toggle={toggle}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
