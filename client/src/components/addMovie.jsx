import React from 'react';

var AddMovie = (props) => {
  return (
    <form onSubmit={props.handleAddSubmit}>
    <input type='text' id='Add' value={props.addMovie} onChange={props.handleAddChange}/>
    <input type="submit" value='Add'/>
    </form>
  )
}

export default AddMovie;