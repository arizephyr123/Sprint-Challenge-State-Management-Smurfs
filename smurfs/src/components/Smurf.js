import React from "react";

const Smurf = props => {
  //console.log("Smurf props:", props);
  console.log("props.smurf.smurfsData.name:", props.smurf.smurfsData.name);
  return (
    <div>
      {props.smurf.smurfsData.name ? (
        <div>
          <p>Name: {props.smurf.smurfsData.name}</p>
          <p>Age: {props.smurf.smurfsData.name}</p>
          <p>Height: {props.smurf.smurfsData.name}</p>
        </div>
      ) : (
        <p>Nothing</p>
      )}
    </div>
  );
};

export default Smurf;
