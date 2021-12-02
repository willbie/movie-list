import React from 'react';
import { useState } from 'react';

var Search = (props) => {
  return (
    <form onSubmit={props.handleSearchSubmit}>
    <input type='text' id='search' value={props.value} onChange={props.handleSearchChange}/>
    <input type="submit" value='search'/>
    </form>
  )
};

export default Search