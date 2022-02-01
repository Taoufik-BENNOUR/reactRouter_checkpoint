import React from 'react';
import { Button, Card,ListGroup,ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Rating } from 'react-simple-star-rating'

const MovieCard = ({movie:{title,rate,description,posterUrl,id}}) => {
  return <>
    <Card style={{ width: '18rem',marginTop:"30px",background:'rgb(255, 165, 0,0.6)'
}}>
  <Card.Img style={{height:350}} variant="bottom" src={posterUrl} />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Rating initialValue={rate} readonly={true} fillColor='black' emptyColor='white' />
    <Card.Text>
    {description}    </Card.Text>
  </Card.Body>
  <LinkContainer style={{background:'black',border:'none'}} to={`/trailer/${id}`} >
  <Button  >{title} Trailer</Button> 
  </LinkContainer>
  
</Card>
  </>;
};

export default MovieCard;
