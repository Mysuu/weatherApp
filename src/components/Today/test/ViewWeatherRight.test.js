import { render } from "@testing-library/react";
import ViewWeatherRight from "../ViewWeatherRight";

const setActive = jest.fn();

describe("viewweatherright", () => {
  test("should render viewweatherright", () => {
    render(
      <ViewWeatherRight
        item={{
          dt_txt: "2022-28-04",
          weather: [{ icon: "03d" }],
          main: { humidity: "76" },
        }}
        setActive={setActive}
        toggle={true}
      />
    );
  });
});
