import React from 'react';
import MovieEntry from './movieEntry.jsx'

var MovieList = (props) => {
  return (
  <div className='movies'>
  {props.movie.map(movie => <MovieEntry movie={movie}/>)}
</div>
);
}

export default MovieList