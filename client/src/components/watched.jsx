import React from 'react';

var Watched = (props) => {

  return(
    <div>
    <button onClick={props.handleWatchedClick}>Watched</button>
    <button onClick={props.handleToWatchedClick}>To Watched</button>
    </div>
  )
}

export default Watched