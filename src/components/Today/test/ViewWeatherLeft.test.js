import { render } from "@testing-library/react";
import ViewWeatherLeft from "../ViewWeatherLeft";

const setToggle = jest.fn();

describe("viewweatherleft", () => {
  test("should render viewweatherleft", () => {
    render(
      <ViewWeatherLeft
        updateCity={"Hà Nội"}
        weathers={[
          {
            weather: [{ icon: "03d" }],
            main: { temp: "20" },
            wind: { speed: "5" },
          },
        ]}
        active={0}
        toggle={true}
        setToggle={setToggle}
      />
    );
  });
});
