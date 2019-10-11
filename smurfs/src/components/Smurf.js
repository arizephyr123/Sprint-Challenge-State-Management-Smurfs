import React from 'react';

const Smurf = props => {
    console.log(props);
    return(
        <div>
        {props.smurf.name ? (<div><p>Name: {props.smurf.name}</p><p>Age: {props.smurf.age}</p><p>Height: {props.smurf.height}</p></div>) : <p>Nothing</p>}
        </div>
        
    )
    }

    export default Smurf;