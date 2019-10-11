import axios from "axios";

//create action types
export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchSmurfData = () => {
  return dispatch => {
    dispatch({ type: START_FETCHING });
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log("API success:", res);
        dispatch({ type: FETCH_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log("API failed:", err);
        dispatch({ type: FETCH_FAILURE, payload: err.response });
      });
  };
};
