import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FETCH,
  GET_WEATHER_FAILED,
} from "./actions";
import weatherFetch from "./api";

function* workGetWeatherFetch({ payload }) {
  try {
    const weathers = yield call(weatherFetch, payload);
    yield put({ type: GET_WEATHER_SUCCESS, weathers });
  } catch (error) {
    yield put({ type: GET_WEATHER_FAILED });
  }
}

function* mySaga() {
  yield takeEvery(GET_WEATHER_FETCH, workGetWeatherFetch);
}

export default mySaga;
