import { GET_WEATHER_TEN_DAYS_SUCCESS } from "./actions";

const initState = {
  weathers: {
    tendays: [],
  },
};

const mySecondReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_WEATHER_TEN_DAYS_SUCCESS:
      return {
        ...state,
        weathers: {
          tendays: action.dataTenDay.data,
        },
      };
    default:
      return state;
  }
};

export default mySecondReducer;
