import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import myFirstReducer from "./reducer";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ myFirstReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default store;
