import { render } from "@testing-library/react";
import SearchCity from "../SearchCity";

const setNameCity = jest.fn();
const setUpdateCity = jest.fn();

describe("searchcity", () => {
  test("should render search", () => {
    render(
      <SearchCity setNameCity={setNameCity} setUpdateCity={setUpdateCity} />
    );
  });
});
