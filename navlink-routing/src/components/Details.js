import React from 'react';

const Details = props =>{
    const clickedHandler =() =>{
        props.history.goBack();
    }
    return(
        <div>
            <div className="details">
                {props.match.params.id}
            </div>
            <p onClick={clickedHandler}>back</p>
        </div>
        
    );
}

export default Details;