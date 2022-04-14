import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherFetch } from "../redux/actions";
import "../styles/Home.scss";
import SearchCity from "./SearchCity";
import Nav from "./Nav";
import ViewWeatherRight from "./ViewWeatherRight";
import ViewWeatherLeft from "./ViewWeatherLeft";

function Home() {
  const [nameCity, setNameCity] = useState("ha noi");
  const [updateCity, setUpdateCity] = useState("Hà Nội");
  const [active, setActive] = useState(0);

  const dispatch = useDispatch();
  const weathers = useSelector((state) => state.myFirstReducer.weathers);

  useEffect(() => {
    dispatch(getWeatherFetch(nameCity)); //data api, bắt đầu dispatch tìm cái hàm getWeatherFetch tromg actions
  }, [dispatch, nameCity]);

  return (
    <>
      <SearchCity setNameCity={setNameCity} setUpdateCity={setUpdateCity} />
      <div className="container">
        <Nav />
        <div className="views">
          <ViewWeatherLeft
            updateCity={updateCity}
            active={active}
            weathers={weathers.data}
          />
          <ViewWeatherRight
            active={active}
            setActive={setActive}
            weathers={weathers.data}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
