import React from 'react';
import MovieCard from './MovieCard';

const MoviesContainer = ({movies}) => {
  return <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',margin:"50px 10%"}}>

    {movies.map(movie=><MovieCard movie={movie} key={movie.id}/> )}
  </div>;
};

export default MoviesContainer;
