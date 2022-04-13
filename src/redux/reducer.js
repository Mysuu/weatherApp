import { GET_WEATHER_SUCCESS } from "./actions";

const initState = {
  weathers: {},
};

const myFirstReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_WEATHER_SUCCESS:
      return { ...state, weathers: action.weathers };
    default:
      return state;
  }
};

export default myFirstReducer;
