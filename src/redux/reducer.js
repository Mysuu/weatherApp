import { GET_WEATHER_SUCCESS } from "./actions";

const myFirstReducer = (state = { weathers: [] }, action) => {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return { ...state, weathers: action.weathers };
    default:
      return state;
  }
};

export default myFirstReducer;
