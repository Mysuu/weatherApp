import { render } from "@testing-library/react";
import ViewDetails from "../ViewDetails";

describe("viewdetails", () => {
  test("should render viewdetails", () => {
    render(
      <ViewDetails
        item={{
          datetime: "2022-29-04",
          temp: "25",
          weather: { icon: "c01d", description: "Clear Sky" },
          rh: "70",
          win_spd: "2.6",
        }}
      />
    );
  });
});
