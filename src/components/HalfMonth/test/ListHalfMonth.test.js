import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import ListHalfMonth from "../ListHalfMonth";

const setIndexDay = jest.fn();
const setActive = jest.fn();

describe("listhalfmonth", () => {
  test("should render listhalfmonth", () => {
    render(
      <ListHalfMonth
        item={{
          datetime: "2022-29-04",
          weather: { icon: "c01d" },
          temp: "26",
        }}
        setIndexDay={setIndexDay}
        setActive={setActive}
      />
    );
  });

  test("should handleClick", () => {
    render(
      <Provider store={store}>
        <ListHalfMonth
          item={{
            datetime: "2022-29-04",
            weather: { icon: "c01d" },
            temp: "26",
          }}
          setIndexDay={setIndexDay}
          setActive={setActive}
        />
      </Provider>
    );
    const elm = screen.getByRole("button");
    fireEvent.click(elm);
  });
});
