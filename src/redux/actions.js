export const GET_WEATHER_FETCH = "GET_WEATHER_FETCH";
export const GET_WEATHER_SUCCESS = "GET_WEATHER_SUCCESS";
export const GET_WEATHER_FAILED = "GET_WEATHER_FAILED";
const getWeatherFetch = (payload) => {
  //nameCity đc truyền lên từ Home
  return {
    type: GET_WEATHER_FETCH, //ktra type so với bên saga
    payload,
  };
};

export default getWeatherFetch;
