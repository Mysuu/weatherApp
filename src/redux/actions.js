export const GET_WEATHER_FETCH = "GET_WEATHER_FETCH";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILED = "GET_WEATHER_FAILED";
export const GET_WEATHER_TEN_DAYS = "GET_WEATHER_TEN_DAYS";
export const GET_WEATHER_TEN_DAYS_SUCCESS = "GET_WEATHER_TEN_DAYS_SUCCESS";
export const GET_WEATHER_TEN_DAYS_FAILED = "GET_WEATHER_TEN_DAYS_FAILED";
export const GET_WEATHER_HALF_MONTH = "GET_WEATHER_HALF_MONTH";
export const GET_WEATHER_HALF_MONTH_SUCCESS = "GET_WEATHER_HALF_MONTH_SUCCESS";
export const GET_WEATHER_HALF_MONTH_FAILED = "GET_WEATHER_HALF_MONTH_FAILED";
const getWeatherFetch = (payload) => {
  //nameCity đc truyền lên từ Home
  return {
    type: GET_WEATHER_FETCH, //ktra type so với bên saga
    payload,
  };
};

const getWeatherTenDays = (payload) => {
  return {
    type: GET_WEATHER_TEN_DAYS,
    payload,
  };
};

const getWeatherHalfMonth = (payload) => {
  return {
    type: GET_WEATHER_HALF_MONTH,
    payload,
  };
};
export { getWeatherFetch, getWeatherTenDays, getWeatherHalfMonth };
