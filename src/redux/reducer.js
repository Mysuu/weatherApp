import {
  GET_WEATHER_SUCCESS,
  GET_WEATHER_TEN_DAYS_SUCCESS,
  GET_WEATHER_HALF_MONTH_SUCCESS,
} from "./actions";

const initState = {
  weathers: {
    weekWeather: [],
    tendays: [],
    halfmonth: [],
  },
};

const myFirstReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weathers: {
          weekWeather: action.newData.data,
        },
      };
    case GET_WEATHER_TEN_DAYS_SUCCESS:
      return {
        ...state,
        weathers: {
          tendays: action.dataTenDay.data,
        },
      };
    case GET_WEATHER_HALF_MONTH_SUCCESS:
      return {
        ...state,
        weathers: {
          halfmonth: action.dataMonth.data,
        },
      };
    default:
      return state;
  }
};

export default myFirstReducer;
