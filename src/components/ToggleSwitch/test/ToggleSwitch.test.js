import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import ToggleSwitch from "../ToggleSwitch";

afterEach(cleanup);

const setChangeBarChart = jest.fn();
const onToggle = jest.fn();

describe("toggleswitch", () => {
  test("changeBarChart is true", () => {
    render(
      <ToggleSwitch
        changeBarChart={true}
        setChangeBarChart={setChangeBarChart}
      />
    );
  });
  test("changeBarChart is false", () => {
    render(
      <ToggleSwitch
        changeBarChart={false}
        setChangeBarChart={setChangeBarChart}
      />
    );
  });
  test("fn onToggle", () => {
    render(
      <ToggleSwitch
        changeBarChart={false}
        setChangeBarChart={setChangeBarChart}
        onToggle={onToggle}
      />
    );
    const labelCheckbox = screen.getByTestId("labelCheckbox-id");
    fireEvent.click(labelCheckbox);
  });
});
