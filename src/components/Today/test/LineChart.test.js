import { render } from "@testing-library/react";
import LineChart from "../LineChart";

const setShowTemp = jest.fn();

describe("linechart", () => {
  test("should render linechart", () => {
    render(
      <LineChart
        weathers={[
          {
            main: { temp: "20" },
          },
        ]}
        data={{ temp: "20" }}
        toggle={false}
        showTemp={"27"}
        setShowTemp={setShowTemp}
      />
    );
  });
  test("should render toggle is true", () => {
    render(
      <LineChart
        weathers={[
          {
            main: { temp: "20" },
          },
        ]}
        toggle={true}
        showTemp={[0]}
        setShowTemp={setShowTemp}
      />
    );
  });
});
