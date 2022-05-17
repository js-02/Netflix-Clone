import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Navbar from './Navbar';
import Button from "react-bootstrap/Button";

export default function FavList(props) {
  const [favMovie, setFavMovie] = useState();
  
  async function getFavMovie() {
      let url = `http://movie-js-02.herokuapp.com/getMovies`
      let response = await fetch(url, {
          method: 'GET',
        //   mode: 'no-cors'
      });

      let movieData = await response.json();
      setFavMovie(movieData);
      console.log("deleted = "+movieData[0].title)
  }

  async function handleDelete(id) {
      console.log({id})
      let url = `http://movie-js-02.herokuapp.com/DELETE/${id}`;
      let response = await fetch(url, {
          method: 'DELETE',
          headers: {
            // "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Referrer-Policy": "same-origin"
          }
       
          
      })
      // let deletedRecipe = await response.json();
console.log(response.status)
      if (response.status == 201) {
          getFavMovie();
         
    }
  }
  useEffect(() => {
    getFavMovie();
  }, []);
  return (
    
    
      <>
       {/* {console.log({favMovie})} */}
      <Navbar />

          <h1>Favourite Movie Page</h1>
          {
              favMovie && favMovie.map((favMovie) => {
                  console.log("favMovie comm = "+favMovie.comment)
                  return (

                      <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${favMovie
                         .img}`} />
           
                          <Card.Body>
                              <Card.Title>{favMovie.title}</Card.Title>
                              <Card.Text>
                                  {favMovie.overview}
                              </Card.Text>
                              <Card.Text>
                                  {favMovie.comment}
                              </Card.Text>
                              <Button variant="primary" onClick={()=>handleDelete(favMovie.id)}>Delete</Button>
                          </Card.Body>
                      </Card>
                  )
              }
              )
          }

      </>
  )
}
