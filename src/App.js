import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './Componnents/Headers';
import {Data} from './data'
import { useState } from 'react';
import MoviesContainer from './Componnents/MoviesContainer';
import AddMovie from './Componnents/AddMovie';
import { Routes,Route } from 'react-router-dom';
import MovieTrailer from './Componnents/MovieTrailer';

function App() {
  const [movies,setMovies]=useState(Data)
  function addnew(x){
    return setMovies([...movies,x])
  }
  const filter=(search,rat)=>{
   if(search===''){
     setMovies(Data)
   } else {

     setMovies(movies.filter(el=> el.rate>=rat && el.title.toLowerCase().includes(search.toLowerCase()) ))
   }

  }

  return (
    <>
      <Headers filter={filter}/>
    <Routes> 
        <Route path='/addmovie'  element={<AddMovie addnew={addnew}/>}/>
      <Route path='/' element={<MoviesContainer movies={movies}/>}/>
      <Route path='/trailer/:trailerId'element={ <MovieTrailer movies={movies} /> } />
    </Routes> 
    </>
  );
}

export default App;
