import { render } from "@testing-library/react";
import DetailsHalfMonth from "../DetailHalfMonth";

const setIndexDay = jest.fn();

describe("detailshalfmonth", () => {
  test("should render detailshalfmonth", () => {
    render(
      <DetailsHalfMonth
        item={{
          datetime: "2022-29-04",
          temp: "25",
          weather: { icon: "c01d", description: "Clear Sky" },
          uv: "11.9",
          rh: "53",
          clouds: "0",
          pop: "0",
          wind_spd: "2.6",
        }}
        setIndexDay={setIndexDay}
        active={0}
      />
    );
  });
});
