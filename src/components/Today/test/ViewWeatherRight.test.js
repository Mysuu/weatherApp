import { render } from "@testing-library/react";
import ViewWeatherRight from "../ViewWeatherRight";

const setActive = jest.fn();
const setShowTemp = jest.fn();

describe("viewweatherright", () => {
  test("should render viewweatherright", () => {
    render(
      <ViewWeatherRight
        weathers={[
          {
            dt_txt: "2022-28-04",
            weather: [{ icon: "03d" }],
            main: { humidity: "76" },
          },
          {
            dt_txt: "2022-28-04",
            weather: [{ icon: "10d" }],
            main: { humidity: "76" },
          },
        ]}
        item={{
          dt_txt: "2022-28-04",
          weather: [{ icon: "03d" }],
          main: { humidity: "76" },
        }}
        showTemp={"27"}
        setShowTemp={setShowTemp}
        setActive={setActive}
        toggle={true}
      />
    );
  });
});
