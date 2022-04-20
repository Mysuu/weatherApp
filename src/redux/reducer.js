import { GET_WEATHER_SUCCESS } from "./actions";

const initState = {
  weathers: {
    weekWeather: [],
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
    default:
      return state;
  }
};

export default myFirstReducer;
