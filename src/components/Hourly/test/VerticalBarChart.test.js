import { render } from "@testing-library/react";
import VerticalBarChart from "../VerticalBarChart";

describe("VerticalBarChart", () => {
  test("should render verticalbarchart", () => {
    render(
      <VerticalBarChart
        item={[
          { dt_txt: "2022-28-04" },
          { main: { temp: "29", humidity: "70" } },
          { wind: { speed: "5" } },
        ]}
      />
    );
  });
});
