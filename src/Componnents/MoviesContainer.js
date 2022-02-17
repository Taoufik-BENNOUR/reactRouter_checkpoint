import React from 'react';
import MovieCard from './MovieCard';

const MoviesContainer = ({movies,search,rate}) => {
  return <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',margin:"50px 10%"}}>

    {movies.filter(el=>el.rate>=rate && el.title.toLowerCase().includes(search.toLowerCase())).map(movie=><MovieCard movie={movie} key={movie.id}/> )}
  </div>;
};

export default MoviesContainer;
