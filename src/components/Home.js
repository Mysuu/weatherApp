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
  const [humidity, setHumidity] = useState("");
  const [windspeed, setWindspeed] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");

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
            humidity={humidity}
            windspeed={windspeed}
            image={image}
            description={description}
            time={time}
            weathers={weathers.data}
          />
          <ViewWeatherRight
            setDescription={setDescription}
            setHumidity={setHumidity}
            setImage={setImage}
            setTime={setTime}
            setWindspeed={setWindspeed}
            weathers={weathers.data}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
