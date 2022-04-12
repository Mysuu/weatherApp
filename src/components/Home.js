import { useState } from "react";
import { Switch } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import "../styles/Home.scss";
import sun from "../img/sun.png";
import cloud from "../img/cloud.png";
import SearchCity from "./SearchCity";
import { ListCity } from "../utils/constant";

function Home() {
  const [updateCity, setUpdateCity] = useState("");

  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }

  return (
    <>
      <SearchCity valueCity={ListCity} setUpdateCity={setUpdateCity} />
      <div className="container">
        <div className="selected">
          <ul>
            <li activeclassname="active">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "activeClassName" : undefined
                }
              >
                Today
              </NavLink>
            </li>
            <li>
              <NavLink to="/hourly">Hourly</NavLink>
            </li>
            <li>
              <NavLink to="/10days">10 days</NavLink>
            </li>
            <li>
              <NavLink to="/monthly">Monthly</NavLink>
            </li>
          </ul>
        </div>
        <div className="views">
          <div className="views-left">
            <MenuOutlined style={{ color: "#1890ff" }} />
            <div className="views-left-top">
              <h1>{updateCity ? updateCity : "Hà Nội"}</h1>
              <Switch defaultChecked onChange={onChange} />
              <span>°C</span>
            </div>
            <div>
              <span>10:9AM, Wed, Apr 6, 2022</span>
            </div>
            <br />
            <div className="views-left-weather">
              <img src={sun} alt="" />
              <h2>
                <b>3</b>
                <span>°C</span>
              </h2>
            </div>
            <br />
            <div>
              <h1>
                <b>Clear Sky</b>
              </h1>
            </div>
            <div className="infoweather">
              <div className="humidity">
                <h3>Humidity</h3>
                <div>43%</div>
              </div>
              <div>
                <h3>Wind speed</h3>
                <div>6.08km/j</div>
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
              <div className="views-details active">
                <h3>Today</h3>
                <img src={sun} alt="" />
                <div className="humidity2">
                  <h3>Humidity</h3>
                  <div>43%</div>
                </div>
              </div>
              <div className="views-details">
                <h3>Apr 07</h3>
                <img src={sun} alt="" />
                <div className="humidity2">
                  <h3>Humidity</h3>
                  <div>31%</div>
                </div>
              </div>
              <div className="views-details">
                <h3>Apr 08</h3>
                <img src={cloud} alt="" />
                <div className="humidity2">
                  <h3>Humidity</h3>
                  <div>38%</div>
                </div>
              </div>
              <div className="views-details">
                <h3>Apr 09</h3>
                <img src={cloud} alt="" />
                <div className="humidity2">
                  <h3>Humidity</h3>
                  <div>21%</div>
                </div>
              </div>
              <div className="views-details">
                <h3>Apr 10</h3>
                <img src={sun} alt="" />
                <div className="humidity2">
                  <h3>Humidity</h3>
                  <div>43%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
