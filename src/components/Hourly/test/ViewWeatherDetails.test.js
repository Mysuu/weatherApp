import { render } from "@testing-library/react";
import ViewWeathersDetails from "../ViewWeathersDetails";

const setIsDetail = jest.fn();

describe("viewweatherdetails", () => {
  test("should render viewweatherdetails", () => {
    render(
      <ViewWeathersDetails
        index={0}
        item={{
          main: { feels_like: "28", humidity: "60" },
          wind: { speed: "3" },
          clouds: { all: "2" },
        }}
        setIsDetail={setIsDetail}
      />
    );
  });
});
