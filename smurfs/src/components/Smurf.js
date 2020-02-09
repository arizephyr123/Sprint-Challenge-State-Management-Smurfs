import React from "react";

const Smurf = props => {
  console.log("Smurf props:", props.item.name);
  //console.log("props.smurf.smurfsData.name:", props.smurf.smurfsData[0].name);
  return (
    <div>
      {props.item ? (
        <div>
          <p>Name: {props.item.name}</p>
          <p>Age: {props.item.age}yrs</p>
          <p>Height: {props.item.height}</p>
        </div>
      ) : (
        <p>Nothing</p>
      )}
    </div>
  );
};

export default Smurf;
