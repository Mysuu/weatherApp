import { call, put, takeEvery } from "redux-saga/effects";
import { GET_WEATHER_SUCCESS, GET_WEATHER_FETCH } from "./actions";

function weatherFetch(nameCity) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${nameCity}&units=metric&cnt=5&appid=fdc0d83c7c7f8bd6ab1026bf6ec1046b`
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    }
  });
}

function* workGetWeatherFetch({ payload }) {
  const weathers = yield call(weatherFetch, payload);
  yield put({ type: GET_WEATHER_SUCCESS, weathers });
}

function* mySaga() {
  yield takeEvery(GET_WEATHER_FETCH, workGetWeatherFetch);
}

export default mySaga;
