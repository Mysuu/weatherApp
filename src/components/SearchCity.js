import React from "react";
import { Select } from "antd";
import "../styles/SearchCity.scss";
import { ListCity } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getWeatherFetch } from "../redux/actions";

const { Option } = Select;

function SearchCity({ setNameCity, setUpdateCity }) {
  const dispatch = useDispatch();

  const onSelect = (e) => {
    setNameCity(ListCity[e].cityName);
    setUpdateCity(ListCity[e].name);
  };

  return (
    <div className="input-search">
      <Select
        showSearch
        placeholder="Search..."
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        onSelect={(e) => onSelect(e)}
      >
        {ListCity.map((i, index) => {
          return <Option key={index}>{i.name}</Option>;
        })}
      </Select>
    </div>
  );
}

export default SearchCity;
