import React from "react";
import { Select } from "antd";
import "../styles/SearchCity.scss";
import { ListCity } from "../utils/constant";

const { Option } = Select;

function SearchCity({ setNameCity, setUpdateCity }) {
  const onSelect = (e) => {
    setNameCity(ListCity[e].cityName); //show data api mới theo tên đc chọn
    setUpdateCity(ListCity[e].name); //cập nhật thành phố chọn
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
