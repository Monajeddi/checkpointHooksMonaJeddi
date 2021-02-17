import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import AddModal from './Add'


const MovieCard = ({movie , addCard, AddMovie}) => {
    return (
        <div className="cards">
          {
            addCard ?
            <Card style={{ width: '152px' , backgroundColor:'#958f7f8a', height:'315px' }}>
            
            <Card.Body style={{marginTop: '90px'}}>
              <Card.Title >Add Movie</Card.Title>
              <Card.Text>
               <AddModal AddMovie={AddMovie}/>
              </Card.Text>
              
            </Card.Body>
          </Card>
          :

          <Card style={{ width: '18rem', backgroundColor:'#958f7f8a' }}>
  <Card.Img variant="top" src={movie.Image} />
  <Card.Body>
    <Card.Title style={{fontSize:'small'}}>{movie.Title}</Card.Title>
    <Card.Text>
     {movie.Description}
    </Card.Text>
    <Rating ratingSearch={false} rate={movie.rate}/>
  </Card.Body>
</Card>
          }
          
            
        </div>
    )
}

export default MovieCard
