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
  const  [rate, setrate] = useState(0)
  const [search, setsearch] = useState("")
  function addnew(x){
    return setMovies([...movies,x])
  }
  // const filter=(search,rating)=>{
  //  if(search===''){
  //    setMovies(Data)
  //  } else {
  //    setMovies(movies.filter(el=> el.rate>=rating  && el.title.toLowerCase().includes(search.toLowerCase()) ))
  //  }

  // }

  return (
    <>
      <Headers setsearch={setsearch} setrate={setrate} />
    <Routes> 
        <Route path='/addmovie'  element={<AddMovie addnew={addnew}/>}/>
      <Route path='/' element={<MoviesContainer movies={movies} search={search} rate={rate} />}/>
      <Route path='/trailer/:trailerId'element={ <MovieTrailer movies={movies} /> } />
    </Routes> 
    </>
  );
}

export default App;
