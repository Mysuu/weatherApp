import { render } from "@testing-library/react";
import BarChart from "../BarChart";

describe("barchar", () => {
  test("should render test", () => {
    render(
      <BarChart
        item={{ datetime: "2022-28-04", temp: "28", rh: "80", wind_spd: "2" }}
      />
    );
  });
});
