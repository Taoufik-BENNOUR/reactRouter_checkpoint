import React from 'react';
import { Form,Button,Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const AddMovie = ({addnew}) => {
    const [newMovie, setnewMovie] = useState({title:'',rate:'',description:'',posterUrl:''});
  return <>
    <Form  style={{margin:"150px 10%"}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label >Movie title </Form.Label>
    <Form.Control value={newMovie.title}  onChange={(e)=>setnewMovie({...newMovie,title:e.target.value})} type="text"  placeholder="Enter Movie title" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    
    <Form.Label>Rate</Form.Label>
    <br/>
    <Rating onClick={(rate)=>setnewMovie({...newMovie,rate:rate/20}) } />
    {/* <Form.Control  onChange={(e)=>setnewMovie({...newMovie,rate:e.target.value})} type="text"  placeholder="Rate" /> */}
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Description</Form.Label>
    <Form.Control value={newMovie.description} onChange={(e)=>setnewMovie({...newMovie,description:e.target.value})} type="text" placeholder="description" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Poster</Form.Label>
    <Form.Control onChange={(e)=>setnewMovie({...newMovie,posterUrl:e.target.value})} type="text"  placeholder="Image link"  />
  </Form.Group>
  <Button   onClick={(e)=>{e.preventDefault() 
    addnew({...newMovie,id:Math.random()})
    setnewMovie({title:'',rate:'',description:'',posterUrl:''})
    }} variant="warning" type='submit'>
    Submit
  </Button>
</Form>
  </>;
};


export default AddMovie;
