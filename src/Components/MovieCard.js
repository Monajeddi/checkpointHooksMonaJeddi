import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import AddModal from './Add';
import { Link } from 'react-router-dom';


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
    <Link to={`/Descriptions/${movie.id}`}>
     <Card.Text>
     {movie.Descriptions}
    </Card.Text>
    </Link>
    <Link to={`/Video/${movie.id}`}>
     <Card.Text>
     {movie.Video}
    </Card.Text>
    </Link>
    <Rating ratingSearch={false} rate={movie.rate}/>
  </Card.Body>
</Card>
          }
          
            
        </div>
    )
}

export default MovieCard
