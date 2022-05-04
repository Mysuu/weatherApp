import { render } from "@testing-library/react";
import moment from "moment";
import ViewDetailsExtend from "../ViewDetailsExtend";

const setIsDetail = jest.fn();

describe("viewdetailsextend", () => {
  test("should render viewdetailsextend", () => {
    render(
      <ViewDetailsExtend
        item={{
          temp: "25",
          weather: { icon: "c01d", description: "Clear Sky" },
          uv: "11.9",
          clouds: "0",
          pop: "0",
          win_spd: "2.6",
        }}
        setIsDetail={setIsDetail}
        now={moment(new Date()).format("MMM D")}
        today={"2022-29-04"}
      />
    );
  });
});
