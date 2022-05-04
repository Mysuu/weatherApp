import { render, screen, fireEvent } from "@testing-library/react";
import SearchCity from "../SearchCity";
import { ListCity } from "../../../utils/constant";

const setNameCity = jest.fn();
const setUpdateCity = jest.fn();

describe("searchcity", () => {
  test("should render search", () => {
    render(
      <SearchCity setNameCity={setNameCity} setUpdateCity={setUpdateCity} />
    );
  });
  test("should render onSelect", () => {
    render(
      <SearchCity
        options={ListCity}
        setNameCity={setNameCity}
        setUpdateCity={setUpdateCity}
      />
    );
    const elm = screen.getByText("Search...");
    fireEvent.click(elm);
  });
});
