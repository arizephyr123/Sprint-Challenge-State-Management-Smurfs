import React, { useEffect } from "react";
//import react-redux connect (bridge)
import { connect } from "react-redux";
import Smurf from "./Smurf";

import { fetchSmurfData } from "../actions";

const Smurfs = props => {
  //console.log("Smurfs", props);
  //console.log(props.adviceData.slip.advice);
  useEffect(() => {
    props.fetchSmurfData();
  }, []);
  if (props.isFetching) {
    //loading state set-up
    return <h2>Smurfs arriving soon...</h2>;
  } else {
    return (
      <div>
        {/* error state set up*/}
        {props.error && <p>{props.error}</p>}
        {/* success state set up*/}
         <Smurf smurf={props} />
      </div>
    )};
};

const mapStateToProps = state => {
  //console.log("mstp state", state);
  return {
    smurfsData: state.smurfsData,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfData }
)(Smurfs);
