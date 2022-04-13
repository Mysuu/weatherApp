import { useState, useEffect } from "react";
import { Switch } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherFetch } from "../redux/actions";
import "../styles/Home.scss";
import SearchCity from "./SearchCity";
import Nav from "./Nav";

function Home() {
  const [nameCity, setNameCity] = useState("ha noi");
  const [updateCity, setUpdateCity] = useState("Hà Nội");

  const dispatch = useDispatch();
  const weathers = useSelector((state) => state.myFirstReducer.weathers);

  console.log("weathers", weathers);

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  useEffect(() => {
    dispatch(getWeatherFetch(nameCity)); //data api
  }, [dispatch, nameCity]);

  return (
    <>
      <SearchCity setNameCity={setNameCity} setUpdateCity={setUpdateCity} />
      <div className="container">
        <Nav />
        <div className="views">
          <div className="views-left">
            <MenuOutlined style={{ color: "#1890ff" }} />
            <div className="views-left-top">
              <div>
                <h1>{updateCity}</h1>
              </div>
              <div>
                <Switch defaultChecked onChange={onChange} />
                <span>°C</span>
              </div>
            </div>
            <div>
              <span>
                {weathers.list &&
                  moment(weathers.list[0].dt_txt).format("llll")}
              </span>
            </div>
            <br />
            <div className="views-left-weather">
              <img
                src={`http://openweathermap.org/img/wn/${
                  weathers.list && weathers.list[0].weather[0].icon
                }@2x.png`}
                alt=""
              />
              <h2>
                <b>{weathers.list && Math.round(weathers.list[0].main.temp)}</b>
                <span>°C</span>
              </h2>
            </div>
            <br />
            <div>
              <h1>
                <b style={{ textTransform: "capitalize" }}>
                  {weathers.list && weathers.list[0].weather[0].description}
                </b>
              </h1>
            </div>
            <div className="infoweather">
              <div className="humidity">
                <h3>Humidity</h3>
                <div>{weathers.list && weathers.list[0].main.humidity}%</div>
              </div>
              <div>
                <h3>Wind speed</h3>
                <div>{weathers.list && weathers.list[0].wind.speed}km/h</div>
              </div>
            </div>
          </div>

          <div className="views-right">
            <CloseOutlined style={{ color: "#1890ff" }} />
            <div className="views-right-top">
              <h3>Temperature</h3>
              <div>
                <h1>Chỗ này biểu đồ</h1>
              </div>
            </div>
            <div className="views-right-bottom">
              {weathers.list &&
                weathers.list.map((item, i) => {
                  return (
                    <div key={i} className="views-details active">
                      <h3>{moment(item.dt_txt).format("lll")}</h3>
                      <img
                        src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        alt=""
                      />
                      <div className="humidity2">
                        <h3>Humidity</h3>
                        <div>{item.main.humidity}%</div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
