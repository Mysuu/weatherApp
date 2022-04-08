import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import "./SearchCity.scss";

function SearchCity({ valueCity, setUpdateCity }) {
  const handleOnSelect = (e) => {
    const newCity = e.name;
    setUpdateCity(newCity);
  };

  return (
    <div className="input-search">
      <ReactSearchAutocomplete
        items={valueCity}
        onSelect={(e) => handleOnSelect(e)}
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
