import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "antd/dist/antd.min.css";
import App from "./App";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import myFirstReducer from "./redux/reducer";
import mySecondReducer from "./redux/tenReducer";
import mySaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ myFirstReducer, mySecondReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
