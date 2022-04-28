import { render } from "@testing-library/react";
import ViewWeathers from "../ViewWeathers";

describe("viewweather", () => {
  test("should render viewweather", () => {
    render(
      <ViewWeathers
        item={{
          dt_txt: "2022-28-04",
          main: { temp: "27", humidity: "70" },
          weather: [{ icon: "03d" }],
          description: "Broken Clouds",
          wind: { speed: "5" },
        }}
        index={0}
      />
    );
  });
});
