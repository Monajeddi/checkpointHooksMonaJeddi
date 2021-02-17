import React from 'react'
import  TheOccupant  from '../Assets/TheOccupant.jpg';
import  Instinct  from '../Assets/Instinct.jpg';
import  Badboys  from '../Assets/Badboys.jpg';
import  Tenet  from '../Assets/Tenet.jpg';
import  Mercy  from '../Assets/Mercy.jpeg';
import  Gentlemen  from '../Assets/Gentlemen.jpg';

const MovieList = [

    {
        Id: Math.random(),
        Image : Mercy ,
        Title: "JUST MERCY" ,
        Descriptions: "Biopic Drame" ,
        rate: 5,
      },
  
      {
        Id: Math.random(),
        Image : TheOccupant ,
        Title: "THE OCCUPANT" ,
        Descriptions: "Thrillers" ,
        rate: 3,
      },
  
      {
        Id: Math.random(),
        Image : Instinct ,
        Title: "THE SHALLOWS" ,
        Descriptions: "Thrillers" ,
        rate: 2,
      },
  
      {
        Id: Math.random(),
        Image : Badboys ,
        Title: "BAD BOYS" ,
        Descriptions: "Action Comédie" ,
        rate: 4,
      },
  
      {
        Id: Math.random(),
        Image : Gentlemen ,
        Title: "THE GENTLEMEN" ,
        Descriptions: "Policier, Action" ,
        rate: 3,
      },
    
      { 
        Id: Math.random(),
        Image : Tenet ,
        Title: "TENET" ,
        Descriptions: "Science fiction" ,
        rate: 3,
      },

]
    

export default MovieList
