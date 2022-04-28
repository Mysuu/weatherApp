import { render } from "@testing-library/react";
import ToggleSwitch from "../ToggleSwitch";

const setChangeBarChart = jest.fn();

describe("toggleswitch", () => {
  test("should render toggleswitch", () => {
    render(
      <ToggleSwitch
        changeBarChart={true}
        setChangeBarChart={setChangeBarChart}
      />
    );
  });
});
