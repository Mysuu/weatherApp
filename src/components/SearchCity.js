import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "../styles/SearchCity.scss";

function SearchCity({ valueCity, setUpdateCity }) {
  // const handleOnSelect = (e) => {
  //   setUpdateCity(e.name);
  // };

  return (
    <div className="input-search">
      <ReactSearchAutocomplete
        items={valueCity}
        onSelect={(e) => setUpdateCity(e.name)}
        styling={{
          zIndex: 4,
          height: "40px",
        }}
        autoFocus
      />
    </div>
  );
}

export default SearchCity;
