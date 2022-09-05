import React from 'react';
const PersonCard = (props) => {
    return(
        <div>
            <h1 style={{color:"red"}}>{props.firstName}, {props.lastName}</h1>
            <p>{props.age}</p>
            <p>{props.hairColor}</p>
        </div>
    );
}
export default PersonCard;

