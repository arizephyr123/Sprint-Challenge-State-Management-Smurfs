import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";

//initial state using expected data from API docs and possible states:initial, loading, success, error
const initialState = {
    smurfsData: {
    name: "Brainey",
    age: 200,
    height: "5cm",
    id: 0
  },
  isFetching: false,
  error: "initial error"
};

//creating reducer- use state or if none then initialState as default
//rely on reducer actions to transition from state to state


const reducer = (state = initialState, action) => {
    switch (action.type) {
      case START_FETCHING:
        return {
          ...state,
          isFetching: true,
          error: null
        };
      case FETCH_SUCCESS:
        return {
          ...state,
          isFetching: false,
          error: null,
          adviceData: action.payload
        };
      case FETCH_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;