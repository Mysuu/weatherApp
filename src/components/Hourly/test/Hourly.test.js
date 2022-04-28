import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store";
import Hourly from "../Hourly";

describe("Hourly", () => {
  test("should render hourly", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Hourly />
        </Provider>
      </BrowserRouter>
    );
  });
});
