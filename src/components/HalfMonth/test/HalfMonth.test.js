import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import HalfMonth from "../HalfMonth";

describe("halfmonth", () => {
  test("should render halfmonth", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HalfMonth />
        </Provider>
      </BrowserRouter>
    );
  });
});
