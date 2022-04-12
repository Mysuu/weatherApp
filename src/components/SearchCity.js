import React from "react";
import { Select } from "antd";
import "../styles/SearchCity.scss";
import { ListCity } from "../utils/constant";

const { Option } = Select;

function SearchCity({ setUpdateCity }) {
  // const [isShowSuggestion, setIsShowSuggestion] = useState("");

  // const onFocus = (e) => {
  //   const showCity = ListCity.map((item) => {
  //     return item.name;
  //   });
  //   setIsShowSuggestion(true);
  // };

  return (
    <div className="input-search">
      <Select
        showSearch
        placeholder="Search..."
        optionFilterProp="children"
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        onSelect={(e) => setUpdateCity(ListCity[e].name)}
      >
        {ListCity.map((i, index) => {
          return <Option key={index}>{i.name}</Option>;
        })}
      </Select>
    </div>
  );
}

export default SearchCity;
