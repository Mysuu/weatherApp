import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_WEATHER_FETCH,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAILED,
  GET_WEATHER_TEN_DAYS,
  GET_WEATHER_TEN_DAYS_SUCCESS,
  GET_WEATHER_TEN_DAYS_FAILED,
  GET_WEATHER_HALF_MONTH,
  GET_WEATHER_HALF_MONTH_FAILED,
  GET_WEATHER_HALF_MONTH_SUCCESS,
} from "./actions";
import { weatherFetch, weatherTenDay, weatherHalfMonth } from "./api";

function* workGetWeatherFetch({ payload }) {
  //payload là dữ liệu nhận bên actions
  try {
    const weathers = yield call(weatherFetch, ...payload); //call api, truyền payload xuống api
    const newData = {
      name: weathers.city.name,
      data: weathers.list,
    };

    yield put({ type: GET_WEATHER_SUCCESS, newData });
  } catch (error) {
    yield put({ type: GET_WEATHER_FAILED });
  }
}

function* workGetWeatherTenDays({ payload }) {
  //payload là dữ liệu nhận bên actions
  try {
    const weathers = yield call(weatherTenDay, payload); //call api, truyền payload xuống api
    const dataTenDay = {
      name: weathers.city_name,
      data: weathers.data,
    };
    yield put({ type: GET_WEATHER_TEN_DAYS_SUCCESS, dataTenDay });
  } catch (error) {
    yield put({ type: GET_WEATHER_TEN_DAYS_FAILED });
  }
}

function* workGetWeatherHalfMonth({ payload }) {
  //payload là dữ liệu nhận bên actions
  try {
    const weathers = yield call(weatherHalfMonth, payload); //call api, truyền payload xuống api
    const dataMonth = {
      name: weathers.city_name,
      data: weathers.data,
    };
    yield put({ type: GET_WEATHER_HALF_MONTH_SUCCESS, dataMonth });
  } catch (error) {
    yield put({ type: GET_WEATHER_HALF_MONTH_FAILED });
  }
}

function* mySaga() {
  yield takeEvery(GET_WEATHER_FETCH, workGetWeatherFetch); //kiểm tra type GET_WEATHER_FETCH bên actions xem có hđ không
  yield takeEvery(GET_WEATHER_TEN_DAYS, workGetWeatherTenDays);
  yield takeEvery(GET_WEATHER_HALF_MONTH, workGetWeatherHalfMonth);
}

export default mySaga;
