import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
 import {useState} from 'react' ;

const MovieTrailer = ({movies}) => {
    const {trailerId}=useParams()
    const [first, setfirst] = useState('');
    const navigate = useNavigate()
    const myMovie=movies.find(el=>el.id == trailerId)
  return <>
  <form style={{marginTop:'50px',textAlign:'center'}} >
        <label>GO Back to home page? </label>
          <input style={{margin:10,width:50}} type='text' placeholder='yes' onChange={(e)=>{setfirst(e.target.value)}} />
          <button onClick={(e)=>{e.preventDefault() 
            first==='yes' && navigate('/')}} style={{border:0,backgroundColor:'orange'}} >OK</button>
         </form>
      <Card className="text-center">
      <Card.Title>{myMovie.title}</Card.Title>
  <Card.Body>
  <Card.Text>{myMovie.description}</Card.Text>
    <div style={{display:"flex",justifyContent:"center"}} >
      <iframe width={1280} height={620} src={myMovie.trailer} >
      </iframe>
      </div>
 </Card.Body>
</Card>
  </>;
};

export default MovieTrailer;
