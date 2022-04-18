import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FETCH,
  GET_WEATHER_FAILED,
} from "./actions";
import weatherFetch from "./api";

function* workGetWeatherFetch({ payload }) {
  //payload là dữ liệu nhận bên actions
  try {
    const weathers = yield call(weatherFetch, payload); //call api, truyền payload xuống api
    const newData = {
      name: weathers.city.name,
      data: weathers.list,
    };

    yield put({ type: GET_WEATHER_SUCCESS, newData });
  } catch (error) {
    yield put({ type: GET_WEATHER_FAILED });
  }
}

function* mySaga() {
  yield takeEvery(GET_WEATHER_FETCH, workGetWeatherFetch); //kiểm tra type GET_WEATHER_FETCH bên actions xem có hđ không
}

export default mySaga;
